/* Урок 12: доказательство, его части, правила и опровержение. */
const missions = [
    {
        icon: '🕵️', tag: 'МИССИЯ 1 · НАЙДИ ДОКАЗАТЕЛЬСТВО', title: 'Не просто «я так думаю»',
        story: 'На столе стоит мокрый стакан. Соня говорит: «В стакане был лёд: на стенках появились капли, когда лёд растаял». Она не просто высказала догадку — она привела наблюдение и связала его с ответом. В логике слово «доказательство» означает именно обоснование мысли рассуждением.',
        rule: '<strong>Логическое доказательство</strong> — рассуждение, в котором истинность одной мысли обосновывают другими надёжными мыслями. Важно не только перечислить сведения, но и объяснить, как они поддерживают ответ. В обычной речи «доказательством» могут также назвать улику или документ — это другое значение слова.',
        diagram: 'meaning', question: 'Что делает Соня, когда объясняет, почему думает, что лёд растаял?',
        options: ['Обосновывает свою мысль наблюдением и рассуждением', 'Просто повторяет своё мнение', 'Доказывает, что всякий мокрый стакан был со льдом'], answer: 0,
        explain: 'Соня приводит наблюдение как основание. Но один мокрый стакан сам по себе ещё не доказывает, что в нём обязательно был лёд: могла пролиться вода. Нужны достаточные улики.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 2 · ТРИ ЧАСТИ', title: 'Тезис, основания и дорожка мысли',
        story: 'Профессор говорит: «Этот четырёхугольник — квадрат». Это тезис — ответ, который нужно обосновать. Он добавляет: «У фигуры четыре равные стороны и четыре прямых угла». А затем объясняет: «По определению квадрата такая фигура и есть квадрат». Тут есть и основания, и связующее рассуждение.',
        rule: '<strong>Тезис</strong> — мысль, которую доказываем. <strong>Основания</strong> (доводы, аргументы) — проверенные сведения в её поддержку. <strong>Способ доказательства</strong> — понятный ход мысли, который связывает основания с тезисом. Учебная схема: <strong>надёжные основания + логическая связь → тезис</strong>. Это схема частей, а не волшебная формула: основания должны действительно подходить.',
        diagram: 'parts', question: 'Как называется мысль, которую мы хотим доказать?',
        options: ['Тезис', 'Основание', 'Случайный пример'], answer: 0,
        explain: 'Тезис — это главный ответ расследования. Основания — сведения, которые помогают этот ответ обосновать.'
    },
    {
        icon: '➡️', tag: 'МИССИЯ 3 · ПРЯМОЙ ПУТЬ', title: 'Когда основания ведут прямо к ответу',
        story: 'В задаче сказано: «Все фигуры в синей коробке — треугольники. Фигура Аля взяла из синей коробки одну фигуру». Значит, фигура Аля — треугольник. Здесь вывод сразу следует из двух данных условий — не нужно сперва отвергать другую догадку.',
        rule: '<strong>Прямое доказательство</strong> — основания непосредственно поддерживают тезис. Пример-схема: «Все предметы группы имеют признак P. Этот предмет принадлежит группе. Значит, у него есть P». Проверяй оба основания: если условие задачи не говорит, что предмет взят из коробки, вывод делать нельзя.',
        diagram: 'direct', question: 'Какой вывод прямо следует из условий задачи?',
        options: ['Фигура из синей коробки — треугольник', 'Все треугольники лежат в синей коробке', 'Синяя коробка больше остальных'], answer: 0,
        explain: 'Условие говорит, что все фигуры внутри коробки — треугольники, а фигура взята именно оттуда. Обратное утверждение про все треугольники из условия не следует.'
    },
    {
        icon: '🧪', tag: 'МИССИЯ 4 · ПРОВЕРЬ ОСНОВАНИЯ', title: 'Верно — ещё не значит достаточно',
        story: 'Миша хочет доказать, что его бумажный самолётик долетел до синей стены. Он говорит: «Самолётик был синим!» Это может быть правдой, но цвет не показывает, куда самолётик долетел. Нужна улика, связанная именно с местом приземления, например наблюдение очевидца или запись полёта.',
        rule: 'Основания должны быть <strong>надёжными и достаточными</strong>: правдивыми, относящимися к вопросу и такими, чтобы тезис действительно следовал из них. Истинный, но посторонний факт — не доказательство этого тезиса. Не путай «довод верен» и «довод доказывает ответ».',
        diagram: 'relevant', question: 'Почему цвет самолётика не доказывает, где он приземлился?',
        options: ['Цвет не связан с местом приземления', 'Синий самолётик не может летать', 'Цвет всегда бывает неверным'], answer: 0,
        explain: 'Довод может быть истинным, но недостаточным. Чтобы доказать место посадки, нужна улика именно о полёте или месте.'
    },
    {
        icon: '🎯', tag: 'МИССИЯ 5 · ДЕРЖИСЬ ТЕЗИСА', title: 'Не меняй вопрос на полпути',
        story: 'Лена хочет доказать: «В этой книге есть красивые картинки». Она показывает, что книга толстая. Толщина может быть верной, но это другой вопрос. Если она незаметно начнёт доказывать, что книга интересная, она тоже сменит тезис.',
        rule: 'Тезис должен быть <strong>ясным и оставаться тем же самым</strong> на протяжении доказательства. Не подменяй его похожим или более удобным утверждением. Сначала спроси: «Какой именно ответ мы проверяем?» Потом сравнивай с ним каждый довод.',
        diagram: 'thesis', question: 'Лена доказывает, что в книге красивые картинки. Что не так с доводом «книга толстая»?',
        options: ['Он не отвечает на вопрос о картинках', 'Он автоматически доказывает, что картинки некрасивые', 'Толстые книги не бывают с картинками'], answer: 0,
        explain: 'Толщина и красота картинок — разные свойства. Довод не поддерживает выбранный тезис.'
    },
    {
        icon: '🔁', tag: 'МИССИЯ 6 · НЕ ХОДИ ПО КРУГУ', title: 'Ответ не может доказывать сам себя',
        story: 'Робот объяснил: «Эта коробка надёжная, потому что ей можно доверять. А ей можно доверять, потому что она надёжная». Мы ходим по кругу: новых сведений не появилось. Нужны независимые проверки — например, испытание прочности или надёжная инструкция.',
        rule: '<strong>Порочный круг</strong> — ошибка, когда тезис обосновывают доводом, который сам зависит от этого же тезиса. Проверяй: откуда мы независимо знаем, что довод верен? Если единственный ответ — «потому что тезис верен», доказательства пока нет.',
        diagram: 'circle', question: 'Как лучше проверить, крепкая ли коробка?',
        options: ['Посмотреть результаты испытаний или проверить её безопасным способом', 'Сказать: «Она крепкая, потому что крепкая»', 'Спросить ту же коробку, надёжная ли она'], answer: 0,
        explain: 'Независимое испытание даст новое основание, а повторение той же мысли по кругу — нет.'
    },
    {
        icon: '🛤️', tag: 'МИССИЯ 7 · КОСВЕННЫЙ ПУТЬ', title: 'Проверяем варианты один за другим',
        story: 'В загадке сказано: приз спрятан ровно в одном из трёх ящиков — красном, синем или жёлтом. Мы проверили красный и синий: они пусты. Значит, приз в жёлтом. Мы исключили остальные варианты, но только потому, что список был полным и приз точно находился в одном ящике.',
        // ИСПРАВЛЕНО: уточнение видов доказательства.
        rule: '<strong>Косвенное доказательство</strong> — это путь к ответу не напрямую. Иногда мы доказываем, перебирая все варианты до одного, как с ящиками: если список полный и все остальные варианты исключены, остаётся последний. А иногда доказываем «от противного»: временно предполагаем обратное и показываем, что это приводит к невозможному или противоречию. Это два разных способа рассуждать.',
        diagram: 'indirect', question: 'Почему можно заключить, что приз в жёлтом ящике?',
        options: ['Список из трёх ящиков полный, и два других проверены', 'Жёлтый цвет чаще приносит удачу', 'Два пустых ящика доказывают, что призов нигде нет'], answer: 0,
        explain: 'Вывод работает благодаря двум условиям: приз точно в одном из этих трёх ящиков, и красный с синим проверены. Без полного списка жёлтый вывод не гарантирован.'
    },
    {
        icon: '🧯', tag: 'МИССИЯ 8 · ЧЕСТНОЕ ОПРОВЕРЖЕНИЕ', title: 'Опровергни мысль, а не человека',
        story: 'Петя говорит: «Все бумажные лодочки плавают». Аня находит бумажную лодочку, которая намокла и утонула. Это один подходящий контрпример к слову «все». Но если Аня скажет: «Петя ошибся, потому что он маленький», она не проверит саму мысль.',
        rule: '<strong>Опровержение</strong> — обоснование того, что тезис неверен или что доводы его не подтверждают. Универсальное утверждение («все такие предметы…») достаточно проверить на контрпример: один случай не подходит — и слово «все» опровергнуто. Критикуй высказывание и его доводы, а не личные качества говорящего.',
        diagram: 'refute', question: 'Что является контрпримером к фразе «Все бумажные лодочки плавают»?',
        options: ['Одна бумажная лодочка, которая утонула', 'Бумажная лодочка другого цвета', 'Мнение о том, что Петя часто ошибается'], answer: 0,
        // ИСПРАВЛЕНО: уточнение видов доказательства.
        explain: 'Контрпример относится к самой фразе «все»: достаточно одной бумажной лодочки, которая не плавает. Мы проверяем саму мысль и факты, а не обсуждаем того, кто её высказал.'
    }
];

const quizQuestions = [
    { topic: 'Три части', q: 'Как называется мысль, истинность которой доказывают?', a: ['Тезис', 'Основание', 'Пример'], correct: 0, why: 'Тезис — это положение, которое мы хотим обосновать.' },
    { topic: 'Основания', q: 'Какими должны быть основания хорошего доказательства?', a: ['Надёжными и достаточными для тезиса', 'Любопытными, даже если не относятся к вопросу', 'Повторяющими тезис другими словами'], correct: 0, why: 'Основания должны быть правдивыми, относиться к тезису и действительно поддерживать его.' },
    { topic: 'Логическая связь', q: 'Почему недостаточно просто перечислить несколько фактов?', a: ['Нужно объяснить, как факты ведут к тезису', 'Факты никогда не бывают полезны', 'Чем больше фактов, тем ответ всегда верен'], correct: 0, why: 'Доказательство включает не только основания, но и понятный ход рассуждения.' },
    { topic: 'Прямое доказательство', q: 'Все конфеты в коробке круглые. Лиза достала конфету из этой коробки. Что следует?', a: ['Конфета Лизы круглая', 'Все круглые предметы — конфеты', 'Коробка непременно круглая'], correct: 0, why: 'Вывод следует из двух условий. Обратные и посторонние утверждения из них не следуют.' },
    { topic: 'Достаточность', q: 'Какой факт лучше всего доказывает, что автобус уже приехал на остановку?', a: ['Ты видишь, что автобус стоит у этой остановки', 'Автобус обычно бывает большим', 'На остановке есть расписание'], correct: 0, why: 'Наблюдение автобуса у остановки относится прямо к тезису о его прибытии.' },
    { topic: 'Ясный тезис', q: 'Что нужно сделать в начале доказательства?', a: ['Ясно назвать, какую мысль проверяем', 'Сразу сменить тему на более лёгкую', 'Начать с самого длинного примера'], correct: 0, why: 'Без ясного тезиса непонятно, какой ответ должны поддержать доводы.' },
    { topic: 'Подмена тезиса', q: 'Нужно доказать, что рисунок нарисован карандашом. Довод: «Рисунок красивый». Что не так?', a: ['Красота не показывает, каким инструментом рисовали', 'Красивые рисунки нельзя доказывать', 'Карандашом рисуют только некрасиво'], correct: 0, why: 'Довод относится к красоте, а тезис — к инструменту. Это разные вопросы.' },
    { topic: 'Порочный круг', q: 'Какое объяснение ходит по кругу?', a: ['«Правило верное, потому что оно правильное»', '«На опыте правило сработало пять раз»', '«Вот инструкция, где правило объяснено»'], correct: 0, why: 'Повторение той же мысли не даёт независимого основания.' },
    { topic: 'Полный список', q: 'Приз в одном из четырёх ящиков. Проверили три, и они пусты. Где приз?', a: ['В четвёртом, если приз точно есть в одном из этих четырёх', 'В любом ящике комнаты', 'Нельзя сделать вывод, даже если условие задачи верно'], correct: 0, why: 'Вывод следует, если четыре ящика — полный список и приз точно спрятан в одном из них.' },
    { topic: 'Опровержение', q: 'Как проверить утверждение «Все щенки в корзине белые»?', a: ['Найти щенка из этой корзины, который не белый', 'Узнать, кто придумал это утверждение', 'Проверить цвет самой корзины'], correct: 0, why: 'Один подходящий контрпример опровергает слово «все».' },
    { topic: 'Не следует', q: 'Все круглые мячи красные. Мяч красный. Можно ли заключить, что он круглый?', a: ['Нет: красными могут быть и другие предметы', 'Да: это прямо сказано в первом предложении', 'Да: цвет всегда показывает форму'], correct: 0, why: 'Из «все круглые мячи красные» не следует обратное «все красные предметы круглые».' },
    { topic: 'Довод и человек', q: 'Что лучше ответить на чужое мнение, если хочешь его проверить?', a: ['Разобрать доводы и связь с тезисом', 'Оценить характер того, кто высказался', 'Сменить тезис на другой'], correct: 0, why: 'Проверяем утверждение и его основания, а не личные качества говорящего.' },
    { topic: 'От противного', q: 'В доказательстве от противного временно допускают противоположное. Что нужно затем показать?', a: ['Что это допущение приводит к невозможности или противоречию', 'Что говорящий не уверен в себе', 'Что любой другой ответ тоже неверен'], correct: 0, why: 'Нужно вывести из противоположного допущения следствие, которое не может быть верным.' },
    { topic: 'Не путай', q: 'Если довод не доказал тезис, доказана ли автоматически противоположная мысль?', a: ['Нет: тезис мог остаться недоказанным, а данных может не хватать', 'Да, всегда', 'Да, если довод звучал уверенно'], correct: 0, why: 'Недостаток доказательств за одну мысль не становится доказательством противоположной.' },
    { topic: 'Доказательство и улика', q: 'Что отличает логическое доказательство от одной улики?', a: ['Оно объясняет, как надёжные основания поддерживают тезис', 'Оно всегда состоит из фотографии', 'Оно не нуждается в рассуждении'], correct: 0, why: 'Улика может быть сведением, а логическое доказательство показывает обоснованный переход к выводу.' },
    { topic: 'Основания', q: 'Почему нельзя доказывать тезис только доводом, который сам основан на этом тезисе?', a: ['Получится порочный круг без независимой проверки', 'Потому что тезис всегда неверен', 'Потому что один довод обязательно слишком короткий'], correct: 0, why: 'Основание должно быть установлено самостоятельно, а не только благодаря тому же тезису.' }
];

const stages = [
    { id: 'mission-0', label: 'Доказательство' }, { id: 'mission-1', label: 'Три части' },
    { id: 'mission-2', label: 'Прямой путь' }, { id: 'mission-3', label: 'Основания' },
    { id: 'mission-4', label: 'Тезис' }, { id: 'mission-5', label: 'Без круга' },
    { id: 'mission-6', label: 'Другие варианты' }, { id: 'mission-7', label: 'Опровержение' },
    { id: 'quiz', label: 'Испытание' }
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
        meaning: '<p class="diagram-title">Улика и объяснение — не одно и то же</p><div class="proof-flow diagram-flow" role="img" aria-label="Наблюдение служит уликой, а рассуждение связывает улику с проверяемым выводом"><div class="proof-part grounds"><strong>🔎 Наблюдение</strong><span>Что мы заметили?</span></div><span class="proof-sign">+</span><div class="proof-part link"><strong>🧠 Рассуждение</strong><span>Как это связано с ответом?</span></div><span class="proof-sign">→</span><div class="proof-part thesis"><strong>🎯 Вывод</strong><span>Что обосновываем?</span></div></div><p class="diagram-caption">Улика помогает, но её нужно связать с выводом и проверить, не подходит ли другое объяснение.</p>',
        parts: '<p class="diagram-title">Три части логического доказательства</p><div class="proof-flow diagram-flow" role="img" aria-label="Надёжные основания и правильная логическая связь обосновывают тезис"><div class="proof-part grounds"><strong>🔍 Основания</strong><span>Надёжные сведения</span></div><span class="proof-sign">+</span><div class="proof-part link"><strong>🧠 Связь</strong><span>Почему следует тезис?</span></div><span class="proof-sign">→</span><div class="proof-part thesis"><strong>🎯 Тезис</strong><span>Что доказываем?</span></div></div><p class="diagram-caption">Все три части нужны; один набор фактов без связи не объясняет вывод.</p>',
        direct: '<p class="diagram-title">Прямой вывод из условий задачи</p><div class="argument-stack"><div class="argument-chip">Все фигуры в синей коробке — треугольники.</div><div class="argument-chip">Фигура Аля взяла из синей коробки.</div><div class="argument-arrow">↓ значит</div><div class="argument-chip conclusion">Фигура Аля — треугольник.</div></div><p class="diagram-caption">Не переворачивай рассуждение: из этого не следует, что все треугольники в синей коробке.</p>',
        relevant: '<p class="diagram-title">Проверяем, ведёт ли довод к тезису</p><div class="relevance-row"><div class="argument-chip">Тезис: самолётик долетел до синей стены</div><div class="argument-chip weak">Довод: самолётик синий</div><div class="argument-chip strong">Лучше: видели, как он упал у стены</div></div><p class="diagram-caption">Цвет может быть верным фактом, но для места приземления нужен относящийся к нему довод.</p>',
        thesis: '<p class="diagram-title">Тезис — это вопрос, который держим в фокусе</p><div class="focus-card"><div class="focus-thesis">🎯 В книге есть красивые картинки</div><div class="focus-arrow">↑ нужен довод именно об этом</div><div class="focus-distraction">📏 Книга толстая — другой признак</div></div><p class="diagram-caption">Не позволяй рассуждению незаметно перескочить на другую тему.</p>',
        circle: '<p class="diagram-title">Порочный круг: нового основания нет</p><div class="circle-flow" role="img" aria-label="Утверждение коробка надёжная обосновывается тем, что ей можно доверять, а доверие снова объясняется её надёжностью"><div class="argument-chip">Коробка надёжная</div><div class="circle-arrow">↓ потому что</div><div class="argument-chip">Ей можно доверять</div><div class="circle-arrow">↖ потому что надёжная</div></div><p class="diagram-caption">Вместо круга ищи независимую улику: испытание, наблюдение или надёжную инструкцию.</p>',
        indirect: '<p class="diagram-title">Косвенный вывод с полным списком возможностей</p><div class="box-row"><div class="box-option rejected">🟥 Красный<br>пусто</div><div class="box-option rejected">🟦 Синий<br>пусто</div><div class="box-option selected">🟨 Жёлтый<br>приз!</div></div><p class="diagram-caption">Вывод верен только по условию загадки: приз точно был в одном из этих трёх ящиков.</p>',
        refute: '<p class="diagram-title">Одного контрпримера хватает для слова «все»</p><div class="refute-flow"><div class="universal-claim">«Все бумажные лодочки плавают»</div><div class="refute-arrow">проверяем ↓</div><div class="counterexample">Одна бумажная лодочка утонула</div><div class="refute-result">Значит, слово «все» неверно</div></div><p class="diagram-caption">Опровергаем мысль примером, а не оценкой человека, который её высказал.</p>'
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
    $('review-summary').textContent = `Правильных ответов: ${correctCount} из ${selectedQuiz.length}. Разберём задания, которые вызвали затруднение, и попробуем ещё раз.`;
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
