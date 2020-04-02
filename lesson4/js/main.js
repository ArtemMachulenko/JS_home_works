{
    
    // - створити функцію яка виводить масив
    function showArr(arr) {
        console.log(arr);
    }

    showArr([1,2,3]); //[1, 2, 3]

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
    function fillRand(x) {
        return [...Array(x)].map(n => n = Math.random());
    }

    showArr( fillRand( 3) ); //[0.748331724929624, 0.4215625520244597, 0.42687138600413954]

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка приймає три числа та виводить та повертає найменьше.

    function getMin(a,b,c) {

        switch(true) {
            case a < b && a < c: return a;
            case b < a && b < c: return b;
            default: return c;
        }

        //return Math.min(a,b,c);
    }

    console.log(getMin(1,2,3)); //1

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка приймає три числа та виводить та повертає найбільше.
    function getMax(a,b,c) {
        return Math.max(a,b,c);
    }

    console.log(getMax(1,2,3)); //3

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
    function getMinAndShowMax() {
        console.log(Math.max(...[...arguments])); //9
        return Math.min(...[...arguments]);
    }

    let minDigit = getMinAndShowMax(0,1,2,3,4,5,6,7,8,9); //0

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка виводить масив
    function showArr2(arr) {
        console.log(arr);
    }

    showArr2([1,2,3]); //[1, 2, 3]

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка повертає найбільше число з масиву
    function getArrMax(arr) {
        return Math.max(...arr);
    }

    console.log(getArrMax([1,2,3]));

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка повертає найменьше число з масиву
    function getArrMin(arr) {
        return Math.min(...arr);
    }

    console.log(getArrMin([1,2,3]));

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка приймає масив чисел
    function acceptArrNumbers(arrNums) {
        if (!arrNums.every(x => typeof x === 'number')) return;

        //do something with arrNums...
    }

    acceptArrNumbers([1,2,3]);
    acceptArrNumbers(['0', 1,2,3]);// undefined
    
    //--------------------------------------------------
    // - створити функцію яка скаладає значення елементів масиву та повертає його.
    function getArrSum(arr) {
        return arr.reduce((sum, n) => sum + n);
    }

    console.log(getArrSum([1,2,3])); //6

    consoleLine();
    //--------------------------------------------------
    // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    function getAverageArr(arr) {
        return arr.reduce((sum, n) => sum + n) / arr.length;
    }

    console.log(getAverageArr([1,2,3])); //2

    consoleLine();
    //--------------------------------------------------
    // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
    function getCountObjInArr(arr) {
        return arr.filter(x => x.constructor.name === 'Object').length;
    }

    console.log(getCountObjInArr([{}, {}, {}])); //3

    consoleLine();
    //--------------------------------------------------
    // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
    function getCountFields(arr) {
        return arr.reduce((sum, obj) => sum + Object.keys(obj).length, 0);
    }

    console.log(getCountFields([{a:1,b:2}, {a:1, b:2, c:3}, {a:1}])); //6

    consoleLine();
    //--------------------------------------------------
    // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    // Приклад
    // [1,2,3,4]
    // [2,3,4,5]
    // результат
    //     [3,5,7,9]
    function sumNumsByIndex(arr1, arr2) {
        return arr1.map((n, i) => n + arr2[i]);
    }

    console.log(sumNumsByIndex([1,2,3,4], [2,3,4,5])); // [3,5,7,9]

    consoleLine();
    //--------------------------------------------------
    // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
    function replacePlace(arr, i) {
        const removed = arr.splice(i,1);
        arr.splice(i+1,0, removed[0]);
        return arr;
    }
    console.log(replacePlace([0,0,0,87,1,0,0,0], 3)); // [0,0,0,1,87,0,0,0]

    consoleLine();
    //--------------------------------------------------
    // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
    // Двожина масиву від 2 до 100
    // Приклад
    // [1,0,6,0,3] => [1,6,3,0,0]
    // [0,1,2,3,4] => [1,2,3,4,0]
    // [0,0,1,0]   => [1,0,0,0]
    function zerosToEndArr(arr) {
        if (arr.length < 2 && arr.length > 100) return;
        const arrWitoutZeros = arr.filter(n => n !== 0);
        const arrZeros = [...Array(arr.length - arrWitoutZeros.length)].fill(0);
        return [...arrWitoutZeros, ...arrZeros];
    }

    console.log(zerosToEndArr([1,0,6,0,3])); //[1,6,3,0,0]
    console.log(zerosToEndArr([0,1,2,3,4])); //[1,2,3,4,0]
    console.log(zerosToEndArr([0,0,1,0])); //[1,0,0,0]

    consoleLine();
    //--------------------------------------------------
    // Створити функцію яка :
    // - Додає в боді блок з текстом "Hello owu"
    function addHTMLElement() {
        const h1 = document.createElement('h1');
        h1.textContent = "Hello owu";
        document.body.append(h1);
    }

    addHTMLElement();

    htmlLine();
    //--------------------------------------------------
    // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
    function addHTMLElementArgs(elemName, text) {
        const elem = document.createElement(elemName);
        elem.textContent = text;
        document.body.append(elem);
    }

    addHTMLElementArgs('h2',"Hello owu");

    htmlLine();
    //--------------------------------------------------
    // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
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

    function showArrElems(arr, container) {
        for (const car of cars) {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(car);

            container.append(div);
        }
    }

    const containerCars = document.getElementById('container-cars');
    showArrElems(cars, containerCars);

    htmlLine();
    //--------------------------------------------------
    // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
    // Для кожної властивості створити всередені блока автомоблія свій блок
    function showArrElemsList(arr, container) {

        for (const car of cars) {
            const ul = document.createElement('ul');
            for (const field of Object.keys(car)) {
                const li = document.createElement('li');
                li.textContent = field;
                ul.append(li);
            }
            container.append(ul);
        }
    }

    const containerCarsTwo = document.getElementById('container-cars-two');
    showArrElemsList(cars, containerCarsTwo);

    htmlLine();
    //--------------------------------------------------
    // (на основі минулого ДЗ)
    // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
    // та повертає масив цих з'єднаних об'єктів.
    // Приклад масивів:
    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
    let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

    function concatById(usersArr, citiesArr) {
        for (const user of usersArr) {
            for (const city of citiesArr) {
                if (user.id === city.user_id) {
                    user.address = city;
                    citiesArr.push(user);
                }
            }
        }

        return usersArr;
    }


    const usersWithCities = concatById(usersWithId, citiesWithId);
    console.log(usersWithCities);

    consoleLine();
    //--------------------------------------------------
    // ***- беремо завдання з правилами з укроку №3 :
    // Та робимо це функцією.При цьому правила отримувати через аргумент.
    // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
    // //todo add rules

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
    //-------------------------------------
    let container = document.createElement('div');
    container.id = 'wrap';

    function createRules({title, body}) {
        let count = 1;
        const div = document.createElement('div');
        div.classList.add('rules',`rule${count++}`);

        const h2 = document.createElement('h2');
        h2.textContent = title;

        const p = document.createElement('p');
        p.textContent = body;
        div.append(h2,p);
        container.append(div);
    }

    for (rule of rules) {
        createRules(rule);
    }

    document.body.append(container);

    //=======================================================
    //=======================================================
    function consoleLine() {
        console.log('________________________________________');
    }

    function htmlLine() {
        document.write('<hr>');
    }

}