/* Урок 11: гипотеза — объясняем наблюдения и проверяем предсказания. */
const missions = [
    {
        icon: '💡', tag: 'МИССИЯ 1 · УЗНАЙ ГИПОТЕЗУ', title: 'Догадка, которую можно проверить',
        story: 'После перемены Маша заметила на подоконнике мокрый след. Она предположила: «Наверное, окно оставили открытым, и на него попал дождь». Но след мог появиться и потому, что кто-то пролил воду.',
        rule: '<strong>Гипотеза</strong> — это предположение, которое используют, чтобы объяснить явление, хотя его достоверность ещё не доказана. Гипотезу можно проверить наблюдениями или опытом.',
        diagram: [['👀 Наблюдение', 'На подоконнике мокро'], ['💡 Гипотеза', 'В окно попал дождь'], ['🧪 Проверка', 'Осмотреть окно и место вокруг']],
        question: 'Что в этой истории является гипотезой?',
        options: ['Предположение, что мокрый след оставил дождь', 'Сам факт, что Маша увидела мокрый след', 'Вывод, что дождь всегда идёт во время перемены'], answer: 0,
        explain: 'Дождь — возможное объяснение наблюдения. Пока это только догадка, её нужно проверить.'
    },
    {
        icon: '🔍', tag: 'МИССИЯ 2 · ОТ СЛЕДСТВИЯ К ПРИЧИНЕ', title: 'Ищи возможное объяснение',
        story: 'Утром на дорожке у школьного сада обнаружили лужи. Ночью мог пройти дождь, но сад также могли полить из шланга. По одному следствию пока нельзя уверенно узнать причину.',
        rule: 'При выдвижении гипотезы часто рассуждают <strong>от замеченного явления к возможной причине</strong>. Но одно и то же следствие иногда объясняется разными причинами — сравни варианты.',
        diagram: [['👀 Следствие', 'На дорожке лужи'], ['🌧️ Причина 1', 'Шёл дождь'], ['🚿 Причина 2', 'Поливали сад']],
        question: 'Какой вывод сейчас наиболее разумный?',
        options: ['Дождь — одна из возможных причин, но стоит проверить и другие', 'Лужи доказывают, что ночью точно шёл дождь', 'Лужи не могут появиться после полива'], answer: 0,
        explain: 'Наблюдение подсказывает гипотезы, но само по себе не выбирает одну причину.'
    },
    {
        icon: '🔮', tag: 'МИССИЯ 3 · ВЫВЕДИ ПРЕДСКАЗАНИЕ', title: 'Что должно быть видно?',
        story: 'Тимур предположил, что мокрый подоконник намочил дождь через открытое окно. Исследователь может спросить: если это объяснение верно, какие следы ещё должны обнаружиться?',
        rule: 'Гипотеза полезна, когда из неё можно вывести <strong>проверяемые следствия</strong>: «если моё объяснение верно, я ожидаю увидеть…». Предсказание помогает придумать проверку.',
        diagram: [['💡 Гипотеза', 'Дождь попал через открытое окно'], ['🔮 Предсказание', 'У окна есть следы капель'], ['🧪 Проверка', 'Осмотреть стекло и подоконник']],
        question: 'Какое наблюдение лучше всего проверить по этой гипотезе?',
        options: ['Есть ли следы дождевых капель у открытого окна', 'Какого цвета школьный звонок', 'Сколько страниц в любимой книге Тимура'], answer: 0,
        // ИСПРАВЛЕНО: усиление научного метода.
        explain: 'Хорошая гипотеза всегда подсказывает, куда смотреть или что проверить дальше. Здесь можно поискать следы дождевых капель рядом с окном.'
    },
    {
        icon: '🧪', tag: 'МИССИЯ 4 · ПРОВЕРЬ ГИПОТЕЗУ', title: 'Сравни предсказание с фактами',
        story: 'Садовник предположил, что растения у окна поникли из-за недостатка воды. Он проверил влажность почвы: земля оказалась сухой. Теперь можно полить растения и понаблюдать, изменится ли их состояние.',
        rule: 'Проверка гипотезы включает два важных шага: <strong>сравнить её следствия с наблюдениями</strong> и убедиться, что объяснение не противоречит другим надёжным фактам.',
        diagram: [['💡 Гипотеза', 'Не хватает воды'], ['📋 Следствие', 'Почва должна быть сухой'], ['👀 Наблюдение', 'Почва сухая'], ['🔁 Дальше', 'Полить и наблюдать']],
        question: 'Что сделал садовник, чтобы проверить часть своей гипотезы?',
        options: ['Сопоставил предсказание о сухой почве с наблюдением', 'Сразу решил, что все растения всегда вянут без воды', 'Проверил только цвет горшка'], answer: 0,
        explain: 'Предсказанное состояние почвы совпало с наблюдением. Дополнительное наблюдение после полива поможет исследовать объяснение дальше.'
    },
    {
        icon: '⚖️', tag: 'МИССИЯ 5 · СРАВНИ ВАРИАНТЫ', title: 'Не забывай об альтернативе',
        story: 'В комнате погасла лампа. Возможны разные объяснения: перегорела лампочка, выключили свет или пропало электричество во всём доме. Чтобы разобраться, можно проверить другие лампы и выключатель.',
        rule: 'Хороший исследователь рассматривает <strong>несколько возможных объяснений</strong> и ищет наблюдения, которые помогут различить их. Одно совпавшее следствие ещё не означает, что гипотеза единственно возможная.',
        diagram: [['💡 Лампа не горит', 'Наблюдение'], ['🔧 Лампочка перегорела', 'Вариант 1'], ['🔌 Нет электричества', 'Вариант 2'], ['🕹️ Выключатель выключен', 'Вариант 3']],
        question: 'Какая проверка поможет различить некоторые объяснения?',
        options: ['Посмотреть, горят ли другие лампы, и проверить выключатель', 'Решить, что лампочка перегорела, ничего не проверяя', 'Измерить длину шторы'], answer: 0,
        explain: 'Другие лампы и положение выключателя дают сведения, помогающие сравнить гипотезы.'
    },
    {
        icon: '🧭', tag: 'МИССИЯ 6 · ИЗМЕНИ ИДЕЮ ПО ФАКТАМ', title: 'Если не совпало — исследуй снова',
        story: 'Лёва думал, что лужа появилась из-за дождя. Но стекло снаружи оказалось сухим, а рядом нашли перевёрнутую лейку. Это новая подсказка: первоначальное объяснение стоит перепроверить.',
        rule: 'Если предсказание не совпало с результатом, проверь, правильно ли проведено наблюдение или опыт. Затем <strong>уточни или замени гипотезу</strong> — не подгоняй факты под ответ.',
        diagram: [['💡 Гипотеза', 'Дождь намочил подоконник'], ['🔮 Предсказание', 'Снаружи должны быть капли'], ['👀 Факт', 'Стекло сухое, рядом лейка'], ['🛠️ Действие', 'Пересмотреть объяснение']],
        question: 'Как поступить Лёве после новой подсказки?',
        options: ['Перепроверить наблюдения и рассмотреть другую причину', 'Продолжать называть дождь доказанной причиной', 'Спрятать лейку, чтобы она не мешала догадке'], answer: 0,
        explain: 'Новая информация не поддерживает первоначальное объяснение и подсказывает проверить альтернативу.'
    },
    {
        icon: '📚', tag: 'МИССИЯ 7 · ГИПОТЕЗА И ТЕОРИЯ', title: 'От предположения к надёжному объяснению',
        story: 'Учёные выдвигают гипотезы, проверяют их наблюдениями, опытами и новыми фактами. Объяснение, которое прошло много проверок и помогает понимать широкий круг явлений, может стать научной теорией.',
        // ИСПРАВЛЕНО: усиление научного метода.
        rule: '<strong>Теория</strong> — не случайная догадка, а широкое научное объяснение, подтверждённое множеством проверок и согласующееся с фактами. Например, представление о том, что Земля вращается вокруг Солнца, проверяли и уточняли по наблюдениям; сегодня это часть хорошо подтверждённой научной картины мира. Новые данные могут уточнить научное объяснение.',
        diagram: [['💡 Гипотеза', 'Предположение для объяснения'], ['🧪 Проверки', 'Наблюдения, опыты, факты'], ['📚 Теория', 'Широкое проверенное объяснение']],
        question: 'Что отличает научную теорию от новой непроверенной гипотезы?',
        options: ['Теория прошла множество проверок и объясняет широкий круг явлений', 'Теорию достаточно однажды придумать', 'Теория не должна сопоставляться с наблюдениями'], answer: 0,
        explain: 'Научная теория опирается на серьёзную проверку и множество согласующихся фактов.'
    }
];

const quizQuestions = [
    { topic: 'Определение', q: 'Что такое гипотеза?', a: ['Предположение для объяснения явления, которое ещё нужно проверить', 'Любая известная и проверенная таблица', 'Наблюдение, которое невозможно описать словами'], correct: 0, why: 'Гипотеза предлагает объяснение, но её достоверность ещё не установлена.' },
    { topic: 'Причина и следствие', q: 'На дорожке лужи. Что можно сказать о причине?', a: ['Дождь — возможная причина, но могли быть и другие', 'Лужи всегда доказывают, что шёл дождь', 'Причины у луж быть не может'], correct: 0, why: 'Одно следствие может иметь разные причины, поэтому нужно сравнивать объяснения.' },
    { topic: 'Проверяемость', q: 'Какая догадка лучше подходит для проверки?', a: ['«Если окно было открыто во время дождя, у него могут быть следы капель»', '«В комнате живёт невидимый дракон, которого нельзя заметить никак»', '«Сегодня всё случилось просто так»'], correct: 0, why: 'Из первой гипотезы следует наблюдаемое предсказание, которое можно проверить.' },
    { topic: 'Предсказание', q: 'Зачем выводить из гипотезы следствия?', a: ['Чтобы понять, что ожидать при проверке', 'Чтобы больше не собирать наблюдения', 'Чтобы любое предположение стало фактом'], correct: 0, why: 'Предсказание помогает заранее определить, какие наблюдения поддержат или не поддержат гипотезу.' },
    { topic: 'Проверка', q: 'Как проверить предположение, что растениям не хватает воды?', a: ['Осмотреть почву, проверить полив и затем наблюдать за растениями', 'Посчитать игрушки в комнате', 'Сразу объявить догадку доказанной'], correct: 0, why: 'Проверять нужно следствия гипотезы и наблюдать, что происходит после подходящего действия.' },
    { topic: 'Альтернативы', q: 'Лампа не горит. Какое рассуждение аккуратнее?', a: ['Проверить лампочку, выключатель и другие лампы', 'Уверенно назвать единственную причину без проверки', 'Сделать вывод по цвету абажура'], correct: 0, why: 'Несколько возможных причин нужно различить дополнительными наблюдениями.' },
    { topic: 'Факты', q: 'Почему гипотеза должна согласовываться с известными фактами?', a: ['Противоречие фактам — повод перепроверить или изменить объяснение', 'Факты можно игнорировать, если догадка нравится', 'Любая гипотеза автоматически верна'], correct: 0, why: 'Научное объяснение должно соответствовать наблюдениям и не противоречить надёжным знаниям.' },
    { topic: 'Неудачная проверка', q: 'Предсказание не совпало с наблюдением. Что делать?', a: ['Проверить ход опыта и рассмотреть уточнение или замену гипотезы', 'Скрыть результат', 'Объявить наблюдение неправильным только потому, что оно не подходит'], correct: 0, why: 'Несовпадение важно: оно может указать на ошибку проверки или на необходимость пересмотреть объяснение.' },
    { topic: 'Осторожность', q: 'Одна проверка совпала с предсказанием. Что это означает?', a: ['Гипотеза получила поддержку, но стоит учесть другие факты и объяснения', 'Гипотеза навсегда доказана одним наблюдением', 'Другие причины теперь невозможны'], correct: 0, why: 'Одно совпадение поддерживает гипотезу, но само по себе не исключает все альтернативы.' },
    { topic: 'Теория', q: 'Что такое научная теория в этом уроке?', a: ['Широкое объяснение, проверенное многими фактами и наблюдениями', 'Любая догадка, которую никто не проверял', 'Придуманный ответ, который нельзя обсуждать'], correct: 0, why: 'Теория — хорошо проверенное объяснение, которое охватывает много фактов и явлений.' },
    { topic: 'Порядок исследования', q: 'Какая последовательность подходит для проверки гипотезы?', a: ['Наблюдение → гипотеза → предсказание → проверка → уточнение', 'Ответ → догадка → скрыть проверку', 'Случайный выбор → вывод без наблюдений'], correct: 0, why: 'Сначала замечают явление, затем предлагают объяснение, выводят ожидание и проверяют его.' },
    { topic: 'Главное правило', q: 'Что лучше всего отличает проверяемую гипотезу от простой фантазии?', a: ['Из неё можно вывести понятные следствия, которые можно проверить', 'Она обязательно очень необычная', 'Её нельзя сравнивать с фактами'], correct: 0, why: 'Проверяемое предположение говорит, какие наблюдения или результаты опыта следует искать.' }
];

const stages = [
    { id: 'mission-0', label: 'Гипотеза' }, { id: 'mission-1', label: 'Причина' },
    { id: 'mission-2', label: 'Предсказание' }, { id: 'mission-3', label: 'Проверка' },
    { id: 'mission-4', label: 'Варианты' }, { id: 'mission-5', label: 'Новые факты' },
    { id: 'mission-6', label: 'Теория' }, { id: 'quiz', label: 'Испытание' }
];
const QUESTIONS_PER_GAME = 10;
const MAX_ERRORS = 2;
let missionIndex = 0;
let quizIndex = 0;
let correctCount = 0;
let mistakes = [];
let waiting = false;
let currentScreen = 'start-screen';
let selectedQuiz = [];
const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    $(id).classList.add('active');
    currentScreen = id;
    $('stop-btn').classList.toggle('is-hidden', id === 'start-screen' || id === 'success-screen');
    renderStageMap();
}

function renderStageMap() {
    const map = $('stage-map');
    const activeId = currentScreen === 'mission-screen' ? `mission-${missionIndex}` : currentScreen === 'quiz-screen' ? 'quiz' : '';
    if (!activeId) { map.classList.add('is-hidden'); return; }
    map.classList.remove('is-hidden');
    const activeIndex = stages.findIndex(stage => stage.id === activeId);
    map.innerHTML = '';
    stages.forEach((stage, index) => {
        const chip = document.createElement('span');
        chip.className = `stage-chip${index < activeIndex ? ' done' : ''}${index === activeIndex ? ' current' : ''}`;
        chip.textContent = `${index < activeIndex ? '✓ ' : ''}${stage.label}`;
        chip.setAttribute('aria-label', `${stage.label}${index < activeIndex ? ': пройдено' : index === activeIndex ? ': сейчас' : ''}`);
        map.appendChild(chip);
    });
}

function startLesson() {
    missionIndex = 0;
    correctCount = 0;
    mistakes = [];
    showMission();
}

function showMission() {
    const mission = missions[missionIndex];
    $('mission-icon').textContent = mission.icon;
    $('mission-tag').textContent = mission.tag;
    $('mission-title').textContent = mission.title;
    $('mission-story').textContent = mission.story;
    $('mission-rule').innerHTML = mission.rule;
    renderDiagram(mission.diagram);
    $('mission-question').textContent = mission.question;
    $('mission-feedback').textContent = '';
    $('mission-feedback').className = 'feedback mission-feedback';
    $('mission-next').disabled = true;
    $('mission-next').textContent = 'Выбери ответ';
    renderAnswers($('mission-options'), mission.options, mission.answer, result => {
        const feedback = $('mission-feedback');
        feedback.textContent = `${result.correct ? '⭐ Верно! ' : '💡 Попробуй другой ответ. '}${mission.explain}`;
        feedback.classList.add(result.correct ? 'good' : 'try-again');
        $('mission-next').disabled = !result.correct;
        $('mission-next').textContent = result.correct ? (missionIndex === missions.length - 1 ? 'К финальному испытанию!' : 'Следующая миссия') : 'Выбери ответ';
    }, true);
    showScreen('mission-screen');
}

function renderDiagram(items) {
    const slot = $('mission-diagram');
    slot.innerHTML = '';
    slot.classList.toggle('is-hidden', !items);
    if (!items) return;
    items.forEach(([title, text], index) => {
        if (index) {
            const arrow = document.createElement('span');
            arrow.className = 'diagram-arrow';
            arrow.setAttribute('aria-hidden', 'true');
            arrow.textContent = '→';
            slot.appendChild(arrow);
        }
        const node = document.createElement('div');
        node.className = 'diagram-node';
        const heading = document.createElement('strong');
        heading.textContent = title;
        const detail = document.createElement('span');
        detail.textContent = text;
        node.append(heading, detail);
        slot.appendChild(node);
    });
}

function renderAnswers(container, answers, correctIndex, onAnswer, retryOnWrong = false) {
    container.innerHTML = '';
    const order = shuffle(answers.map((_, index) => index));
    let answered = false;
    order.forEach((index, displayIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-option';
        const letter = document.createElement('span');
        letter.className = 'option-letter';
        letter.textContent = String.fromCharCode(65 + displayIndex);
        const text = document.createElement('span');
        text.textContent = answers[index];
        button.append(letter, text);
        button.addEventListener('click', () => {
            if (answered || button.disabled) return;
            const correct = index === correctIndex;
            button.classList.add(correct ? 'correct' : 'incorrect');
            if (!correct && retryOnWrong) button.disabled = true;
            else {
                answered = true;
                container.querySelectorAll('button').forEach(option => { option.disabled = true; });
                if (!correct) {
                    const correctButton = [...container.querySelectorAll('button')].find(option => option.dataset.answerIndex === String(correctIndex));
                    correctButton?.classList.add('correct');
                }
            }
            onAnswer({ correct, index });
        });
        button.dataset.answerIndex = String(index);
        container.appendChild(button);
    });
}

function nextMission() {
    missionIndex += 1;
    if (missionIndex >= missions.length) startQuiz();
    else showMission();
}

function startQuiz() {
    selectedQuiz = shuffle(quizQuestions).slice(0, QUESTIONS_PER_GAME).map(question => {
        const answers = shuffle(question.a.map((text, index) => ({ text, correct: index === question.correct })));
        return { ...question, a: answers.map(answer => answer.text), correct: answers.findIndex(answer => answer.correct) };
    });
    quizIndex = 0;
    correctCount = 0;
    mistakes = [];
    waiting = false;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizIndex >= selectedQuiz.length) { finishQuiz(); return; }
    const question = selectedQuiz[quizIndex];
    $('quiz-progress').textContent = `Задание ${quizIndex + 1} из ${selectedQuiz.length}`;
    $('quiz-score').textContent = `⭐ ${correctCount}`;
    $('quiz-topic').textContent = question.topic;
    $('quiz-question').textContent = question.q;
    $('quiz-feedback').textContent = '';
    $('quiz-feedback').className = 'feedback quiz-feedback';
    $('quiz-next').disabled = true;
    $('quiz-next').textContent = quizIndex === selectedQuiz.length - 1 ? 'Узнать результат' : 'Дальше';
    renderAnswers($('quiz-options'), question.a, question.correct, result => {
        const feedback = $('quiz-feedback');
        if (result.correct) {
            correctCount += 1;
            feedback.textContent = `⭐ Правильно! ${question.why}`;
            feedback.classList.add('good');
        } else {
            mistakes.push({ question: question.q, answer: question.a[question.correct] });
            feedback.textContent = `💡 ${question.why}`;
            feedback.classList.add('try-again');
        }
        $('quiz-score').textContent = `⭐ ${correctCount}`;
        waiting = true;
        $('quiz-next').disabled = false;
    });
    showScreen('quiz-screen');
}

function finishQuiz() {
    const passed = mistakes.length <= MAX_ERRORS;
    const result = window.CourseProgress.recordResult(11, { passed, mistakes: mistakes.length, score: correctCount, totalQuestions: selectedQuiz.length });
    if (passed) {
        window.CourseProgress.renderAward($('success-screen'), result, result.medalImproved);
        $('final-score').textContent = `Ты набрал(а) ${correctCount} из ${selectedQuiz.length} звёзд.`;
        showScreen('success-screen');
        return;
    }
    $('review-summary').textContent = `Правильных ответов: ${correctCount} из ${selectedQuiz.length}. Разберём задания, которые вызвали затруднение, и попробуем финал ещё раз.`;
    const list = $('review-mistakes');
    list.innerHTML = '';
    mistakes.forEach(mistake => {
        const item = document.createElement('article');
        item.className = 'mistake-item';
        const prompt = document.createElement('p');
        prompt.textContent = mistake.question;
        const answer = document.createElement('strong');
        answer.textContent = `Подсказка: ${mistake.answer}`;
        item.append(prompt, answer);
        list.appendChild(item);
    });
    showScreen('review-screen');
}

function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const other = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[other]] = [copy[other], copy[index]];
    }
    return copy;
}

function stopLesson() {
    waiting = false;
    missionIndex = 0;
    quizIndex = 0;
    correctCount = 0;
    mistakes = [];
    showScreen('start-screen');
}

$('start-btn').addEventListener('click', startLesson);
$('mission-next').addEventListener('click', nextMission);
$('quiz-next').addEventListener('click', () => {
    if (!waiting) return;
    waiting = false;
    quizIndex += 1;
    showQuizQuestion();
});
$('retry-btn').addEventListener('click', startQuiz);
$('stop-btn').addEventListener('click', stopLesson);
