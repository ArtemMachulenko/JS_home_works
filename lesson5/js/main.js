{
    // -  Створити функцію конструктор для об'єкту який описує теги
    // Властивості
    // -назва тегу
    // - опис його дій
    // - масив з атрибутами (2-3 атрибути максимум)
    // Кожен атрибут описати як окремий який буде містити
    // -назву атрибуту
    // -опис дії атрибуту
    // інформацію брати з htmlbook.ru
    //
    // Таким чином описати теги
    // -a
    // -div
    // -h1
    // -span
    // -input
    // -form
    // -option
    // -selects
    // Приклад результату
    // {
    //     titleOfTag: 'area',
    //     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    //     attrs: [
    //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    //     {/*some props and values*/},
    //     {/*...*/},
    //     {/*...*/},
    // ]
    //
    // }
    // ==============================================
    {
        function A() {
            this.tagName = 'A';
            this.action = 'Тег <a> предназначен для создания ссылок.';
            this.attrs = [
                {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
                {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
                {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
            ];
        }

        function Div() {
            this.tagName = 'DIV';
            this.action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
            this.attrs = [
                {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
                {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
                {
                    titleOfAttr: 'class',
                    actionOfAttr: 'Задает стилевой класс, который позволяет связать тег со стилевым оформлением'
                },
            ];
        }

        function H1() {
            this.tagName = 'H1';
            this.action = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня';
            this.attrs = [
                {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка.'},
                {
                    titleOfAttr: 'id',
                    actionOfAttr: 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля.'
                },
                {
                    titleOfAttr: 'lang',
                    actionOfAttr: 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'
                },
            ];
        }

        function Span() {
            this.tagName = 'SPAN';
            this.action = 'Тег <span> предназначен для определения строчных элементов документа';
            this.attrs = [
                {
                    titleOfAttr: 'contenteditable',
                    actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
                },
                {
                    titleOfAttr: 'spellcheck',
                    actionOfAttr: 'Указывает браузеру проверять или нет правописание и грамматику в тексте.'
                },
                {
                    titleOfAttr: 'dir',
                    actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'
                },
            ];
        }

        function Input() {
            this.tagName = 'INPUT';
            this.action = 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков';
            this.attrs = [
                {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
                {titleOfAttr: 'value', actionOfAttr: 'Значение элемента.'},
                {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'},
            ];
        }

        function Form() {
            this.tagName = 'FORM';
            this.action = 'Тег <form> устанавливает форму на веб-странице,предназначенную для обмена данными между пользователем и сервером';
            this.attrs = [
                {
                    titleOfAttr: 'action',
                    actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
                },
                {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
                {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
            ];
        }

        function Option() {
            this.tagName = 'OPTION';
            this.action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
            this.attrs = [
                {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
                {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
                {
                    titleOfAttr: 'value',
                    actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
                },
            ];
        }

        function Select() {
            this.tagName = 'SELECT';
            this.action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.';
            this.attrs = [
                {
                    titleOfAttr: 'multiple',
                    actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
                },
                {
                    titleOfAttr: 'autofocus',
                    actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
                },
                {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
            ];
        }

    }
    // ==============================================
    //     -  Створити класс  для об'єкту який описує теги
    // Властивості
    // -назва тегу
    // - опис його дій
    // - масив з атрибутами (2-3 атрибути максимум)
    // Кожен атрибут описати як окремий який буде містити
    // -назву атрибуту
    // -опис дії атрибуту
    // інформацію брати з htmlbook.ru
    //
    // Таким чином описати теги
    // -a
    // -div
    // -h1
    // -span
    // -input
    // -form
    // -option
    // -select
    // Приклад результату
    // {
    //     titleOfTag: 'area',
    //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    //     attrs: [
    //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    //     {/*some props and values*/},
    //     {/*...*/},
    //     {/*...*/},
    // ]
    //
    // }
    // ==============================================
    {
        class A {
            constructor() {
                this.tagName = 'A';
                this.action = 'Тег <a> предназначен для создания ссылок.';
                this.attrs = [
                    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
                    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
                    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
                ];
            }
        }

        class Div {
            constructor() {
                this.tagName = 'DIV';
                this.action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
                this.attrs = [
                    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
                    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
                    {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать тег со стилевым оформлением'},
                ];
            }
        }

        class H1 {
            constructor() {
                this.tagName = 'H1';
                this.action = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня';
                this.attrs = [
                    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка.'},
                    {titleOfAttr: 'id', actionOfAttr: 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля.'},
                    {titleOfAttr: 'lang', actionOfAttr: 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'},
                ];
            }
        }

        class Span {
            constructor() {
                this.tagName = 'SPAN';
                this.action = 'Тег <span> предназначен для определения строчных элементов документа';
                this.attrs = [
                    {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
                    {titleOfAttr: 'spellcheck', actionOfAttr: 'Указывает браузеру проверять или нет правописание и грамматику в тексте.'},
                    {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
                ];
            }
        }

        class Input {
            constructor() {
                this.tagName = 'INPUT';
                this.action = 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков';
                this.attrs = [
                    {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
                    {titleOfAttr: 'value', actionOfAttr: 'Значение элемента.'},
                    {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'},
                ];
            }
        }

        class Form {
            constructor() {
                this.tagName = 'FORM';
                this.action = 'Тег <form> устанавливает форму на веб-странице,предназначенную для обмена данными между пользователем и сервером';
                this.attrs = [
                    {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
                    {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
                    {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
                ];
            }
        }

        class Option {
            constructor() {
                this.tagName = 'OPTION';
                this.action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
                this.attrs = [
                    {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
                    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
                    {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
                ];
            }
        }

        class Select {
            constructor() {
                this.tagName = 'SELECT';
                this.action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.';
                this.attrs = [
                    {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
                    {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
                    {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
                ];
            }
        }

    }
    // ==============================================
    //     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    // ==============================================
    const car = {
        model: '2101',
        manufacturer: 'VAZ',
        year: 1972,
        maxSpeed: 130,
        engineCapacity: 1.1,
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        },
        info() {
            console.log(this);
        },
        increaseMaxSpeed(newSpeed) {
            this.maxSpeed = newSpeed;
        },
        changeYear(newValue) {
            this.year = newValue;
        },
        addDriver(driver) {
            this.driver = driver;
        }
    };

    // ==============================================
    //     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    // ==============================================
    {
        function Car() {
            this.model = '2101';
            this.manufacturer = 'VAZ';
            this.year = 1972;
            this.maxSpeed = 130;
            this.engineCapacity = 1.1;

            this.drive = function () {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            };
            this.info = function () {
                console.log(this);
            };
            this.increaseMaxSpeed = function (newSpeed) {
                this.maxSpeed = newSpeed;
            };
            this.changeYear = function (newValue) {
                this.year = newValue;
            };
            this.addDriver = function (driver) {
                this.driver = driver;
            };
        }

    }
    // ==============================================
    //     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    // ==============================================
    {
        class Car {
            constructor() {
                this.model = '2101';
                this.manufacturer = 'VAZ';
                this.year = 1972;
                this.maxSpeed = 130;
                this.engineCapacity = 1.1;
            }

            drive() {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            }

            info() {
                console.log(this);
            }

            increaseMaxSpeed(newSpeed) {
                this.maxSpeed = newSpeed;
            }

            changeYear(newValue) {
                this.year = newValue;
            }

            addDriver(driver) {
                this.driver = driver;
            }
        }

    }
    // ==============================================
    // -створити класс попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
    // ==============================================
    {
        class Cinderella {
            constructor(...args) {
                [this.name, this.age, this.footSize] = args;
            }
        }

        const cinderells = [];

        for (let i = 0; i < 10; i++) {
            const START_FOOT_SIZE = 35;
            const START_AGE = 16;
            cinderells.push(new Cinderella(`Cinderella${i + 1}`, START_AGE + i, START_FOOT_SIZE + i));
        }

        //console.log(cinderells);

        class Prince {
            constructor(...args) {
                [this.name, this.age, this.findedFootSize] = args;
            }
        }

        const prince = new Prince('Vasya', 16, 42);

        for (const cinderell of cinderells) {
            if (prince.findedFootSize === cinderell.footSize) {
                console.log(`Prince ${prince.name} found a shoe ${cinderell.name}.`); //Prince Vasya found a shoe Cinderella9.
            }
        }

    }
    // ==============================================
    // -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
    // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
    // ==============================================
    {
        function Cinderella(...args){
            [this.name, this.age, this.footSize] = args;
        }

        const cinderells = [];

        for (let i = 0; i < 10; i++) {
            const START_FOOT_SIZE = 35;
            const START_AGE = 16;
            cinderells.push(new Cinderella(`Cinderella${i + 1}`, START_AGE + i, START_FOOT_SIZE + i));
        }

        // console.log(cinderells);
        function Prince(...args){
            [this.name, this.age, this.findedFootSize] = args;
            this.findCinderella = function(cinderellsArr) {
                for (const cinderell of cinderellsArr) {
                    if (this.findedFootSize === cinderell.footSize) {
                        console.log(`Prince ${this.name} found a shoe ${cinderell.name}.`)
                    }
                }
            }
        }

        const prince = new Prince('Petya', 16, 43);
        prince.findCinderella(cinderells); //Prince Petya found a shoe Cinderella9.

    }
}