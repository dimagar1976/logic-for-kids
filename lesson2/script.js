/* Урок 2: интерактивные миссии по главе о логических приёмах. */
const missions = [
    {
        icon: '👀', tag: 'МИССИЯ 1 · ОТКРОЙ СЕКРЕТ', title: 'Что заметили глаза?',
        story: 'На столе лежит лимон. Ты увидел жёлтый цвет, почувствовал бугорки на кожуре и уловил запах. Каждый орган чувств сообщает о своём свойстве — так мы получаем первые подсказки о мире.',
        rule: '<strong>Ощущение</strong> — заметить одно свойство предмета: цвет, запах, вкус, звук или прикосновение. Например: «лимон жёлтый».',
        question: 'Как называется знание об отдельном свойстве предмета, например о его цвете?',
        options: ['Ощущение', 'Обобщение', 'Синтез'], answer: 0,
        explain: 'Ощущение помогает заметить отдельное свойство: цвет, вкус, запах или твёрдость.'
    },
    {
        // ИСПРАВЛЕНО: изображение обозначает целостный образ восприятия, а корзинка остаётся символом группировки.
        icon: '🖼️', tag: 'МИССИЯ 2 · СОБЕРИ КАРТИНКУ', title: 'Узнай предмет целиком',
        story: 'Ты видишь красную ягоду, её форму и зелёный листочек. Вместе эти детали дают образ предмета целиком. Узнавая клубнику, ты не просто замечаешь один цвет, а воспринимаешь весь предмет.',
        rule: '<strong>Восприятие</strong> — образ предмета или события целиком, составленный из многих замеченных свойств. Ощущение — одна подсказка, восприятие — целая картинка.',
        question: 'Как называется целостный образ предмета, который мы видим и узнаём?',
        options: ['Сравнение', 'Восприятие', 'Анализ'], answer: 1,
        explain: 'Восприятие — это образ предмета целиком, а не только одного его свойства.'
    },
    {
        icon: '🕵️', tag: 'МИССИЯ 3 · СЫЩИК ПО ПОДСКАЗКАМ', title: 'Догадайся по следам',
        story: 'На дорожке мокрые следы, у двери раскрытый зонт. Ты не видел, кто вошёл, но связываешь подсказки и предполагаешь: кто-то пришёл с улицы в дождь. Мысль помогает узнавать то, чего прямо сейчас не видим.',
        rule: '<strong>Мышление</strong> связывает факты, сравнивает их и помогает сделать вывод. Вывод по подсказке — это не волшебство: проверь, достаточно ли у тебя оснований.',
        question: 'Как человек узнаёт о том, чего прямо сейчас не видит, используя подсказки и знания?',
        options: ['Только ощущает', 'Мысленно выводит по связям — мыслит', 'Считает наугад'], answer: 1,
        explain: 'Мышление помогает узнавать невидимое напрямую: мы связываем факты и делаем вывод.'
    },
    {
        icon: '⚖️', tag: 'МИССИЯ 4 · ЧЕСТНОЕ СРАВНЕНИЕ', title: 'Выбери правильную мерку',
        story: 'Два бумажных самолётика летели по очереди. Если один измерить от линии старта, а второй — от стула, сравнение будет нечестным. Используй одну и ту же мерку, чтобы понять, чей полёт дальше.',
        // ИСПРАВЛЕНО: подчеркнуто, что признак должен быть существенным именно для задачи.
        rule: '<strong>Правило сравнения:</strong> сравнивай предметы по одному и тому же важному (существенному) для задачи признаку и одинаковой меркой. Например, чтобы узнать, чей самолётик улетел дальше, сравниваем расстояние, а не цвет самолётиков; измеряем путь обоих от одной линии старта.',
        question: 'Как лучше сравнить полёт самолётиков?',
        options: ['Измерить расстояние для обоих от одной линии старта', 'Сравнить цвет самолётиков', 'Для одного измерить путь, а для другого — время'], answer: 0,
        explain: 'При сравнении нужно использовать один и тот же важный признак и одинаковую мерку.'
    },
    {
        icon: '🧸', tag: 'МИССИЯ 5 · РАЗБЕРИ И СОБЕРИ', title: 'Загляни внутрь игрушки',
        story: 'У игрушечной машинки есть колёса, кузов и кабина. Рассмотри детали отдельно, а затем представь машинку снова целиком: как колёса, кузов и кабина соединены и помогают ей ехать?',
        rule: '<strong>Анализ</strong> — мысленно разобрать целое и изучить части. <strong>Синтез</strong> — соединить части в целое и понять, как они связаны. Чтобы хорошо разобраться, нужны оба приёма.',
        question: 'Как называются эти два приёма: сначала рассмотреть части, затем мысленно соединить их в целое?',
        options: ['Обобщение и сравнение', 'Анализ и синтез', 'Ощущение и восприятие'], answer: 1,
        // ИСПРАВЛЕНО: синтез описан как активное мысленное соединение разрозненных частей.
        explain: 'Анализ помогает рассмотреть части, а при синтезе ты мысленно соединил разрозненные части и увидел, как они работают как единое целое.'
    },
    {
        icon: '✨', tag: 'МИССИЯ 6 · ВЫДЕЛИ ГЛАВНОЕ', title: 'Не отвлекайся на мелочи',
        story: 'Нужно разрезать нитку. У ножниц важны острые лезвия, а цвет ручек сейчас не помогает выполнить задачу. У каждого предмета много признаков, но для дела важны не все.',
        rule: '<strong>Абстрагирование</strong> — выделить важное для вопроса свойство и временно не учитывать остальные. Важно каждый раз спрашивать себя: «Главное для какой задачи?»',
        question: 'Какой признак важнее всего для этой задачи?',
        options: ['Есть ли у предмета острый край', 'Какого цвета предмет', 'Есть ли на нём рисунок'], answer: 0,
        explain: 'Абстрагирование помогает выделить важное для задачи свойство и пока не учитывать остальные.'
    },
    {
        icon: '🧺', tag: 'МИССИЯ 7 · НАЙДИ ОБЩЕЕ', title: 'Корзинка общих признаков',
        story: 'В корзине яблоко, груша и слива. Они разной формы и цвета, но у них есть общие важные свойства: это фрукты. Мы объединяем много отдельных примеров общим словом, когда замечаем, что у них действительно общего.',
        rule: '<strong>Обобщение</strong> — мысленно объединить предметы в группу по общим важным признакам. Не спеши: одна белая кошка не доказывает, что все кошки белые.',
        question: 'Как называется мысленное объединение похожих предметов по общим свойствам?',
        options: ['Обобщение', 'Анализ', 'Случайная догадка'], answer: 0,
        explain: 'Обобщение собирает вместе предметы, у которых есть общие важные свойства.'
    }
];

const quizQuestions = [
    { topic: '👀 Наблюдение', q: 'Ты коснулся кубика и заметил, что он гладкий. Что ты узнал?', a: ['Отдельное свойство — это ощущение', 'Общее правило для всех кубиков', 'Как устроена вся игрушка'], correct: 0, why: 'Гладкость — отдельное свойство, которое можно почувствовать.' },
    { topic: '🧺 Целый образ', q: 'Ты увидел пушистого рыжего кота с хвостом и усами. Что помогает увидеть предмет целиком?', a: ['Синтез', 'Восприятие', 'Абстрагирование'], correct: 1, why: 'Восприятие складывает признаки в образ целого предмета.' },
    { topic: '🕵️ Думай по подсказкам', q: 'За окном мокро, а на крыльце капли. Ты решаешь, что недавно шёл дождь. Как ты узнал это?', a: ['Сделал вывод с помощью мышления', 'Потрогал сам дождь', 'Просто сравнил цвета'], correct: 0, why: 'Мышление позволяет сделать вывод по связанным подсказкам.' },
    { topic: '⚖️ Сравнение', q: 'Как узнать, какой из двух карандашей длиннее?', a: ['Положить рядом и сравнить длину', 'Сравнить цвет и запах', 'Один измерить линейкой, а второй — ладонью'], correct: 0, why: 'Сравниваем предметы по одному признаку — длине — одинаковым способом.' },
    { topic: '⚖️ Сравнение', q: 'Что лучше сравнивать, чтобы узнать, какой рюкзак тяжелее?', a: ['Вес обоих рюкзаков', 'Цвет одного и размер другого', 'Кто из рюкзаков красивее'], correct: 0, why: 'Для честного сравнения выбирай один и тот же подходящий признак.' },
    { topic: '🧩 Анализ', q: 'Ты рассматриваешь части велосипеда: руль, колёса и педали. Какой это приём?', a: ['Анализ', 'Синтез', 'Обобщение'], correct: 0, why: 'Анализ — мысленно разбирать целое на части.' },
    { topic: '🧩 Синтез', q: 'Ты понял, как руль, колёса и педали вместе помогают ехать. Какой это приём?', a: ['Сравнение', 'Синтез', 'Ощущение'], correct: 1, why: 'Синтез — мысленно собрать части и увидеть, как они работают вместе.' },
    { topic: '🧩 Вместе работают лучше', q: 'Как лучше изучить сложную игрушку?', a: ['Рассмотреть детали и понять, как они соединены', 'Посмотреть только на цвет коробки', 'Разобрать детали и забыть, что они были одной игрушкой'], correct: 0, why: 'Анализ частей и синтез целого дополняют друг друга.' },
    { topic: '✨ Главное и второстепенное', q: 'Ты выбираешь предмет, которым можно перерезать нитку. На какое свойство важнее всего обратить внимание?', a: ['На то, острый ли у него край', 'На то, какого он цвета', 'На то, нарисована ли на нём звезда'], correct: 0, why: 'Абстрагирование помогает выделить важное для задачи и не отвлекаться на мелочи.' },
    { topic: '✨ Не делай поспешных выводов', q: 'Утром ты увидел одну белую кошку. Какой вывод будет разумнее?', a: ['Эта кошка белая', 'Все кошки на свете белые', 'Все белые предметы — кошки'], correct: 0, why: 'По одному примеру нельзя делать поспешное обобщение обо всех кошках.' },
    { topic: '🧺 Обобщение', q: 'У воробья, голубя и синицы есть перья и клюв. Как можно объединить их общим словом?', a: ['Птицы', 'Игрушки', 'Домашние вещи'], correct: 0, why: 'Обобщение объединяет разные предметы по общим свойствам.' },
    { topic: '🔗 Все приёмы вместе', q: 'Ты хочешь выбрать удобный стул для чтения. Как поступить лучше?', a: ['Сравнить стулья по удобству и устойчивости', 'Выбрать самый яркий, не проверяя', 'Сравнить цвет одного стула с высотой другого'], correct: 0, why: 'Для полезного решения сравнивай связанные предметы по важным признакам и одинаковой мерке.' }
];

const stages = [
    { id: 'mission-0', label: 'Наблюдатель' }, { id: 'mission-1', label: 'Целый образ' },
    { id: 'mission-2', label: 'Сыщик' }, { id: 'mission-3', label: 'Сравнение' },
    { id: 'mission-4', label: 'Части и целое' }, { id: 'mission-5', label: 'Главное' },
    { id: 'mission-6', label: 'Общее' },
    { id: 'quiz', label: 'Большая игра' }
];
const QUESTIONS_PER_GAME = 12;
const MAX_ERRORS = 1;

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
    if (!activeId) {
        map.classList.add('is-hidden');
        return;
    }
    map.classList.remove('is-hidden');
    const activeIndex = stages.findIndex(stage => stage.id === activeId);
    map.innerHTML = '';
    stages.forEach((stage, index) => {
        const chip = document.createElement('span');
        chip.className = `stage-chip${index < activeIndex ? ' done' : ''}${index === activeIndex ? ' current' : ''}`;
        chip.textContent = `${index < activeIndex ? '✓ ' : ''}${stage.label}`;
        map.appendChild(chip);
    });
}

function startLesson() {
    missionIndex = 0;
    showMission();
}

function showMission() {
    const mission = missions[missionIndex];
    $('mission-icon').textContent = mission.icon;
    $('mission-tag').textContent = mission.tag;
    $('mission-title').textContent = mission.title;
    $('mission-story').textContent = mission.story;
    $('mission-rule').innerHTML = mission.rule;
    $('mission-question').textContent = mission.question;
    $('mission-feedback').textContent = '';
    $('mission-feedback').className = 'feedback mission-feedback';
    $('mission-next').disabled = true;
    $('mission-next').textContent = 'Выбери ответ';
    renderAnswers($('mission-options'), mission.options, mission.answer, choose => {
        $('mission-next').disabled = false;
        $('mission-next').textContent = missionIndex === missions.length - 1 ? 'К большой игре!' : 'Следующая миссия';
        const feedback = $('mission-feedback');
        feedback.textContent = `${choose.correct ? '⭐ Верно! ' : '💡 Запомни: '}${mission.explain}`;
        feedback.classList.add(choose.correct ? 'correct' : 'incorrect');
    });
    showScreen('mission-screen');
}

function renderAnswers(container, answers, correctIndex, onAnswer) {
    container.innerHTML = '';
    const order = answers.map((_, index) => index).sort(() => Math.random() - 0.5);
    let answered = false;
    order.forEach(index => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-option';
        button.textContent = answers[index];
        button.addEventListener('click', () => {
            if (answered) return;
            answered = true;
            container.querySelectorAll('button').forEach(option => { option.disabled = true; });
            const correct = index === correctIndex;
            button.classList.add(correct ? 'answer-correct' : 'answer-wrong');
            if (!correct) {
                const correctButton = [...container.querySelectorAll('button')].find(option => option.textContent === answers[correctIndex]);
                correctButton?.classList.add('answer-correct');
            }
            onAnswer({ correct, index });
        });
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
        return {
            ...question,
            a: answers.map(answer => answer.text),
            correct: answers.findIndex(answer => answer.correct)
        };
    });
    quizIndex = 0;
    correctCount = 0;
    mistakes = [];
    waiting = false;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizIndex >= selectedQuiz.length) {
        finishQuiz();
        return;
    }
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
            feedback.classList.add('correct');
        } else {
            mistakes.push({ question: question.q, answer: question.a[question.correct] });
            feedback.textContent = `💡 ${question.why}`;
            feedback.classList.add('incorrect');
        }
        $('quiz-score').textContent = `⭐ ${correctCount}`;
        waiting = true;
        $('quiz-next').disabled = false;
    });
    showScreen('quiz-screen');
}

function finishQuiz() {
    if (mistakes.length <= MAX_ERRORS) {
        $('final-score').textContent = `Ты набрал(а) ${correctCount} из ${selectedQuiz.length} звёзд.`;
        showScreen('success-screen');
        return;
    }
    $('review-summary').textContent = `Сейчас у тебя ${correctCount} правильных ответов из ${selectedQuiz.length}. Давай посмотрим на задания, которые можно потренировать, а потом сыграем ещё раз.`;
    const list = $('review-mistakes');
    list.innerHTML = '';
    mistakes.forEach(mistake => {
        const item = document.createElement('article');
        item.className = 'mistake-card';
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
