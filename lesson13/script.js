/* Большая логическая экспедиция — финальный маршрут по понятиям, суждениям и умозаключениям. // ИСПРАВЛЕНО: усиление финального акцента */
const missions = [
    {
        icon: '🧺', tag: 'ОСТАНОВКА 1 · ПОНЯТИЯ', title: 'Признаки и целая группа',
        story: 'На табличке написано «красный карандаш». Чтобы предмет был красным карандашом, он должен быть карандашом и иметь красный цвет. А объём этого понятия — все предметы, которые подходят под оба признака: красные карандаши.',
        rule: '<strong>Понятие</strong> — мысль о предметах или явлениях по их существенным признакам. <strong>Содержание</strong> понятия — существенные признаки; <strong>объём</strong> — все предметы, к которым понятие подходит. В простом примере «красный карандаш» мы проверяем два признака. Если добавить отличительный признак, объём обычно становится уже: красные карандаши — часть всех карандашей.',
        diagram: 'content', question: 'Что называют объёмом понятия «красный карандаш»?',
        options: ['Все предметы, которые являются красными карандашами', 'Только слово «красный»', 'Все красные предметы, даже не карандаши'], answer: 0,
        explain: 'Объём — это предметы, к которым относится понятие. Красные мячи не входят в объём понятия «красный карандаш».'
    },
    {
        icon: '🔎', tag: 'ОСТАНОВКА 1 · ПОНЯТИЯ', title: 'Уже или шире?',
        story: 'Представь полку с книгами. «Книга» — большая группа. «Сказочная книга» — группа уже: каждая такая книга является книгой, но не каждая книга сказочная. Добавляя признак, мы ограничиваем понятие; убирая признак — обобщаем.',
        rule: '<strong>Ограничение:</strong> понятие + отличительный признак → более узкое понятие. <strong>Обобщение:</strong> убираем признак → более широкое понятие. Например: «животное → домашнее животное» — ограничение; «домашнее животное → животное» — обобщение. Нельзя менять предмет разговора на просто похожий.',
        diagram: 'limit', question: 'Как ограничить понятие «птица»?',
        options: ['Добавить признак: «водоплавающая птица»', 'Убрать признаки и сказать «живое существо»', 'Назвать отдельный предмет: «мой рюкзак»'], answer: 0,
        explain: '«Водоплавающая птица» — более узкая группа внутри всех птиц. «Живое существо» — наоборот, более широкое понятие.'
    },
    {
        icon: '⭕', tag: 'ОСТАНОВКА 1 · ПОНЯТИЯ', title: 'Две группы с общей частью',
        story: 'В классе есть школьники, которые занимаются спортом, и есть спортсмены, которые уже не учатся в школе. Есть и другие школьники, не занимающиеся спортом. Значит, группы пересекаются: у них есть общая часть, но они не одинаковы.',
        rule: '<strong>Пересекающиеся понятия</strong> имеют часть общих предметов, но в каждом есть и такие, которых нет в другом. На диаграмме Венна круги обозначают объёмы понятий, а перекрытие — общие предметы. Круги не показывают точное количество и не означают, что вся одна группа входит в другую.',
        diagram: 'venn', question: 'Что обозначает общая часть кругов «школьники» и «спортсмены»?',
        options: ['Школьников, которые занимаются спортом', 'Всех школьников и всех спортсменов сразу', 'Тех, кто не является ни школьником, ни спортсменом'], answer: 0,
        explain: 'Пересечение — это предметы, которые подходят обоим понятиям одновременно: здесь школьники-спортсмены.'
    },
    {
        icon: '🧩', tag: 'ОСТАНОВКА 1 · ПОНЯТИЯ', title: 'Определяем и делим по правилу',
        story: 'В игре спутали три карточки: «квадрат — четырёхугольник с четырьмя равными сторонами и четырьмя прямыми углами», «каждый треугольник по углам бывает остроугольным, прямоугольным или тупоугольным», «дом состоит из крыши и стен». Первые две объясняют понятия и виды, третья называет части дома.',
        rule: '<strong>Определение</strong> объясняет значение понятия через важные признаки. <strong>Деление</strong> распределяет объём одного понятия на виды. Делить нужно по одному основанию; виды должны быть взаимно исключающими и вместе охватывать весь объём. Не подменяй виды частями предмета. Формула проверки: <strong>одно основание + виды без пропусков и пересечений</strong>.',
        diagram: 'division', question: 'Какое предложение делит понятие на виды, а не на части?',
        options: ['Каждый треугольник по углам бывает остроугольным, прямоугольным или тупоугольным', 'Дом состоит из крыши и стен', 'У велосипеда есть руль и колёса'], answer: 0,
        explain: 'Треугольники распределены по одному основанию — виду углов. Крыша, стены, руль и колёса — части предметов, а не виды домов или велосипедов.'
    },
    {
        icon: '💬', tag: 'ОСТАНОВКА 2 · СУЖДЕНИЯ', title: 'Мысль, которую можно проверить',
        story: '«На столе лежит мяч» можно проверить: это утверждение бывает истинным или ложным. «Положи мяч на стол!» — просьба, а «Где мяч?» — вопрос. Они сами по себе ничего не утверждают и не отрицают.',
        rule: '<strong>Суждение</strong> — мысль, в которой что-то утверждают или отрицают. Суждение можно оценить как истинное или ложное. Вопрос, просьба или восклицание не становятся суждением, пока не сообщают утверждение. Само наличие суждения не гарантирует, что оно истинно.',
        diagram: 'judgment', question: 'Какое предложение является суждением?',
        options: ['В коробке лежат три кубика', 'Сколько кубиков в коробке?', 'Достань кубики, пожалуйста'], answer: 0,
        explain: 'Первое предложение сообщает факт, который можно проверить. Второе спрашивает, третье просит.'
    },
    {
        icon: '🪜', tag: 'ОСТАНОВКА 3 · УМОЗАКЛЮЧЕНИЯ', title: 'Вывод по двум подсказкам',
        story: 'На карточках написано: «Все квадраты — прямоугольники» и «Эта фигура — квадрат». Можно соединить подсказки: если каждый квадрат — прямоугольник и наша фигура — квадрат, то наша фигура — прямоугольник.',
        rule: '<strong>Умозаключение</strong> — переход от одного или нескольких суждений к новому суждению. Пример: «Все A — B; x — A; значит, x — B». Такой вывод работает, если обе посылки верны и слово обозначает одно и то же. Не переворачивай первое условие: из «все квадраты — прямоугольники» не следует, что все прямоугольники — квадраты.',
        diagram: 'syllogism', question: 'Что следует из двух карточек о квадратах?',
        options: ['Эта фигура — прямоугольник', 'Все прямоугольники — квадраты', 'Фигура обязательно синяя'], answer: 0,
        explain: 'Фигура относится к квадратам, а каждый квадрат — к прямоугольникам. Обратного правила и сведений о цвете нет.'
    },
    {
        icon: '🚦', tag: 'ОСТАНОВКА 3 · УМОЗАКЛЮЧЕНИЯ', title: 'Не переворачивай стрелку',
        story: 'Если идёт дождь, дорожка может стать мокрой. Но дорожку могли полить, и тогда она тоже мокрая. Поэтому наблюдение мокрой дорожки само по себе не доказывает, что шёл дождь.',
        rule: 'Если в условии сказано «если A, то B», а мы увидели B, нельзя автоматически заключить A: у B могут быть другие причины. Схема ошибки: <strong>A → B; B; значит, A</strong> — вывод не гарантирован. В классической логике верен ход: <strong>A → B; не B; значит, не A</strong>. В жизни важно также проверить, насколько надёжна сама связь A → B.',
        diagram: 'arrow', question: 'Дорожка мокрая. Можно ли точно заключить, что шёл дождь?',
        options: ['Нет: дорожку могли полить', 'Да: мокрая дорожка всегда бывает только после дождя', 'Да: это доказывает, что дождь идёт сейчас'], answer: 0,
        explain: 'Один результат может иметь разные причины. Мокрота не доказывает именно дождь.'
    },
    {
        icon: '🧭', tag: 'ОСТАНОВКА 3 · УМОЗАКЛЮЧЕНИЯ', title: 'Когда данных пока мало',
        story: 'На столе нашли блестящую пуговицу. Кто-то говорит: «Значит, она золотая». Но блестеть могут пластик, стекло и разные металлы. Чтобы узнать материал, нужно проверить его подходящим способом, а не выбирать первое объяснение.',
        // ИСПРАВЛЕНО: усиление финального акцента.
        rule: 'Хороший вывод должен следовать из посылок. Похожесть или один признак могут подсказать догадку, но не всегда доказывают её. Если несколько вариантов подходят, честный ответ — <strong>«пока недостаточно данных»</strong>. Сказать «я пока не знаю, нужно проверить» — это не ошибка, а признак настоящего исследователя, который не выдаёт догадку за факт.',
        diagram: 'evidence', question: 'Что можно точно заключить только по блеску пуговицы?',
        options: ['Она блестит, но материал пока неизвестен', 'Она точно сделана из золота', 'Она точно сделана из стекла'], answer: 0,
        explain: 'Блеск — наблюдаемый признак, но его недостаточно, чтобы установить материал.'
    }
];

const quizQuestions = [
    { topic: 'Содержание и объём', q: 'Что входит в объём понятия «жёлтая груша»?', a: ['Все предметы, которые являются жёлтыми грушами', 'Все жёлтые предметы', 'Все фрукты, даже не груши'], correct: 0, why: 'В объём входят только предметы, подходящие под всё понятие целиком.' },
    { topic: 'Ограничение', q: 'Какое понятие уже, чем «дерево»?', a: ['Яблоня', 'Растение', 'Природа'], correct: 0, why: 'Яблоня — вид дерева, а растение и природа охватывают более широкие группы.' },
    { topic: 'Обобщение', q: 'Как обобщить понятие «рыжий котёнок»?', a: ['Котёнок', 'Рыжий котёнок с белыми лапами', 'Мой котёнок Барсик'], correct: 0, why: 'Если убрать признак «рыжий», получим более широкое понятие «котёнок».' },
    { topic: 'Пересечение', q: 'У Саши есть школьники и дети, которые играют в шахматы. Что означает пересечение этих групп?', a: ['Школьники, которые играют в шахматы', 'Все школьники без исключения', 'Шахматные доски'], correct: 0, why: 'В общей части находятся те, кто подходит обоим понятиям.' },
    { topic: 'Определение', q: 'Какое предложение лучше объясняет, что такое квадрат?', a: ['Четырёхугольник с четырьмя равными сторонами и прямыми углами', 'Фигура, которая мне нравится', 'Очень красивый предмет'], correct: 0, why: 'Определение называет существенные признаки, а не личную оценку.' },
    { topic: 'Деление', q: 'Как правильно разделить все треугольники на виды по углам?', a: ['На остроугольные, прямоугольные и тупоугольные', 'На красные, большие и красивые', 'На стороны, вершины и углы'], correct: 0, why: 'У каждого треугольника по углам ровно один из этих видов; стороны и вершины — части фигуры.' },
    { topic: 'Суждение', q: 'Какое предложение можно проверить как истинное или ложное?', a: ['Снег белый', 'Какого цвета снег?', 'Посмотри на снег!'], correct: 0, why: '«Снег белый» — утверждение, то есть суждение.' },
    { topic: 'Умозаключение', q: 'Все яблоки — фрукты. Это красное яблоко — яблоко. Что следует?', a: ['Это красное яблоко — фрукт', 'Все фрукты — яблоки', 'Все яблоки красные'], correct: 0, why: 'Предмет входит в группу яблок, которая входит в группу фруктов.' },
    { topic: 'Направление вывода', q: 'Все кошки — животные. Пушистый зверёк — животное. Известно ли, что это кошка?', a: ['Нет: животными бывают и другие звери', 'Да: всякое животное — кошка', 'Да: пушистость доказывает, что это кошка'], correct: 0, why: 'Нельзя перевернуть отношение: не все животные — кошки.' },
    { topic: 'Условный вывод', q: 'В этой задаче лампа всегда загорается, если нажать выключатель. Лампа не загорелась. Что следует?', a: ['Выключатель не нажали', 'Выключатель точно нажали', 'Лампа точно сломана'], correct: 0, why: 'По условию нажатый выключатель всегда зажигает лампу. Раз лампа не загорелась, выключатель не нажимали. В жизни отдельно проверяют, верно ли само условие.' },
    { topic: 'Обратный ход', q: 'Если идёт дождь, улица мокрая. Улица мокрая. Что верно?', a: ['Дождь не доказан: улицу могли помыть', 'Дождь точно идёт', 'Дождь точно уже закончился'], correct: 0, why: 'Из результата не всегда можно узнать единственную причину.' },
    { topic: 'Истинность', q: 'Все рыбки в аквариуме полосатые. Что нужно сделать, чтобы проверить это утверждение?', a: ['Посмотреть на каждую рыбку в этом аквариуме', 'Посмотреть на цвет самого аквариума', 'Узнать, кто купил рыбок'], correct: 0, why: 'Проверяем именно все предметы указанной группы.' },
    { topic: 'Достаточность данных', q: 'Пуговица блестит. Что из этого следует?', a: ['Она блестит; материал без проверки неизвестен', 'Она обязательно золотая', 'Она обязательно пластиковая'], correct: 0, why: 'Один признак не всегда позволяет установить причину или материал.' },
    { topic: 'Деление и части', q: '«У велосипеда есть руль, рама и колёса» — это…', a: ['Перечень частей велосипеда', 'Деление велосипедов на виды', 'Определение каждого велосипеда'], correct: 0, why: 'Руль, рама и колёса — части одного предмета, а не виды велосипедов.' },
    { topic: 'Проверка посылок', q: 'Чтобы вывод был надёжным, нужно…', a: ['Проверить посылки и убедиться, что вывод следует из них', 'Выбрать самый быстрый ответ', 'Повторить вывод несколько раз'], correct: 0, why: 'Нужны верные основания и правильная логическая связь.' },
    { topic: 'Неизвестное', q: 'Если данных недостаточно, какой ответ самый честный?', a: ['«Пока нельзя определить»', 'Любой ответ, который звучит уверенно', 'Всегда противоположное утверждение'], correct: 0, why: 'Неопределённость — правильный ответ, когда данных не хватает.' }
];

const stages = [
    { id: 'mission-0', label: 'Понятия' }, { id: 'mission-1', label: 'Уже и шире' },
    { id: 'mission-2', label: 'Пересечение' }, { id: 'mission-3', label: 'Определение' },
    { id: 'mission-4', label: 'Суждения' }, { id: 'mission-5', label: 'Вывод' },
    { id: 'mission-6', label: 'Условие' }, { id: 'mission-7', label: 'Проверка' },
    { id: 'quiz', label: 'Финиш' }
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
            ? (missionIndex === missions.length - 1 ? 'На финишный маршрут!' : 'Дальше')
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
        content: '<p class="diagram-title">Содержание — признаки, объём — предметы</p><div class="concept-pair"><div class="concept-card"><strong>Содержание</strong><span>карандаш + красный</span></div><span class="concept-arrow">↓ подходит к</span><div class="concept-card concept-result"><strong>Объём</strong><span>все красные карандаши</span></div></div><p class="diagram-caption">Красный мяч подходит только к признаку «красный», но не ко всему понятию.</p>',
        limit: '<p class="diagram-title">Признак делает группу уже</p><div class="concept-ladder"><div class="concept-card">Живое существо</div><span>→ уже</span><div class="concept-card">Птица</div><span>→ ещё уже</span><div class="concept-card concept-result">Водоплавающая птица</div></div><p class="diagram-caption">Каждая следующая группа находится внутри более широкой.</p>',
        venn: '<p class="diagram-title">Пересечение двух объёмов</p><svg class="venn-diagram mini-venn" viewBox="0 0 500 250" role="img" aria-label="Круги школьники и спортсмены пересекаются; общая часть — школьники, занимающиеся спортом"><circle cx="190" cy="135" r="86" fill="#85c9ff" fill-opacity=".62" stroke="#3d89c7" stroke-width="4"></circle><circle cx="310" cy="135" r="86" fill="#ffb875" fill-opacity=".62" stroke="#d98943" stroke-width="4"></circle><text x="145" y="72" text-anchor="middle" class="venn-label">Школьники</text><text x="355" y="72" text-anchor="middle" class="venn-label">Спортсмены</text><text x="250" y="141" text-anchor="middle" class="venn-shared">Общие</text></svg><p class="diagram-caption">Перекрытие — те, кто подходит обоим понятиям.</p>',
        division: '<p class="diagram-title">Виды — не то же самое, что части</p><div class="division-columns"><div><strong>Виды треугольников по углам</strong><span>Остроугольный</span><span>Прямоугольный</span><span>Тупоугольный</span></div><div class="not-division"><strong>Части дома</strong><span>Крыша</span><span>Стены</span><span>Окна</span></div></div><p class="diagram-caption">Слева классификация по одному основанию: у каждого треугольника ровно один из этих видов. Справа перечислены части одного дома.</p>',
        judgment: '<p class="diagram-title">Сообщение, вопрос или просьба?</p><div class="speech-examples"><div class="example-good"><strong>Суждение ✓</strong><span>«В коробке три кубика»</span><small>Можно проверить</small></div><div><strong>Вопрос ?</strong><span>«Сколько кубиков?»</span><small>Спрашивает</small></div><div><strong>Просьба →</strong><span>«Достань кубики»</span><small>Побуждает</small></div></div>',
        syllogism: '<p class="diagram-title">Две посылки соединяются в вывод</p><div class="argument-stack"><div class="argument-chip">Все квадраты — прямоугольники</div><div class="argument-chip">Эта фигура — квадрат</div><div class="argument-arrow">↓ значит</div><div class="argument-chip conclusion">Эта фигура — прямоугольник</div></div><p class="diagram-caption">Предмет входит в группу квадратов, а квадраты входят в группу прямоугольников.</p>',
        arrow: '<p class="diagram-title">Следствие не всегда раскрывает причину</p><div class="conditional-row"><div class="condition-box">Дождь</div><span>→ может сделать</span><div class="condition-box">Мокрую дорожку</div></div><div class="other-cause">Но дорожку ещё могли полить 💧</div><p class="diagram-caption">Один результат может иметь несколько причин: мокрая дорожка не доказывает дождь.</p>',
        evidence: '<p class="diagram-title">Отдели наблюдение от догадки</p><div class="evidence-flow"><div class="evidence-card"><strong>Наблюдение</strong><span>Пуговица блестит</span></div><span class="concept-arrow">не доказывает</span><div class="evidence-card unknown"><strong>Пока неизвестно</strong><span>Из чего она сделана?</span></div></div><p class="diagram-caption">Блеск — факт о внешнем виде, но не надёжная проверка материала.</p>'
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
    const result = window.CourseProgress.recordResult(13, { passed, mistakes: mistakes.length, score: correctCount, totalQuestions: selectedQuiz.length });
    if (passed) {
        window.CourseProgress.renderAward($('success-screen'), result, result.medalImproved);
        $('final-score').textContent = `Ты набрал(а) ${correctCount} из ${selectedQuiz.length} звёзд.`;
        showScreen('success-screen');
        return;
    }
    $('review-summary').textContent = `Правильных ответов: ${correctCount} из ${selectedQuiz.length}. Повтори памятку и попробуй финальную проверку ещё раз.`;
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
