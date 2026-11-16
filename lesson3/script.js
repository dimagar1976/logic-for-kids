/* Урок 3: понятия, признаки и отношения между группами. */
const missions = [
    {
        icon: '🔎', tag: 'МИССИЯ 1 · НАЙДИ ГЛАВНОЕ', title: 'Что делает предмет самим собой?',
        story: 'На столе лежит карандаш. Он бывает длинным или коротким, жёлтым или синим. Эти признаки меняются. Чтобы понять, что это за предмет, мы ищем важные признаки, которые помогают отличить его от других вещей.',
        rule: '<strong>Важный (существенный) признак</strong> помогает понять, что это за предмет или чем он отличается. Цвет карандаша может меняться; его назначение — писать или рисовать — помогает узнать карандаш.',
        question: 'Какой признак помогает понять, что перед нами карандаш?',
        options: ['Он предназначен для письма или рисования', 'Он обязательно жёлтый', 'Он всегда длиннее ладони'], answer: 0,
        explain: 'Цвет и длина могут меняться, а назначение помогает узнать карандаш. Это важный признак.'
    },
    {
        icon: '🧠', tag: 'МИССИЯ 2 · НЕ ТОЛЬКО КАРТИНКА', title: 'Представь или пойми?',
        story: 'Можно представить один красный шар — это образ, похожий на картинку в голове. А понятие «игрушка» подходит многим разным вещам, которыми играют. Понятие помогает думать не только об одном нарисованном предмете.',
        rule: '<strong>Понятие</strong> — мысль о предмете или группе через важные общие признаки. <strong>Образ</strong> — воображаемая картинка одного предмета. Понятие «игрушка» шире одной картинки мяча.',
        question: 'Что лучше описывает понятие «игрушка»?',
        options: ['Один-единственный воображаемый мяч', 'Общее название для многих предметов, которыми играют', 'Только красный цвет'], answer: 1,
        explain: 'Понятие помогает думать о целом классе похожих предметов, а не только об одной картинке.'
    },
    {
        icon: '🗣️', tag: 'МИССИЯ 3 · СЛОВО-ХИТРЕЦ', title: 'Узнай слово по подсказке',
        story: 'Слово «ключ» может обозначать ключ от двери, родник или знак в музыке. Само слово одно, а значений несколько. Остальные слова предложения помогают понять, какое значение задумано.',
        rule: '<strong>Не угадывай значение по одному слову.</strong> Прочитай всё предложение и найди подсказки: ключ открывает дверь, а из родника-ключа бьёт вода.',
        question: '«У домика потерялся ключ. Как же теперь открыть дверь?» Какой ключ имеется в виду?',
        options: ['Родник', 'Ключ от замка', 'Музыкальный ключ'], answer: 1,
        explain: 'У одного слова бывают разные значения. Чтобы не запутаться, слушай всё предложение.'
    },
    {
        icon: '🪆', tag: 'МИССИЯ 4 · КОРОБКИ ПОНЯТИЙ', title: 'Широкая группа и узкая',
        story: 'Представь большую коробку «Животные». В ней есть птицы, кошки, рыбы и другие животные. Коробка «Птицы» помещается внутри большой: каждая птица — животное, но не каждое животное — птица.',
        rule: '<strong>Объём понятия</strong> — все предметы, которые к нему подходят. «Животные» — более широкая группа, чем «птицы». Если один круг внутри другого, маленькая группа входит в большую.',
        diagram: 'nested',
        question: 'Какое понятие шире: «птицы» или «животные»?',
        options: ['Птицы: ведь птицы — это все животные', 'Животные: к ним относятся птицы и многие другие', 'Они одинаково широкие'], answer: 1,
        explain: 'Животных больше: птица — один из видов животных. Значит, «животные» — более широкая группа.'
    },
    {
        icon: '🎯', tag: 'МИССИЯ 5 · ДОБАВЬ ПРИЗНАК', title: 'Уточни, кого ищем',
        story: 'Профессор просит найти птицу. Птиц много. Он добавляет признаки: «птица, которая не летает и живёт в Антарктиде». Теперь подходит гораздо меньше птиц — группа стала точнее.',
        rule: '<strong>Содержание</strong> — признаки понятия; <strong>объём</strong> — подходящие предметы. Для вложенных групп: добавили уточняющий признак — обычно уменьшили число подходящих предметов. Обратный путь, к более широкой группе, — обобщение.',
        diagram: 'nested',
        question: 'Что случилось с группой, когда добавили признаки?',
        options: ['Она стала уже: подошло меньше птиц', 'Она стала шире: подошли все животные', 'Ничего не изменилось'], answer: 0,
        // ИСПРАВЛЕНО: термин учебника введён через наглядное пояснение сужения группы.
        explain: 'Чем больше уточняющих признаков, тем меньше предметов подходит. Мы ограничили понятие, добавив признаки, и группа подошедших предметов стала уже и точнее.'
    },
    {
        icon: '🌳', tag: 'МИССИЯ 6 · НЕ ПУТАЙ С ЧАСТЬЮ', title: 'Кто кому родственник?',
        story: 'Берёза — дерево особого вида: у каждой берёзы есть все признаки дерева. Ветка же растёт на дереве, но сама не является видом дерева. Одни слова отвечают на вопрос «какой это вид?», другие — «из каких частей состоит?»',
        rule: '<strong>Род и вид:</strong> берёза — вид дерева; дерево — более широкая группа. <strong>Часть и целое:</strong> ветка — часть дерева. Ветка не является видом дерева.',
        diagram: 'nested',
        question: 'Что здесь является видом дерева, а не его частью?',
        options: ['Берёза', 'Ветка', 'Кора'], answer: 0,
        explain: 'Берёза — дерево, значит это вид. Ветка и кора — части дерева. Вид и часть — разные связи.'
    },
    {
        icon: '⭕', tag: 'МИССИЯ 7 · ГРУППЫ ДРУЖАТ', title: 'Найди пересечение',
        story: 'Есть группа детей, которые любят читать, и группа детей, которые любят рисовать. Кто-то может любить и то и другое — такие ребята окажутся в общей части групп.',
        rule: '<strong>Перекрещивающиеся понятия</strong> — группы, у которых есть общая часть, но ни одна не состоит целиком из другой. Например, некоторые дети любят и читать, и рисовать.',
        diagram: 'overlap',
        question: 'Как назвать такие группы, у которых есть общие участники?',
        options: ['Пересекающиеся', 'Совершенно одинаковые', 'Несвязанные части одного предмета'], answer: 0,
        explain: 'Группы пересекаются, если в них есть хотя бы кто-то общий. Можно изобразить их кругами, которые накладываются.'
    },
    {
        icon: '👥', tag: 'МИССИЯ 8 · ОДИН, МНОГО И ВСЕ ВМЕСТЕ', title: 'Кто в какой группе?',
        story: '«Мурка» называет одну кошку. «Кошка» подходит многим кошкам. «Стая» называет несколько птиц, собравшихся вместе и представленных как одну группу.',
        rule: '<strong>Единичное</strong> понятие — об одном предмете; <strong>общее</strong> — о многих похожих; <strong>собирательное</strong> — о группе, которую мы мыслим как одно целое.',
        // ИСПРАВЛЕНО: проверяется применение понятия на примерах, а не угадывание названия термина.
        question: 'Какое из этих слов является собирательным понятием (называет группу предметов как одно целое)?',
        options: ['Стая', 'Мурка (одна конкретная кошка)', 'Кошка (вообще, все кошки)'], answer: 0,
        // ИСПРАВЛЕНО: разбор различает собирательное, единичное и общее понятия на конкретных примерах.
        explain: '«Стая» называет много птиц как одну группу. «Мурка» — это одна кошка (единичное), а «кошка» — понятие о многих кошках (общее).'
    }
];

const quizQuestions = [
    { topic: '🔎 Важные признаки', q: 'У самоката может быть разный цвет и размер. Что важнее всего для понятия «самокат»?', a: ['На нём можно ехать, отталкиваясь ногой', 'Он обязательно зелёный', 'На нём нарисована звезда'], correct: 0, why: 'Цвет может быть разным, а назначение помогает узнать самокат.' },
    { topic: '🧠 Понятие и образ', q: 'Что лучше подходит к понятию «фрукт»?', a: ['Только одна воображаемая груша', 'Общая группа: яблоки, груши и другие фрукты', 'Любой круглый предмет'], correct: 1, why: 'Понятие объединяет много предметов с общими важными признаками.' },
    { topic: '🗣️ Слова', q: '«На сосне сидела белка». Что означает слово «сосна»?', a: ['Дерево', 'Часть велосипеда', 'Краска'], correct: 0, why: 'Сосна — дерево; слова в предложении помогают понять значение.' },
    { topic: '🗝️ Слово-хитрец', q: '«Из-под камня бил холодный ключ». Какое значение слова «ключ» подходит?', a: ['Ключ от двери', 'Родник с водой', 'Ключ для игрушки'], correct: 1, why: 'Вода может бить из родника — это тоже называют ключом.' },
    { topic: '🪆 Широкая и узкая группы', q: 'Какое понятие охватывает больше предметов?', a: ['Животные', 'Кошки', 'Котята'], correct: 0, why: 'Кошки и котята входят в широкую группу животных.' },
    { topic: '🎯 Ограничение понятия', q: 'Было понятие «игрушка». Добавили признаки «мягкая» и «в форме зайца». Что произошло?', a: ['Подошло меньше игрушек: понятие стало точнее', 'Подошли все предметы', 'Понятие исчезло'], correct: 0, why: 'Каждый новый признак сужает группу подходящих предметов.' },
    { topic: '🌱 Обобщение понятия', q: 'Что шире понятия «тюльпан»?', a: ['Цветок', 'Красный тюльпан', 'Один тюльпан в вазе'], correct: 0, why: 'Тюльпан — это цветок. Цветами бывают не только тюльпаны.' },
    { topic: '🌳 Вид или часть?', q: 'Что является видом дерева?', a: ['Берёза', 'Ветка', 'Корень'], correct: 0, why: 'Берёза — один из видов деревьев, а ветка и корень — части дерева.' },
    { topic: '🧺 Группа вместе', q: 'Что лучше всего означает слово «стая»?', a: ['Много птиц, собравшихся вместе', 'Одно птичье перо', 'Птица, нарисованная на листе'], correct: 0, why: 'Стая — это группа птиц, которую мы представляем как одно целое.' },
    { topic: '⭕ Пересечение групп', q: 'Какие группы могут пересекаться?', a: ['Дети, которые любят плавать, и дети, которые любят читать', 'Все рыбки и все велосипеды', 'Карандаши и их отдельные части как два одинаковых вида'], correct: 0, why: 'Один ребёнок может любить и плавать, и читать, значит он входит в обе группы.' },
    { topic: '🧩 Часть и целое', q: 'Как связаны колесо и велосипед?', a: ['Колесо — часть велосипеда', 'Колесо — вид велосипеда', 'Это всегда одно и то же'], correct: 0, why: 'Колесо — деталь велосипеда, а не отдельный вид велосипеда.' },
    { topic: '✨ Противоположность', q: 'Какое слово противоположно слову «горячий»?', a: ['Холодный', 'Не горячий (например, прохладный или тёплый)', 'Круглый'], correct: 0, why: '«Горячий» и «холодный» — противоположные признаки. А «не горячий» может означать разную температуру.' },
    { topic: '↔️ Противоположность или отрицание?', q: 'Если предмет «не красный», что мы точно знаем?', a: ['Он обязательно синий', 'Он любого цвета, кроме красного', 'Он обязательно белый'], correct: 1, why: '«Не красный» не называет точный цвет: это может быть синий, зелёный, жёлтый и другие цвета.' },
    { topic: '🧬 Общая группа', q: 'Кошка и собака — разные виды. Какое понятие объединяет их?', a: ['Животные', 'Только кошки', 'Миски'], correct: 0, why: 'Кошки и собаки — разные виды, но обе входят в общий род «животные».' },
    { topic: '🔗 Найди общее', q: 'В коробке лежат синие кубики, а часть кубиков ещё и деревянные. Каким свойством могут обладать некоторые кубики?', a: ['Быть и синими, и деревянными', 'Быть одновременно кубиками и облаками', 'Быть только синими и никогда деревянными'], correct: 0, why: 'Группы «синие» и «деревянные» могут пересекаться.' },
    { topic: '🧭 Выбери точное понятие', q: 'Профессор просит принести книгу. Какое уточнение поможет выбрать нужную?', a: ['Книгу с зелёной обложкой о динозаврах', 'Что-нибудь интересное', 'Ту штуку оттуда'], correct: 0, why: 'Дополнительные признаки помогают точнее понять, какую книгу искать.' }
];

const stages = [
    { id: 'mission-0', label: 'Признаки' }, { id: 'mission-1', label: 'Понятие' },
    { id: 'mission-2', label: 'Слова' }, { id: 'mission-3', label: 'Группы' },
    { id: 'mission-4', label: 'Уточнение' }, { id: 'mission-5', label: 'Вид и часть' },
    { id: 'mission-6', label: 'Пересечение' }, { id: 'mission-7', label: 'Один и группа' },
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
    renderConceptDiagram(mission.diagram);
    $('mission-question').textContent = mission.question;
    $('mission-feedback').textContent = '';
    $('mission-feedback').className = 'feedback mission-feedback';
    $('mission-next').disabled = true;
    $('mission-next').textContent = 'Выбери ответ';
    renderAnswers($('mission-options'), mission.options, mission.answer, result => {
        $('mission-next').disabled = false;
        $('mission-next').textContent = missionIndex === missions.length - 1 ? 'К большой игре!' : 'Следующая миссия';
        const feedback = $('mission-feedback');
        feedback.textContent = `${result.correct ? '⭐ Верно! ' : '💡 Запомни: '}${mission.explain}`;
        feedback.classList.add(result.correct ? 'correct' : 'incorrect');
    });
    showScreen('mission-screen');
}

function renderConceptDiagram(type) {
    const slot = $('mission-diagram');
    slot.innerHTML = '';
    slot.classList.toggle('is-hidden', !type);
    if (!type) return;

    const figure = document.createElement('figure');
    figure.className = `concept-diagram ${type === 'overlap' ? 'diagram-overlap' : 'diagram-nested'}`;
    figure.setAttribute('role', 'img');
    if (type === 'overlap') {
        figure.setAttribute('aria-label', 'Два пересекающихся круга: группа любящих читать и группа любящих рисовать. В общей части находятся дети, которые любят и читать, и рисовать.');
        figure.innerHTML = '<div class="circle circle-left"><span>Любят<br>читать</span></div><div class="circle circle-right"><span>Любят<br>рисовать</span></div><div class="overlap-label">Любят оба занятия</div><figcaption>Общая часть — те, кто входит в обе группы.</figcaption>';
    } else {
        figure.setAttribute('aria-label', 'Маленькая группа «птицы» целиком находится внутри большой группы «животные»: каждая птица — животное.');
        figure.innerHTML = '<div class="set-outer"><span>Животные</span><div class="set-inner">Птицы</div></div><figcaption>Каждая птица — животное, но не каждое животное — птица.</figcaption>';
    }
    slot.appendChild(figure);
}

function renderAnswers(container, answers, correctIndex, onAnswer) {
    container.innerHTML = '';
    const order = shuffle(answers.map((_, index) => index));
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
        return { ...question, a: answers.map(answer => answer.text), correct: answers.findIndex(answer => answer.correct) };
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
    $('review-summary').textContent = `Сейчас у тебя ${correctCount} правильных ответов из ${selectedQuiz.length}. Давай разберём подсказки и сыграем ещё раз.`;
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