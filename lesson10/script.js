/* Урок 10: аналогия — осторожный вывод по сходству. */
const missions = [
    {
        icon: '🔎', tag: 'МИССИЯ 1 · УЗНАЙ АНАЛОГИЮ', title: 'От одного случая к другому',
        story: 'У Лены есть красный воздушный змей: он широкий, лёгкий и хорошо ловит ветер. В музее она увидела похожий по форме синий змей и подумала: «Может быть, он тоже хорошо ловит ветер». Лена сравнивает два отдельных предмета.',
        rule: '<strong>Аналогия</strong> — это вывод от одного частного случая к другому по сходству. Мы знаем что-то о знакомом предмете и предполагаем, что у похожего предмета может быть ещё один такой же признак.',
        diagram: 'basic', question: 'Как рассуждала Лена?',
        options: ['Перенесла догадку с одного похожего предмета на другой', 'Проверила все воздушные змеи на свете', 'Вывела ответ только из определения слова «змей»'], answer: 0,
        explain: 'Лена сравнила два конкретных змея и предположила общий признак — это рассуждение по аналогии.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 2 · СХЕМА ВЫВОДА', title: 'Заполни мысленную дорожку',
        story: 'Знакомый термос А сохраняет тепло и не протекает. Новый термос Б тоже хорошо закрывается и имеет похожую теплоизоляцию. Можно предположить, что он тоже сохранит тепло, но сначала лучше проверить.',
        rule: 'Схема аналогии: <strong>А имеет признаки a, b, c и x. Б похож на А по a, b, c. Значит, можно предположить: возможно, у Б тоже есть x.</strong> Знак «возможно» важен: это не обещание и не доказательство.',
        diagram: 'schema', question: 'Что в этой схеме означает признак x у нового предмета Б?',
        options: ['Проверяемую догадку, перенесённую по сходству', 'Признак, который точно доказан одним сравнением', 'Любое отличие предмета А от Б'], answer: 0,
        explain: 'Общий признак подсказывает возможный перенос x, но его нужно проверить отдельно.'
    },
    {
        icon: '🌱', tag: 'МИССИЯ 3 · ИЩИ ВАЖНОЕ СХОДСТВО', title: 'Сходство должно подходить к вопросу',
        story: 'Два ростка одного вида посажены в одинаковую землю и получают одинаковый полив. Один рос на свету, другой в темноте. Сравнивая их, садовница рассуждает о том, как свет связан с ростом. Одинаковый цвет горшков здесь почти ничего не объясняет.',
        rule: 'Для аналогии важно не просто найти сходства, а спросить: <strong>помогает ли этот признак понять именно то свойство, о котором мы делаем догадку?</strong> Существенное и относящееся к вопросу сходство полезнее случайного.',
        diagram: 'relevant', question: 'Какое сходство полезнее, если мы хотим предположить, как будет расти новый росток?',
        options: ['Одинаковые вид растения, почва и полив', 'Одинаковый цвет наклейки на горшке', 'Одинаковое имя у двух садовников'], answer: 0,
        explain: 'Вид растения и условия выращивания связаны с ростом гораздо сильнее, чем цвет наклейки.'
    },
    {
        icon: '⚠️', tag: 'МИССИЯ 4 · ЗАМЕЧАЙ ВАЖНЫЕ РАЗЛИЧИЯ', title: 'Одно отличие может всё изменить',
        story: 'Два игрушечных автомобиля похожи по цвету, размеру и форме. Первый ездит на батарейках, а второй — заводной. Если батарейки разрядились у первого, это не значит, что второй тоже перестанет ехать: у него другой двигатель.',
        rule: 'Много сходств не гарантируют правильный перенос признака. <strong>Важное различие</strong>, связанное с вопросом, может сделать вывод по аналогии ненадёжным или вовсе неуместным.',
        diagram: 'difference', question: 'Какое отличие важнее всего для догадки о том, что машина поедет без батареек?',
        options: ['У машин разные двигатели: батарейки и заводной механизм', 'У машин одинаковый цвет', 'Обе машины помещаются на полке'], answer: 0,
        explain: 'Тип двигателя напрямую связан с тем, откуда машина получает энергию.'
    },
    {
        icon: '🕵️', tag: 'МИССИЯ 5 · АНАЛОГИЯ НЕ ДОКАЗАТЕЛЬСТВО', title: 'Скажи «возможно», а не «точно»',
        story: 'Миша увидел две похожие ракушки. У первой внутри была жемчужина. Он сказал: «У второй тоже точно есть жемчужина!» Но ракушки могут быть похожи снаружи и различаться внутри.',
        rule: 'Аналогия даёт <strong>вероятное предположение</strong>, а не достоверное доказательство. Лучше сказать «возможно», «похоже» или «это стоит проверить», а не «теперь точно известно».',
        diagram: 'certainty', question: 'Как точнее ответить Мише?',
        options: ['«Возможно, но нужно заглянуть внутрь или проверить»', '«Это доказано, ведь ракушки похожи»', '«Если есть сходство, различий быть не может»'], answer: 0,
        // ИСПРАВЛЕНО: усиление научного метода.
        explain: 'Внешнее сходство — это повод задать вопрос и заглянуть внутрь, а не повод ставить точку в расследовании.'
    },
    {
        icon: '🌲', tag: 'МИССИЯ 6 · ОЦЕНИ СИЛУ ДОГАДКИ', title: 'Больше подходящих сходств — лучше подсказка',
        story: 'Две лесные поляны похожи по деревьям, почве, влажности и освещению. На первой поляне после дождя заметили грибы. На второй тоже можно понаблюдать за природой вместе со взрослым специалистом. Но похожие условия ещё не обещают, что грибы там обязательно найдутся.',
        rule: 'Чем больше <strong>существенных и относящихся к вопросу сходств</strong>, тем правдоподобнее аналогия. Но даже сильная аналогия остаётся догадкой: важное отличие или новое наблюдение может её опровергнуть.',
        diagram: 'strength', question: 'Как разумно поступить на второй поляне?',
        options: ['Наблюдать вместе со взрослым специалистом, не решая заранее, что грибы там есть', 'Сразу объявить, что там растут те же грибы', 'Не смотреть на поляну: сходство уже всё доказало'], answer: 0,
        explain: 'Сходство помогает решить, что стоит проверить, но ответ даст наблюдение. Не трогай и не ешь незнакомые грибы.'
    },
    {
        icon: '🔭', tag: 'МИССИЯ 7 · АНАЛОГИЯ В НАУКЕ', title: 'Сравнение подсказывает гипотезу',
        // ИСПРАВЛЕНО: усиление научного метода.
        story: 'Учёные знали, что состав Солнца и Земли во многом похож. По аналогии они предположили, что один элемент, обнаруженный на Солнце, может встретиться и на Земле. Это была научная догадка, которую затем нужно было подтвердить наблюдениями. Так же и мы можем предположить, что новое удобрение поможет нашему цветку расти, потому что оно помогло похожим цветам у соседей. Но чтобы быть уверенными, нужно проверить его на нашем цветке, а не верить на слово.',
        rule: 'В науке аналогия помогает <strong>выдвинуть гипотезу</strong> — предположение, которое можно проверить. Само сходство не заменяет измерение, наблюдение или опыт.',
        diagram: 'science', question: 'Что нужно сделать после гипотезы, подсказанной аналогией?',
        options: ['Найти способ проверить её наблюдением или опытом', 'Считать гипотезу доказанной сразу', 'Не сообщать никому, как она появилась'], answer: 0,
        explain: 'Гипотеза становится обоснованнее, когда выдерживает независимую проверку.'
    },
    {
        icon: '🛠️', tag: 'МИССИЯ 8 · ПРИМЕНИ АНАЛОГИЮ', title: 'Сначала догадка, затем проверка',
        story: 'Саша хочет узнать, будет ли новая бумажная вертушка быстро вращаться. Она похожа на старую, которая вращалась на ветру. Саша сравнила размер лопастей и бумагу, но заметила, что у новой лопасти согнуты иначе.',
        rule: 'Хороший сыщик по аналогии делает три шага: <strong>находит похожий известный случай → формулирует осторожную догадку → проверяет её</strong>. При проверке учитывай и сходства, и важные отличия.',
        diagram: 'check', question: 'Что лучше всего сделать Саше?',
        options: ['Испытать вертушку на ветру и сравнить её с прежней', 'Уверенно объявить, что она точно будет вращаться так же', 'Сравнить только цвет бумаги и закончить исследование'], answer: 0,
        explain: 'Опыт проверит догадку, а особый изгиб лопастей поможет объяснить возможную разницу.'
    }
];

const quizQuestions = [
    { topic: 'Понятие', q: 'Что называют аналогией?', a: ['Вывод от одного частного случая к другому по сходству', 'Проверку каждого предмета в большой группе', 'Любое перечисление двух предметов'], correct: 0, why: 'В аналогии мы переносим предположение с одного отдельного предмета или случая на другой по сходству.' },
    { topic: 'Схема', q: 'Предмет А имеет признаки a, b, c и x. Предмет Б похож по a, b, c. Что можно заключить?', a: ['Предположить, что у Б, возможно, тоже есть x', 'Доказать, что у Б точно есть x', 'Доказать, что Б и А одинаковы во всём'], correct: 0, why: 'Это типичная схема аналогии: новый признак предполагают, но не считают доказанным.' },
    { topic: 'Существенное сходство', q: 'Какое сходство полезнее, если сравниваем, насколько хорошо термос сохраняет тепло?', a: ['Одинаковое устройство теплоизоляции', 'Одинаковая наклейка снаружи', 'Одинаковый цвет крышки'], correct: 0, why: 'Устройство теплоизоляции непосредственно связано с тем, как термос сохраняет тепло.' },
    { topic: 'Существенное сходство', q: 'Почему подходящее к вопросу сходство важнее случайного?', a: ['Оно лучше связано с признаком, о котором мы делаем предположение', 'Оно всегда делает вывод безошибочным', 'Оно запрещает искать различия'], correct: 0, why: 'Для вывода важны не просто общие черты, а те, которые относятся к предполагаемому признаку.' },
    { topic: 'Различие', q: 'Два похожих устройства работают от разных источников энергии. Почему это важно?', a: ['Различие может повлиять на то, переносят ли мы один признак на другое устройство', 'Любое сходство после этого исчезает', 'Различие доказывает, что устройства нельзя сравнивать ни в чём'], correct: 0, why: 'Важное отличие, связанное с вопросом, может ослабить конкретную аналогию.' },
    { topic: 'Сила аналогии', q: 'Что обычно делает догадку по аналогии правдоподобнее?', a: ['Больше существенных сходств, относящихся к вопросу', 'Больше случайных совпадений в цвете', 'Полное отсутствие проверок'], correct: 0, why: 'Существенные и релевантные сходства сильнее поддерживают перенос признака, хотя не превращают его в доказательство.' },
    { topic: 'Вероятность', q: 'Что важно помнить о выводе по аналогии?', a: ['Это предположение, которое может оказаться неверным', 'Это всегда точное доказательство', 'Это утверждение, которое нельзя проверять'], correct: 0, why: 'Аналогический вывод вероятен, поэтому оставляет место для проверки и возможных исключений.' },
    { topic: 'Не доказательство', q: 'У двух похожих ракушек однажды нашли жемчужину в первой. Что известно о второй?', a: ['Можно предположить, но нужно проверить', 'Жемчужина там доказанно есть', 'Внутри точно ничего нет'], correct: 0, why: 'Сходство подсказывает гипотезу, но не показывает содержимое второй ракушки.' },
    { topic: 'Проверка', q: 'Что следует сделать с полезной догадкой по аналогии?', a: ['Проверить её наблюдением, опытом или дополнительными фактами', 'Перестать собирать сведения', 'Назвать её доказанной из-за сходства'], correct: 0, why: 'Независимая проверка показывает, подтверждается ли догадка.' },
    { topic: 'Гипотеза', q: 'Для чего аналогия может быть полезна в науке?', a: ['Чтобы предложить гипотезу для дальнейшей проверки', 'Чтобы заменить все опыты навсегда', 'Чтобы доказать любой ответ одним сравнением'], correct: 0, why: 'Аналогия помогает придумать направление поиска, а гипотезу проверяют отдельно.' },
    { topic: 'Осторожность', q: 'Как лучше сформулировать вывод, если два предмета похожи в нескольких важных признаках?', a: ['«Возможно, у второго есть этот признак; проверим»', '«Они одинаковы во всём и всегда»', '«Различий быть не может»'], correct: 0, why: 'Осторожная формулировка показывает вероятный характер аналогии.' },
    { topic: 'Сходство и различие', q: 'Почему при аналогии нужно искать не только сходства, но и различия?', a: ['Важное отличие может помешать перенести предполагаемый признак', 'Чтобы сравнение стало невозможным', 'Потому что любое различие автоматически доказывает обратное'], correct: 0, why: 'Различие имеет значение, когда оно связано с признаком, который мы хотим предположить.' },
    { topic: 'Применение', q: 'Два бумажных самолётика похожи, но у одного крылья сильно загнуты. Что разумно сделать, если интересует дальность полёта?', a: ['Испытать оба и учесть форму крыльев', 'Считать дальность одинаковой только по цвету бумаги', 'Объявить результат, не запуская самолётики'], correct: 0, why: 'Форма крыла может быть важным отличием, поэтому сравнение полезно проверить опытом.' },
    { topic: 'Вероятность', q: 'Даже если у предметов много общих признаков, что всё ещё возможно?', a: ['Важное различие или новый факт изменит вывод', 'Новый предмет точно совпадает со старым во всём', 'Проверка больше не нужна'], correct: 0, why: 'Аналогия остаётся вероятностной и может быть ослаблена существенным отличием.' },
    { topic: 'Главное правило', q: 'Какая последовательность действий лучше всего описывает осторожное рассуждение по аналогии?', a: ['Сравнить → предположить → проверить', 'Угадать → объявить доказанным → забыть', 'Найти любое совпадение → не учитывать вопрос'], correct: 0, why: 'Сравнение подсказывает предположение, а проверка помогает выяснить, верно ли оно.' },
    { topic: 'Пределы вывода', q: 'Два предмета похожи по цвету. Можно ли только на этом основании заключить, что они одинаково прочные?', a: ['Нет, цвет сам по себе не показывает прочность', 'Да, одинаковый цвет доказывает одинаковую прочность', 'Да, если предметы стоят рядом'], correct: 0, why: 'Цвет обычно не связан с прочностью; нужно сравнить подходящие свойства или испытать предметы.' }
];

const stages = [
    { id: 'mission-0', label: 'Что такое?' }, { id: 'mission-1', label: 'Схема' },
    { id: 'mission-2', label: 'Сходство' }, { id: 'mission-3', label: 'Различия' },
    { id: 'mission-4', label: 'Не доказано' }, { id: 'mission-5', label: 'Сила догадки' },
    { id: 'mission-6', label: 'Наука' }, { id: 'mission-7', label: 'Проверка' },
    { id: 'quiz', label: 'Испытание' }
];
const QUESTIONS_PER_GAME = 12;
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
        feedback.textContent = `${result.correct ? '⭐ Верно! ' : '💡 Попробуй ещё раз. '}${mission.explain}`;
        feedback.classList.add(result.correct ? 'correct' : 'incorrect');
        $('mission-next').disabled = !result.correct;
        $('mission-next').textContent = result.correct ? (missionIndex === missions.length - 1 ? 'К финальному испытанию!' : 'Следующая миссия') : 'Выбери правильный ответ';
    }, true);
    showScreen('mission-screen');
}

function renderDiagram(type) {
    const slot = $('mission-diagram');
    slot.innerHTML = '';
    slot.classList.toggle('is-hidden', !type);
    if (!type) return;
    const diagrams = {
        basic: '<p class="diagram-title">Два отдельных предмета и осторожный перенос признака</p><div class="analogy-flow" role="img" aria-label="Знакомый красный змей умеет ловить ветер; похожий синий змей, возможно, тоже умеет"><div class="analogy-object"><h3>🪁 Знакомый змей А</h3><div class="shared-traits"><span class="trait-chip">широкий</span><span class="trait-chip">лёгкий</span><span class="trait-chip">ловит ветер</span></div></div><div class="analogy-arrow">похож →</div><div class="analogy-object"><h3>🪁 Новый змей Б</h3><div class="shared-traits"><span class="trait-chip">широкий</span><span class="trait-chip">лёгкий</span><span class="trait-chip guess">ловит ветер?</span></div></div></div><p class="diagram-caption">Вопросительный знак напоминает: сходство подсказывает, но не доказывает.</p>',
        schema: '<p class="diagram-title">Схема: известное сходство → возможный признак</p><div class="analogy-flow" role="img" aria-label="Предмет А имеет признаки а, б, в и х; Б похож по а, б, в; возможно, у Б есть х"><div class="analogy-object"><h3>Предмет А — знаем</h3><div class="shared-traits"><span class="trait-chip">а</span><span class="trait-chip">б</span><span class="trait-chip">в</span><span class="trait-chip guess">х есть</span></div></div><div class="analogy-arrow">а, б, в →</div><div class="analogy-object"><h3>Предмет Б — предполагаем</h3><div class="shared-traits"><span class="trait-chip">а</span><span class="trait-chip">б</span><span class="trait-chip">в</span><span class="trait-chip guess">х возможно</span></div></div></div><p class="diagram-caption">«Есть» у А известно; «возможно» у Б — предположение.</p>',
        relevant: '<p class="diagram-title">Сравниваем то, что связано с вопросом о росте</p><div class="analogy-flow" role="img" aria-label="Для догадки о росте важны вид растения, почва и полив; цвет наклейки не важен"><div class="analogy-object"><h3>Подходящие признаки</h3><div class="shared-traits"><span class="trait-chip">вид растения</span><span class="trait-chip">почва</span><span class="trait-chip">полив</span></div><p>Могут влиять на рост</p></div><div class="analogy-arrow">важнее →</div><div class="analogy-object"><h3>Случайное совпадение</h3><div class="shared-traits"><span class="trait-chip guess">цвет наклейки</span></div><p>Почти не говорит о росте</p></div></div><p class="diagram-caption">Признак оценивают относительно вопроса, на который ищут ответ.</p>',
        difference: '<p class="diagram-title">Разные двигатели — важное отличие для вопроса об энергии</p><div class="analogy-flow" role="img" aria-label="Красная машинка работает от батареек, синяя — от заводного механизма; для движения это существенное различие"><div class="analogy-object"><h3>🚙 Машина А</h3><div class="shared-traits"><span class="trait-chip">батарейки</span><span class="trait-chip">ездит</span></div></div><div class="analogy-arrow">важно: моторы разные</div><div class="analogy-object"><h3>🚙 Машина Б</h3><div class="shared-traits"><span class="trait-chip guess">заводной ключ</span><span class="trait-chip">ездит</span></div></div></div><p class="diagram-caption">Общий цвет не отменяет различия, важного для движения.</p>',
        certainty: '<p class="diagram-title">Внешне похожи — внутри может быть по-разному</p><div class="analogy-flow" role="img" aria-label="В первой ракушке найдена жемчужина; во второй жемчужина лишь возможна и требует проверки"><div class="analogy-object"><h3>🐚 Ракушка А</h3><div class="shared-traits"><span class="trait-chip">похожа снаружи</span><span class="trait-chip">жемчужина найдена</span></div></div><div class="analogy-arrow">догадка →</div><div class="analogy-object"><h3>🐚 Ракушка Б</h3><div class="shared-traits"><span class="trait-chip">похожа снаружи</span><span class="trait-chip guess">жемчужина?</span></div></div></div><p class="diagram-caption">Скрытый признак нельзя объявить известным только по внешнему сходству.</p>',
        strength: '<p class="diagram-title">Сходства помогают выбрать, что исследовать</p><div class="analogy-flow" role="img" aria-label="Две похожие поляны имеют схожие деревья, почву, влажность и свет; грибы на второй поляне остаются предположением"><div class="analogy-object"><h3>🌲 Поляна А</h3><div class="shared-traits"><span class="trait-chip">почва</span><span class="trait-chip">влажность</span><span class="trait-chip">грибы найдены</span></div></div><div class="analogy-arrow">похожа →</div><div class="analogy-object"><h3>🌳 Поляна Б</h3><div class="shared-traits"><span class="trait-chip">почва</span><span class="trait-chip">влажность</span><span class="trait-chip guess">грибы?</span></div></div></div><p class="diagram-caption">Подходящие сходства дают причину поискать, а не уверенность без наблюдения.</p>',
        science: '<p class="diagram-title">Аналогия предлагает гипотезу для проверки</p><div class="analogy-flow" role="img" aria-label="Сходство состава Солнца и Земли подсказало гипотезу; наблюдения и измерения нужны для проверки"><div class="analogy-object"><h3>☀️ Солнце</h3><div class="shared-traits"><span class="trait-chip">изученный состав</span><span class="trait-chip">элемент найден</span></div></div><div class="analogy-arrow">похожи →</div><div class="analogy-object"><h3>🌍 Земля</h3><div class="shared-traits"><span class="trait-chip">состав отчасти сходен</span><span class="trait-chip guess">элемент?</span></div></div></div><p class="analogy-verdict">Гипотеза → наблюдение или опыт → проверенный вывод</p>',
        check: '<p class="diagram-title">Три шага исследователя</p><div class="analogy-flow" role="img" aria-label="Сравнить новый и знакомый предмет, осторожно предположить, испытать и сравнить результаты"><div class="analogy-object"><h3>1 · Сравни</h3><p>Найди сходства и важные различия</p></div><div class="analogy-arrow">→</div><div class="analogy-object"><h3>2 · Предположи</h3><p>Скажи «возможно»</p></div></div><div class="analogy-verdict">3 · Проверь наблюдением или опытом</div><p class="diagram-caption">Так догадка по аналогии превращается в вопрос для исследования.</p>'
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
    const result = window.CourseProgress.recordResult(10, { passed, mistakes: mistakes.length, score: correctCount, totalQuestions: selectedQuiz.length });
    if (passed) {
        window.CourseProgress.renderAward($('success-screen'), result, result.medalImproved);
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
