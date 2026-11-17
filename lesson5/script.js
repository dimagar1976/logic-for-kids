/* Урок 5: суждения и отношения между ними. */
const missions = [
    {
        icon: '💭', tag: 'МИССИЯ 1 · ЧТО МЫ СКАЗАЛИ?', title: 'Мысль, которую можно проверить',
        story: 'На столе лежит яблоко. Мила говорит: «Яблоко красное». Она что-то утверждает о яблоке. Профессор отвечает: «Яблоко не зелёное». Он отрицает признак. А вопрос «Какого оно цвета?» пока ничего не утверждает и не отрицает.',
        rule: '<strong>Суждение</strong> — мысль, в которой о предмете что-то утверждают или отрицают. Суждение можно проверять: соответствует ли оно тому, как обстоят дела на самом деле?',
        question: 'Какое предложение — суждение?',
        options: ['На столе лежит яблоко.', 'Какого цвета яблоко?', 'Пожалуйста, принеси яблоко!'], answer: 0,
        explain: 'Первое предложение сообщает факт. Вопрос и просьба сами по себе не утверждают и не отрицают факт.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 2 · НАЙДИ ДВЕ ЧАСТИ', title: 'О ком говорим и что говорим?',
        story: 'В суждении «Щенок весёлый» мы сначала понимаем, о ком речь: о щенке. Это предмет мысли. Затем узнаём, что именно о нём сказано: он весёлый. Слово «есть» можно добавить для удобства: «Щенок есть весёлый».',
        rule: '<strong>Предмет мысли</strong> (S) — о ком или о чём говорится. <strong>Признак мысли</strong> (P) — что о нём сказано. Между ними мысленно ставим связку «есть» или «не есть»: <strong>S есть P</strong> / <strong>S не есть P</strong>. В обычной речи «есть» часто пропускают.',
        diagram: 'formula',
        question: 'В суждении «Снег белый» что является S — предметом мысли?',
        options: ['Снег', 'Белый', 'Слово «есть»'], answer: 0,
        explain: 'Именно о снеге мы высказываем мысль.'
    },
    {
        icon: '🔎', tag: 'МИССИЯ 3 · ПРЕДЛОЖЕНИЕ И МЫСЛЬ', title: 'Слова — оболочка мысли',
        story: 'Суждение мы произносим или записываем предложением — так мысль получает словесную одежду. Иногда для мысли хватает даже одного слова: например, «Светает!» Но не всякое предложение — суждение: вопрос и просьба обычно ничего не утверждают о факте.',
        rule: '<strong>Предложение</strong> — слова, которыми мы выражаем мысль. Суждение всегда что-то утверждает или отрицает, но его грамматические части не всегда совпадают со школьными «подлежащим» и «сказуемым».',
        question: 'Какое слово-предложение сообщает суждение?',
        options: ['Светает.', 'Тише!', 'Когда?'], answer: 0,
        explain: '«Светает» сообщает, что происходит. Это законченное сообщение о мире.'
    },
    {
        icon: '✅', tag: 'МИССИЯ 4 · ИСТИНА ИЛИ ОШИБКА?', title: 'Проверь по фактам',
        story: 'Если на улице идёт дождь, фраза «Сейчас идёт дождь» истинна. Если небо сухое и дождя нет, она ложна. Суждение — это не просто мнение о том, нравится ли нам дождь: его истинность проверяют по фактам.',
        rule: '<strong>Истинное суждение</strong> верно сообщает о действительности. <strong>Ложное суждение</strong> сообщает неверно. Одни слова сами не делают мысль истинной — нужно свериться с тем, что происходит.',
        question: 'Во дворе сейчас лежит снег. Какое суждение о дворе истинно?',
        options: ['Во дворе лежит снег.', 'Во дворе лежит песок.', 'Во дворе растут ананасы.'], answer: 0,
        explain: 'Мы сравнили сообщение с условием задачи: во дворе действительно снег.'
    },
    {
        icon: '📏', tag: 'МИССИЯ 5 · СКОЛЬКО ПРЕДМЕТОВ?', title: 'Один, некоторые или все?',
        story: '«Этот кот спит» — речь об одном коте. «Некоторые коты рыжие» — хотя бы один кот рыжий; возможно, их больше. «Все коты — животные» — утверждение обо всей группе. Если сказать «некоторые коты — рыжие», часть группы «коты» попадёт в группу «рыжие».',
        rule: 'По количеству суждения бывают <strong>единичные</strong> (об одном), <strong>частные</strong> (о некоторых: хотя бы об одном) и <strong>общие</strong> (обо всех предметах группы). «Некоторые» не обязательно означает «не все».',
        diagram: 'venn',
        question: 'В каком суждении говорится обо всех птицах?',
        options: ['Все птицы — животные.', 'Некоторые птицы живут у воды.', 'Эта птица сидит на ветке.'], answer: 0,
        explain: 'Слово «все» показывает, что речь идёт о каждом члене группы.'
    },
    {
        icon: '🎨', tag: 'МИССИЯ 6 · ДА ИЛИ НЕТ?', title: 'Утверждаем или отрицаем',
        story: 'Сыщик рассматривает карточку: «Эта карточка круглая». Он утверждает признак. Если на карточке нарисован квадрат, сыщик скажет: «Эта карточка не круглая». Он отрицает, что у карточки есть признак круглой формы.',
        rule: 'По качеству суждение бывает <strong>утвердительным</strong> (признак есть: «S есть P») или <strong>отрицательным</strong> (признака нет: «S не есть P»). Это отдельный признак от количества: можно говорить «все» или «некоторые» и при этом утверждать или отрицать.',
        question: 'Какое суждение отрицательное?',
        options: ['Этот кубик не синий.', 'Этот кубик деревянный.', 'Все кубики — игрушки.'], answer: 0,
        explain: 'Слово «не» отрицает, что у кубика есть признак синего цвета.'
    },
    {
        icon: '🧮', tag: 'МИССИЯ 7 · СОЕДИНИ ДВА ПРИЗНАКА', title: 'Четыре способа высказаться',
        story: 'Можно соединить две подсказки: сколько предметов — все или некоторые — и есть ли у них признак или его нет. Например: «Все ромашки — цветы», «Некоторые цветы жёлтые», «Ни один квадрат не круглый», «Некоторые птицы не летают». Так получаются четыре удобные формы.',
        rule: 'Смешай два вопроса: <strong>сколько?</strong> и <strong>да или нет?</strong> Получатся: все + да; некоторые + да; ни один + нет; некоторые + нет. В записи из учебника для этих четырёх форм используют буквы <strong>A, I, E, O</strong> — запоминать буквы пока необязательно.',
        diagram: 'four',
        question: '«Некоторые цветы жёлтые» — это…',
        options: ['О некоторых предметах утверждают признак', 'Обо всех предметах отрицают признак', 'Об одном предмете спрашивают'], answer: 0,
        explain: '«Некоторые» говорит о количестве, а «жёлтые» утверждает признак.'
    },
    {
        icon: '🔗', tag: 'МИССИЯ 8 · КАК СВЯЗАНЫ МЫСЛИ?', title: 'Если…, то… / Или…, или…',
        story: '«Если пойдёт дождь, то мы возьмём зонт» — здесь одно событие служит условием для другого. «Фигура — это треугольник или четырёхугольник» предлагает варианты. А «Мяч круглый» просто сообщает факт, без условия и выбора.',
        rule: '<strong>Условное</strong> суждение: «если…, то…» — сначала условие, затем его следствие. <strong>Разделительное</strong>: «или…, или…» — перечисляет варианты. <strong>Категорическое</strong> говорит прямо, без условия. Смысл важен: иногда «или» означает выбрать только один вариант, а иногда несколько вариантов могут сочетаться.',
        diagram: 'relations',
        question: 'Какое суждение условное?',
        options: ['Если замёрзнет вода, получится лёд.', 'Вода прозрачная.', 'Вода — жидкость или лёд.'], answer: 0,
        explain: 'В первом предложении есть условие «если» и результат «то».'
    },
    {
        icon: '🌦️', tag: 'МИССИЯ 9 · МОЖЕТ, ЕСТЬ ИЛИ ДОЛЖНО?', title: 'Догадка, факт и правило природы',
        story: '«Возможно, завтра будет снег» — пока предположение. «Сегодня выпал снег» — сообщение о случившемся факте. «Если воду достаточно охладить, она замерзает» — рассказ о закономерности природы. Мы говорим с разной уверенностью и о разном.',
        rule: '<strong>Возможность:</strong> может случиться, но мы не уверены. <strong>Действительность:</strong> сообщаем о факте, который есть или случился. <strong>Необходимость:</strong> говорим о закономерности — при оговорённых условиях так должно происходить.',
        question: 'Какое предложение выражает возможность?',
        options: ['Возможно, завтра пойдёт снег.', 'Снег лежит на крыше.', 'При сильном морозе вода замерзает.'], answer: 0,
        explain: 'Слово «возможно» показывает, что это пока предположение, а не проверенный факт.'
    },
    {
        icon: '⚖️', tag: 'МИССИЯ 10 · СРАВНИ ДВА СУЖДЕНИЯ', title: 'Противоречие, противоположность и круги',
        story: 'Про одну и ту же карточку сказали: «Она красная» и «Она не красная». Одно из них обязательно верно, а другое — нет: это противоречие. А если сравнить «белая» и «чёрная», карточка может быть серой — тогда оба высказывания неверны. На кругах видно и другое: некоторые рассказы могут быть одновременно смешными — они попадают в общую часть двух групп.',
        // ИСПРАВЛЕНО: отдельно и недвусмысленно указаны отношения истинности и ложности для двух типов суждений.
        rule: '<strong>Противоречащие</strong> суждения: из двух противоречащих суждений одно обязательно истинно, а другое ложно. Они не могут быть <strong>оба истинными</strong> или <strong>оба ложными</strong> одновременно. <strong>Противоположные</strong> суждения не могут быть <strong>оба истинными</strong>, но могут быть <strong>оба ложными</strong>, потому что между ними есть «середина» (например, серый цвет между белым и чёрным). Если все S — P, то при наличии S верно и «некоторые S — P»; обратный вывод делать нельзя.',
        diagram: 'square',
        question: 'Карточка оказалась серой. Что верно о фразах «Карточка белая» и «Карточка чёрная»?',
        options: ['Обе фразы ложны: это противоположности', 'Одна обязательно истинна: это противоречие', 'Обе фразы истинны'], answer: 0,
        explain: 'Серый цвет — промежуточный: карточка не белая и не чёрная. Поэтому обе противоположные фразы могут быть ложными.'
    }
];

const quizQuestions = [
    { topic: 'Суждение', q: 'Что делает суждение?', a: ['Что-то утверждает или отрицает', 'Только задаёт вопрос', 'Только называет предмет'], correct: 0, why: 'Суждение сообщает, есть у предмета признак или нет.' },
    { topic: 'Предмет мысли', q: 'В высказывании «Лягушка прыгает» что является S — предметом мысли?', a: ['Лягушка', 'Прыгает', 'Слово «есть»'], correct: 0, why: 'S — то, о ком или о чём говорится.' },
    { topic: 'Истина', q: 'На столе лежит мяч. Какое суждение истинно по условию?', a: ['На столе лежит мяч.', 'На столе лежит слон.', 'На столе ничего нет.'], correct: 0, why: 'Истинность проверяем по описанным фактам.' },
    { topic: 'Предложение', q: 'Какое короткое предложение всё же сообщает суждение?', a: ['Светает.', 'Эй!', 'Куда?'], correct: 0, why: 'Одно слово тоже может сообщать, что происходит.' },
    { topic: 'Количество', q: 'Что означает «некоторые» в логике?', a: ['Хотя бы один предмет; возможно, больше', 'Всегда ровно половину', 'Ни одного предмета'], correct: 0, why: 'Частное суждение говорит хотя бы об одном члене группы.' },
    { topic: 'Качество', q: 'Какое суждение утвердительное?', a: ['Этот шар блестит.', 'Этот шар не блестит.', 'Блестит ли шар?'], correct: 0, why: 'Утвердительное суждение приписывает предмету признак.' },
    { topic: 'Круги S и P', q: 'Что показывает пересечение кругов S и P?', a: ['Предметы, которые относятся и к S, и к P', 'Предметы, которые не относятся ни к одной группе', 'Что все S обязательно являются P'], correct: 0, why: 'Общая часть кругов — это то, что входит в обе группы сразу.' },
    { topic: 'Условное суждение', q: 'Как узнать условное суждение?', a: ['В нём есть связь «если…, то…»', 'В нём есть слово «все»', 'В нём задан вопрос'], correct: 0, why: 'Условное суждение связывает условие с последствием.' },
    { topic: 'Разделительное суждение', q: 'Что обычно делает разделительное суждение?', a: ['Предлагает варианты через «или»', 'Отрицает все признаки', 'Описывает только один предмет без выбора'], correct: 0, why: 'Разделительное суждение сообщает о возможных вариантах.' },
    { topic: 'Возможность', q: 'Какое слово показывает, что мы пока только предполагаем?', a: ['Возможно', 'Всегда', 'Точно измерили'], correct: 0, why: '«Возможно» указывает на предположение, а не установленный факт.' },
    { topic: 'Противоречие', q: 'Какие высказывания противоречат друг другу?', a: ['Лампа включена / лампа не включена', 'Лампа светлая / лампа тёмная', 'Лампа большая / лампа новая'], correct: 0, why: 'Фраза «не включена» прямо отрицает «включена»; третьего варианта нет.' },
    // ИСПРАВЛЕНО: объяснено, почему противоположные суждения могут быть оба ложными.
    { topic: 'Противоположность', q: 'Кубик оказался зелёным. Что можно сказать о «кубик красный» и «кубик синий»?', a: ['Оба высказывания могут быть ложными', 'Одно обязательно истинно', 'Оба обязательно истинны'], correct: 0, why: 'Это противоположные суждения. Они не могут быть верны одновременно, но могут быть оба неверны, если существует третий вариант (например, зелёный).' },
    { topic: 'Подчинение', q: 'Если все маргаритки в саду — цветы, а маргаритки там есть, что верно?', a: ['Некоторые цветы в саду — маргаритки', 'Все цветы в саду — маргаритки', 'В саду нет цветов'], correct: 0, why: 'Если группа не пустая и все её предметы входят в большую группу, то хотя бы некоторые члены большой группы — из этой группы.' },
    { topic: 'Проверка «или»', q: 'Почему важно подумать о смысле слова «или»?', a: ['Иногда варианты исключают друг друга, а иногда могут сочетаться', '«Или» всегда означает «оба сразу»', '«Или» никогда не перечисляет варианты'], correct: 0, why: 'Например, одно число не может быть одновременно чётным и нечётным, а человек может и петь, и танцевать.' }
];

const stages = [
    { id: 'mission-0', label: 'Мысль' }, { id: 'mission-1', label: 'S и P' },
    { id: 'mission-2', label: 'Предложение' }, { id: 'mission-3', label: 'Истина' },
    { id: 'mission-4', label: 'Количество' }, { id: 'mission-5', label: 'Качество' },
    { id: 'mission-6', label: 'Четыре формы' }, { id: 'mission-7', label: 'Связи' },
    { id: 'mission-8', label: 'Уверенность' }, { id: 'mission-9', label: 'Отношения' },
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
        formula: '<p class="diagram-title">Из чего складывается простое суждение?</p><div class="parts-formula" role="img" aria-label="Предмет мысли S, связка есть, признак мысли P"><span class="formula-box">S · о ком?</span><span class="formula-op">есть</span><span class="formula-box">P · какой?</span></div><p class="diagram-caption">«Снег белый» → S: снег; P: белый. Связка «есть» часто не произносится.</p>',
        venn: '<p class="diagram-title">Круги-понятия: общая часть принадлежит обеим группам</p><div class="circle-diagram" role="img" aria-label="Два пересекающихся круга S коты и P рыжие; общая часть показывает рыжих котов"><div class="venn-circle venn-s">S · коты</div><div class="venn-circle venn-p">P · рыжие</div><div class="venn-overlap">рыжие<br>коты</div><div class="venn-caption">«Некоторые коты рыжие»: эти коты попадают в общую часть.</div></div>',
        four: '<p class="diagram-title">Два вопроса дают четыре формы</p><div class="logic-grid" role="img" aria-label="A: все S — P; E: ни один S не P; I: некоторые S — P; O: некоторые S не P"><div class="logic-cell">A · Все S — P<br>все + да</div><div class="logic-cell">E · Ни один S — P<br>все + нет</div><div class="logic-cell">I · Некоторые S — P<br>часть + да</div><div class="logic-cell">O · Некоторые S не P<br>часть + нет</div></div><p class="diagram-caption">Сначала спроси «сколько?», потом «есть признак или нет?».</p>',
        square: '<p class="diagram-title">Логический квадрат: четыре высказывания об одних S и P</p><div class="square-grid" role="img" aria-label="A: все S — P; E: ни один S — P; I: некоторые S — P; O: некоторые S не P. A и E противоположны, A и O противоречат, E и I противоречат, A подчинено I, E подчинено O"><div class="square-cell">A<br>Все S — P</div><div class="square-link top-link">A ↔ E<br>противоположность</div><div class="square-cell">E<br>Ни один S — P</div><div class="square-link left-link">A ↓ I<br>подчинение</div><div class="square-link diagonal-link">A ↔ O<br>E ↔ I<br>противоречие</div><div class="square-link right-link">E ↓ O<br>подчинение</div><div class="square-cell">I<br>Некоторые S — P</div><div class="square-link bottom-link">нижние формы могут быть вместе истинными</div><div class="square-cell">O<br>Некоторые S не P</div></div><p class="diagram-caption">Противоположные A и E не бывают вместе истинными, но могут быть обе ложны. В диагонали одно высказывание отрицает другое. Вывод от общего к частному верен, если предметы S существуют.</p>',
        relations: '<p class="diagram-title">Связь «условие → результат»</p><div class="relation-line" role="img" aria-label="Если наступило условие, то ожидаем следствие"><span class="relation-node">ЕСЛИ<br>пошёл дождь</span><span class="relation-arrow">→</span><span class="relation-node">ТО<br>берём зонт</span></div><p class="diagram-caption">В условном суждении первая часть — условие, вторая — следствие.</p>'
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
    const passed = mistakes.length <= MAX_ERRORS;
    const result = window.CourseProgress.recordResult(5, { passed, mistakes: mistakes.length, score: correctCount, totalQuestions: selectedQuiz.length });
    if (passed) {
        window.CourseProgress.renderAward($('success-screen'), result, result.medalImproved);
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
