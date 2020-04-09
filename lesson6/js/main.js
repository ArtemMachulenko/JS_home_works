{
    // - создать массив с 20 числами.
    const arrNums = [10, -1, 24, -100, 0, 15, 45, 1, -2, 14, 32, 28, 101, 97, 34, -15, 3, 7, 98, 74];
    //-------------------------------------
    // -- при помощи метода sort отсортировать массив.
    arrNums.sort();
    //console.log(arrNums); //[-1, -100, -15, -2, 0, 1, 10, 101, 14, 15, 24, 28, 3, 32, 34, 45, 7, 74, 97, 98]
    //--------------------------------------
    // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
    arrNums.sort((a,b) => b - a);
    //console.log(arrNums); //[101, 98, 97, 74, 45, 34, 32, 28, 24, 15, 14, 10, 7, 3, 1, 0, -1, -2, -15, -100]
    //--------------------------------------
    // -- при помощи filter получить числа кратные 3
    const arrNumsMultipleThree = arrNums.filter(n => !(n % 3));
    //console.log(arrNumsMultipleThree); //[45, 24, 15, 3, 0, -15]
    //--------------------------------------
    // -- при помощи filter получить числа кратные 10
    const arrNumsMultipleTen = arrNums.filter(n => !(n % 10));
    //console.log(arrNumsMultipleTen); //[10, 0, -100]
    //--------------------------------------
    // -- перебрать (проитерировать) массив при помощи foreach()
    arrNums.forEach(n => {
        // console.log(n); //[101, 98, 97, 74, 45, 34, 32, 28, 24, 15, 14, 10, 7, 3, 1, 0, -1, -2, -15, -100]
    });
    //--------------------------------------
    // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
    const arrNumsIncreaseThree = arrNums.map(n => n * 3);
    //console.log(arrNumsIncreaseThree); //[303, 294, 291, 222, 135, 102, 96, 84, 72, 45, 42, 30, 21, 9, 3, 0, -3, -6, -45, -300]
    //--------------------------------------
    // - создать массив со словами на 15-20 элементов.
    const arrStrs = ['Carl','Dina','Grigory','Elsa','John','Yoko','William','Xena','Fatima','Artur','Bogdan','Zinoviy','Harry','Ira','Vova','Tom','Stepan','Ruslan','Kolya'];
    //--------------------------------------
    // -- отсортировать его по алфавиту в восходящем порядке.
    arrStrs.sort((a,b) => a < b? -1: 1);
    //console.log(arrStrs); //["Artur", "Bogdan", "Carl", "Dina", "Elsa", "Fatima", "Grigory", "Harry", "Ira", "John", "Kolya", "Ruslan", "Stepan", "Tom", "Vova", "William", "Xena", "Yoko", "Zinoviy"]
    //--------------------------------------
    // -- отсортировать его по алфавиту  в нисходящем порядке.
    arrStrs.sort((a,b) => a > b? -1: 1);
    //console.log(arrStrs); //["Zinoviy", "Yoko", "Xena", "William", "Vova", "Tom", "Stepan", "Ruslan", "Kolya", "John", "Ira", "Harry", "Grigory", "Fatima", "Elsa", "Dina", "Carl", "Bogdan", "Artur"]
    //--------------------------------------
    // -- отфильтровать слова длиной менее 4х символов
    const arrStrFourMinLength = arrStrs.filter(str => str.length < 4);
    //console.log(arrStrFourMinLength);// ["Tom", "Ira"]
    //--------------------------------------
    // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
    const arrStrWithQuestionMark = arrStrs.map(str => str + '!');
    //console.log(arrStrWithQuestionMark); //["Zinoviy!", "Yoko!", "Xena!", "William!", "Vova!", "Tom!", "Stepan!", "Ruslan!", "Kolya!", "John!", "Ira!", "Harry!", "Grigory!", "Fatima!", "Elsa!", "Dina!", "Carl!", "Bogdan!", "Artur!"]
    //--------------------------------------
    // Все робити через функції масивів (foreach, map ...тд)
    // Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
        ];
    // - відсортувати його за  віком (зростання , а потім окремо спадання)
    //зростання
    users.sort((user1,user2) => user1.age - user2.age);

    //console.log(users);
        // [{name: "olya", age: 28, status: false},
        // {name: "oleg", age: 28, status: false},
        // {name: "kolya", age: 29, status: true},
        // {name: "andrey", age: 29, status: true},
        // {name: "petya", age: 30, status: true},
        // {name: "max", age: 30, status: true},
        // {name: "masha", age: 30, status: true},
        // {name: "vasya", age: 31, status: false},
        // {name: "anya", age: 31, status: false},
        // {name: "olya", age: 31, status: false},
        // {name: "max", age: 31, status: true}]
    //-------------------------------------
    //спадання
    users.sort((user1,user2) => user2.age - user1.age);

    //console.log(users);
        // [{name: "vasya", age: 31, status: false},
        // {name: "anya", age: 31, status: false},
        // {name: "olya", age: 31, status: false},
        // {name: "max", age: 31, status: true},
        // {name: "petya", age: 30, status: true},
        // {name: "max", age: 30, status: true},
        // {name: "masha", age: 30, status: true},
        // {name: "kolya", age: 29, status: true},
        // {name: "andrey", age: 29, status: true},
        // {name: "olya", age: 28, status: false},
        // {name: "oleg", age: 28, status: false}]
    //---------------------------------------
    // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
    //зростання
    users.sort((user1,user2) => user1.name.length - user2.name.length);

    //console.log(users);
        // [{name: "max", age: 31, status: true},
        // {name: "max", age: 30, status: true},
        // {name: "anya", age: 31, status: false},
        // {name: "olya", age: 31, status: false},
        // {name: "olya", age: 28, status: false},
        // {name: "oleg", age: 28, status: false},
        // {name: "vasya", age: 31, status: false},
        // {name: "petya", age: 30, status: true},
        // {name: "masha", age: 30, status: true},
        // {name: "kolya", age: 29, status: true},
        // {name: "andrey", age: 29, status: true}]

    //------------------------------------------
    //спадання
    users.sort((user1,user2) => user2.name.length - user1.name.length);

    // console.log(users);
        // [{name: "andrey", age: 29, status: true},
        // {name: "vasya", age: 31, status: false},
        // {name: "petya", age: 30, status: true},
        // {name: "masha", age: 30, status: true},
        // {name: "kolya", age: 29, status: true},
        // {name: "anya", age: 31, status: false},
        // {name: "olya", age: 31, status: false},
        // {name: "olya", age: 28, status: false},
        // {name: "oleg", age: 28, status: false},
        // {name: "max", age: 31, status: true},
        // {name: "max", age: 30, status: true}]
    //-------------------------------------------
    // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
    users.forEach((elem,i) => elem.id = i+1);

    //console.log(users);
        // [{name: "andrey", age: 29, status: true, id: 1},
        // {name: "vasya", age: 31, status: false, id: 2},
        // {name: "petya", age: 30, status: true, id: 3},
        // {name: "masha", age: 30, status: true, id: 4},
        // {name: "kolya", age: 29, status: true, id: 5},
        // {name: "anya", age: 31, status: false, id: 6},
        // {name: "olya", age: 31, status: false, id: 7},
        // {name: "olya", age: 28, status: false, id: 8},
        // {name: "oleg", age: 28, status: false, id: 9},
        // {name: "max", age: 31, status: true, id: 10},
        //  {name: "max", age: 30, status: true, id: 11}]

    //------------------------------------------
    // - відсортувати його за індентифікатором
    users.sort((user1,user2) => user1.id - user2.id);

    // console.log(users);
        // [{name: "andrey", age: 29, status: true, id: 1},
        // {name: "vasya", age: 31, status: false, id: 2},
        // {name: "petya", age: 30, status: true, id: 3},
        // {name: "masha", age: 30, status: true, id: 4},
        // {name: "kolya", age: 29, status: true, id: 5},
        // {name: "anya", age: 31, status: false, id: 6},
        // {name: "olya", age: 31, status: false, id: 7},
        // {name: "olya", age: 28, status: false, id: 8},
        // {name: "oleg", age: 28, status: false, id: 9},
        // {name: "max", age: 31, status: true, id: 10},
        //  {name: "max", age: 30, status: true, id: 11}]
    //-----------------------------------------
    // -- наисать функцию калькулятора с 2мя числами и колбеком
    {
        function calculator(x, y, method) {
            return method(x, y);
        }

        const methods = {
            sum: (a,b) => a + b,
            sub: (a,b) => a - b,
            mul: (a,b) => a * b,
            div: (a,b) => a / b,
            pow: (a,b) => a ** b
        };


        let resSum = calculator(2,3, methods.sum);
        //console.log(resSum); //5
        let resSub = calculator(2,3, methods.sub);
        //console.log(resSub); //-1
        let resMul = calculator(2,3, methods.mul);
        //console.log(resMul); //6
        let resDiv = calculator(2,3, methods.div);
        //console.log(resDiv); //0.6666666666666666
        let resPow = calculator(2,3, methods.pow);
        // console.log(resPow); //8
    }
    //-------------------------------------------------
    // -- наисать функцию калькулятора с 3мя числами и колбеком
    {
        function calculator(x, y, z, method) {
            return method(x, y, z);
        }

        const methods = {
            sum: (a,b,c) => a + b + c,
            sub: (a,b,c) => a - b - c,
            mul: (a,b,c) => a * b * c,
            div: (a,b,c) => a / b /c,
            pow: (a,b,c) => a ** b ** c
        };


        let resSum = calculator(1,2,3, methods.sum);
        // console.log(resSum); //6
        let resSub = calculator(1,2,3, methods.sub);
        // console.log(resSub); //-4
        let resMul = calculator(1,2,3, methods.mul);
        // console.log(resMul); //6
        let resDiv = calculator(1,2,3, methods.div);
        // console.log(resDiv); //0.16666666666666666
        let resPow = calculator(2,2,3, methods.pow);
        // console.log(resPow); //256

    }
    //
    // =============================================
    // =============================================
    // =============КЛАССНАЯ РАБОТА=================
    // =============================================
    // =============================================

    let cars = [
        {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
        {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
        {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
        {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
        {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
        {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
        {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
        {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
        {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
        {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
        {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
        {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
        {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
        ];

    // Відфільтрувати масив за наступними крітеріями :
    // - двигун більше 3х літрів
    const carsVolMoreThree = cars.filter(car => car.volume > 3);
    // console.log(carsVolMoreThree); // [{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}];
    //-------------------------------------------
    // - двигун = 2л
    const carsVolEqualTwo = cars.filter(car => car.volume === 2);
    // console.log(carsVolEqualTwo); //
        // [{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
        // {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
        // {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
        // {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
        // {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
        // {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
        // {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}]
    //-------------------------------------------
    // - виробник мерс
    const carsProdMers = cars.filter(car => car.producer === 'mercedes');
    // console.log(carsProdMers); //
        // [{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
        // {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
        // {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}]
    //-------------------------------------------
    // - двигун більше 3х літрів + виробник мерседес
    const carsProdMersAndVolMoreThree = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
    // console.log(carsProdMersAndVolMoreThree); // []
    //-------------------------------------------
    // - двигун більше 3х літрів + виробник субару
    const carsProdSubaruAndVolMoreThree = cars.filter(car => car.producer === 'subaru' && car.volume > 3);
    // console.log(carsProdSubaruAndVolumeMoreThree); //[]
    //-------------------------------------------
    // - сили більше ніж 300
    const carsPowMoreThreeHundred = cars.filter(car => car.power > 300);
    //console.log(carsPowMoreThreeHundred); //
    //[{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    // {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    // {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}]
    //-------------------------------------------
    // - сили більше ніж 300 + виробник субару
    const carsPowMoreThreeHundredAndProdSubaru = cars.filter(car => car.power > 300 && car.producer === 'subaru');
    //console.log(carsPowMoreThreeHundredAndProdSubaru);// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}
    //-------------------------------------------
    // - мотор серіі ej
    const carsWithEngEJ = cars.filter(car => car.engine.startsWith('ej'));
    // console.log(carsWithEngEJ); //
        // [{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
        // {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
        // {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
        // {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}]
    //-------------------------------------------
    // - сили більше ніж 300 + виробник субару + мотор серіі ej
    const carsPowMore300AndProdSubaruAndEngEJ = cars.filter(car => {
        return car.power > 300 &&
               car.producer === 'subaru'&&
               car.engine.startsWith('ej');
    });

    //console.log(carsPowMore300AndProdSubaruAndEngEJ); // [{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}]
    //-------------------------------------------
    // - двигун меньше 3х літрів + виробник мерседес
    const carsEngLessThreeAndProdMers = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
    // console.log(carsEngLessThreeAndProdMers); //
        //[{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
        //{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}]

    //-------------------------------------------
    // - двигун більше 2л + сили більше 250
    const carsVolMoreTwoAndPowMore250 = cars.filter(car => car.volume > 2 && car.power > 250);
    // console.log(carsVolMoreTwoAndPowMore250); //
        // [{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
        // {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}]
    //-------------------------------------------
    // - сили більше 250  + виробник бмв
    const carsProdBMWAndPowMore250 = cars.filter(car => car.producer === 'bmw' && car.power > 250);
    // console.log(carsProdBMWAndPowMore250); //[{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}]
    //-------------------------------------------
    // - взять слдующий массив
    let usersWithAddress = [
        {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
        {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
        {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
        ];
    // -- отсортировать его по id пользователей
    usersWithAddress.sort((user1,user2) => user1.id - user2.id);
    // console.log(usersWithAddress);
    //--------------------------------------
    // -- отсортировать его по id пользователей в обратном опрядке
    usersWithAddress.sort((user1,user2) => user2.id - user1.id);
    // console.log(usersWithAddress);
    //--------------------------------------
    // -- отсортировать его по возрасту пользователей
    usersWithAddress.sort((user1,user2) => user1.age - user2.age);
    // console.log(usersWithAddress);
    //--------------------------------------
    // -- отсортировать его по возрасту пользователей в обратном порядке
    usersWithAddress.sort((user1,user2) => user2.age - user1.age);
    // console.log(usersWithAddress);
    //--------------------------------------
    // -- отсортировать его по имени пользователей
    usersWithAddress.sort((user1,user2) => user1.name < user2.name? -1: 1);
    // console.log(usersWithAddress);
    //--------------------------------------
    // -- отсортировать его по имени пользователей в обратном порядке
    usersWithAddress.sort((user1,user2) => user1.name > user2.name? -1: 1);
    // console.log(usersWithAddress);
    //-------------------------------------
    // -- отсортировать его по названию улицы  в алфавитном порядке
    usersWithAddress.sort((user1,user2) => user1.address.street < user2.address.street? -1: 1);
    // console.log(usersWithAddress);
    //-------------------------------------
    // -- отсортировать его по номеру дома по возрастанию
    usersWithAddress.sort((user1,user2) => user1.address.number < user2.address.number? -1: 1);
    // console.log(usersWithAddress);
    //-------------------------------------
    // -- отфильтровать (оставить) тех кто младше 30
    const usersAgeMinThirty = usersWithAddress.filter(user => user.age < 30);
    // console.log(usersAgeMinThirty);
    //-------------------------------------
    // -- отфильтровать (оставить) тех у кого отрицательный статус
    const usersWithStatusFalse = usersWithAddress.filter(user => !user.status);
    //console.log(usersWithStatusFalse);
    //-------------------------------------
    // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
    const usersAgeMinThirtyAndStatusFalse = usersWithAddress.filter(user => user.age < 30 && !user.status);
    //console.log(usersAgeMinThirtyAndStatusFalse);
    //-------------------------------------
    // -- отфильтровать (оставить) тех у кого номер дома четный
    const usersWithNumberEven = usersWithAddress.filter(user => !(user.address.number % 2));
    // console.log(usersWithNumberEven);
    //-------------------------------------
    //
    // ===========================
    // ======ДОПОЛНИТЕЛЬНО========
    // ===========================
    //
    // Створити обєкт автомобіля з полями:
    // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
    // Власник автомобіля теж має бути обєкт, у якого є поля
    // Імя, вік, стаж водіння.
    // Створити не менше 7 та не більше 20 машинок.
    {
        const car1 = {
            producer: 'VAZ',
            power: 200,
            cost: 1000,
            year: 1972,
            driver: {name: 'Vasya', age: 32, experience: 1}
        };
        const car2 = {
            producer: 'ZAZ',
            power: 100,
            cost: 500,
            year: 1960,
            driver: {name: 'Petya', age: 29, experience: 1.5}
        };
        const car3 = {
            producer: 'GAZ',
            power: 300,
            cost: 1500,
            year: 1959,
            driver: {name: 'Kolya', age: 28, experience: 3}
        };
        const car4 = {
            producer: 'ZIL',
            power: 650,
            cost: 2000,
            year: 1965,
            driver: {name: 'Sasha', age: 33, experience: 10}
        };
        const car5 = {
            producer: 'MAZ',
            power: 800,
            cost: 7000,
            year: 1973,
            driver: {name: 'Grisha', age: 25, experience: 4.5}
        };
        const car6 = {
            producer: 'ZIM',
            power: 400,
            cost: 10000,
            year: 1955,
            driver: {name: 'Vova', age: 40, experience: 15}
        };
        const car7 = {
            producer: 'LuAZ',
            power: 50,
            cost: 200,
            year: 1963,
            driver: {name: 'Misha', age: 19, experience: .5}
        };
        const car8 = {
            producer: 'KAMAZ',
            power: 700,
            cost: 8500,
            year: 1975,
            driver: {name: 'Pasha', age: 35, experience: 5.5}
        };
        const car9 = {
            producer: 'BELAZ',
            power: 2000,
            cost: 20000,
            year: 1980,
            driver: {name: 'Vitya', age: 27, experience: 9}
        };
        const car10 = {
            producer: 'KRAZ',
            power: 350,
            cost: 2500,
            year: 1979,
            driver: {name: 'Natasha', age: 28, experience: .5}
        };

        // Зробити половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
        car1.power += car1.power / 100 * 10;
        car2.power += car2.power / 100 * 10;
        car3.power += car3.power / 100 * 10;
        car4.power += car4.power / 100 * 10;
        car5.power += car5.power / 100 * 10;
        //-------------------------------------
        // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
        car1.driver = {name: 'Tom', age: 25, experience: 7};
        car2.driver = {name: 'John', age: 26, experience: 6.5};
        car3.driver = {name: 'Stiv', age: 28, experience: 3.5};
        car4.driver = {name: 'Max', age: 23, experience: 4.5};
        car5.driver = {name: 'Franc', age: 29, experience: 2.5};
        //-------------------------------------
        // Для початку вкладіть всі наші створені автомобілі в масив cars.
        const cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
        //-------------------------------------
        // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
        cars.forEach((car, i) => {
            if (!(i % 2)) return;
            car.pover += car.power / 100 * 10;
            car.cost += car.cost / 100 * 5;
            // console.log(car.power, car.cost);
        });

        // console.log(cars);
        //--------------------------------------
        // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
       function improveQualifications(driver) {
           driver.experience += 1;
           //console.log(driver.experience);
       }
       
       cars.forEach(car => {
           if (car.driver.experience < 5 && car.driver.age > 25) {
               const driver = car.driver;
               improveQualifications(driver);
           }
       });
        //-------------------------------------
        // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

        const carsCostSum = cars.reduce((sum, car) => sum + car.cost,0);
        //console.log(carsCostSum); //54375
    }
    //
    //----------------------------------------------
    // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
    // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
    // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
    //
    // Пример:
    //     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
    // 1. Key = 1
    // Answer: MinIndex = 0, MaxIndex = 0.
    // 2. Key = 4
    // Answer: MinIndex = 3, MaxIndex = 6.

    const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

    function getMinAndMaxIndex(key,arr) {
        if (!arr.includes(key)) {
            console.log(-1);
        }
        else {
            let keys = arr.map((n,i) => n === key? i: null).filter(n => n !== null);
            const minIndex = Math.min(...keys);
            const maxIndex = Math.max(...keys);
            console.log(`Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}.`);
        }
    }

    getMinAndMaxIndex(0, arr); //-1
    getMinAndMaxIndex(1, arr); //Answer: MinIndex = 0, MaxIndex = 0.
    getMinAndMaxIndex(2, arr); //Answer: MinIndex = 1, MaxIndex = 1.
    getMinAndMaxIndex(3, arr); //Answer: MinIndex = 2, MaxIndex = 2.
    getMinAndMaxIndex(4, arr); //Answer: MinIndex = 3, MaxIndex = 6.
    getMinAndMaxIndex(5, arr); //-1
    getMinAndMaxIndex(6, arr); //-1
    getMinAndMaxIndex(7, arr); //Answer: MinIndex = 7, MaxIndex = 8.
    getMinAndMaxIndex(9, arr); //Answer: MinIndex = 9, MaxIndex = 9.
    getMinAndMaxIndex(10, arr); //-1
    getMinAndMaxIndex(11, arr); //-1
    getMinAndMaxIndex(12, arr); //-1
    getMinAndMaxIndex(13, arr); //-1
    getMinAndMaxIndex(14, arr); //Answer: MinIndex = 10, MaxIndex = 10.
    getMinAndMaxIndex(15, arr); //-1
}