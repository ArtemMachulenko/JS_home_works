{
    // 1) Створити карту користувача(User Card):
    // Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
    // об’єкт з методами:
    //     const card3 = userCard(3); // returns an object with methods

    // User Card методи:
    //     getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
    // карту:
    //     card3.getCardOptions(); // returns options object with card info
    // Об’єкт має містити такі властивості:
    // • balance (по замовчуванням 100)
    // • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
    // карти)
    // • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
    // данної карти)
    // • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
    // функції. Кожна карта повинна мати унікальний key)

    // putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
    // карти:
    // card3.putCredits(150);

    // takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
    // баланса карти (протилежний за дією від метода putCredits):
    // card3.takeCredits(100);

    // Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
    // перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
    // відповідне повідомлення у консолі (скористайтеся console.error)

    // setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
    // як ліміт транзакцій на картці
    // card3.setTransactionLimit(5000);

    // transferCredits.
    //     Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
    //     та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
    // card3.transferCredits(50, card1);

    // Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
    // Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
    // транзакцій відправника кредитів (card3).
    //     Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
    // change операції і зберігайте history log. History log (Дивитись зображення 1)
    // інформація має зберігатись в об’єктах з такими властивостями:
    //     • operationType (стрічка яка описує здійснену операцію)
    // • credits (кількість коштів)
    // • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)

    //----------------------------------------------------------------
    function userCard(n) {
        const cardOptions = {
            balance: 100,
            transactionLimit: 100,
            historyLogs: [],
            key: n
        };

        function getCardOptions() {
            return cardOptions;
        }

        function putCredits(money) {
            cardOptions.balance += money;
        }

        function setTransactionLimit(limit) {
            cardOptions.transactionLimit = limit;
        }

        function takeCredits(money) {
            if (money > cardOptions.transactionLimit) {
                console.error('Лимит снятия денег перевышен!');
                return;
            }
            if (money > cardOptions.balance) {
                console.error('Недостаточно денег на счету!');
                return;
            }

            cardOptions.balance -= money;
        }

        function transferCredits(money, receiverUser) {
            if (money > cardOptions.transactionLimit) {
                console.error('Лимит снятия денег перевышен!');
                return;
            }
            if (money > cardOptions.balance) {
                console.error('Недостаточно денег на счету!');
                return;
            }

            const tax = .5;
            const moneyAfterTax = money - (money/100 * tax);

            receiverUser.putCredits(moneyAfterTax);

            //log
            const log = {
                operationType: 'Reseived credits',
                credits: money,
                operationTime: `${new Date().toLocaleDateString('en-US')}, ${new Date().toLocaleTimeString()}`
            };

            cardOptions.historyLogs.push(log);
        }

        return {
            getCardOptions,
            putCredits,
            setTransactionLimit,
            takeCredits,
            transferCredits
        };
    }

    //создать карту
    const card1 = userCard(1);
    //получить информацию по карте
    //console.log(card1.getCardOptions()); //{balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 1}

    //положить деньги
    card1.putCredits(1000);
    //console.log(card1.getCardOptions()); //{balance: 1100, transactionLimit: 100, historyLogs: Array(0), key: 1}

    //установить лимит
    card1.setTransactionLimit(5000);
    //console.log(card1.getCardOptions()); //{balance: 1100, transactionLimit: 5000, historyLogs: Array(0), key: 1}

    //снять деньги
    //card1.takeCredits(5100); //Лимит снятия денег перевышен!
    //card1.takeCredits(2100); //Недостаточно денег на счету!

    card1.takeCredits(100);
    //console.log(card1.getCardOptions()); //{balance: 1000, transactionLimit: 5000, historyLogs: Array(0), key: 1}

    //создать вторую карту
    const card2 = userCard(2);
    //переслать деньги
    //card1.transferCredits(5050, card2); //Лимит снятия денег перевышен!
    //card1.transferCredits(2050, card2); //Недостаточно денег на счету!

    card1.transferCredits(150, card2);
    card1.transferCredits(50, card2);
    card1.transferCredits(250, card2);
    //console.log(card2.getCardOptions()); //{balance: 547.75, transactionLimit: 100, historyLogs: Array(0), key: 2}

    //посмотреть историю переводов
    console.log(card1.getCardOptions().historyLogs);
    //[{operationType: "Reseived credits", credits: 150, operationTime: "4/23/2020, 11:17:01"},
    // {operationType: "Reseived credits", credits: 50, operationTime: "4/23/2020, 11:17:01"},
    // {operationType: "Reseived credits", credits: 250, operationTime: "4/23/2020, 11:17:01"}
    // ]
    
    //====================================================================================================
}

