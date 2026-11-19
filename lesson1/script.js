// --- ЧАСТЬ 1: ДИАЛОГ (детская адаптация спора Рудина и Пигасова из §2 учебника) ---
const dialogue = [
    { speaker: 'left', text: 'Ворчун, ты правда думаешь, что убеждений совсем не бывает?' },
    { speaker: 'right', text: 'Конечно! Я уверен: убеждений не бывает!' },
    { speaker: 'left', text: 'А фраза «убеждений не бывает» — это твоё убеждение?' },
    { speaker: 'right', text: 'Э-э… да, получается.' },
    { speaker: 'left', text: 'Вот и нашлась ошибка! Ты сказал, что убеждений нет, но сам назвал своё убеждение. Твои слова спорят друг с другом!' }
];

// --- ЧАСТЬ 2: БАЗА ВОПРОСОВ (30 штук) ---
// canBothBeTrue: false = противоречие, true = не противоречие
const allPracticeQuestions = [
    { fact1: 'Красный кубик лежит на столе.', fact2: 'Тот же кубик сейчас лежит в коробке.', canBothBeTrue: false, explanation: 'В один и тот же момент кубик не может лежать и на столе, и в коробке.', hint: 'Представь один кубик и одну секунду: где он находится?' },
    { fact1: 'Лампочка сейчас горит.', fact2: 'Та же лампочка сейчас не горит.', canBothBeTrue: false, explanation: 'Одна лампочка не может в одну секунду и гореть, и не гореть.', hint: 'Сравни одну и ту же лампочку в одно и то же время.' },
    { fact1: 'В этой чашке совсем нет сока.', fact2: 'Эта же чашка до краёв полна сока.', canBothBeTrue: false, explanation: 'Чашка не может быть одновременно пустой и полной.', hint: 'Если чашка полна сока, может ли в ней совсем не быть сока?' },
    { fact1: 'Дверь сейчас широко открыта.', fact2: 'Та же дверь сейчас плотно закрыта.', canBothBeTrue: false, explanation: 'В одну секунду дверь не может быть и открыта, и закрыта.', hint: 'Представь одну дверь прямо сейчас.' },
    { fact1: 'На рисунке у зайца два уха.', fact2: 'На этом же рисунке у зайца ни одного уха.', canBothBeTrue: false, explanation: 'На одном рисунке у одного зайца не могут быть сразу два уха и ни одного.', hint: 'Рассматриваем одного зайца на одном рисунке.' },
    { fact1: 'Вика сейчас держит в руке синий карандаш.', fact2: 'Вика сейчас не держит этот синий карандаш.', canBothBeTrue: false, explanation: 'Одновременно держать карандаш и не держать его нельзя.', hint: 'Речь идёт об одной Вике, одном карандаше и одном моменте.' },
    { fact1: 'У мишки круглый нос.', fact2: 'У мишки коричневая шапка.', canBothBeTrue: true, explanation: 'Да! У мишки могут быть и круглый нос, и коричневая шапка.', hint: 'Мешает ли круглый нос надеть шапку?' },
    { fact1: 'На тарелке лежит яблоко.', fact2: 'Рядом с тарелкой стоит чашка.', canBothBeTrue: true, explanation: 'Да! Яблоко на тарелке не мешает чашке стоять рядом.', hint: 'Могут ли яблоко и чашка находиться рядом?' },
    { fact1: 'У щенка мягкие уши.', fact2: 'Щенок умеет вилять хвостом.', canBothBeTrue: true, explanation: 'Да! У щенка могут быть мягкие уши и хвост, которым он виляет.', hint: 'Одно свойство не отменяет другое.' },
    { fact1: 'Мяч полосатый.', fact2: 'Мяч прыгает по полу.', canBothBeTrue: true, explanation: 'Да! Полосатый мяч может прыгать.', hint: 'Цвет и движение — разные вещи.' },
    { fact1: 'На улице идёт дождь.', fact2: 'У Саши раскрыт зонт.', canBothBeTrue: true, explanation: 'Да! Когда идёт дождь, Саша может раскрыть зонт.', hint: 'Эти события могут происходить вместе.' },
    { fact1: 'Листья на дереве зелёные.', fact2: 'На ветке сидит маленькая птица.', canBothBeTrue: true, explanation: 'Да! Зелёные листья не мешают птице сидеть на ветке.', hint: 'Могут ли дерево и птица быть рядом одновременно?' }
];

// --- ЧАСТЬ 2.5: ИСТОРИЯ ГЛАВЫ — рассказ по параграфам §1–§5 ---
const chapterSections = [
    {
        tag: 'Миссия 1 · Разминка для ума',
        title: 'Поймай понятную мысль',
        story: 'Профессор Винтик получил записку: «Там лежит это». Он не понял, где искать: слово «это» не называет вещь, а «там» — место. Когда мы точно говорим, о каком предмете и действии речь, другому легче понять нас.',
        // ИСПРАВЛЕНО: закреплён единый термин «ясность мысли».
        rule: '<strong>Ясность мысли:</strong> называй предмет и мысль о нём понятно. Например: «Красный карандаш лежит на парте» понятнее, чем «Это там».',
        question: 'Какое сообщение поможет найти вещь?',
        options: ['Карандаш лежит на столе.', 'Это там.', 'Ну, ты понял!'],
        answer: 0,
        explanation: 'Отлично! Логика помогает строить ясные и правильные мысли. Наука логика изучает, как это делать.'
    },
    {
        tag: 'Миссия 2 · Четыре правила',
        title: 'Собери правила умного сыщика',
        story: 'Сыщик думает ясно, не спорит сам с собой, идёт по шагам и объясняет догадки. Эти привычки помогают и в игре, и в обычном разговоре: сначала замечаем подсказку, потом рассказываем, что из неё поняли.',
        // ИСПРАВЛЕНО: добавлено название правила и простое объяснение через «суперсилу сыщика».
        rule: '<strong>Правило непротиворечия — суперсила сыщика:</strong> нельзя говорить «Да» и «Нет» об одном и том же предмете в одно и то же время. Хорошее рассуждение также должно быть ясным (понятно, о чём речь), последовательным (шаги идут по порядку) и обоснованным (есть причина или улика).',
        question: 'Какой поступок показывает, что сыщик проверяет свою догадку?',
        options: ['Говорит «я просто угадал», не проверяя.', 'Показывает улику: на полу мокрые следы от сапог.', 'Меняет тему на любимую игрушку.'],
        answer: 1,
        explanation: 'Верно! Это обоснованность — мы объясняем, на чём основана наша мысль. Ещё важно думать ясно, без противоречий и по порядку.'
    },
    {
        tag: 'Миссия 3 · Каркас мысли',
        title: 'Найди одинаковые детали',
        // ИСПРАВЛЕНО: объяснение каркаса напрямую связано с примерами кота и ромашки и общей схемой.
        story: 'У разных мыслей может быть одинаковый каркас, как у двух домиков из одинаковых кубиков. «Кот — животное» и «Ромашка — растение»: слова разные (кот и ромашка), а схема (каркас) одинаковая: [Кто-то] — это [Кто-то/Что-то].',
        rule: '<strong>Логическая форма</strong> — это строение мысли, её «каркас»: [Кто-то] — это [Кто-то/Что-то]. Содержание — то, о чём именно мысль. Логика изучает и каркас, и то, правильно ли он помогает рассуждать.',
        question: 'Что общего у этих двух мыслей?',
        options: ['Они про одно и то же.', 'Обе построены по схеме «[Кто-то] — это [Кто-то/Что-то]».', 'В них одинаковые слова.'],
        answer: 1,
        explanation: 'Именно! Слова разные, содержание разное, а каркас — [Кто-то] — это [Кто-то/Что-то] — одинаковый.'
    },
    {
        tag: 'Миссия 4 · Слова-мостики',
        title: 'Передай сообщение',
        story: 'Твой друг не видит, что ты задумал. Если ты скажешь: «Принеси, пожалуйста, синий мяч из коробки», он поймёт, что искать. Слова помогают сообщать мысли, задавать вопросы и договариваться.',
        rule: '<strong>Слова — мостик для мыслей:</strong> мысль можно выразить и передать другому словами. Чем точнее слова, тем легче понять сообщение.',
        question: 'Как понятнее попросить друга принести мяч?',
        options: ['«Принеси, пожалуйста, синий мяч из коробки».', 'Промолчать и надеяться, что друг догадается.', 'Сказать только: «Ну вот это!»'],
        answer: 0,
        explanation: 'Да! Слова помогают выражать мысли и понимать друг друга. Мысль связана с языком.'
    },
    {
        tag: 'Миссия 5 · Сила логики',
        title: 'Помоги команде решить задачу',
        story: 'Команда ищет пропавший ключ. «Он у двери: я только что видел его там» — догадка с причиной. Но даже умное рассуждение не заменяет знания: если хотим узнать о звёздах или растениях, нужно наблюдать и учиться.',
        rule: '<strong>Логика помогает рассуждать, но не подменяет знания.</strong> Проверяй догадку фактами и объясняй, почему считаешь её верной.',
        question: 'Какая догадка лучше обоснована?',
        options: ['«Ключ у двери: я видел его там минуту назад».', '«Ключ точно на Луне, потому что мне так кажется».', '«Давайте решим, не глядя на подсказки».'],
        answer: 0,
        explanation: 'Верно! Логика помогает рассуждать понятно и проверять выводы. Но для решения нужны ещё знания и факты.'
    }
];

// --- ЧАСТЬ 2.6: ВОПРОСЫ ИТОГОВОГО ТЕСТА ГЛАВЫ (с выбором ответа) ---
const chapterQuestions = [
    {
        question: 'Что изучает наука логика?',
        options: ['Как строить мысли правильно и понятно', 'Как быстрее бегать', 'Как аккуратно раскрашивать'],
        answer: 0,
        whyWrong: 'Это полезные умения, но логика помогает правильно строить мысли.',
        whyRight: 'Верно! Логика помогает строить мысли правильно и понятно.'
    },
    {
        // ИСПРАВЛЕНО: вопрос теста использует тот же термин «ясность», что и миссия 1.
        question: 'Какое сообщение самое ясное и понятное?',
        options: ['Положи красный кубик в синюю коробку.', 'Положи эту штуку туда.', 'Сделай всё как-нибудь.'],
        answer: 0,
        whyWrong: 'В двух других сообщениях непонятно, о какой вещи и месте речь.',
        whyRight: 'Точно! Ясная мысль точно называет предмет и действие.'
    },
    {
        question: 'Робот говорит: «Я никогда не ошибаюсь». А потом признаётся: «Сейчас я ошибся». Что случилось?',
        options: ['Он противоречит сам себе.', 'Он говорит очень тихо.', 'Он рассказывает сказку.'],
        answer: 0,
        whyWrong: 'Его слова не согласуются: сначала он говорит, что не ошибается, а потом сообщает об ошибке.',
        whyRight: 'Да! Робот сказал две несовместимые вещи об одном и том же.'
    },
    {
        question: 'Какой ответ рассуждает последовательно — шаг за шагом?',
        options: ['Сначала найду коробку, потом положу в неё кубики.', 'Сначала уберу игрушки, потом разбросаю их снова.', 'Буду искать мяч, но пойду за ложкой.'],
        answer: 0,
        whyWrong: 'Последовательные действия связаны и идут в подходящем порядке.',
        whyRight: 'Верно! Шаги идут один за другим и помогают выполнить дело.'
    },
    {
        question: 'Какой сыщик обосновал свою догадку?',
        options: ['«Кот был в комнате: на столе остались его лапкины следы».', '«Это сделал кот, потому что я так решил».', '«Не знаю, но отвечу наугад».'],
        answer: 0,
        whyWrong: 'Хорошая догадка объясняет, на каких фактах она основана.',
        whyRight: 'Именно! Следы — это причина, которая помогает обосновать догадку.'
    },
    {
        question: 'У двух мыслей «Кот — животное» и «Ромашка — растение» разное содержание. Что у них может быть общим?',
        options: ['Похожее строение: предмет и то, что о нём говорится.', 'Одинаковые предметы.', 'Одинаковые слова.'],
        answer: 0,
        whyWrong: 'Кот и ромашка разные, но обе мысли устроены похоже.',
        whyRight: 'Верно! Это похоже на одинаковый каркас у разных домиков.'
    },
    {
        question: 'Как можно поделиться мыслью с другом, который не видит, что ты показываешь?',
        options: ['Сказать или написать её словами.', 'Подумать про себя и ничего не говорить.', 'Повернуться спиной и молчать.'],
        answer: 0,
        whyWrong: 'Чтобы друг понял твою мысль, её нужно выразить и передать.',
        whyRight: 'Да! Слова помогают людям обмениваться мыслями и понимать друг друга.'
    },
    {
        question: 'Логика помогает хорошо учиться. Чего она не может сделать вместо тебя?',
        options: ['Выучить все знания по математике и природе без твоей помощи.', 'Помочь разобраться в задаче.', 'Помочь объяснить свою мысль.'],
        answer: 0,
        whyWrong: 'Логика помогает думать, но знания по предметам тоже нужно получать и учить.',
        whyRight: 'Верно! Логика помогает учиться, но не заменяет сами знания.'
    },
    {
        question: 'Какое правило нарушил робот: «Я съел весь пирог» и «Я совсем не ел пирог» (говорит об одном пироге и одном времени)?',
        options: ['Не противоречить самому себе.', 'Говорить громко.', 'Рисовать аккуратно.'],
        answer: 0,
        whyWrong: 'Нельзя одновременно утверждать и отрицать одно и то же об одном предмете.',
        whyRight: 'Верно! Робот сказал несовместимые вещи об одном пироге.'
    },
    {
        question: 'Петя увидел мокрый пол у двери и сказал: «Наверное, кто-то вошёл с улицы под дождём». Что поможет проверить догадку?',
        options: ['Посмотреть, есть ли у двери мокрые следы и мокрый зонт.', 'Сразу решить, что догадка точно верна.', 'Перестать обращать внимание на подсказки.'],
        answer: 0,
        whyWrong: 'Догадку лучше проверять по фактам и подсказкам.',
        whyRight: 'Точно! Проверка фактов помогает понять, обоснована ли догадка.'
    },
    {
        question: 'Какое качество НЕ относится к правилам правильного мышления?',
        options: ['Угадывать как можно быстрее.', 'Говорить ясно.', 'Объяснять свою догадку.', 'Не спорить самому с собой.'],
        answer: 0,
        whyWrong: 'Быстрая догадка не обязательно правильная. Важнее ясность, последовательность, отсутствие противоречий и обоснованность.',
        whyRight: 'Верно! Важно думать ясно, последовательно, без противоречий и с основаниями.'
    },
    {
        question: 'Какой пример лучше всего показывает, что язык помогает людям действовать вместе?',
        options: ['Дети словами договорились, кто строит башню, а кто подаёт кубики.', 'Каждый молча делает разное и не смотрит на остальных.', 'Все думают о разных играх, но ничего не говорят.'],
        answer: 0,
        whyWrong: 'Общие слова помогают договориться и распределить действия.',
        whyRight: 'Да! Язык помогает людям обмениваться мыслями и делать что-то вместе.'
    }
];

// --- НАСТРОЙКИ УРОКА ---
const QUESTIONS_PER_ATTEMPT = 12;  // смешанная итоговая игра: глава + противоречия
const MAX_WRONG_ALLOWED = 1;       // 2 ошибки и больше -> повтор + разбор ошибок
const MAX_ATTEMPTS = 2;            // первая попытка + одна повторная
const STORAGE_KEY = 'logic1954:lesson1:stats:v3';

// Этапы главы I для карты прогресса. Подписи без номеров параграфов.
const STAGES = [
    { id: 'what',     label: 'Разминка' },
    { id: 'rules',    label: 'Правила сыщика' },
    { id: 'dialogue', label: 'Спор робота' },
    { id: 'form',     label: 'Каркас мысли' },
    { id: 'lang',     label: 'Слова-мостики' },
    { id: 'why',      label: 'Сила логики' },
    { id: 'final',    label: 'Большая игра' }
];
// --- ПЕРЕМЕННЫЕ СОСТОЯНИЯ ---
let currentDialogueStep = 0;
let storyStep = 0;           // индекс текущего раздела истории (0..4)
let sessionQuestions = [];   // вопросы текущей попытки (объекты с полем index)
let currentPracticeQ = 0;
let correctCount = 0;
let isWaiting = false;
let attemptNumber = 0;       // 1 — основная попытка, 2 — повторная
let currentCourseResult = null;
let attemptLog = [];         // что произошло в текущей попытке
let currentStage = '';       // текущий этап карты прогресса
let stats = loadStats();     // накопленная статистика по всем попыткам (localStorage)

// --- СТАТИСТИКА: ГДЕ РЕБЁНОК ОШИБАЕТСЯ ЧАЩЕ ВСЕГО ---
function loadStats() {
    const empty = { asked: {}, wrong: {}, attempts: 0, passed: false, bestScore: 0 };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return empty;
        return Object.assign(empty, JSON.parse(raw));
    } catch (e) {
        return empty;
    }
}

function saveStats() {
    // Старый ключ оставлен только для чтения и совместимости.
}

// Случайные вопросы из пула; вопросы с прошлыми ошибками — в приоритете.
// prefix различает пулы: 'p' — тренажёр противоречий, 'c' — итоговый тест главы.
function pickQuestions(pool, prefix, count) {
    const key = i => prefix + i;
    const indices = shuffleArray(pool.map((_, i) => i));
    const weak = indices
        .filter(i => (stats.wrong[key(i)] || 0) > 0)
        .sort((a, b) => (stats.wrong[key(b)] || 0) - (stats.wrong[key(a)] || 0));
    const fresh = indices.filter(i => (stats.wrong[key(i)] || 0) === 0);
    return [...weak, ...fresh]
        .slice(0, count)
        .map(i => Object.assign({ index: key(i) }, pool[i]));
}

// --- УТИЛИТА: Перемешивание массива (алгоритм Фишера-Йетса) ---
function shuffleArray(array) {
    const arr = [...array]; // копируем, чтобы не мутировать оригинал
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- УПРАВЛЕНИЕ ЭКРАНАМИ ---
// Экраны, на которых можно прервать урок (кнопка «Прервать» видна только здесь)
const WORKING_SCREENS = ['story-screen', 'review-screen', 'dialogue-screen', 'practice-screen'];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Показываем/скрываем кнопку прерывания
    const stopBtn = document.getElementById('stop-btn');
    if (stopBtn) {
        stopBtn.classList.toggle('is-hidden', !WORKING_SCREENS.includes(screenId));
    }
    updateStageMap();
}

// --- КАРТА ПРОГРЕССА ГЛАВЫ ---
function updateStageMap() {
    const map = document.getElementById('stage-map');
    if (!map) return;
    const order = STAGES.map(s => s.id);
    const activeIdx = order.indexOf(currentStage);
    // карту показываем только внутри урока (не на старте и не на финалах)
    const inLesson = currentStage && activeIdx !== -1;
    map.classList.toggle('is-hidden', !inLesson);
    if (!inLesson) return;

    map.innerHTML = '';
    STAGES.forEach((stage, i) => {
        const chip = document.createElement('span');
        chip.className = 'stage-chip';
        if (i < activeIdx) chip.classList.add('done');
        if (i === activeIdx) chip.classList.add('current');
        chip.textContent = (i < activeIdx ? '✓ ' : '') + stage.label;
        map.appendChild(chip);
    });
}

// --- ПРЕРЫВАНИЕ УРОКА ---
// Возврат на первую страницу урока с любого рабочего экрана.
// Токен сессии «гасит» все отложенные setTimeout, чтобы они не переключили экран после выхода.
let sessionToken = 0;

function stopLesson() {
    sessionToken++;          // инвалидируем отложенные переходы текущей сессии
    isWaiting = false;
    currentDialogueStep = 0;
    storyStep = 0;
    currentPracticeQ = 0;
    correctCount = 0;
    attemptNumber = 0;
    attemptLog = [];
    currentStage = '';
    updatePracticeScore();
    showScreen('start-screen');
}

function updatePracticeScore() {
    const score = document.getElementById('practice-score');
    if (score) score.textContent = `⭐ ${correctCount}`;
}

// --- ЛОГИКА УРОКА: ОБЩИЙ ХОД ПО ГЛАВЕ I ---
// Сначала короткие игровые миссии и сценка, затем одна общая итоговая игра.
const STATIONS = [
    { stage: 'what',     type: 'story',    storyIndex: 0 },
    { stage: 'rules',    type: 'story',    storyIndex: 1 },
    { stage: 'dialogue', type: 'dialogue' },
    { stage: 'form',     type: 'story',    storyIndex: 2 },
    { stage: 'lang',     type: 'story',    storyIndex: 3 },
    { stage: 'why',      type: 'story',    storyIndex: 4 },
    { stage: 'final',    type: 'quiz' }
];
let stationIndex = 0;

function startLesson() {
    currentCourseResult = null;
    stationIndex = 0;
    showStation();
}

function showStation() {
    const st = STATIONS[stationIndex];
    currentStage = st.stage;
    if (st.type === 'story') {
        storyStep = st.storyIndex;
        showStoryScreen();
    } else if (st.type === 'dialogue') {
        currentDialogueStep = 0;
        showScreen('dialogue-screen');
        loadDialogueStep();
    } else {
        attemptNumber = 0;
        startPractice();
    }
}

function nextStation() {
    stationIndex++;
    if (stationIndex >= STATIONS.length) {
        // на всякий случай: все станции пройдены
        finishChapterSuccess();
        return;
    }
    showStation();
}

// --- ИГРОВАЯ МИССИЯ ---
function showStoryScreen() {
    const section = chapterSections[storyStep];
    document.getElementById('story-tag').textContent = section.tag;
    document.getElementById('mission-title').textContent = section.title;
    document.getElementById('mission-story').textContent = section.story;
    document.getElementById('mission-rule').innerHTML = section.rule;
    document.getElementById('mission-question').textContent = section.question;
    const options = document.getElementById('mission-options');
    options.innerHTML = '';
    shuffleArray(section.options.map((_, i) => i)).forEach(index => {
        const button = document.createElement('button');
        button.className = 'mission-option';
        button.textContent = section.options[index];
        button.addEventListener('click', () => answerMission(index, button));
        options.appendChild(button);
    });
    const feedback = document.getElementById('mission-feedback');
    feedback.textContent = '';
    feedback.className = 'mission-feedback';
    const nextButton = document.getElementById('story-btn');
    nextButton.disabled = true;
    nextButton.textContent = 'Выбери ответ';
    showScreen('story-screen');
}

function answerMission(answer, button) {
    const section = chapterSections[storyStep];
    const options = document.querySelectorAll('.mission-option');
    options.forEach(option => { option.disabled = true; });
    const feedback = document.getElementById('mission-feedback');
    if (answer === section.answer) {
        button.classList.add('mission-correct');
        feedback.textContent = '⭐ Верно! ' + section.explanation;
        feedback.classList.add('correct');
    } else {
        button.classList.add('mission-wrong');
        options.forEach((option, index) => {
            if (option.textContent === section.options[section.answer]) option.classList.add('mission-correct');
        });
        feedback.textContent = '💡 Попробуй запомнить: ' + section.explanation;
        feedback.classList.add('incorrect');
    }
    const nextButton = document.getElementById('story-btn');
    nextButton.disabled = false;
    nextButton.textContent = storyStep === chapterSections.length - 1 ? 'К большой игре!' : 'Следующая миссия';
}

function afterStory() {
    nextStation();
}

// --- ДИАЛОГ (спор Рудина и Пигасова) ---
function loadDialogueStep() {
    const leftChar = document.getElementById('char-left');
    const rightChar = document.getElementById('char-right');
    const bubbleLeft = document.getElementById('bubble-left');
    const bubbleRight = document.getElementById('bubble-right');
    const nextBtn = document.getElementById('next-dialogue-btn');

    if (currentDialogueStep >= dialogue.length) {
        nextStation();
        return;
    }

    const step = dialogue[currentDialogueStep];
    leftChar.classList.remove('hidden');
    rightChar.classList.remove('hidden');

    bubbleLeft.textContent = step.speaker === 'left' ? step.text : '';
    bubbleRight.textContent = step.speaker === 'right' ? step.text : '';

    if (step.speaker === 'left') {
        rightChar.classList.add('hidden');
    } else {
        leftChar.classList.add('hidden');
    }

    nextBtn.textContent = (currentDialogueStep === dialogue.length - 1)
        ? "Найти ошибку!"
        : "Дальше";
}

function nextDialogueStep() {
    currentDialogueStep++;
    loadDialogueStep();
}

// --- ТРЕНИРОВКА / ИТОГОВЫЙ ТЕСТ ---
function startPractice() {
    attemptNumber++;
    const theoryQuestions = pickQuestions(chapterQuestions, 'c', 6).map(q => ({ ...q, kind: 'choice' }));
    const contradictionQuestions = pickQuestions(allPracticeQuestions, 'p', 6).map(q => ({ ...q, kind: 'both' }));
    sessionQuestions = shuffleArray([...theoryQuestions, ...contradictionQuestions]);
    currentPracticeQ = 0;
    correctCount = 0;
    attemptLog = [];
    updatePracticeScore();
    showScreen('practice-screen');
    loadPracticeQuestion();
}

function loadPracticeQuestion() {
    if (currentPracticeQ >= sessionQuestions.length) {
        finishAttempt();
        return;
    }

    const q = sessionQuestions[currentPracticeQ];
    const title = document.getElementById('practice-title');
    title.textContent = 'Большая игра логических сыщиков';

    document.getElementById('progress-text').textContent =
        `Задание ${currentPracticeQ + 1} из ${sessionQuestions.length}` +
        (attemptNumber > 1 ? ' (повтор)' : '');

    const bothBlock = document.getElementById('both-block');
    const choiceBlock = document.getElementById('choice-block');
    const bothButtons = document.getElementById('practice-buttons');

    if (q.kind === 'choice') {
        bothBlock.classList.add('is-hidden');
        choiceBlock.classList.remove('is-hidden');
        bothButtons.classList.add('is-hidden');
        document.getElementById('choice-question').textContent = q.question;
        renderOptions(q);
    } else {
        bothBlock.classList.remove('is-hidden');
        choiceBlock.classList.add('is-hidden');
        bothButtons.classList.remove('is-hidden');
        document.getElementById('fact1-text').textContent = q.fact1;
        document.getElementById('fact2-text').textContent = q.fact2;
    }

    const feedback = document.getElementById('practice-feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';
    isWaiting = false;
}

function renderOptions(q) {
    const box = document.getElementById('choice-options');
    box.innerHTML = '';
    // перемешиваем варианты, но помним, какой верный
    const order = shuffleArray(q.options.map((_, i) => i));
    order.forEach(i => {
        const btn = document.createElement('button');
        btn.className = 'btn-choice';
        btn.textContent = q.options[i];
        btn.onclick = () => checkChoice(i === q.answer, btn);
        box.appendChild(btn);
    });
}

function checkChoice(isCorrect, btn) {
    if (isWaiting) return;
    const q = sessionQuestions[currentPracticeQ];
    const feedback = document.getElementById('practice-feedback');
    const token = sessionToken;

    recordAnswer(q, isCorrect);
    isWaiting = true;

    // подсветим выбранный вариант
    document.querySelectorAll('.btn-choice').forEach(b => { b.disabled = true; });
    btn.classList.add(isCorrect ? 'choice-correct' : 'choice-wrong');

    if (isCorrect) {
        correctCount++;
        updatePracticeScore();
        feedback.textContent = '✓ ' + q.whyRight;
        feedback.className = 'feedback correct';
        setTimeout(() => {
            if (token !== sessionToken) return;
            currentPracticeQ++;
            loadPracticeQuestion();
        }, 2200);
    } else {
        feedback.textContent = '✗ ' + q.whyWrong;
        feedback.className = 'feedback incorrect';
        setTimeout(() => {
            if (token !== sessionToken) return;
            currentPracticeQ++;
            loadPracticeQuestion();
        }, 3200);
    }
}

function checkPractice(userAnswer) {
    if (isWaiting) return;

    const q = sessionQuestions[currentPracticeQ];
    const feedback = document.getElementById('practice-feedback');
    const correct = userAnswer === q.canBothBeTrue;
    const token = sessionToken; // снимок сессии: если её прервут, переходы не сработают

    recordAnswer(q, correct);
    isWaiting = true;

    if (correct) {
        correctCount++;
        updatePracticeScore();
        feedback.textContent = '✓ ' + q.explanation;
        feedback.className = 'feedback correct';
        setTimeout(() => {
            if (token !== sessionToken) return;
            currentPracticeQ++;
            loadPracticeQuestion();
        }, 2000);
    } else {
        feedback.textContent = '✗ ' + q.hint;
        feedback.className = 'feedback incorrect';
        setTimeout(() => {
            if (token !== sessionToken) return;
            // после ошибки показываем правильный разбор, чтобы ребёнок увидел суть
            feedback.textContent = '💡 ' + q.explanation;
            feedback.className = 'feedback correct';
            setTimeout(() => {
                if (token !== sessionToken) return;
                currentPracticeQ++;
                loadPracticeQuestion();
            }, 2500);
        }, 2500);
    }
}

// --- СБОР СТАТИСТИКИ ---
function recordAnswer(q, correct) {
    stats.asked[q.index] = (stats.asked[q.index] || 0) + 1;
    if (!correct) stats.wrong[q.index] = (stats.wrong[q.index] || 0) + 1;

    attemptLog.push({
        prompt: q.kind === 'choice' ? q.question : (q.fact1 + ' / ' + q.fact2),
        wrong: !correct,
        correctAnswer: q.kind === 'choice' ? q.options[q.answer] : q.explanation
    });

    saveStats();
}

// --- ИТОГ ПОПЫТКИ: ПРОЙДЕНО / ПОВТОР С РАЗБОРОМ / НЕ ПОВТОРИЛОСЬ ---
function finishAttempt() {
    const wrong = sessionQuestions.length - correctCount;
    stats.bestScore = Math.max(stats.bestScore || 0, correctCount);
    stats.attempts = (stats.attempts || 0) + 1;
    currentCourseResult = window.CourseProgress.recordResult(1, {
        passed: wrong <= MAX_WRONG_ALLOWED,
        mistakes: wrong,
        score: correctCount,
        totalQuestions: sessionQuestions.length
    });

    const token = localStorage.getItem('token');
    if (token) {
        const serverScoreByMedal = { gold: 6, silver: 4, bronze: 3, check: 0 };
        const serverScore = serverScoreByMedal[currentCourseResult.medal] || 0;
        import('../js/api.js')
            .then(({ apiRequest }) => apiRequest('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ lessonId: 'lesson1', score: serverScore })
            }))
            .then(data => {
                if (data.error) throw new Error(data.error);
                if (data.isGold) console.log('Поздравляем! Вы получили золотую медаль!');
            })
            .catch(error => console.error('Не удалось сохранить прогресс:', error));
    }

    if (wrong <= MAX_WRONG_ALLOWED) {
        finishChapterSuccess();
        return;
    }

    if (attemptNumber < MAX_ATTEMPTS) {
        // 2 и больше ошибок -> повторяем рассказ о правиле + разбор ошибок -> второй тест
        showReviewScreen();
        return;
    }

    // вторая попытка тоже не удалась — мягко предлагаем начать заново
    stats.passed = false;
    saveStats();
    document.getElementById('retry-score').textContent = `${correctCount} ⭐`;
    document.getElementById('retry-mistakes').textContent = wrong;
    currentStage = '';
    showScreen('retry-screen');
}

// --- ЭКРАН ПОВТОРА: правило + разбор ошибок текущей попытки ---
function showReviewScreen() {
    fillMistakes();
    const ruleTexts = 'Вспомни главное: мысли должны быть ясными, не спорить сами с собой и идти по порядку. Проверяй догадки по подсказкам. Противоречие — когда об одном и том же предмете в одно и то же время говорят противоположное.';
    document.getElementById('review-rule').innerHTML = ruleTexts;
    document.getElementById('review-btn').textContent =
        'Сыграть ещё раз';
    showScreen('review-screen');
}

function fillMistakes() {
    const list = document.getElementById('mistake-list');
    list.innerHTML = '';
    const wrongs = attemptLog.filter(item => item.wrong);
    if (wrongs.length === 0) {
        const li = document.createElement('li');
        li.className = 'mistake-item';
        li.textContent = 'Разбираем ещё раз, чтобы закрепить правило.';
        list.appendChild(li);
        return;
    }
    wrongs.forEach(item => {
        const li = document.createElement('li');
        li.className = 'mistake-item';
        li.innerHTML =
            `<p class="mistake-facts">${item.prompt}</p>` +
            `<p class="mistake-answer">${item.correctAnswer}</p>`;
        list.appendChild(li);
    });
}

function afterReview() {
    // повторяем текущую станцию-тренажёр
    startPractice();
}

// --- ФИНАЛ ГЛАВЫ: ПОБЕДА ---
function finishChapterSuccess() {
    stats.passed = true;
    saveStats();
    window.CourseProgress.renderAward(document.getElementById('success-screen'), currentCourseResult, currentCourseResult && currentCourseResult.medalImproved);
    currentStage = 'final';
    document.getElementById('success-score').textContent = `${correctCount} ⭐`;
    document.getElementById('success-text').innerHTML =
        `🎉 <strong>Отлично! Ты прошёл первую главу целиком!</strong><br><br>` +
        `Ты теперь знаешь: <strong>логика</strong> — наука о правильных мыслях. У правильного мышления четыре качества: ` +
        // ИСПРАВЛЕНО: итоговое перечисление использует термин, изученный в первой миссии.
        `<strong>ясность, непротиворечивость, последовательность и обоснованность.</strong><br><br>` +
        `Ты умеешь находить <strong>противоречия</strong>, понимаешь, что такое <strong>форма мысли</strong>, и знаешь, что ` +
        `<strong>мысль живёт в словах</strong>.<br><br>` +
        `Ты готов к следующему уроку!`;
    showScreen('success-screen');
}

// --- ПЕРЕХОДЫ ---
function goToMenu() {
    window.location.href = '../index.html';
}

function goToNextLesson() {
    // Пока урок 2 не готов — показываем заглушку.
    // Когда создадите lesson2/index.html — эта кнопка заработает автоматически.
    window.location.href = '../lesson2/index.html';
}