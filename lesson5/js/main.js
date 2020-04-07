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
        function DescribeTag(tagName, action, attrs) {
            this.tagName = tagName;
            this.action = action;
            this.attrs = attrs;
        }

        const a = new DescribeTag('A','Тег <a> предназначен для создания ссылок.', [
            {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
            {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'}
        ]);

        const div = new DescribeTag('DIV','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
            {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
            {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать тег со стилевым оформлением'}
        ]);

        const h1 = new DescribeTag('H1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня',  [
            {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка.'},
            {titleOfAttr: 'id', actionOfAttr: 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля.'},
            {titleOfAttr: 'lang', actionOfAttr: 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'}
        ]);

        const span = new DescribeTag('SPAN', 'Тег <span> предназначен для определения строчных элементов документа',  [
            {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
            {titleOfAttr: 'spellcheck', actionOfAttr: 'Указывает браузеру проверять или нет правописание и грамматику в тексте.'},
            {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'}
        ]);

        const input = new DescribeTag('INPUT', 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', [
            {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
            {titleOfAttr: 'value', actionOfAttr: 'Значение элемента.'},
            {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'}
        ]);

        const form = new DescribeTag('FORM', 'Тег <form> устанавливает форму на веб-странице,предназначенную для обмена данными между пользователем и сервером', [
            {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
            {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
            {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'}
        ]);

        const option = new DescribeTag('OPTION', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [
            {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
            {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
            {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
        ]);

        const select = new DescribeTag('SELECT', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.', [
            {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
            {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
            {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
        ]);

        // console.log(a,div,h1,span,input,form,option,select);

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
        class DescribeTag {
            constructor(tagName, action, attrs) {
                this.tagName = tagName;
                this.action = action;
                this.attrs = attrs;
            }
        }

        const a = new DescribeTag('A','Тег <a> предназначен для создания ссылок.', [
            {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
            {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'}
        ]);

        const div = new DescribeTag('DIV','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
            {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
            {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать тег со стилевым оформлением'}
        ]);

        const h1 = new DescribeTag('H1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня',  [
            {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание заголовка.'},
            {titleOfAttr: 'id', actionOfAttr: 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля.'},
            {titleOfAttr: 'lang', actionOfAttr: 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'}
        ]);

        const span = new DescribeTag('SPAN', 'Тег <span> предназначен для определения строчных элементов документа',  [
            {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
            {titleOfAttr: 'spellcheck', actionOfAttr: 'Указывает браузеру проверять или нет правописание и грамматику в тексте.'},
            {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'}
        ]);

        const input = new DescribeTag('INPUT', 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', [
            {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
            {titleOfAttr: 'value', actionOfAttr: 'Значение элемента.'},
            {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'}
        ]);

        const form = new DescribeTag('FORM', 'Тег <form> устанавливает форму на веб-странице,предназначенную для обмена данными между пользователем и сервером', [
            {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
            {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
            {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'}
        ]);

        const option = new DescribeTag('OPTION', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [
            {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
            {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
            {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
        ]);

        const select = new DescribeTag('SELECT', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.', [
            {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
            {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
            {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
        ]);

        //console.log(a,div,h1,span,input,form,option,select);

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
            this.maxSpeed += newSpeed;
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
                this.maxSpeed += newSpeed;
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
                this.maxSpeed += newSpeed;
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
            constructor(name, age, footSize) {
                this.name = name;
                this.age = age; 
                this.footSize = footSize;
            }
        }

        const cinderells = [
            new Cinderella('Cinderella1', 16, 32),
            new Cinderella('Cinderella2', 17, 33),
            new Cinderella('Cinderella3', 18, 34),
            new Cinderella('Cinderella4', 19, 35),
            new Cinderella('Cinderella5', 20, 36),
            new Cinderella('Cinderella6', 21, 37),
            new Cinderella('Cinderella7', 22, 38),
            new Cinderella('Cinderella8', 23, 39),
            new Cinderella('Cinderella9', 24, 40),
            new Cinderella('Cinderella10', 25, 41),
        ];

        class Prince {
            constructor(name, age, findedFootSize) {
                this.name = name; 
                this.age = age;
                this.findedFootSize = findedFootSize;
            }
        }

        const prince = new Prince('Vasya', 16, 33);

        for (const cinderell of cinderells) {
            if (prince.findedFootSize === cinderell.footSize) {
                console.log(`Prince ${prince.name} found a shoe ${cinderell.name}.`); //Prince Vasya found a shoe Cinderella2.
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
        function Cinderella(name, age, footSize){
            this.name = name; 
            this.age = age; 
            this.footSize = footSize;
        }

        const cinderells = [
            new Cinderella('Cinderella1', 16, 32),
            new Cinderella('Cinderella2', 17, 33),
            new Cinderella('Cinderella3', 18, 34),
            new Cinderella('Cinderella4', 19, 35),
            new Cinderella('Cinderella5', 20, 36),
            new Cinderella('Cinderella6', 21, 37),
            new Cinderella('Cinderella7', 22, 38),
            new Cinderella('Cinderella8', 23, 39),
            new Cinderella('Cinderella9', 24, 40),
            new Cinderella('Cinderella10', 25, 41),
        ];
        

        // console.log(cinderells);
        function Prince(name, age, findedFootSize) {
            this.name = name;
            this.age = age; 
            this.findedFootSize = findedFootSize;

            this.findCinderella = function(cinderellsArr) {
                for (const cinderell of cinderellsArr) {
                    if (this.findedFootSize === cinderell.footSize) {
                        console.log(`Prince ${this.name} found a shoe ${cinderell.name}.`)
                    }
                }
            }
        }

        const prince = new Prince('Petya', 17, 35);
        prince.findCinderella(cinderells); //Prince Petya found a shoe Cinderella4.

    }
}