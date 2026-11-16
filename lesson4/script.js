/* Урок 4: определения понятий, деление и классификация. */
const missions = [
    {
        icon: '📖', tag: 'МИССИЯ 1 · ОБЪЯСНИ СЛОВО', title: 'Что значит «дать определение»?',
        story: 'Мила спросила, что такое термометр. Профессор ответил: «Это прибор, которым измеряют температуру». Теперь Мила знает не только, как выглядит термометр, но и для чего он нужен. Хорошее объяснение помогает понять, о чём речь.',
        rule: '<strong>Определение</strong> — короткое объяснение, которое раскрывает важные признаки понятия. Оно помогает понять, что это за предмет и чем он отличается от похожих.',
        diagram: 'definition',
        question: 'Что лучше всего делает определение?',
        options: ['Объясняет важные признаки предмета', 'Рассказывает только, какого предмет цвета', 'Называет первое пришедшее в голову слово'], answer: 0,
        explain: 'Определение — это словесная подсказка о главном в предмете.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 2 · СОБЕРИ ОБЪЯСНЕНИЕ', title: 'Большая семья и особая примета',
        story: 'Чтобы объяснить, что такое велосипед, сначала назовём большую семью: это транспорт. Но самокат тоже транспорт. Добавим приметы, которые отличают велосипед: у него есть рама, два колеса и педали, которыми крутят, чтобы ехать. Так объяснение становится точнее.',
        rule: '<strong>Удобная схема:</strong> понятие = ближайшая большая группа + важное отличие. Например: «Велосипед — это транспорт с двумя колёсами и педалями». Для точного определения иногда нужно назвать несколько отличительных признаков.',
        diagram: 'definition',
        question: 'Какое объяснение лучше отличает велосипед от другого транспорта?',
        options: ['Велосипед — это транспорт.', 'Велосипед — это транспорт с двумя колёсами и педалями.', 'Велосипед — это красивая вещь.'], answer: 1,
        explain: 'Слово «транспорт» называет большую группу, а колёса и педали помогают уточнить, о каком виде транспорта речь.'
    },
    {
        icon: '⚖️', tag: 'МИССИЯ 3 · ПОПАДИ В ТОЧКУ', title: 'Не слишком широко и не тесно',
        story: 'Если сказать «квадрат — это фигура», подойдут круг и треугольник — объяснение слишком широкое. Если сказать «квадрат с синей стороной длиной три сантиметра», подойдёт не каждый квадрат — объяснение слишком узкое. Нужно, чтобы описание подходило всем квадратам и только квадратам.',
        rule: '<strong>Правило соразмерности:</strong> определение должно подходить ровно нужной группе — не захватывать лишнее и не пропускать подходящие предметы. Ищи примеры и проверяй: «Подходит ли всем? Не подходит ли кому-то лишнему?»',
        diagram: 'definition',
        question: 'Почему «квадрат — это фигура» плохое определение?',
        // ИСПРАВЛЕНО: показаны конкретные фигуры, которые тоже подходят под слишком широкое описание.
        options: ['Слишком широкое: под это описание подходят и круг, и треугольник, а не только квадрат', 'Слишком узкое: подходит только синему квадрату', 'Оно уже называет все стороны квадрата'], answer: 0,
        explain: 'Квадрат — фигура, но далеко не всякая фигура — квадрат. Нужны отличительные признаки.'
    },
    {
        icon: '🔍', tag: 'МИССИЯ 4 · НЕ ХОДИ ПО КРУГУ', title: 'Определи, не повторяя слово',
        story: 'Робот объяснил: «Смелость — это смелое поведение». Но если ты не знаешь слово «смелость», повторение слова «смелое» не поможет. А фраза «смелость — это когда не боишься ничего» тоже не всегда точна: смелый человек может бояться, но всё равно поступать правильно.',
        rule: '<strong>Не ходи по кругу:</strong> не объясняй слово через него же или почти такое же слово. <strong>Говори понятно:</strong> выбирай простые и точные слова. Хорошее объяснение должно добавлять полезную подсказку, а не прятать загадку в новых загадочных словах.',
        question: 'Какое объяснение НЕ повторяет слово и даёт подсказку?',
        options: ['Смелость — это быть смелым.', 'Смелость — это готовность сделать нужное, даже если немного страшно.', 'Смелость — это смелость.'], answer: 1,
        explain: 'В правильном варианте слово объясняется другими понятными словами.'
    },
    {
        icon: '💬', tag: 'МИССИЯ 5 · СЛОВО И ПРЕДМЕТ', title: 'Объясни название или вещь?',
        story: 'Иногда мы объясняем само слово: «метеоролог — слово о человеке, который изучает погоду и старается предсказать её». А иногда объясняем, что представляет собой предмет: «снежинка — маленький кристалл льда, который образуется в облаке». Это два похожих, но разных задания.',
        rule: '<strong>Объяснение слова</strong> рассказывает, что означает название. <strong>Определение понятия</strong> объясняет важные признаки предмета. Бывает и особое объяснение происхождения: например, как возникает радуга, когда солнечный свет проходит через капли воды.',
        question: 'Какое предложение объясняет само значение слова?',
        options: ['«Метеоролог» — так называют специалиста, который изучает погоду.', 'Снег сегодня лежит на крыше.', 'Дождь похож на серебряные ниточки.'], answer: 0,
        explain: 'Первое предложение объясняет, кого называют этим словом. Это объяснение названия.'
    },
    {
        icon: '🧰', tag: 'МИССИЯ 6 · ПОМОГИ ПОНЯТЬ', title: 'Если определения пока мало',
        story: 'Профессор рассказывает о неизвестной ракушке. Он может показать её, описать цвет и форму, назвать особые приметы, сравнить с улиткой или сказать, чем она от неё отличается. Такие приёмы помогают познакомиться с предметом, даже если короткого определения пока недостаточно.',
        rule: '<strong>Помогающие приёмы:</strong> показать предмет; описать несколько его примет; дать характеристику; сравнить с чем-то знакомым; указать отличие. Сравнение помогает представить, но не всегда является точным определением.',
        question: 'Что профессор делает, если говорит: «У этой ракушки спиральный завиток и полоски»?',
        options: ['Описывает её приметы', 'Делит её на части', 'Даёт ей новое имя'], answer: 0,
        explain: 'Описание перечисляет приметы предмета, чтобы слушателю было легче его представить.'
    },
    {
        icon: '🗂️', tag: 'МИССИЯ 7 · РАЗЛОЖИ ПО ГРУППАМ', title: 'Выбери одну мерку',
        story: 'В библиотеке решили разложить книги по цвету обложки. Тогда полка делится на книги с красной обложкой и книги без красной обложки. Если одновременно сортировать по цвету, толщине и первой букве, на полке начнётся путаница. Для одного деления нужна одна мерка.',
        rule: '<strong>Деление понятия</strong> — разделение большой группы на более узкие виды. <strong>Основание деления</strong> — признак, по которому делим. Выбери один понятный признак и не меняй его в середине сортировки.',
        diagram: 'division',
        question: 'Какое деление книг использует одно основание?',
        // ИСПРАВЛЕНО: дихотомия сформулирована естественно и явно охватывает все остальные цвета.
        options: ['По цвету обложки: с красной обложкой и с обложкой любого другого цвета', 'Красные, толстые и сказки', 'Красные, любимые и тяжёлые'], answer: 0,
        explain: 'Первый вариант делит по одному признаку — цвету обложки.'
    },
    {
        icon: '✅', tag: 'МИССИЯ 8 · ПРОВЕРЬ СОРТИРОВКУ', title: 'Все на месте, никто не потерялся',
        story: 'В коробке лежат карточки с многоугольниками — фигурами с прямыми сторонами. Разложим их по одной мерке — числу сторон: треугольники (три стороны) и многоугольники с четырьмя или более сторонами. Каждая карточка попадёт ровно в одну группу, и ни одна не потеряется.',
        rule: '<strong>Проверка деления:</strong> 1) охватили все предметы; 2) делили по одной мерке; 3) группы не пересекаются; 4) двигались шаг за шагом. Например: фигуры → многоугольники → треугольники, а не перепрыгивали сразу от всех фигур к треугольникам.',
        diagram: 'divisionShapes',
        question: 'Если забыли добавить одну подходящую группу, что случилось?',
        options: ['Деление стало неполным', 'Деление стало особенно точным', 'Ничего: потерянная группа не важна'], answer: 0,
        explain: 'При делении все предметы исходной группы должны найти своё место.'
    },
    {
        icon: '🌳', tag: 'МИССИЯ 9 · СОЗДАЙ ПОРЯДОК', title: 'Виды или части? И как назвать систему?',
        story: 'Все книги можно разделить на учебные и не учебные — это «да или всё остальное», такой способ зовут дихотомией. Но страницы и обложка — не виды книги, а её части. А когда группы связаны в понятную систему — например, живые существа, затем животные, затем птицы, — получается классификация.',
        rule: '<strong>Дихотомия</strong> делит выбранную группу на две части: «имеет признак» и «не имеет его». <strong>Классификация</strong> — упорядоченная система групп. В ней можно искать важные сходства или просто навести удобный порядок, например поставить книги по алфавиту.',
        diagram: 'parts',
        question: 'Что является частью книги, а не видом книги?',
        options: ['Обложка', 'Учебник', 'Сказка'], answer: 0,
        // ИСПРАВЛЕНО: прямо противопоставлены вопросы, на которые отвечают деление на виды и расчленение на части.
        explain: 'Деление на виды (учебник, сказка) отвечает на вопрос «какой это вид?». А расчленение на части (обложка, страницы) отвечает на вопрос «из чего это состоит?». Это две разные логические операции.'
    }
];

const quizQuestions = [
    { topic: 'Определение', q: 'Для чего нужно определение понятия?', a: ['Чтобы объяснить важные признаки предмета', 'Чтобы перечислить все его цвета', 'Чтобы придумать смешное прозвище'], correct: 0, why: 'Определение коротко объясняет, что это за предмет и чем он отличается.' },
    { topic: 'Род и отличие', q: 'Как точнее объяснить, что такое велосипед?', a: ['Это транспорт с двумя колёсами и педалями.', 'Это вещь.', 'Это красивый предмет.'], correct: 0, why: 'Большая группа «транспорт» и отличительные признаки вместе дают более точную подсказку.' },
    { topic: 'Соразмерность', q: 'Почему «кошка — это животное» недостаточно точно?', a: ['Слишком широко: животными бывают и другие существа', 'Слишком узко: подходит только одной кошке', 'Потому что кошка не может быть животным'], correct: 0, why: 'Определение должно отличать нужную группу от других животных.' },
    { topic: 'Не ходи по кругу', q: 'Какое объяснение слова «радостный» повторяет то же слово?', a: ['Радостный — это тот, кто испытывает радость.', 'Радостный — это радостный.', 'Радостный — это тот, кто веселится.'], correct: 1, why: 'Повторение того же слова не даёт новой подсказки.' },
    { topic: 'Ясное объяснение', q: 'Что лучше для понятного определения?', a: ['Простые точные слова', 'Сложные слова, которых никто не знает', 'Загадочное сравнение без объяснения'], correct: 0, why: 'Определение должно быть ясным для того, кто хочет понять слово.' },
    { topic: 'Слово и понятие', q: 'Что делает объяснение «Орнитолог — учёный, который изучает птиц»?', a: ['Объясняет значение слова «орнитолог»', 'Делит птиц на части', 'Описывает одну конкретную птицу'], correct: 0, why: 'Фраза объясняет, кого называют этим словом.' },
    { topic: 'Вспомогательные приёмы', q: '«У ракушки острый кончик и коричневые полоски». Что это?', a: ['Описание примет', 'Дихотомия', 'Определение через круг'], correct: 0, why: 'Описание перечисляет заметные признаки предмета.' },
    { topic: 'Деление', q: 'Как называется признак, по которому разделяют группу?', a: ['Основание деления', 'Обложка', 'Случайный ответ'], correct: 0, why: 'Основание деления — это выбранная мерка, например цвет или размер.' },
    { topic: 'Одно основание', q: 'Какое деление использует одну мерку?', a: ['Игрушки деревянные и не деревянные', 'Игрушки деревянные, большие и любимые', 'Игрушки яркие, куклы и тяжёлые'], correct: 0, why: 'В первом примере одна мерка — сделана игрушка из дерева или нет.' },
    { topic: 'Полное деление', q: 'Что важно при делении всех открыток в коробке?', a: ['Чтобы каждая открытка попала в какую-нибудь группу', 'Чтобы несколько открыток потерялись', 'Чтобы одна открытка была сразу во всех группах'], correct: 0, why: 'Группы вместе должны охватывать все предметы исходной группы.' },
    { topic: 'Дихотомия', q: 'Как выглядит деление «есть признак / нет признака»?', a: ['Две группы: с признаком и без него', 'Много несвязанных групп', 'Перечень частей одного предмета'], correct: 0, why: 'Дихотомия делит выбранную группу на две: предметы с признаком и без него.' },
    { topic: 'Виды и части', q: 'Что является частью велосипеда, а не его видом?', a: ['Руль', 'Горный велосипед', 'Детский велосипед'], correct: 0, why: 'Руль — деталь велосипеда, а горный и детский велосипеды — его виды.' },
    { topic: 'Классификация', q: 'Что такое классификация?', a: ['Система групп, устроенная по выбранным признакам', 'Случайная куча предметов', 'Имя одного предмета'], correct: 0, why: 'Классификация помогает расположить группы в понятном порядке.' },
    { topic: 'Порядок по важному признаку', q: 'Как удобнее разделить животных на настоящие группы видов?', a: ['По важным общим признакам животных', 'По тому, кто кажется красивее', 'По цвету карточек, на которых они нарисованы'], correct: 0, why: 'Важные признаки помогают увидеть, чем группы животных похожи и отличаются.' },
    { topic: 'Удобная сортировка', q: 'Почему книги часто ставят по алфавиту?', a: ['Так проще найти книгу по названию или фамилии', 'Первая буква рассказывает, из чего сделана книга', 'Так книги становятся разными видами бумаги'], correct: 0, why: 'Алфавит — удобная условная мерка для поиска, хотя она не описывает содержание книги.' },
    { topic: 'Не перепутай', q: 'Колесо и велосипед — это…', a: ['Часть и целое', 'Два вида велосипедов', 'Два одинаковых названия'], correct: 0, why: 'Колесо составляет часть велосипеда, а не является его разновидностью.' },
    { topic: 'Проверь определение', q: 'Как проверить, не слишком ли узкое определение?', a: ['Подходит ли оно всем предметам, которые мы объясняем', 'Достаточно ли в нём длинных слов', 'Есть ли в нём название цвета'], correct: 0, why: 'Точное определение должно подходить всей нужной группе, а не одному частному примеру.' },
    { topic: 'Определение и сравнение', q: '«Луна — фонарик ночного неба». Это точное определение?', a: ['Нет, это образное сравнение', 'Да, фонарик — ближайшая группа Луны', 'Да, Луна сделана из фонарей'], correct: 0, why: 'Красивое сравнение помогает представить, но не сообщает точные признаки Луны.' }
];

const stages = [
    { id: 'mission-0', label: 'Определение' }, { id: 'mission-1', label: 'Формула' },
    { id: 'mission-2', label: 'Соразмерность' }, { id: 'mission-3', label: 'Ясность' },
    { id: 'mission-4', label: 'Слово и вещь' }, { id: 'mission-5', label: 'Приметы' },
    { id: 'mission-6', label: 'Основание' }, { id: 'mission-7', label: 'Проверка' },
    { id: 'mission-8', label: 'Система' }, { id: 'quiz', label: 'Большая игра' }
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
        $('mission-next').textContent = result.correct
            ? (missionIndex === missions.length - 1 ? 'К большой игре!' : 'Следующая миссия')
            : 'Выбери правильный ответ';
    }, true);
    showScreen('mission-screen');
}

function renderDiagram(type) {
    const slot = $('mission-diagram');
    slot.innerHTML = '';
    slot.classList.toggle('is-hidden', !type);
    if (!type) return;

    const diagrams = {
        definition: '<p class="diagram-title">Подсказка для определения</p><div class="definition-formula" role="img" aria-label="Понятие объясняем через ближайшую большую группу и отличие от других предметов этой группы"><span class="formula-piece">Ближайшая большая группа</span><span class="formula-sign">+</span><span class="formula-piece">Чем отличается</span></div><p class="diagram-caption">Например: велосипед = транспорт + два колеса и педали.</p>',
        division: '<p class="diagram-title">Одна мерка — две непересекающиеся группы</p><div class="sort-row" role="img" aria-label="Книги поделены по одному признаку: красная обложка и обложка не красная"><span class="sort-chip group-a">Красная обложка</span><span class="sort-chip group-b">Не красная</span></div><p class="diagram-caption">Все книги должны найти место; каждую сортируем по цвету обложки.</p>',
        divisionShapes: '<p class="diagram-title">Многоугольники делим по числу сторон</p><div class="sort-row" role="img" aria-label="Многоугольники поделены по числу сторон на треугольники и многоугольники с четырьмя или более сторонами"><span class="sort-chip group-a">△ Три стороны</span><span class="sort-chip group-b">▱ Четыре или больше</span></div><p class="diagram-caption">Это две группы без пропусков и пересечений.</p>',
        parts: '<p class="diagram-title">Части — не виды</p><div class="parts-line" role="img" aria-label="Велосипед состоит из частей: руля, рамы и колёс"><span class="parts-whole">Велосипед</span><span class="formula-sign">состоит из</span><span class="parts-piece">руля</span><span class="parts-piece">рамы</span><span class="parts-piece">колёс</span></div><p class="diagram-caption">У велосипеда есть части. А детский и горный велосипед — это виды.</p>'
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
            if (answered) return;
            const correct = index === correctIndex;
            button.classList.add(correct ? 'answer-correct' : 'answer-wrong');
            if (!correct && retryOnWrong) {
                button.disabled = true;
            } else {
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
