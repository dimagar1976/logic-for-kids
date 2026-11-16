/* Урок 7: четыре закона логического мышления. */
const missions = [
    {
        icon: '🧭', tag: 'МИССИЯ 1 · ЧЕТЫРЕ ЗАКОНА', title: 'Собери команду ясной мысли',
        story: 'В городе Мыслеграде открылась школа детективов. Чтобы не запутаться в загадках, команда пользуется четырьмя помощниками: Точностью, Согласованностью, Выбором и Уликой. Это детские имена четырёх законов логики.',
        rule: '<strong>Четыре закона помогают рассуждать:</strong> закон тождества — будь точен; закон противоречия — не утверждай одновременно несовместимое; закон исключённого третьего — проверь точное «да или нет»; закон достаточного основания — подкрепляй мысль уликой.',
        diagram: 'fourLaws', question: 'Какой помощник просит подкрепить ответ уликой или фактом?',
        options: ['Достаточное основание', 'Тождество', 'Исключённое третье'], answer: 0,
        explain: 'Достаточное основание напоминает: хорошее утверждение должно опираться на подходящий факт или проверенное правило.'
    },
    {
        icon: '🏷️', tag: 'МИССИЯ 2 · ЗАКОН ТОЖДЕСТВА', title: 'Одно слово — один смысл',
        story: 'Миша сказал: «Я видел ключ». Сначала он имел в виду ключ от двери, а потом стал доказывать, что видел ключ в музыкальной записи. Слово одно, а значения разные — слушатели запутались!',
        rule: '<strong>Закон тождества:</strong> в одном и том же рассуждении важное понятие нужно употреблять в одном смысле. Если слово может значить разное, уточни его. Это не запрещает словам иметь несколько значений вообще — важно не перескакивать между значениями незаметно.',
        diagram: 'sameWord', question: 'Как Мише сделать свою мысль понятной?',
        options: ['Уточнить, какой именно ключ он видел, и не менять смысл слова', 'Ничего не уточнять и говорить громче', 'Вместо ключа начать обсуждать замок'], answer: 0,
        explain: 'Уточнение значения слова помогает всем рассуждать об одном и том же.'
    },
    {
        icon: '🚦', tag: 'МИССИЯ 3 · ЗАКОН ПРОТИВОРЕЧИЯ', title: 'Не говори «да» и «нет» сразу',
        story: 'Лена проверила расписание и сказала: «В эту минуту кружок рисования идёт». А затем про тот же кружок, в ту же минуту и в том же смысле заявила: «Кружок рисования сейчас не идёт». Два сообщения столкнулись!',
        rule: '<strong>Закон противоречия:</strong> два точных противоположных высказывания не могут быть оба верными одновременно, если речь об одном предмете, времени и условии. Эти уточнения важны: кружок может идти утром, но не идти вечером.',
        diagram: 'contradiction', question: 'Что не так с двумя фразами Лены?',
        options: ['Они отрицают друг друга об одном кружке в одно время', 'Одна фраза о кружке, а другая о погоде', 'Они обязательно обе верны'], answer: 0,
        explain: 'При одинаковом времени и смысле кружок не может одновременно идти и не идти.'
    },
    {
        icon: '⚪', tag: 'МИССИЯ 4 · НЕ ВСЕ ПРОТИВОПОЛОЖНОСТИ', title: 'А если мяч серый?',
        story: 'Коля сказал: «Мяч белый». Оля ответила: «Мяч чёрный». Но мяч оказался серым. Оба ответа неверны, хотя белый и чёрный — противоположные цвета.',
        rule: '<strong>Важно:</strong> закон противоречия говорит, что два несовместимых суждения не могут быть оба истинными. Он <strong>не говорит</strong>, что одно из них обязательно истинно. Иногда оба ответа неверны — нужно проверить другие варианты.',
        diagram: 'bothFalse', question: 'Какой вывод верен, если мяч серый?',
        options: ['«Белый» и «чёрный» — оба ответа неверны', 'Оба ответа обязательно верны', 'Серый цвет невозможен'], answer: 0,
        explain: 'У предмета может быть третий цвет. Не всякая пара противоположных признаков охватывает все возможности.'
    },
    {
        icon: '✅', tag: 'МИССИЯ 5 · ЗАКОН ИСКЛЮЧЁННОГО ТРЕТЬЕГО', title: 'Точная загадка: да или нет',
        story: 'Карточка сейчас лежит на столе. Она либо лежит на столе, либо не лежит там. Мы можем пока не знать, где она, но сама карточка всё равно находится в одном из этих двух положений.',
        rule: '<strong>Закон исключённого третьего:</strong> точное высказывание и его точное отрицание не оставляют третьего варианта. «Карточка лежит на столе» или «Карточка не лежит на столе». «Я пока не знаю» — это наше незнание, а не третий ответ о карточке.',
        diagram: 'yesNo', question: 'Что значит «третьего не дано» в этом примере?',
        options: ['Карточка лежит на столе или не лежит; незнание не меняет этих вариантов', 'Карточка обязательно лежит сразу и на столе, и под ним', 'Если мы не знаем, карточки не существует'], answer: 0,
        explain: 'Есть два точных варианта, даже если сыщик ещё не выяснил, какой из них верен.'
    },
    {
        icon: '🔍', tag: 'МИССИЯ 6 · НЕ ПУТАЙ ДВА ЗАКОНА', title: 'Противоположные — не всегда «да или нет»',
        story: 'О ком-то сказали: «Все ребята в отряде умеют плавать». Противоположная фраза: «Ни один не умеет». Между ними может быть третий случай: умеют некоторые. А вот «Аня сегодня пришла» и «Аня сегодня не пришла» — точные отрицания друг друга.',
        rule: 'Для <strong>закона исключённого третьего</strong> нужны именно точное высказывание и его отрицание. Между двумя просто противоположными ответами может быть промежуточный вариант. Не применяй правило «да/нет» к любой паре разных фраз.',
        diagram: 'threeCases', question: 'Какой пример показывает точное высказывание и его отрицание?',
        options: ['«Аня пришла» и «Аня не пришла»', '«Все умеют плавать» и «Никто не умеет плавать»', '«Умеет плавать» и «любит читать»'], answer: 0,
        // ИСПРАВЛЕНО: усиление маркеров — выделено слово «не» как знак точного отрицания и сопоставлено с противоположностями.
        explain: 'Секрет в слове «не». «Пришла» и «НЕ пришла» — это точное отрицание (третьего нет). А «все» и «никто» — просто противоположности, между которыми есть «некоторые».'
    },
    {
        icon: '🧾', tag: 'МИССИЯ 7 · ЗАКОН ДОСТАТОЧНОГО ОСНОВАНИЯ', title: 'Найди хорошую улику',
        story: 'Петя говорит: «За окном дождь». Как проверить? Можно посмотреть в окно и увидеть капли на дорожке. А фраза «Дождь идёт, потому что я так чувствую» сама по себе ещё не подтверждает ответ.',
        rule: '<strong>Закон достаточного основания:</strong> истинную мысль нужно обосновать — привести подходящие факты, наблюдение или надёжное правило. Основание должно действительно помогать проверить именно это утверждение.',
        diagram: 'evidence', question: 'Какая улика лучше всего подтверждает, что сейчас идёт дождь?',
        options: ['Посмотреть в окно и увидеть, как капли падают на землю', 'Сказать: «Мне кажется, и этого достаточно»', 'Рассказать, что вчера было солнечно'], answer: 0,
        explain: 'Наблюдение за дождём прямо относится к проверяемой мысли и служит хорошим основанием.'
    },
    {
        icon: '🧩', tag: 'МИССИЯ 8 · ОСНОВАНИЕ И ПРИЧИНА', title: 'Улика — не всегда причина',
        story: 'Термометр показывает, что в комнате тепло. Это хорошее основание поверить в утверждение «В комнате тепло». Но термометр не нагрел комнату: причиной тепла может быть батарея.',
        // ИСПРАВЛЕНО: усиление маркеров — добавлена короткая формула, различающая основание и причину.
        rule: '<strong>Логическое основание</strong> — то, на что мы ссылаемся, чтобы подтвердить мысль. <strong>Причина события</strong> — то, что вызвало само событие. Не путай свидетельство о факте с тем, что этот факт произвело. Основание отвечает на вопрос «Откуда я это знаю?», а причина — на вопрос «Почему это случилось?»',
        diagram: 'reasonCause', question: 'Что является основанием для мысли «В комнате тепло»?',
        options: ['Показание термометра', 'Само слово «тепло»', 'То, что термометр стоит в комнате'], answer: 0,
        explain: 'Термометр помогает узнать температуру. А нагреватель, например батарея, может быть причиной тепла.'
    }
];

const quizQuestions = [
    { topic: 'Четыре закона', q: 'Какой закон напоминает: «Подкрепи мысль подходящим фактом»?', a: ['Закон достаточного основания', 'Закон тождества', 'Закон исключённого третьего'], correct: 0, why: 'Основание — подходящая улика, правило или проверенное знание.' },
    { topic: 'Закон тождества', q: 'Как избежать путаницы, если слово имеет несколько значений?', a: ['Уточнить нужное значение и пользоваться им одинаково в этом рассуждении', 'Незаметно менять значение слова', 'Больше не использовать это слово никогда'], correct: 0, why: 'Закон тождества требует сохранять один и тот же смысл понятия в рассуждении.' },
    { topic: 'Закон тождества', q: 'Почему спорщики запутались, если один говорил о ключе от двери, а другой — о музыкальном ключе?', a: ['Слово «ключ» употребили в разных смыслах', 'Они говорили об одном и том же замке', 'Оба забыли алфавит'], correct: 0, why: 'Одинаково звучащее слово может обозначать разные вещи — смысл нужно уточнять.' },
    { topic: 'Закон противоречия', q: 'Когда два противоположных ответа не могут быть одновременно верными?', a: ['Когда они относятся к одному предмету, времени и условию', 'Даже если говорят о разных предметах и временах', 'Только если оба ответа очень длинные'], correct: 0, why: 'Важно проверить, что предмет, время и отношение действительно одинаковые.' },
    { topic: 'Противоположные ответы', q: 'Мяч серый. Что верно про ответы «мяч белый» и «мяч чёрный»?', a: ['Оба ответа неверны', 'Оба ответа истинны', 'Один из них обязательно истинен'], correct: 0, why: 'Закон противоречия запрещает двум несовместимым ответам быть оба истинными, но они могут быть оба ложными.' },
    { topic: 'Не делай слишком широкий вывод', q: '«Все дети в группе любят рисовать» и «Ни один ребёнок не любит рисовать». Может ли быть третий вариант?', a: ['Да: рисовать могут любить некоторые дети', 'Нет, всегда истинно одно из этих двух', 'Да: группа обязательно пустая'], correct: 0, why: 'Эти фразы противоположны, но не являются точными отрицаниями друг друга.' },
    { topic: 'Закон исключённого третьего', q: 'Карточка сейчас лежит на столе или не лежит на столе. Что важно помнить?', a: ['Это два точных варианта; наше незнание — не третий вариант положения карточки', 'Если мы не знаем, карточка одновременно везде', 'Всегда существует третье место между на столе и не на столе'], correct: 0, why: 'Точное высказывание и его отрицание не оставляют третьего варианта, хотя мы можем ещё не знать ответ.' },
    { topic: 'Исключённое третье', q: 'Какая пара — точное высказывание и его отрицание?', a: ['«Дверь закрыта» и «Дверь не закрыта»', '«Дверь закрыта» и «Дверь синяя»', '«Все коты спят» и «Некоторые коты спят»'], correct: 0, why: 'Вторая фраза в первой паре точно отрицает первую.' },
    { topic: 'Достаточное основание', q: 'Что лучше обосновывает мысль «На улице снег»?', a: ['Посмотреть в окно и увидеть снег на земле', 'Сказать «я просто уверен»', 'Вспомнить, что прошлой зимой шёл снег'], correct: 0, why: 'Непосредственное наблюдение подходит к утверждению о том, что происходит сейчас.' },
    { topic: 'Достаточное основание', q: 'Какое основание подходит к мысли «Растение выросло»?', a: ['Сравнить его с прежним измерением и увидеть, что оно стало выше', 'Сказать, что горшок красивый', 'Посчитать листья у соседнего растения'], correct: 0, why: 'Сравнение измерений прямо проверяет, стало ли это растение выше.' },
    { topic: 'Основание и причина', q: 'Термометр показывает тепло в комнате. Что делает показание термометра?', a: ['Служит основанием узнать, что в комнате тепло', 'Обязательно нагревает комнату', 'Доказывает, что батареи нет'], correct: 0, why: 'Показание помогает подтвердить мысль, но причиной тепла может быть отопление.' },
    { topic: 'Логические законы', q: 'Могут ли сами четыре закона сообщить, какой ответ верен в незнакомой загадке?', a: ['Нет, нужно ещё проверить факты о самой загадке', 'Да, они заменяют наблюдение и знания', 'Да, если произнести их по порядку'], correct: 0, why: 'Законы помогают мыслить правильно, но истинность конкретного ответа проверяют по предмету и фактам.' },
    { topic: 'Незнание и истина', q: 'Ты пока не знаешь, закрыто ли окно. Что можно сказать?', a: ['Ответ ещё нужно проверить; окно всё равно закрыто или не закрыто', 'Незнание — это новое состояние окна', 'Окно не существует, пока мы не проверили'], correct: 0, why: 'Незнание относится к нам, а не создаёт третье состояние окна.' },
    { topic: 'Проверка рассуждения', q: 'Два человека говорят о разных днях. Один говорит «сегодня тепло», другой — «сегодня не тепло». Что проверить?', a: ['Один ли это день и одинаковый ли смысл слова «тепло»', 'Кто говорит громче', 'Сколько букв в слове «сегодня»'], correct: 0, why: 'Прежде чем искать противоречие, уточни время и смысл слов.' },
    { topic: 'Четыре закона', q: 'Какое правило помогает не менять незаметно смысл слова во время спора?', a: ['Закон тождества', 'Закон достаточного основания', 'Закон исключённого третьего'], correct: 0, why: 'Тождество помогает сохранять точность и определённость мысли.' },
    { topic: 'Четыре закона', q: 'Какой закон говорит, что точное утверждение и его отрицание не могут быть оба ложными?', a: ['Закон исключённого третьего', 'Закон достаточного основания', 'Закон тождества'], correct: 0, why: 'Для двух точных противоречащих суждений один вариант истинен, а другой ложен.' },
    { topic: 'Не путай законы', q: '«Все ребята пришли» и «Никто не пришёл». Что может быть верно?', a: ['Пришли некоторые ребята — это третий вариант', 'Оба утверждения обязательно верны', 'Любая пара противоположных фраз имеет только два варианта'], correct: 0, why: 'Исключённое третье относится к точному отрицанию, а не к любой паре противоположных фраз.' },
    { topic: 'Хорошее основание', q: 'Что делает основание хорошим?', a: ['Оно действительно относится к утверждению и помогает его проверить', 'Оно звучит уверенно, даже если не связано с вопросом', 'Его повторили много раз без проверки'], correct: 0, why: 'Основание должно поддерживать именно ту мысль, которую мы проверяем.' }
];

const stages = [
    { id: 'mission-0', label: 'Четыре закона' }, { id: 'mission-1', label: 'Точность' },
    { id: 'mission-2', label: 'Противоречие' }, { id: 'mission-3', label: 'Два неверных' },
    { id: 'mission-4', label: 'Да или нет' }, { id: 'mission-5', label: 'Не путай' },
    { id: 'mission-6', label: 'Улики' }, { id: 'mission-7', label: 'Причина' },
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
        fourLaws: '<p class="diagram-title">Четыре помощника правильной мысли</p><ul class="checklist" role="img" aria-label="Точность: одно слово — один смысл. Согласованность: не утверждай несовместимое одновременно. Выбор: точное высказывание или его отрицание. Улика: обоснуй мысль"><li>🏷️ Точность — не путай смысл слов</li><li>🚦 Согласованность — не говори сразу «да» и «нет»</li><li>✅ Выбор — точное «да» или его «нет»</li><li>🔍 Улика — найди основание мысли</li></ul>',
        sameWord: '<p class="diagram-title">Одно слово — разные значения</p><div class="compare-grid" role="img" aria-label="Ключ от двери и музыкальный ключ — разные значения слова ключ"><div class="compare-card">🗝️ Ключ от двери<small>Помогает открыть замок</small></div><div class="compare-card">🎼 Музыкальный ключ<small>Знак в записи музыки</small></div></div><p class="diagram-caption">Уточни, о каком значении говоришь, и сохраняй его в этом рассуждении.</p>',
        contradiction: '<p class="diagram-title">Один кружок · одна минута · два несовместимых ответа</p><div class="compare-grid" role="img" aria-label="Кружок сейчас идёт и кружок сейчас не идёт — несовместимые утверждения об одном времени"><div class="compare-card">✅ Кружок сейчас идёт</div><div class="compare-card">❌ Кружок сейчас не идёт</div></div><p class="diagram-caption">Проверь: предмет, время и условие одинаковы?</p>',
        bothFalse: '<p class="diagram-title">Противоположные цвета не закрывают все варианты</p><div class="flow-row" role="img" aria-label="Мяч может быть белым, чёрным или серым; если он серый, два первых ответа оба неверны"><span class="flow-box">Белый?</span><span class="flow-box">Чёрный?</span><span class="flow-arrow">→</span><span class="flow-box">Серый!</span></div><p class="diagram-caption">Два несовместимых ответа не могут быть оба верны — но могут быть оба неверны.</p>',
        yesNo: '<p class="diagram-title">Точное высказывание или его отрицание</p><div class="truth-pair" role="img" aria-label="Карточка лежит на столе или карточка не лежит на столе — два точных варианта"><div class="truth-card">Карточка лежит на столе</div><span class="truth-or">ИЛИ</span><div class="truth-card no">Карточка НЕ лежит на столе</div></div><p class="diagram-caption">«Не знаю» — это состояние сыщика, а не третий вариант для карточки.</p>',
        threeCases: '<p class="diagram-title">Не всякие две противоположности — точное «да/нет»</p><div class="flow-row" role="img" aria-label="Все пришли; некоторые пришли; никто не пришёл — у двух крайних утверждений есть промежуточный вариант"><span class="flow-box">Все пришли</span><span class="flow-arrow">↔</span><span class="flow-box">Некоторые пришли</span><span class="flow-arrow">↔</span><span class="flow-box">Никто не пришёл</span></div><p class="diagram-caption">«Некоторые пришли» показывает, почему нельзя смешивать противоположность с точным отрицанием.</p>',
        evidence: '<p class="diagram-title">Мысль + подходящая улика = хорошее обоснование</p><div class="flow-row" role="img" aria-label="Утверждение: идёт дождь; улика: видны падающие капли; значит, утверждение хорошо подтверждено"><span class="flow-box">Идёт дождь</span><span class="flow-arrow">←</span><span class="flow-box">Вижу капли за окном</span></div><p class="diagram-caption">Улика должна относиться именно к тому, что мы проверяем.</p>',
        reasonCause: '<p class="diagram-title">Основание для мысли ≠ причина события</p><div class="compare-grid" role="img" aria-label="Термометр показывает тепло и служит основанием для мысли; батарея может быть причиной тепла"><div class="compare-card">🌡️ Термометр<small>Показывает и подтверждает: в комнате тепло</small></div><div class="compare-card">♨️ Батарея<small>Может быть причиной: нагревает комнату</small></div></div>'
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
