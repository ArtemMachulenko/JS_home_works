{
    // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
    const text = document.getElementById('text');
    const hideElemBtn = document.getElementById('hideElemBtn');

    hideElemBtn.addEventListener('click', e => {
        if (text) text.style.display = 'none';
    });

    //---------------------------------------------------------
    // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
    const btnHideHirself = document.getElementById('btnHideHirself');

    btnHideHirself.addEventListener('click', e => {
        btnHideHirself.style.display = 'none';
    });

    //---------------------------------------------------------
    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    const inputAge = document.getElementById('inputAge');

    inputAge.addEventListener('input', e => {
        if (inputAge.value < 0) inputAge.value = 0;
    });

    const btnCheckAge = document.getElementById('btnCheckAge');

    btnCheckAge.addEventListener('click', e => {
        if (!inputAge.value.length) return;

        if (+inputAge.value < 18) {
            alert('Age less than 18');
        }
        else {
            alert(`Age ${inputAge.value}`);
        }
    });
    //---------------------------------------------------------
    // - Создайте меню, которое раскрывается/сворачивается при клике
    const menu = document.getElementById('menu');

    menu.addEventListener('click', e => {
        e.target.closest('li').lastElementChild.classList.toggle('open');
    });

    //---------------------------------------------------------
    // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.
    const comments = [
        {title : 'lorem 1', body:'lorem ipsum dolo sit ameti'},
        {title : 'lorem 2', body:'lorem ipsum dolo sit ameti'},
        {title : 'lorem 3', body:'lorem ipsum dolo sit ameti'},
        {title : 'lorem 4', body:'lorem ipsum dolo sit ameti'},
        {title : 'lorem 5', body:'lorem ipsum dolo sit ameti'},
    ];

    const containerComments = document.getElementById('containerComments');

    for (const comment of comments) {
        const comBox = document.createElement('div');
        const comTitle = document.createElement('span');
        const comBody = document.createElement('span');
        const btnHideComBody = document.createElement('button');

        comTitle.textContent = comment.title;
        comBody.textContent = comment.body;
        btnHideComBody.textContent = 'Hide body';

        btnHideComBody.addEventListener('click', e => {
            comBody.style.display = 'none';
        });

        comBox.append(comTitle,comBody,btnHideComBody);
        containerComments.append(comBox);
    }

    //------------------------------------------------------
    // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
    // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
    const showFormsInfBtn = document.getElementById('showFormsInfBtn');

    showFormsInfBtn.addEventListener('click', e => {
        const formOne = document.forms.formOne;
        const formTwo = document.forms.formTwo;
        console.log (`
        Form 1: first name: ${formOne.firstName.value}, last name: ${formOne.lastName.value}
        Form 2: first name: ${formTwo.firstName.value}, last name: ${formTwo.lastName.value}                      
        `);
    });
    //--------------------------------------------------
    // - Створити функцію, яка генерує таблицю.
    // Перший аргумент визначає кількість строк.
    // Другий параметр визначає кліькіть ячеєк в кожній строці.
    // Третій параметр визначає елемент в який потрібно таблицю додати.
    // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

    const table = document.getElementById('table');

    function createTable (rows,cells,content,table) {
        const tBody = document.createElement('tbody');

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < cells; j++) {
                const td = document.createElement('td');
                td.textContent = content;
                tr.append(td)
            }
            tBody.append(tr);
        }
        table.append(tBody);
    }

    // createTable(3,3,table);//test
    const formThree = document.forms.formThree;
    const btnCreateTable = formThree.createTableBtn;
    const rows = formThree.rows;
    const cells = formThree.cells;
    const content = formThree.cellContent;

    rows.addEventListener('input', e => {
        if (+rows.value < 0) rows.value = 0;
    });

    cells.addEventListener('input', e => {
        if (+cells.value < 0) cells.value = 0;
    });

    btnCreateTable.addEventListener('click', e => {
        if (table.children.length) {
            table.innerHTML = '';
        }
        let rw = +rows.value;
        let cl = +cells.value;
        let cont = content.value;
        createTable(rw,cl,cont,table);
    });

    //----------------------------------------------
    // (Додатковачастина для завдання)
    // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
    const gallery = document.getElementById('gallery');
    const btnPrev = document.querySelector('.arrow-prev');
    const btnNext = document.querySelector('.arrow-next');
    const imagesContainer = document.querySelector('.images-container');
    const images = imagesContainer.querySelectorAll('li');

    const width = 120;
    const count = 3;
    let position = 0;

    btnPrev.addEventListener('click', e => {
        position = Math.min(position + width * count, 0);
        imagesContainer.style.marginLeft = position + 'px';
    });

    btnNext.addEventListener('click', e => {
        position = Math.max(position - width * count, -width * (images.length - count));
        imagesContainer.style.marginLeft = position + 'px';
    });
    //-----------------------------------------------
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
    // кинути алерт з попередженням.
    // Перевірку робити при натисканні на кнопку
    const obsceneWords = [
        'мужской_репродуктивный_орган',
        'женский_репродуктивный_орган',
        'женщина_неразборчивая_в_половых_связях',
        'мужчина_с_нетрадиционной_ориентацией',
        'самка_собаки',
    ];

    const formFour = document.forms.formFour;
    const inputWord = formFour.word;
    const btnCheckWord = formFour.checkWordObscene;

    btnCheckWord.addEventListener('click', e => {
        const word = inputWord.value;

        if (obsceneWords.includes(word)) {
            alert('Вы ввели нецензурное слово!');
        }

        e.preventDefault();
    })
    //-------------------------------------------
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку
    const formFive = document.forms.formFive;
    const inputWordTwo = formFive.wordInStr;
    const btnCheckWordinStr = formFive.checkWordObsceneInStr;

    btnCheckWordinStr.addEventListener('click', e => {
        const str = inputWordTwo.value;

        for (const obsceneWord of obsceneWords) {
            if (str.includes(obsceneWord)) {
                alert('Вы ввели нецензурное слово!');
            }
        }

        e.preventDefault();
    });
    // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
    // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

    //решение в файле rules.html

    //---------------------------------------------------------
    // -- взять массив пользователей
    // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
    // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
    // 2й - оставляет старше 29 лет включительно
    // 3й - оставляет тех у кого город киев
    // Данные выводить в документ
    let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
    ];

    const formSix = document.forms.formSix;
    const usersContainer = document.getElementById('usersContainer');

    const filters = {
        filterStatus: (user) => {return !user.status},
        filterAge: (user) => {return user.age >= 29},
        filterCity: (user) => {return user.address.city === 'Kyiv'}
    };

    const currentFilters = [];
    let usersWithAddressFilters = [];

    formSix.addEventListener('change', e => {
        const filterType = e.target.id;
        if (!filterType) return;

        if (e.target.checked) {
            currentFilters.push(filterType);
        }
        else {
            let index = currentFilters.indexOf(filterType);
            if (index < 0) return;
            currentFilters.splice(index, 1)
        }
    });

    formSix.addEventListener('change', e => {
        if (e.target.checked) {
            usersWithAddressFilters = [...usersWithAddress];
            for (const filter of currentFilters) {
                usersWithAddressFilters = usersWithAddressFilters.filter(filters[filter]);
            }
            createUsers(usersWithAddressFilters, usersContainer);
        }
        else {
            usersWithAddressFilters = [...usersWithAddress];
            for (const filter of currentFilters) {
                usersWithAddressFilters = usersWithAddressFilters.filter(filters[filter]);
            }
            createUsers(usersWithAddressFilters, usersContainer);
        }
    });

    function createUsers(users, container) {
        if (container.children.length) {
            container.innerHTML = '';
        }

        for (const user of users) {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(user);
            container.append(div);
        }
    }

    createUsers(usersWithAddress,usersContainer);


    //----------------------------------------------------------
    // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
    // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
    // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
    // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


    // решение в файле recursion_task.html

    //------------------------------------------------------------
    // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
    const selectText = document.getElementById('select-text');
    const btnReset = document.getElementById('reset');
    const form = document.forms.formSeven;
    let currentTagWrap = document.querySelector('input[type=radio]:checked').id;

    document.addEventListener('change', (e) => {
        currentTagWrap = e.target.id;
    });

    selectText.addEventListener('mouseup', (e) => {
        const selection = document.getSelection();

        if (!selection.toString().length) return; //если ничего не выделено -> выход

        const range = selection.getRangeAt(0); //получить объект выделения
        const tag = document.createElement(currentTagWrap);

        try {
            range.surroundContents(tag); //обернуть выделеный текст в тег
        }
        catch(e) {
            alert('Already applied to this element!\nTry another!'); //не оборачивать уже обернутый
        }

        selection.removeAllRanges(); //удалить выделение
    });
}