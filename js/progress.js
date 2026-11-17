/* Общее сохранение результатов курса. Работает и при открытии через file://. */
(function () {
    'use strict';

    const STORAGE_KEY = 'logic1954:course:progress:v1';
    const LEGACY_KEY = 'logic1954:lesson1:stats:v3';
    const MIGRATION_KEY = 'logic1954:course:progress:v1:migrated';
    const MEDAL_RANK = { check: 0, bronze: 1, silver: 2, gold: 3 };
    const MEDAL_EMOJI = { gold: '🥇', silver: '🥈', bronze: '🥉', check: '✅' };

    function emptyProgress() {
        return { lessons: {}, version: 1 };
    }

    function readProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.lessons && typeof parsed.lessons === 'object') {
                    return parsed;
                }
            }
        } catch (error) {
            // Продолжаем в памяти, если хранилище недоступно или повреждено.
        }

        const progress = emptyProgress();
        try {
            const migrationDone = localStorage.getItem(MIGRATION_KEY) === '1';
            const legacyRaw = migrationDone ? null : localStorage.getItem(LEGACY_KEY);
            if (legacyRaw) {
                const legacy = JSON.parse(legacyRaw);
                if (legacy && typeof legacy === 'object') {
                    const passed = Boolean(legacy.passed);
                    const bestScore = Number.isFinite(legacy.bestScore) ? legacy.bestScore : 0;
                    progress.lessons['1'] = {
                        passed,
                        // Старые данные не хранят ошибки успешной попытки — не угадываем медаль.
                        bestMistakes: null,
                        bestScore,
                        totalQuestions: 12,
                        attempts: Number.isFinite(legacy.attempts) ? legacy.attempts : 0,
                        medal: passed ? 'check' : null,
                        lastPlayed: new Date().toISOString()
                    };
                }
            }
        } catch (error) {
            // Старую статистику можно безопасно пропустить.
        }
        writeProgress(progress);
        try {
            localStorage.setItem(MIGRATION_KEY, '1');
        } catch (error) {
            // При недоступном хранилище прогресс доступен только в памяти.
        }
        return progress;
    }

    function writeProgress(progress) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            return true;
        } catch (error) {
            // Результат остаётся доступен в памяти до закрытия страницы.
            return false;
        }
    }

    let progress = readProgress();

    function getMedal(mistakes) {
        if (mistakes === 0) return 'gold';
        if (mistakes === 1) return 'silver';
        if (mistakes === 2) return 'bronze';
        return 'check';
    }

    function recordResult(lessonId, result) {
        const id = String(lessonId);
        const previous = progress.lessons[id] || {
            passed: false,
            bestMistakes: null,
            bestScore: 0,
            totalQuestions: 0,
            attempts: 0,
            medal: null,
            lastPlayed: null
        };
        const mistakes = Number.isFinite(result.mistakes) ? Math.max(0, result.mistakes) : 0;
        const score = Number.isFinite(result.score) ? Math.max(0, result.score) : 0;
        const totalQuestions = Number.isFinite(result.totalQuestions) ? Math.max(0, result.totalQuestions) : 0;
        const passed = Boolean(result.passed);
        const passedBefore = Boolean(previous.passed);
        const previousMedal = previous.medal;

        const bestMistakes = passed
            ? (previous.bestMistakes === null || !Number.isFinite(previous.bestMistakes)
                ? mistakes
                : Math.min(previous.bestMistakes, mistakes))
            : previous.bestMistakes;
        const nowPassed = passedBefore || passed;
        const medal = nowPassed
            ? (bestMistakes === null ? 'check' : getMedal(bestMistakes))
            : null;

        const status = {
            passed: nowPassed,
            bestMistakes,
            bestScore: Math.max(Number(previous.bestScore) || 0, score),
            totalQuestions: totalQuestions || Number(previous.totalQuestions) || 0,
            attempts: (Number(previous.attempts) || 0) + 1,
            medal,
            lastPlayed: new Date().toISOString()
        };
        progress.lessons[id] = status;
        writeProgress(progress);

        return {
            ...status,
            medalImproved: Boolean(medal && (MEDAL_RANK[medal] || 0) > (MEDAL_RANK[previousMedal] ?? -1))
        };
    }

    function getLessonStatus(lessonId) {
        const status = progress.lessons[String(lessonId)];
        return status ? { ...status } : null;
    }

    function getAllStatuses() {
        return Object.fromEntries(
            Object.entries(progress.lessons).map(([id, status]) => [id, { ...status }])
        );
    }

    function reset() {
        progress = emptyProgress();
        // Сохраняем отметку миграции, чтобы старый ключ не вернулся после сброса.
        writeProgress(progress);
        try {
            localStorage.setItem(MIGRATION_KEY, '1');
        } catch (error) {
            // Игнорируем недоступность localStorage.
        }
    }

    function renderAward(container, status, medalImproved) {
        if (!container || !status || !status.passed) return;
        let award = container.querySelector('.course-award');
        if (!award) {
            award = document.createElement('div');
            award.className = 'course-award';
            award.setAttribute('role', 'status');
            award.setAttribute('aria-live', 'polite');
            const score = container.querySelector('#final-score, #success-score');
            let insertionPoint = score;
            while (insertionPoint && insertionPoint.parentElement !== container) {
                insertionPoint = insertionPoint.parentElement;
            }
            container.insertBefore(award, insertionPoint || container.firstChild);
        }
        const medalText = {
            gold: 'Золотая медаль! Без единой ошибки!',
            silver: 'Серебряная медаль! Всего 1 ошибка.',
            bronze: 'Бронзовая медаль! Всего 2 ошибки.',
            check: 'Урок пройден! Отличная работа!'
        }[status.medal] || 'Урок пройден! Отличная работа!';
        const emoji = MEDAL_EMOJI[status.medal] || '';
        const mistakesText = Number.isFinite(status.bestMistakes)
            ? `Лучший результат: ${status.bestMistakes} ${status.bestMistakes === 1 ? 'ошибка' : status.bestMistakes === 2 || status.bestMistakes === 3 || status.bestMistakes === 4 ? 'ошибки' : 'ошибок'}.`
            : '';
        award.innerHTML = '';
        const icon = document.createElement('div');
        icon.className = 'course-award-emoji';
        icon.textContent = emoji;
        icon.setAttribute('aria-label', medalText);
        const title = document.createElement('p');
        title.className = 'course-award-title';
        title.textContent = medalText;
        const detail = document.createElement('p');
        detail.className = 'course-award-detail';
        detail.textContent = mistakesText;
        award.append(icon, title);
        if (mistakesText) award.appendChild(detail);
        if (medalImproved) {
            const record = document.createElement('p');
            record.className = 'course-award-record';
            record.textContent = 'Новый рекорд! 🎉';
            award.appendChild(record);
        }
    }

    window.CourseProgress = {
        recordResult,
        getLessonStatus,
        getAllStatuses,
        getMedalEmoji: medal => MEDAL_EMOJI[medal] || '',
        reset,
        renderAward
    };
}());
