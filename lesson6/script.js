/* Урок 6: преобразование суждений и уточнение их смысла. */
const missions = [
    {
        icon: '💬', tag: 'МИССИЯ 1 · ОДНА МЫСЛЬ', title: 'Разные слова — одна мысль?',
        story: 'Профессор сказал: «Снег укрыл дорожку». Мила сказала: «Дорожка покрылась снегом». Слова разные, но обе фразы сообщают одно и то же: дорожка теперь под снегом.',
        rule: '<strong>Одна мысль может звучать по-разному.</strong> Предложение — словесная одежда мысли. Чтобы сравнить фразы, спроси: «О ком или о чём говорится? Что именно сообщается?»',
        diagram: 'sameThought', question: 'Что общего у двух фраз про снег?',
        options: ['Они выражают одну и ту же мысль разными словами', 'В них говорится о двух разных дорожках', 'Одна из фраз обязательно вопрос'], answer: 0,
        explain: 'Слова и порядок изменились, а сообщаемое событие осталось тем же.'
    },
    {
        icon: '🔎', tag: 'МИССИЯ 2 · СЛОВО «НЕ»', title: 'Куда спряталось «не»?',
        story: 'На столе лежит карандаш. «Не Маша взяла карандаш» — значит, его взял кто-то другой. «Маша не взяла карандаш» — значит, Маша его не брала. Маленькое «не» меняет смысл в зависимости от того, к каким словам относится.',
        rule: 'Когда распутываешь фразу, найди, <strong>что именно отрицает «не»</strong>. Не спеши переставлять слова: «Не Маша…» и «Маша не…» — разные мысли.',
        diagram: 'notScope', question: 'В фразе «Не Маша открыла дверь» кого отрицают?',
        options: ['Что дверь открыла именно Маша', 'Что дверь вообще открыли', 'Что дверь существует'], answer: 0,
        explain: 'Отрицается имя Маши: дверь мог открыть кто-то другой.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 3 · НАЙДИ ГЛАВНУЮ МЫСЛЬ', title: 'Предложение бывает длинным',
        story: 'Фраза «Петя увидел, что на небе появилась радуга» длинная и содержит маленькую часть «что появилась радуга». Но в главной мысли говорится о Пете: он увидел радугу. А фраза «Петя увидел радугу, а Маша нарисовала её» сообщает уже о двух событиях.',
        rule: 'В сложной фразе может быть <strong>одна главная мысль с пояснением</strong> или <strong>несколько самостоятельных мыслей</strong>. Для каждой найди, о ком говорится и что сообщается. Грамматические слова не всегда сразу показывают логическую главную часть.',
        diagram: 'oneOrTwo', question: 'Сколько самостоятельных сообщений в фразе «Петя увидел радугу, а Маша её нарисовала»?',
        options: ['Два: Петя увидел; Маша нарисовала', 'Одно: только о радуге', 'Ни одного: это вопрос'], answer: 0,
        explain: 'Здесь сообщаются два разных события — одно о Пете, другое о Маше.'
    },
    {
        icon: '📏', tag: 'МИССИЯ 4 · ВСЕ ИЛИ НЕКОТОРЫЕ?', title: 'Слушай смысл, а не только окончание',
        story: '«Грачи вьют гнёзда» обычно означает, что так делают все грачи. А «Грибы растут в лесах» не значит, что все грибы растут только в лесу: некоторые растут в других местах. Окончание слова само по себе не подскажет ответ.',
        rule: 'Чтобы узнать, общее ли суждение, попробуй добавить <strong>«все»</strong>: подходит ли оно по смыслу? Если речь только о части группы, суждение частное. Слова «некоторые» в логике означает «хотя бы один, возможно больше».',
        diagram: 'allSome', question: '«Грибы растут в лесах» — почему это суждение может быть частным?',
        options: ['Потому что не все грибы обязательно растут в лесах', 'Потому что слово «грибы» во множественном числе', 'Потому что лес всегда один'], answer: 0,
        explain: 'Решает смысл: если подходят не все грибы, речь о некоторых.'
    },
    {
        icon: '🔐', tag: 'МИССИЯ 5 · СЛОВО «ТОЛЬКО»', title: 'Особый замочек слова «только»',
        story: 'На сундуке написано: «Только выполнив все задания, ты откроешь сундук». Это не просто похвала за выполненные задания. Тут есть важное правило: если задания не выполнены, сундук не откроется. Слово «только» добавляет к фразе ещё одну мысль.',
        rule: '<strong>«Только»</strong> выделяет необходимое условие и часто означает сразу два сообщения. «Только выполнив задания, откроешь сундук» = выполни задания, чтобы открыть сундук; <strong>без заданий сундук не откроется</strong>.',
        diagram: 'only', question: 'Что дополнительно сообщает слово «только» в нашей фразе?',
        options: ['Без выполненных заданий сундук не откроется', 'Сундук откроется сам, даже без заданий', 'Задания можно не выполнять'], answer: 0,
        explain: '«Только» делает условие необходимым: без него обещанный результат не наступит.'
    },
    {
        icon: '🌦️', tag: 'МИССИЯ 6 · УСЛОВИЕ И РЕЗУЛЬТАТ', title: 'Условие может спрятаться',
        story: '«Если пойдёт дождь, мы возьмём зонт» — сначала условие, потом результат. А можно сказать наоборот: «Мы возьмём зонт, если пойдёт дождь». В пословице «Любишь кататься — люби и саночки возить» слово «если» не произнесли, но связь условия и следствия можно восстановить.',
        rule: 'В условном суждении есть <strong>основание (условие)</strong> и <strong>следствие</strong>. Подсказки: «если», иногда «когда» или даже тире. Порядок частей может меняться. Одно слово «если» ещё не доказывает условную связь — проверь, действительно ли одна часть служит условием другой.',
        diagram: 'condition', question: 'В «Мы возьмём зонт, если пойдёт дождь» что является условием?',
        options: ['То, что пойдёт дождь', 'То, что мы возьмём зонт', 'Ни одна часть'], answer: 0,
        explain: 'Дождь — основание; взять зонт — ожидаемое следствие.'
    },
    {
        icon: '🔀', tag: 'МИССИЯ 7 · НЕ ВСЯКОЕ «ИЛИ»', title: 'Можно выбрать оба варианта?',
        story: 'Чтобы укрепить здоровье, можно гулять или кататься на велосипеде — а можно делать и то и другое. Эти варианты не мешают друг другу. А у фигуры в загадке «треугольник или квадрат» мы выбираем подходящий вид: одна фигура не может быть одновременно и треугольником, и квадратом.',
        rule: 'Союз <strong>«или»</strong> может соединять совместимые варианты (можно оба) или разделять несовместимые (выбирай один). Проверяй смысл, а не только союз. Разделительное суждение перечисляет варианты; иногда говорят «либо…, либо…».',
        diagram: 'orKinds', question: 'В каком примере можно выбрать оба занятия?',
        options: ['Гулять или кататься на велосипеде для здоровья', 'Фигура — треугольник или квадрат', 'Число — чётное или нечётное'], answer: 0,
        explain: 'Гулять и кататься можно в разные дни — занятия совместимы.'
    },
    {
        icon: '🔄', tag: 'МИССИЯ 8 · ПРЕВРАЩЕНИЕ', title: 'Переодень фразу, сохрани смысл',
        story: 'На карточке написано: «Все квадраты — фигуры с четырьмя равными сторонами». Переформулируем: «Ни один квадрат не является фигурой без четырёх равных сторон». Мы добавили отрицание и поменяли форму «да» на «нет», но говорим о тех же квадратах и том же признаке.',
        rule: '<strong>Превращение</strong> меняет утвердительную форму суждения на отрицательную или наоборот, стараясь сохранить мысль. Для правила «Все S — P» удобная схема: <strong>Все S — P → Ни один S не есть не-P</strong>. «Не-P» значит «не обладающий признаком P». Не меняй группу S и слова «все/некоторые».',
        diagram: 'conversion', question: 'Как точно превратить «Все квадраты — четырёхсторонние фигуры»?',
        options: ['Ни один квадрат не является фигурой без четырёх сторон', 'Все четырёхсторонние фигуры — квадраты', 'Некоторые квадраты не четырёхсторонние'], answer: 0,
        // ИСПРАВЛЕНО: усиление интуиции — закреплена неизменность предмета разговора при превращении.
        explain: 'Мы отрицаем противоположный признак, сохраняя «все квадраты». Мы не меняем предмет разговора (квадраты), мы просто говорим о нём через отрицание противоположного признака. Второй вариант — уже другое и неверное утверждение.'
    },
    {
        icon: '🔁', tag: 'МИССИЯ 9 · ОБРАЩЕНИЕ', title: 'Поменяй местами — но осторожно!',
        story: 'У всех щенков есть признак «быть животным». Значит, некоторые животные — щенки, если щенки существуют. Но нельзя сказать «Все животные — щенки»: кошки и зайцы тоже животные. При перестановке частей легко случайно сказать слишком много.',
        // ИСПРАВЛЕНО: усиление интуиции — объяснено на примере, почему некоторые суждения нельзя обратить.
        rule: '<strong>Обращение</strong> — меняем местами предмет мысли и признак. Но объём новой фразы не всегда остаётся прежним. Безопасный пример: «Все щенки — животные» → «Некоторые животные — щенки» (если щенки есть). <strong>Нельзя</strong> превращать это в «Все животные — щенки». Для некоторых фраз обращение вообще не подходит. Например, если мы говорим «Некоторые животные не являются щенками», при обмене местами смысл ломается. Поэтому меняй местами только тогда, когда уверен в размерах «коробок»!',
        diagram: 'turnAround', question: 'Какой вывод можно сделать из «Все щенки — животные», если щенки существуют?',
        options: ['Некоторые животные — щенки', 'Все животные — щенки', 'Ни одно животное не щенок'], answer: 0,
        explain: 'Щенки входят в большую группу животных, но не все животные — щенки.'
    }
];

const quizQuestions = [
    { topic: 'Одна мысль', q: '«Дождь намочил дорожку» и «Дорожка стала мокрой от дождя». Что может быть верно?', a: ['Они выражают одну мысль разными словами', 'Это обязательно две противоположные мысли', 'Первое предложение — вопрос'], correct: 0, why: 'Слова разные, но сообщается об одном событии.' },
    { topic: 'Слово «не»', q: 'В «Не Маша закрыла окно» что отрицается?', a: ['Что окно закрыла именно Маша', 'Что окно вообще закрыто', 'Что существует окно'], correct: 0, why: 'Отрицание относится к имени: закрыть окно мог кто-то другой.' },
    { topic: 'Несколько мыслей', q: '«Саша нашёл мяч, а Лена принесла насос» сообщает…', a: ['О двух событиях', 'Только о насосе', 'Ни о чём: это просьба'], correct: 0, why: 'Саша нашёл мяч, и отдельно сообщается, что Лена принесла насос.' },
    { topic: 'Общее и частное', q: 'Как проверить, говорится ли обо всех предметах группы?', a: ['Попробовать добавить «все» и проверить смысл', 'Посчитать буквы в слове', 'Посмотреть только на единственное число'], correct: 0, why: 'Общее или частное значение узнаём по смыслу фразы.' },
    { topic: 'Слово «некоторые»', q: 'Что означает «некоторые» в логике?', a: ['Хотя бы один предмет, может быть больше', 'Обязательно ровно половину', 'Ни одного'], correct: 0, why: 'Частное суждение относится хотя бы к одному члену группы.' },
    { topic: 'Выделяющее суждение', q: '«Только выполнив задание, откроешь коробку». Что это добавляет?', a: ['Без задания коробку не открыть', 'Коробка откроется без задания', 'В коробке нет задания'], correct: 0, why: '«Только» указывает на необходимое условие.' },
    { topic: 'Условие', q: 'В «Зонт возьмём, если пойдёт дождь» что является основанием?', a: ['Если пойдёт дождь', 'Зонт возьмём', 'Ни то ни другое'], correct: 0, why: 'Дождь — условие, а взять зонт — следствие.' },
    { topic: 'Условное суждение', q: 'Как распознать условное суждение?', a: ['Есть основание и следствие, одно ставится в зависимость от другого', 'В нём обязательно есть вопросительный знак', 'Оно всегда состоит из одного слова'], correct: 0, why: 'Условие и следствие могут быть выражены даже без слова «если».' },
    { topic: 'Союз «или»', q: 'Какое «или» соединяет варианты, которые могут сочетаться?', a: ['Можно рисовать или лепить — можно и то и другое', 'Фигура — круг или квадрат', 'Число — чётное или нечётное'], correct: 0, why: 'Рисовать и лепить можно оба занятия; они не исключают друг друга.' },
    { topic: 'Превращение', q: 'Что делает превращение суждения?', a: ['Меняет утвердительную форму на отрицательную или наоборот, сохраняя мысль', 'Меняет предмет разговора на другой', 'Всегда переставляет слова «все» и «некоторые»'], correct: 0, why: 'При превращении меняется качество, но смысл стараются сохранить.' },
    { topic: 'Превращение: осторожно', q: '«Все квадраты — фигуры с четырьмя сторонами». Какой вариант сохраняет смысл?', a: ['Ни один квадрат не является фигурой без четырёх сторон', 'Все фигуры с четырьмя сторонами — квадраты', 'Некоторые квадраты — круги'], correct: 0, why: 'Здесь отрицается признак у той же группы квадратов; обратное утверждение слишком широкое.' },
    { topic: 'Обращение', q: 'Что происходит при обращении?', a: ['Предмет мысли и признак меняются местами', 'Все слова заменяются случайными', 'Утверждение обязательно становится вопросом'], correct: 0, why: 'Обращение ставит бывший признак на место предмета мысли и наоборот.' },
    { topic: 'Не делай слишком широкий вывод', q: 'Из «Все щенки — животные» можно заключить…', a: ['Некоторые животные — щенки, если щенки есть', 'Все животные — щенки', 'Ни одно животное не щенок'], correct: 0, why: 'Щенки — часть группы животных, а не вся группа целиком.' },
    { topic: 'Обращение с ограничением', q: 'Почему «Все птицы — животные» нельзя обратить в «Все животные — птицы»?', a: ['Животных много, и не все они птицы', 'Птицы не являются животными', 'Потому что слово «все» запрещено'], correct: 0, why: 'Обратная фраза захватила бы лишние предметы — например, кошек.' },
    { topic: 'Проверка смысла', q: 'Что нужно беречь, преобразуя суждение?', a: ['О ком/о чём говорится и что именно сообщается', 'Только длину предложения', 'Порядок всех букв'], correct: 0, why: 'Логическое преобразование должно сохранять содержание мысли.' },
    { topic: 'Сложная фраза', q: 'Как найти главную мысль в длинном предложении?', a: ['Определить, о ком говорится и что про него сообщают; проверить части', 'Выбрать самое длинное слово', 'Сосчитать запятые и остановиться'], correct: 0, why: 'Нужно распутать смысл: иногда в одной фразе одна мысль, иногда несколько.' },
    { topic: 'Общее или частное', q: '«Некоторые коты спят на подоконнике» означает…', a: ['Хотя бы один кот спит там, возможно больше', 'Все коты обязательно там спят', 'Ни один кот там не спит'], correct: 0, why: '«Некоторые» означает хотя бы одного, не обязательно ровно половину.' },
    { topic: 'Границы правила', q: 'Можно ли любое суждение обратить, просто поменяв слова местами?', a: ['Нет, некоторые перестановки меняют смысл или ошибочны', 'Да, смысл всегда останется прежним', 'Да, если говорить быстро'], correct: 0, why: 'У обращения есть правила и ограничения; надо проверять объём групп.' }
];

const stages = [
    { id: 'mission-0', label: 'Одна мысль' }, { id: 'mission-1', label: '«Не»' },
    { id: 'mission-2', label: 'Главная мысль' }, { id: 'mission-3', label: 'Все/некоторые' },
    { id: 'mission-4', label: '«Только»' }, { id: 'mission-5', label: 'Условие' },
    { id: 'mission-6', label: '«Или»' }, { id: 'mission-7', label: 'Превращение' },
    { id: 'mission-8', label: 'Обращение' }, { id: 'quiz', label: 'Большая игра' }
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
    if (!activeId) { map.classList.add('is-hidden'); return; }
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

function startLesson() { missionIndex = 0; showMission(); }

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
        feedback.textContent = `${result.correct ? '⭐ Верно! ' : '💡 Попробуй ещё раз. '}${mission.explain}`;
        feedback.classList.add(result.correct ? 'correct' : 'incorrect');
        $('mission-next').disabled = !result.correct;
        $('mission-next').textContent = result.correct ? (missionIndex === missions.length - 1 ? 'К большой игре!' : 'Следующая миссия') : 'Выбери правильный ответ';
    }, true);
    showScreen('mission-screen');
}

function renderDiagram(type) {
    const slot = $('mission-diagram');
    slot.innerHTML = '';
    slot.classList.toggle('is-hidden', !type);
    if (!type) return;
    const diagrams = {
        sameThought: '<p class="diagram-title">Меняются слова — остаётся сообщение</p><div class="example-pair" role="img" aria-label="Два предложения разными словами сообщают, что дорожка покрыта снегом"><div class="example-line">Снег укрыл дорожку.</div><div class="example-line highlight">Дорожка покрылась снегом.</div></div><p class="diagram-caption">Одна мысль может иметь разные словесные одежды.</p>',
        notScope: '<p class="diagram-title">Передвинь «не» — проверь, что оно отрицает</p><div class="compare-grid" role="img" aria-label="Не Маша открыла дверь: дверь открыл кто-то другой. Маша не открыла дверь: Маша дверь не открывала."><div class="compare-card">НЕ Маша открыла дверь<small>Открыл кто-то другой</small></div><div class="compare-card">Маша НЕ открыла дверь<small>Маша этого не делала</small></div></div>',
        oneOrTwo: '<p class="diagram-title">В длинной фразе может быть одна или несколько мыслей</p><div class="flow-row" role="img" aria-label="Петя нашёл мяч и Лена принесла насос — два самостоятельных события"><span class="flow-box">Петя нашёл мяч</span><span class="flow-arrow">+</span><span class="flow-box">Лена принесла насос</span></div><p class="diagram-caption">Проверь каждую самостоятельную часть отдельно.</p>',
        allSome: '<p class="diagram-title">Сначала спроси: «Все ли?»</p><div class="flow-row" role="img" aria-label="Группа грибов делится на грибы, растущие в лесу, и остальные грибы"><span class="flow-box">Все грибы</span><span class="flow-arrow">→</span><span class="flow-box">Некоторые в лесу</span><span class="flow-box">Другие места</span></div><p class="diagram-caption">Множественное число ещё не означает «все».</p>',
        only: '<p class="diagram-title">«Только» закрывает вход без условия</p><div class="flow-row" role="img" aria-label="Выполнены задания — сундук открывается; задания не выполнены — сундук закрыт"><span class="flow-box">Выполнил задания</span><span class="flow-arrow">→</span><span class="flow-box">Сундук откроется</span></div><p class="diagram-caption">Без нужного условия результата не будет.</p>',
        condition: '<p class="diagram-title">Основание и следствие могут стоять в разном порядке</p><div class="flow-row" role="img" aria-label="Условие: пойдёт дождь; следствие: возьмём зонт"><span class="flow-box">ЕСЛИ: дождь</span><span class="flow-arrow">→</span><span class="flow-box">ТО: берём зонт</span></div><p class="diagram-caption">Можно сказать: «Если дождь, берём зонт» или «Берём зонт, если дождь».</p>',
        orKinds: '<p class="diagram-title">Два значения союза «или»</p><div class="compare-grid" role="img" aria-label="Гулять или кататься на велосипеде: можно оба занятия. Треугольник или квадрат: одна фигура не может быть обоими сразу."><div class="compare-card">Гулять ИЛИ кататься<small>Можно и то, и другое</small></div><div class="compare-card">Треугольник ИЛИ квадрат<small>Фигура выбирает один вид</small></div></div>',
        conversion: '<p class="diagram-title">Превращение: то же S, признак и его отрицание</p><div class="example-pair" role="img" aria-label="Все квадраты имеют четыре стороны. То же самое: ни один квадрат не лишён четырёх сторон."><div class="example-line">Все квадраты — четырёхсторонние.</div><div class="flow-row"><span class="flow-arrow">↔</span></div><div class="example-line highlight">Ни один квадрат не без четырёх сторон.</div></div><p class="diagram-caption">S остаётся «квадраты», меняется форма утверждения.</p>',
        turnAround: '<p class="diagram-title">Обращение: из маленькой группы в большую — не наоборот!</p><div class="flow-row" role="img" aria-label="Щенки входят в группу животных, но не все животные являются щенками"><span class="flow-box">Щенки</span><span class="flow-arrow">входят в</span><span class="flow-box">Животные</span></div><p class="diagram-caption">«Все щенки — животные» → «Некоторые животные — щенки». Не «все животные — щенки»!</p>'
    };
    slot.innerHTML = diagrams[type] || '';
}

function renderAnswers(container, answers, correctIndex, onAnswer, retryOnWrong = false) {
    container.innerHTML = '';
    const order = shuffle(answers.map((_, index) => index));
    let answered = false;
    order.forEach(index => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-option';
        button.textContent = answers[index];
        button.addEventListener('click', () => {
            if (answered || button.disabled) return;
            const correct = index === correctIndex;
            button.classList.add(correct ? 'answer-correct' : 'answer-wrong');
            if (!correct && retryOnWrong) button.disabled = true;
            else {
                answered = true;
                container.querySelectorAll('button').forEach(option => { option.disabled = true; });
            }
            if (!correct && !retryOnWrong) {
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
    $('review-summary').textContent = `Сейчас у тебя ${correctCount} правильных ответов из ${selectedQuiz.length}. Разберём подсказки и попробуем ещё раз.`;
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
