/* Урок 8: дедуктивные умозаключения. */
const missions = [
    {
        icon: '🧠', tag: 'МИССИЯ 1 · НОВАЯ МЫСЛЬ ИЗ ИЗВЕСТНЫХ', title: 'Что такое умозаключение?',
        story: 'У Нади есть правило: все планеты — небесные тела. Она узнала, что Земля — планета, и сделала новый вывод: Земля — небесное тело. Два известных факта помогли получить новую мысль.',
        rule: '<strong>Умозаключение</strong> — это рассуждение, в котором из одного или нескольких суждений (посылок) получают новое суждение — <strong>вывод</strong>. Вывод надёжен, если посылки верны и мы правильно связали их.',
        diagram: 'inference', question: 'Что здесь является новым выводом?',
        options: ['Земля — небесное тело', 'Все планеты — небесные тела', 'Земля — планета'], answer: 0,
        explain: 'Общее правило и факт о Земле соединились в новое заключение.'
    },
    {
        icon: '🪜', tag: 'МИССИЯ 2 · ОТ ОБЩЕГО К ОТДЕЛЬНОМУ', title: 'Ступеньки силлогизма',
        story: 'В музее есть полка «металлические предметы», а внутри неё — коробка «медные предметы». Монетка лежит в коробке. Если правило верно, монетка принадлежит и большой группе металлических предметов.',
        rule: '<strong>Дедукция</strong> ведёт от общего правила к отдельному случаю. <strong>Силлогизм</strong> — вывод из двух посылок: общее правило + факт о случае → заключение. Запись: посылка 1; посылка 2; следовательно, вывод.',
        diagram: 'nested', question: 'Если все медные предметы — металлические, а монетка медная, что следует?',
        options: ['Монетка металлическая', 'Все металлические предметы — монетки', 'Монетка сделана из дерева'], answer: 0,
        explain: 'Медные предметы находятся внутри более широкой группы металлических, поэтому монетка тоже в этой группе.'
    },
    {
        icon: '🔗', tag: 'МИССИЯ 3 · ТРИ ТЕРМИНА', title: 'Среднее звено связывает',
        story: 'Разложим вывод о сове на три части. «Сова» — о ком наш вывод. «Птица» появляется в обеих посылках и соединяет мысль. «Животное» — что мы узнали о сове.',
        rule: 'В простом силлогизме есть <strong>две посылки и заключение</strong>, а связывают их три понятия: меньший термин — о чём вывод (S), больший — что говорится о нём (P), средний — повторяется в посылках и связывает их (M), но в вывод не входит. Схема: M—P; S—M; значит, S—P. <strong>Фигура</strong> — это место среднего термина в двух посылках. Для игры достаточно увидеть: мостик M можно поставить по-разному.',
        diagram: 'terms', question: 'В рассуждении «Все птицы — животные; сова — птица; значит, сова — животное» какое слово — среднее звено?',
        options: ['Птица', 'Сова', 'Животное'], answer: 0,
        explain: '«Птица» соединяет сову с животными: слово есть в посылках, но не нужно в коротком выводе.'
    },
    {
        icon: '🧭', tag: 'МИССИЯ 4 · ПРОВЕРЬ СВЯЗЬ', title: 'Три разных понятия',
        story: 'Из двух карточек «Все бабочки — насекомые» и «Все ромашки — растения» нельзя узнать, что бабочки — ромашки. Между карточками нет общего звена, которое связало бы их.',
        rule: '<strong>Для вывода нужна связь.</strong> В простом силлогизме должны быть ровно три разных термина, и одно понятие должно связать посылки. Не путай одинаково звучащие слова с одинаковым смыслом: например, «лук» как растение и «лук» для стрельбы — разные понятия.',
        diagram: 'noLink', question: 'Можно ли из этих двух карточек заключить, что все бабочки — ромашки?',
        options: ['Нет: посылки говорят о разных группах и не связывают их', 'Да: любые два предложения дают вывод', 'Да: бабочки и ромашки — одно и то же'], answer: 0,
        explain: 'Чтобы вывести новое, нужно найти общий смысловой мостик, а не просто поставить рядом два факта.'
    },
    {
        icon: '✅', tag: 'МИССИЯ 5 · ИСТИННЫЕ ПОСЫЛКИ И ПРАВИЛЬНЫЙ ШАГ', title: 'Не перепрыгивай ступеньку',
        story: 'На карточке написано: «Все рыбки в этом аквариуме — золотые». Петя видит там Немо и говорит: «Немо — рыбка из этого аквариума». Он заключает, что Немо золотой. Но сначала нужно проверить обе исходные карточки: правда ли Немо из этого аквариума и верно ли общее правило?',
        rule: 'Чтобы посылки <strong>гарантировали</strong> верное заключение, нужны оба условия: посылки должны быть верными, а шаг рассуждения — правильным. Из неверной посылки иногда случайно получится верный ответ, но посылка его не гарантирует. Подкрепляй фактами каждую важную исходную мысль.',
        diagram: 'checklist', question: 'Что нужно проверить, прежде чем уверенно принять вывод?',
        options: ['Верны ли обе посылки и правильно ли из них сделан шаг', 'Только красивый ли почерк на карточках', 'Достаточно ли громко Петя сказал ответ'], answer: 0,
        explain: 'Истинность вывода зависит и от верных исходных сведений, и от правильного рассуждения.'
    },
    {
        icon: '🚧', tag: 'МИССИЯ 6 · ПЯТЬ ПРОВЕРОК СИЛЛОГИЗМА', title: 'Не попадай в логические ловушки',
        story: 'Юный сыщик собрал две посылки и спешит с ответом. Профессор просит остановиться: проверь, что в рассуждении только три понятия, есть настоящее связующее звено и вывод не обещает больше, чем говорят посылки.',
        // ИСПРАВЛЕНО: усиление метафор — пояснено, почему частичная проверка не позволяет делать общий вывод.
        rule: '<strong>Памятка к категорическому силлогизму:</strong> (1) используй три понятия и не меняй смысл слова; (2) связующее понятие должно действительно соединять посылки, а не просто повторять общий признак; (3) вывод не делай шире исходных сведений; если одна посылка говорит «некоторые», не заключай «все». Если ты проверил только некоторые игрушки в коробке, ты не можешь обещать, что ВСЕ игрушки такие же. Не делай вывод шире, чем твоя проверка; (4) из двух отрицательных посылок вывода нет; (5) если одна посылка отрицательная, вывод тоже отрицательный. Это короткая детская памятка, а не замена всем строгим правилам.',
        diagram: 'syllogismChecks', question: 'В посылках сказано: «Некоторые дети — художники» и «Некоторые дети — спортсмены». Что можно гарантировать?',
        options: ['Нельзя гарантировать, что среди художников есть спортсмены', 'Все художники — спортсмены', 'Ни один художник не занимается спортом'], answer: 0,
        explain: 'Это могут быть разные дети. Две фразы о «некоторых» сами по себе не дают нужного вывода.'
    },
    {
        icon: '🌦️', tag: 'МИССИЯ 7 · УСЛОВИЕ «ЕСЛИ — ТО»', title: 'Когда правило ведёт к ответу',
        story: 'Правило мастерской: «Если игрушка лежит в запертом ящике, то она находится в комнате». Мы точно знаем, что игрушка в этом ящике. Значит, она в комнате.',
        rule: 'Условный вывод: <strong>если A, то B; A; значит, B.</strong> Это называется утверждением условия. Надёжен и такой шаг: «если A, то B; B не случилось; значит, A не было». А вот из B нельзя заключать A, и из «не A» нельзя заключать «не B»: это не всегда работает. Само условие тоже должно быть верным для этой ситуации.',
        diagram: 'ifThen', question: 'Игрушка в запертом ящике. Что следует по правилу мастерской?',
        options: ['Игрушка находится в комнате', 'Игрушка обязательно красная', 'Ящик находится в игрушке'], answer: 0,
        explain: 'Мы подтвердили условие правила, поэтому можем перейти к его следствию.'
    },
    {
        icon: '🕵️', tag: 'МИССИЯ 8 · НЕ ПУТАЙ «ЕСЛИ» И «ПОТОМУ ЧТО»', title: 'Следствие не доказывает причину',
        story: 'Если нажать кнопку звонка, раздастся звонок. Но звонок мог раздаться и потому, что нажал кто-то другой. Услышав звонок, нельзя точно заключить, кто нажал кнопку.',
        rule: 'Из правила «если A, то B» можно перейти от A к B. Но обратный шаг <strong>«случилось B, значит, было A»</strong> не всегда надёжен: у B может быть другая причина. Такой вывод может быть догадкой, которую надо проверить.',
        diagram: 'converse', question: 'Ты услышал звонок. Можно ли точно заключить, что его включила именно ты?',
        options: ['Нет: кнопку мог нажать кто-то другой', 'Да: звонок всегда включает только один человек', 'Да: звук доказывает, кто нажал кнопку'], answer: 0,
        // ИСПРАВЛЕНО: усиление метафор — закреплено, почему от следствия нельзя уверенно заключить одну конкретную причину.
        explain: 'Звонок подтверждает, что сигнал прозвучал, но не показывает, кто именно нажал кнопку. Следствие (звонок) может иметь много разных причин. Мы знаем правило «от причины к следствию», но не наоборот.'
    },
    {
        icon: '🎲', tag: 'МИССИЯ 9 · РАЗДЕЛИТЕЛЬНОЕ «ИЛИ»', title: 'Исключай вариант только с проверкой',
        story: 'На игровом волчке три сектора: 1, 2 и 3. Стрелка остановилась ровно на одном секторе. Мы проверили, что это не 1 и не 2. Значит, осталось 3. Важно: эти варианты не могут выпасть одновременно и список включает все результаты волчка.',
        rule: 'В выводе с <strong>разделительным «или»</strong> можно исключить варианты и оставить другой только тогда, когда варианты взаимно исключают друг друга и список охватывает все возможности. Если забыли возможный вариант, вывод не гарантирован.',
        diagram: 'choice', question: 'Волчок показывает 1, 2 или 3. Это не 1 и не 2. Что выпало?',
        options: ['3', '1 и 3 сразу', 'Этого определить нельзя: список вариантов полный и проверка исключила два'], answer: 0,
        explain: 'У этого волчка только три возможных результата, и два уже исключены.'
    },
    {
        icon: '💬', tag: 'МИССИЯ 10 · СОКРАЩЁННОЕ РАССУЖДЕНИЕ', title: 'Найди пропущенную мысль',
        story: 'Соня сказала: «Мой самокат нужно поставить под навес, потому что пошёл дождь». Она пропустила известный всем шаг: вещи под дождём лучше укрыть. Такой короткий вывод можно развернуть и проверить.',
        rule: '<strong>Энтимема</strong> — это сокращённое рассуждение: одна часть не произнесена, но подразумевается. Чтобы проверить слова, восстанови недостающую посылку или вывод. Пропущенная мысль тоже должна быть разумной и верной.',
        diagram: 'enthymeme', question: 'Какую мысль Соня не сказала вслух?',
        options: ['Вещи, которые нельзя мочить, лучше укрыть от дождя', 'Все самокаты умеют говорить', 'Дождь бывает только под навесом'], answer: 0,
        explain: 'Это подразумеваемое общее правило связывает дождь с решением укрыть самокат.'
    },
    {
        icon: '🧱', tag: 'МИССИЯ 11 · ЦЕПОЧКА ВЫВОДОВ', title: 'Передавай эстафету аккуратно',
        story: 'Все щенки — собаки. Все собаки — животные. Значит, щенки — животные. Средняя группа «собаки» помогла соединить щенков с животными.',
        rule: 'В сложной цепочке выводов конец одного шага может стать началом следующего: A относится к Б; Б — к В; значит, A относится к В. Каждый переход нужно проверить отдельно, а не добавлять новую ступень наугад.',
        diagram: 'chain', question: 'Если все щенки — собаки, а все собаки — животные, кем являются щенки?',
        options: ['Животными', 'Растениями', 'Обязательно кошками'], answer: 0,
        explain: 'Цепочка сохраняет связь: щенок → собака → животное.'
    }
];

const quizQuestions = [
    { topic: 'Умозаключение', q: 'Что называют умозаключением?', a: ['Рассуждение, в котором из посылок получают новое суждение', 'Любое громкое слово', 'Список предметов без связи'], correct: 0, why: 'Посылки — исходные мысли, а новое полученное суждение — вывод.' },
    { topic: 'Дедукция', q: 'Куда направлена дедукция в этом уроке?', a: ['От общего правила к отдельному случаю', 'От одного случайного предмета к любому другому', 'От ответа к вопросу без правил'], correct: 0, why: 'Дедукция применяет общее правило к конкретному примеру.' },
    { topic: 'Силлогизм', q: 'Сколько посылок и заключений в простом силлогизме из главы?', a: ['Две посылки и одно заключение', 'Одно слово и четыре рисунка', 'Одно заключение без посылок'], correct: 0, why: 'Две посылки связываются в одно заключение.' },
    { topic: 'Термины', q: 'Какую работу выполняет средний термин?', a: ['Связывает два других термина в посылках', 'Обязательно становится всем заключением', 'Не связан с посылками'], correct: 0, why: 'Средний термин — связующее звено и в заключение не входит.' },
    { topic: 'Фигуры силлогизма', q: 'Что показывает фигура силлогизма?', a: ['Где расположен средний термин в посылках', 'Сколько слов в заключении', 'Кто произнёс посылки'], correct: 0, why: 'Фигуры различаются положением среднего термина в двух посылках.' },
    { topic: 'Проверка связи', q: '«Все ласточки — птицы. Все акулы — хищники». Что можно вывести о ласточках и акулах?', a: ['Надёжного вывода о связи между ними нет', 'Все ласточки — акулы', 'Все акулы — птицы'], correct: 0, why: 'Посылки не имеют связующего понятия.' },
    { topic: 'Истина и правильность', q: 'Что необходимо для надёжного вывода?', a: ['Верные посылки и правильное рассуждение', 'Только уверенный голос', 'Один красивый рисунок вместо фактов'], correct: 0, why: 'Неверные исходные сведения или ошибочный шаг могут испортить вывод.' },
    { topic: 'Правила силлогизма', q: '«Некоторые дети — художники. Некоторые дети — спортсмены». Что следует?', a: ['Нельзя гарантировать, что художники и спортсмены — одни и те же дети', 'Все художники — спортсмены', 'Ни один художник не спортсмен'], correct: 0, why: 'Две частные посылки могут говорить о разных детях, поэтому общий вывод не гарантирован.' },
    { topic: 'Правила силлогизма', q: 'Можно ли из «Все лягушки живут у воды» и «Все рыбы живут у воды» заключить, что все лягушки — рыбы?', a: ['Нет: общий признак не доказывает, что это одна группа', 'Да: у них есть общий признак', 'Да: все животные с общим местом обитания одинаковы'], correct: 0, why: 'Одинаковое свойство не означает, что две группы совпадают.' },
    { topic: 'Условное правило', q: 'Правило: «Если предмет в коробке, то он в комнате». Предмет в коробке. Что следует?', a: ['Он в комнате', 'Он обязательно синий', 'Коробка в предмете'], correct: 0, why: 'Подтвердили условие A, значит, по правилу получаем следствие B.' },
    { topic: 'Ловушка обратного вывода', q: '«Если нажать звонок, он зазвучит». Звонок звучит. Что мы знаем?', a: ['Кто-то мог нажать звонок, но это не доказывает, кто именно', 'Точно нажал только ты', 'Звонок звучать не может'], correct: 0, why: 'Из следствия нельзя всегда точно установить основание: возможны другие причины.' },
    { topic: 'Условный вывод', q: '«Если игрушка в шкафу, она в комнате». Игрушки в комнате нет. Какой вывод следует по правилу?', a: ['Игрушки нет в шкафу', 'Игрушка обязательно на улице', 'Шкаф исчез'], correct: 0, why: 'Если A влечёт B, а B не случилось, то A не было.' },
    { topic: 'Разделительное «или»', q: 'Когда можно оставить последний вариант после исключения остальных?', a: ['Когда варианты несовместимы и вместе охватывают все возможности', 'Когда список вариантов неполный', 'Когда варианты могут происходить все сразу'], correct: 0, why: 'Иначе может остаться забытая возможность или несколько ответов.' },
    { topic: 'Энтимема', q: 'Что такое энтимема?', a: ['Сокращённый силлогизм с подразумеваемой частью', 'Силлогизм с десятью средними терминами', 'Вопрос без ответа'], correct: 0, why: 'Пропущенную часть можно восстановить, чтобы проверить рассуждение.' },
    { topic: 'Цепочка', q: 'Все котята — кошки. Все кошки — животные. Кто такие котята?', a: ['Животные', 'Растения', 'Неизвестно, потому что посылки связаны'], correct: 0, why: 'Связав две ступеньки, получаем: котята — животные.' },
    { topic: 'Среднее звено', q: '«Все воробьи — птицы. Чиж — воробей. Значит, чиж — птица». Какое слово связывает посылки?', a: ['Воробей', 'Чиж', 'Птица'], correct: 0, why: 'Воробей есть в обеих посылках и связывает чижей с птицами.' },
    { topic: 'Посылки', q: 'Гарантируют ли посылки истинность вывода, если хотя бы одна посылка ложна?', a: ['Нет: вывод может случайно оказаться верным, но посылки этого не гарантируют', 'Да, если повторить их трижды', 'Да, если вывод короткий'], correct: 0, why: 'Гарантия требует истинных посылок и правильного шага; при ложной посылке результат может случайно совпасть с истиной.' },
    { topic: 'Разные значения', q: 'Почему одинаковое слово иногда не может служить надёжным связующим звеном?', a: ['Потому что оно может обозначать разные понятия', 'Потому что слова всегда состоят из букв', 'Потому что два предложения нельзя читать подряд'], correct: 0, why: 'Сначала уточни значение слова, иначе можно незаметно подменить смысл.' },
    { topic: 'Проверка вывода', q: 'Тебе сказали: «У Кати есть хвост, потому что она кот». Что лучше сделать?', a: ['Восстановить правило и проверить, правда ли Катя кот', 'Сразу поверить любой части фразы', 'Сделать вывод о погоде'], correct: 0, why: 'Сокращённый вывод нужно развернуть и проверить его пропущенные и сказанные части.' },
    { topic: 'Вероятная догадка', q: 'Ты видишь мокрый тротуар. Можно ли точно заключить, что только что шёл дождь?', a: ['Нет: тротуар могли помыть или полить', 'Да, мокрым он бывает только от дождя', 'Нет, тротуар не может быть мокрым'], correct: 0, why: 'Наблюдение допускает другие причины, поэтому это подсказка, а не доказательство причины.' },
    { topic: 'Дедукция', q: 'Все ручные куклы сделаны из материалов. Эта кукла ручная. Что следует?', a: ['Эта кукла сделана из материала', 'Все материалы — куклы', 'Кукла обязательно деревянная'], correct: 0, why: 'Относим конкретную куклу к группе, о которой говорит общее правило.' },
    { topic: 'Главное правило', q: 'Какое действие помогает не сделать поспешный вывод?', a: ['Проверить, связаны ли посылки, верны ли они и подходит ли правило', 'Добавить к рассуждению любое похожее слово', 'Всегда выбирать самый необычный ответ'], correct: 0, why: 'Так мы проверяем и факты, и связь между шагами вывода.' }
];

const stages = [
    { id: 'mission-0', label: 'Вывод' }, { id: 'mission-1', label: 'Дедукция' },
    { id: 'mission-2', label: 'Термины' }, { id: 'mission-3', label: 'Связь' },
    { id: 'mission-4', label: 'Посылки' }, { id: 'mission-5', label: 'Правила' },
    { id: 'mission-6', label: 'Если — то' }, { id: 'mission-7', label: 'Не перепутай' },
    { id: 'mission-8', label: 'Или' }, { id: 'mission-9', label: 'Энтимема' },
    { id: 'mission-10', label: 'Цепочка' },
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
        inference: '<p class="diagram-title">От известных мыслей к новому выводу</p><div class="flow-row" role="img" aria-label="Посылка: все планеты — небесные тела. Посылка: Земля — планета. Вывод: Земля — небесное тело"><span class="flow-box">Все планеты — небесные тела</span><span class="flow-arrow">+</span><span class="flow-box">Земля — планета</span><span class="flow-arrow">→</span><span class="flow-box">Земля — небесное тело</span></div><p class="diagram-caption">Две посылки помогают получить новое суждение.</p>',
        nested: '<p class="diagram-title">Меньшая группа находится внутри большей</p><div class="set-diagram" role="img" aria-label="Круг Медные предметы расположен внутри круга Металлические предметы; монетка внутри обоих кругов"><div class="set-level">Все металлические предметы<div class="set-level inner">Все медные предметы<span class="set-item">🪙</span></div></div></div><p class="diagram-caption">Раз монетка — медная, а все медные предметы металлические, монетка тоже металлическая.</p>',
        terms: '<p class="diagram-title">Три термина: средний — мостик между посылками</p><div class="term-row" role="img" aria-label="Сова S связана через средний термин Птица M с термином Животное P"><span class="term">Сова<small>меньший S</small></span><span class="term-link">→</span><span class="term">Птица<small>средний M</small></span><span class="term-link">→</span><span class="term">Животное<small>больший P</small></span></div><p class="diagram-caption">В выводе остаются крайние термины: сова — животное. Фигура зависит от места M в посылках:</p><div class="figure-grid" role="img" aria-label="Первая фигура: M-P и S-M. Вторая: P-M и S-M. Третья: M-P и M-S. Четвёртая: P-M и M-S; в главе она названа редкой и не разбирается"><div class="figure-card"><strong>1-я</strong><span>M — P</span><span>S — M</span></div><div class="figure-card"><strong>2-я</strong><span>P — M</span><span>S — M</span></div><div class="figure-card"><strong>3-я</strong><span>M — P</span><span>M — S</span></div><div class="figure-card rare"><strong>4-я · редкая</strong><span>P — M</span><span>M — S</span></div></div><p class="diagram-caption">Буквы — условные ярлыки: M всегда связующее слово. Четвёртая фигура в главе только упоминается как редкая; учить её не нужно.</p>',
        noLink: '<p class="diagram-title">Нет общего звена — нет такого вывода</p><div class="compare-grid" role="img" aria-label="Бабочки относятся к насекомым, ромашки к растениям; общего связующего термина нет"><div class="compare-card">🦋 Бабочки → насекомые</div><div class="compare-card">🌼 Ромашки → растения</div></div><p class="diagram-caption">Две отдельные верные мысли ещё не связывают бабочек с ромашками.</p>',
        checklist: '<p class="diagram-title">Проверка перед выводом</p><div class="flow-row" role="img" aria-label="Проверь: верны ли посылки; правильно ли сделан вывод"><span class="flow-box">Посылки верны?</span><span class="flow-arrow">+</span><span class="flow-box">Связь правильная?</span><span class="flow-arrow">→</span><span class="flow-box">Вывод надёжен</span></div><p class="diagram-caption">Оба условия важны.</p>',
        syllogismChecks: '<p class="diagram-title">Три быстрых стоп-сигнала</p><div class="compare-grid" role="img" aria-label="Не делай вывод шире посылок; одинаковый признак не равен одинаковой группе; две посылки о некоторых не гарантируют вывод"><div class="compare-card">📏 Не расширяй вывод<small>О части известно — не говори обо всех</small></div><div class="compare-card">🌉 Проверь мостик<small>Общий признак не доказывает связь групп</small></div><div class="compare-card">👥 «Некоторые» + «некоторые»<small>Это могут быть разные участники</small></div></div><p class="diagram-caption">Также проверь: ровно ли три понятия и не являются ли обе посылки отрицательными.</p>',
        ifThen: '<p class="diagram-title">Утверждаем условие — получаем следствие</p><div class="truth-pair" role="img" aria-label="Если игрушка в запертом ящике, то она в комнате. Игрушка в ящике, значит, она в комнате"><div class="truth-card">Игрушка в ящике<br><small>условие A</small></div><span class="truth-or">→</span><div class="truth-card">Игрушка в комнате<br><small>следствие B</small></div></div><p class="diagram-caption">Если A → B, и верно A, то верно B.</p>',
        converse: '<p class="diagram-title">Обратный шаг может быть догадкой</p><div class="flow-row" role="img" aria-label="Нажали кнопку звонка — зазвучал звонок. Но услышав звонок, нельзя узнать, кто нажал кнопку"><span class="flow-box">Нажали кнопку</span><span class="flow-arrow">→</span><span class="flow-box">Звонок звучит</span><span class="flow-arrow">←</span><span class="flow-box">Кто нажал? Неизвестно</span></div><p class="diagram-caption">Звонок могли включить и без тебя.</p>',
        choice: '<p class="diagram-title">Полный список и исключение вариантов</p><div class="flow-row" role="img" aria-label="На волчке возможны 1, 2 или 3. Проверка исключила 1 и 2, поэтому остаётся 3"><span class="flow-box">1 ✕</span><span class="flow-box">2 ✕</span><span class="flow-arrow">→</span><span class="flow-box">Осталось 3 ✓</span></div><p class="diagram-caption">Это сработало, потому что у волчка только эти три сектора.</p>',
        enthymeme: '<p class="diagram-title">Восстанови пропущенную ступеньку</p><div class="flow-row" role="img" aria-label="Пошёл дождь. Пропущенное правило: вещи нужно укрывать от дождя. Вывод: самокат поставить под навес"><span class="flow-box">Пошёл дождь</span><span class="flow-arrow">+</span><span class="flow-box">Вещи укрывают от дождя</span><span class="flow-arrow">→</span><span class="flow-box">Убрать самокат под навес</span></div><p class="diagram-caption">Соня произнесла факт и решение, а общее правило оставила подразумеваемым.</p>',
        chain: '<p class="diagram-title">Связанные ступеньки ведут дальше</p><div class="flow-row" role="img" aria-label="Щенок относится к собакам, собаки к животным, поэтому щенок — животное"><span class="flow-box">Щенок</span><span class="flow-arrow">→</span><span class="flow-box">Собака</span><span class="flow-arrow">→</span><span class="flow-box">Животное</span></div><p class="diagram-caption">Каждый шаг опирается на отдельное общее правило.</p>'
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
