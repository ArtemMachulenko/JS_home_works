{
    // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
    let user1 = {
        name: 'Vasya',
        age: 31,
        id: 1,
    }

    let user2 = {
        name: 'Petya',
        age: 32,
        id: 2,
    };

    let user3 = {
        name: 'Masha',
        age: 33,
        id: 3,
    };

    let user4 = {
        name: 'Dasha',
        age: 30,
        id: 4,
    };

    let user5 = {
        name: 'Natasha',
        age: 18,
        id: 5,
    };
    //----------------------------------------------------------
    // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
    let user6 = {
        name: 'Vasya',
        age: 31,
        id: 6,
        wife: {
            name: 'Dasha',
            age: 30,
        },
        skills : ['java','js']

    }

    let user7 = {
        name: 'Petya',
        age: 32,
        id: 7,
        wife: {
            name: 'Natasha',
            age: 18
        },
        skills : ['pithon','nodeJs']
    };

    let user8 = {
        name: 'Masha',
        age: 33,
        id: 8,
        husband: {
            name: 'Petya',
            age: 32,
        },
        skills : ['html','css','bootstrap']
    };

    let user9 = {
        name: 'Dasha',
        age: 30,
        id: 9,
        husband: {
            name: 'Vasya',
            age: 31,
        },
        skills : ['java','js','react']
    };

    let user10 = {
        name: 'Natasha',
        age: 18,
        id: 10,
        husband: {
            name: 'Petya',
            age: 33,
        },
        skills : ['angular','js','react']
    };
    //------------------------------------------------------
    // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
    let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

    for (let i = 0; i < users.length; i++) {
        for (let key in users[i]) {
            console.log(key);
        }
        consoleLine();
    }

    //------------------------------------------------------
    // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
    for (let i = 0; i < users.length; i++) {
        console.log(Object.keys(users[i]));
        consoleLine();
    }
    //------------------------------------------------------
    // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
    let cars = [
        {model: 'VAZ', year: 1972, power: 1.2, color: 'yellow'},
        {model: 'ZAZ', year: 1962, power: 1.0, color: 'green'},
        {model: 'Moskwich', year: 1969, power: 1.2, color: 'blue'},
        {model: 'GAZ', year: 1959, power: 2.0, color: 'aqua'},
        {model: 'BELAZ', year: 1972, power: 60.2, color: 'orange'},
        {model: 'ZIL', year: 1955, power: 3.0, color: 'grey'},
        {model: 'ZIM', year: 1959, power: 3.2, color: 'black'},
        {model: 'MAZ', year: 1968, power: 5.1, color: 'red'},
        {model: 'KAMAZ', year: 1965, power: 6.5, color: 'brown'},
        {model: 'LuAZ', year: 1960, power: 1.1, color: 'greenyellow'},
    ];
    //------------------------------------------------------
    // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
    let cities = [
        {name: 'Lviv', country: 'Ukraine', population: 1e6, region: 'Lviv region'},
        {name: 'Bolgrad', country: 'Ukraine', population: 2e6, region: 'Odessa region'},
        {name: 'Vovchansk', country: 'Ukraine', population: 1e6, region: ' Kharkiv region'},
        {name: 'Bolekhiv', country: 'Ukraine', population: 3e6, region: ' Ivano-Frankivsk region'},
        {name: 'Hola Prystan', country: 'Ukraine', population: 5e6, region: 'Kherson region'},
        {name: 'Hrebinka', country: 'Ukraine', population: 6e6, region: 'Poltava region'},
        {name: 'Huliaipole', country: 'Ukraine', population: 8e6, region: 'Zaporizhia region'},
        {name: 'Irpen', country: 'Ukraine', population: 2e6, region: 'Kiev region'},
        {name: 'Kamianets-Podilskyi', country: 'Ukraine', population: 10e6, region: 'Khmelnytskyi region'},
        {name: 'Kivertsi', country: 'Ukraine', population: 1e6, region: 'Volyn region'},
    ];
    //------------------------------------------------------
    // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
    let cars2 = [
        {model: 'VAZ', year: 1972, power: 1.2, color: 'yellow', driver: {name: 'Dasha', age: 30}},
        {model: 'ZAZ', year: 1962, power: 1.0, color: 'green', driver: {name: 'Masha', age: 31}},
        {model: 'Moskwich', year: 1969, power: 1.2, color: 'blue', driver: {name: 'Vasya', age: 30}},
        {model: 'GAZ', year: 1959, power: 2.0, color: 'aqua', driver: {name: 'Petya', age: 29}},
        {model: 'BELAZ', year: 1972, power: 60.2, color: 'orange', driver: {name: 'Sasha', age: 32}},
        {model: 'ZIL', year: 1955, power: 3.0, color: 'grey', driver: {name: 'Natasha', age: 18}},
        {model: 'ZIM', year: 1959, power: 3.2, color: 'black', driver: {name: 'Kolya', age: 32}},
        {model: 'ZIM', year: 1959, power: 3.2, color: 'black', driver: {name: 'Pasha', age: 27}},
        {model: 'MAZ', year: 1968, power: 5.1, color: 'red', driver: {name: 'Sasha', age: 33}},
        {model: 'KAMAZ', year: 1965, power: 6.5, color: 'brown', driver: {name: 'Ksusha', age: 26}},
        {model: 'LuAZ', year: 1960, power: 1.1, color: 'greenyellow', driver: {name: 'Kim', age: 36}},
    ];
    //------------------------------------------------------
    // - проитерировать каждый массив из задания 5,6,7 при помощи while.
    let arrays = [cars, cities, cars2];

    for (let i = 0; i < arrays.length; i++) {
        //while
        let counter = 0;
        while (counter < arrays[i].length) {
            console.log(arrays[i][counter]);
            counter++;
        }

        consoleLine();
    }
    //------------------------------------------------------
    // - проитерировать каждый массив из задания 5,6,7 при помощи for .
    for (let i = 0; i < arrays.length; i++) {
        //for
        for (let j = 0; j < arrays[i].length; j++) {
            console.log(arrays[i][j])
        }

        consoleLine();
    }
    //------------------------------------------------------
    // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
    for (let i = 0; i < arrays.length; i++) {
        //for of
        for (const elem of arrays[i]) {
            console.log(elem);
        }

        consoleLine();
    }

    //------------------------------------------------------
    // - взять объекты из задания 1 и превратить каждый в json.
    let user1Str = JSON.stringify(user1);
    let user2Str = JSON.stringify(user2);
    let user3Str = JSON.stringify(user3);
    let user4Str = JSON.stringify(user4);
    let user5Str = JSON.stringify(user5);

    //------------------------------------------------------
    // - взять json из задания 11 и превратить их обратно в объекты.
    let newUser1 = JSON.parse(user1Str);
    let newUser2 = JSON.parse(user2Str);
    let newUser3 = JSON.parse(user3Str);
    let newUser4 = JSON.parse(user4Str);
    let newUser5 = JSON.parse(user5Str);
    console.log(newUser5);
    //------------------------------------------------------
    // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
    for (const car of cars) {
        console.log(JSON.stringify(car));
    }

    consoleLine();
    //------------------------------------------------------
    // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
    for (const city of cities) {
        console.log(JSON.stringify(city));
    }

    consoleLine();
    //------------------------------------------------------
    // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
    let cars2Strs = [];

    for (const car of cars2) {
        cars2Strs.push(JSON.stringify(car));
    }

    //console.log(cars2Strs);

    consoleLine();
    //------------------------------------------------------
    // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
    let users2 = [
        {name: 'Vasya', age: 29, id: 1, skills : ['java','js']},
        {name: 'Petya', age: 32, id: 2, skills : ['js','angular','react']},
        {name: 'Masha', age: 31, id: 3, skills : ['java','pithon', 'nodeJS']},
        {name: 'Dasha', age: 27, id: 4, skills : ['html','css','sass','less','bootstrap']},
        {name: 'Natasha', age: 18, id: 5, skills : ['html', 'css']},
    ];

    for (const user of users2) {
        for (const skill of user.skills) {
            console.log(skill);
        }
        consoleLine();
    }
    //------------------------------------------------------
    // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
    let skills = [];

    for (const user of users2) {
        for (const skill of user.skills) {
            skills.push(skill);
        }
    }

    // console.log(skills); //["java", "js", "js", "angular", "react", "java", "pithon", "nodeJS", "html", "css", "sass", "less", "boodstrap", "html", "css"]
    //------------------------------------------------------
    // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
    let users3 = [
        {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
        {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
        {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
        {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
        {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
    ];

    for (const user of users3) {
        for (const skill of user.skills) {
            console.log(skill);
        }
        consoleLine();
    }
    //------------------------------------------------------
        let users4 = [{
            name: 'vasya',
            age: 31,
            status: false,
            address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
        }, {
            name: 'petya',
            age: 30,
            status: true,
            address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
        }, {
            name: 'kolya',
            age: 29,
            status: true,
            address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
        }, {
            name: 'olya',
            age: 28,
            status: false,
            address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
        }, {
            name: 'max',
            age: 30,
            status: true,
            address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
        }, {
            name: 'anya',
            age: 31,
            status: false,
            address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
        }, {
            name: 'oleg',
            age: 28,
            status: false,
            address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
        }, {
            name: 'andrey',
            age: 29,
            status: true,
            address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
        }, {
            name: 'masha',
            age: 30,
            status: true,
            address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
        }, {
            name: 'olya',
            age: 31,
            status: false,
            address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
        }, {
            name: 'max',
            age: 31,
            status: true,
            address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
        }];
    //-----------------------------------------------------
    // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
    let adresses = [];

    for (const user of users4) {
        adresses.push(user.address);
    }

    // console.log(adresses);
    //------------------------------------------------------
    // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
    for (const user of users4) {
        let div = document.createElement('div');
        div.textContent = user;
    }

    //------------------------------------------------------
    // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
    for (const user of users4) {
        let ul = document.createElement('ul');
        for (let key in user) {
            let li = document.createElement('li')
            li.textContent = `${key}: ${user[key]}`;
            ul.append(li);
        }
        // document.body.prepend(ul);
    }
    //------------------------------------------------------
    // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
    for (const user of users4) {
        let ul = document.createElement('ul');

        for (let key in user) {
            if (user[key].constructor.name === 'Object') {
                let li = document.createElement('li');
                li.textContent = `${key}:`;
                let ul2 = document.createElement('ul');

                for (let key2 in user[key]) {
                    let li2 = document.createElement('li');
                    li2.textContent = `${key2}: ${user[key][key2]}`;
                    ul2.append(li2);
                }
                li.append(ul2);
                ul.append(li);
            }
            else {
                let li = document.createElement('li');
                li.textContent = `${key}: ${user[key]}`;
                ul.append(li);
            }
        }
        // document.body.prepend(ul);
    }
    //------------------------------------------------------
    // - Дано 2 масиви з рівною кількістю об'єктів.
    // Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false}, 
        {id: 2, name: 'petya', age: 30, status: true}, 
        {id: 3, name: 'kolya', age: 29, status: true}, 
        {id: 4, name: 'olya', age: 28, status: false},
    ];
    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'}, 
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
        {user_id: 2, country: 'Poland', city: 'Krakow'}, 
        {user_id: 4, country: 'USA', city: 'Miami'},
    ];
    // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    // Записати цей об'єкт в новий масив
    // Частковий приклад реультату:
    // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
    let usersWithCities = [];

    for (const user of usersWithId) {
        for (const city of citiesWithId) {
            if (user.id === city.user_id) {
                user.address = city;
                usersWithCities.push(user);
            }
        }
    }

    // console.log(usersWithCities);
    //-----------------------------------------------------------
    //DOM

    // - створити в розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
    let elemById = document.getElementById('some-id');
    let elemByClass = document.getElementsByClassName('some-class')[0];
    let elemByTag = document.getElementsByTagName('div')[0];
    console.log(elemById.textContent);
    console.log(elemByClass.textContent);
    console.log(elemByTag.textContent);
    //-----------------------------------------------------------
    // - змінити цей текст використовуючи селектори id, class,  tag
    elemById.textContent = 'Some text 1...';
    elemByClass.textContent = 'Some text 2...';
    elemByTag.textContent = 'Some text 3...';
    //-----------------------------------------------------------
    // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
    elemById.style.width = '100px';
    elemByClass.style.width = '200px';
    elemByTag.style.width = '300px';
    //-----------------------------------------------------------
    // - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.textContent = 1;
    td2.textContent  = 2;
    td3.textContent = 3;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    table.append(tr);
    // document.body.prepend(table);
    //------------------------------------------------------------
    // - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
    let table2 = document.createElement('table');
    let tbody2 = document.createElement('tbody');

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        tbody2.append(tr);
    }

    table2.append(tbody2);
    // document.body.prepend(table2);
    //------------------------------------------------------------
    // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
    let table3 = document.createElement('table');
    let tbody3 = document.createElement('tbody');

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        tbody3.append(tr);
    }

    table3.append(tbody3);
    // document.body.prepend(table3);
    //------------------------------------------------------------
    // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
    let table4 = document.createElement('table');
    let tbody4 = document.createElement('tbody');
    let rows = +prompt('Enter amount rows:',10);
    let cells = +prompt('Enter amount cells:',4);

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        tbody4.append(tr);
    }

    table4.append(tbody4);
    // document.body.prepend(table4);
    //------------------------------------------------------------
    // --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
    // - знайти всі елементі, які мають id
    let elemsWithId = document.querySelectorAll('[id]');
    //------------------------------------------------------------
    // - знайти всі параграфи ,та змінити текст на hello oktenweb!
    let ps = document.querySelectorAll('p');

    for (const p of ps) {
        //p.textContent = 'hello oktenweb!';
    }
    //------------------------------------------------------------
    // - знайти всі div та змінити ім колір на червоний
    let divs = document.querySelectorAll('div');

    for (const div of divs) {
        // div.style.color = 'red';
        // div.style.backgroundColor = 'red';
    }

    //------------------------------------------------------------
    // ============
    // ====class===
    // ============
    //
    // - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
    // створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
    // Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
    let content = document.getElementById('content');
    let h2s = document.querySelectorAll('h2');
    let ul = document.createElement('ul');

    for (const h2 of h2s) {
        let li = document.createElement('li');
        let ps = h2.parentNode.querySelectorAll('p');
        let ul2 = document.createElement('ul');
        for (const p of ps) {
            let li2 = document.createElement('li');
            li2.append(p);
            ul2.append(li2);
        }
        li.append(h2);
        li.append(ul2);
        ul.append(li);
    }

    content.append(ul);

    // let saveContent = content;
    // content.remove();
    // document.body.innerHTML = ''; // удалить все
    // document.body.append(saveContent); // добавить на стр только content
    //------------------------------------------------------
    // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    //  Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
    // todo add rules
    //
        let rules = [
            {
                title: 'Первое правило Бойцовского клуба.',
                body: 'Никому не рассказывать о Бойцовском клубе.'
            },
            {
                title: 'Второе правило Бойцовского клуба.',
                body: 'Никогда никому не рассказывать о Бойцовском клубе.'
            },
            {
                title: 'Третье правило Бойцовского клуба.',
                body: 'В схватке участвуют только двое.'
            },
            {
                title: 'Четвертое правило Бойцовского клуба.',
                body: 'Не более одного поединка за один раз.'
            },
            {
                title: 'Пятое правило Бойцовского клуба.',
                body: 'Бойцы сражаются без обуви и голые по пояс.'
            },
            {
                title: 'Шестое правило Бойцовского клуба.',
                body: 'Поединок продолжается столько, сколько потребуется.'
            },
            {
                title: 'Седьмое правило Бойцовского клуба.',
                body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
            },
            {
                title: 'Восьмое и последнее правило Бойцовского клуба.',
                body: 'Новичок обязан принять бой.'
            },
        ];

    let container = document.createElement('div');
    container.id = 'wrap'

    for (let i = 0; i < rules.length; i++) {
        let div = document.createElement('div');
        div.classList.add('rules',`rule${i+1}`);

        let h2 = document.createElement('h2');
        h2.textContent = rules[i].title;

        let p = document.createElement('p');
        p.textContent = rules[i].body;
        div.append(h2,p);
        container.append(div);
    }

    document.body.append(container);

    //-----------------------------------------------------------------------------

    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(val => val.json())
        .then(val => {
            for (const user of val) {
                let ul = document.createElement('ul');

                for (let key in user) {
                    if (user[key].constructor.name === 'Object') {
                        let li = document.createElement('li');
                        li.textContent = `${key}:`;
                        let ul2 = document.createElement('ul');

                        for (let key2 in user[key]) {
                            let li2 = document.createElement('li');
                            li2.textContent = `${key2}: ${user[key][key2]}`;
                            ul2.append(li2);
                        }
                        li.append(ul2);
                        ul.append(li);
                    }
                    else {
                        let li = document.createElement('li');
                        li.textContent = `${key}: ${user[key]}`;
                        ul.append(li);
                    }
                }
                document.body.append(ul);
                document.write('<hr>');
            }

        }).catch(err => alert(err));
    document.write('<hr>')
    //----------------------------------------------------------------------
    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(val => val.json())
        .then(val => {
            for (const post of val) {
                let ul = document.createElement('ul');

                for (let key in post) {
                    let li = document.createElement('li');
                    li.textContent = `${key}: ${post[key]}`;
                    ul.append(li);
                }
                document.body.append(ul);
                document.write('<hr>');
            }
        }).catch(err => alert(err));
    document.write('<hr>');
    //---------------------------------------------------------
    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(val => val.json())
        .then(val => {
            for (const comment of val) {
                let ul = document.createElement('ul');

                for (let key in comment) {
                    let li = document.createElement('li');
                    li.textContent = `${key}: ${comment[key]}`;
                    ul.append(li);
                }
                document.body.append(ul);
                document.write('<hr>');
            }
        }).catch(err => alert(err));
    document.write('<hr>');
    //-------------------------------------------------------------------------
    // ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(val => val.json())
        .then(val => {
            let posts = val;

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(val => val.json())
                .then(val => {
                    let comments = val;

                    for (const post of posts) {
                        for (comment of comments) {
                            if (post.userId === comment.postId) {
                                post.comments = comment;
                            }
                        }
                    }

                    //--------------------------------
                    for (const post of posts) {
                        let ul = document.createElement('ul');

                        for (let key in post) {
                            if (post[key].constructor.name === 'Object') {
                                let li = document.createElement('li');
                                li.textContent = `${key}:`;
                                let ul2 = document.createElement('ul');

                                for (let key2 in post[key]) {
                                    let li2 = document.createElement('li');
                                    li2.textContent = `${key2}: ${post[key][key2]}`;
                                    ul2.append(li2);
                                }
                                li.append(ul2);
                                ul.append(li);
                            }
                            else {
                                let li = document.createElement('li');
                                li.textContent = `${key}: ${post[key]}`;
                                ul.append(li);
                            }
                        }
                        document.body.append(ul);
                        document.write('<hr>');
                    }
                }).catch(err => alert(err));

        }).catch(err => alert(err));
    document.write('<hr>');

    //===============================================
    //===============================================

    function consoleLine() {
        console.log('-------------------------------------------------');
    }
}