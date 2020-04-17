// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const formOne = document.forms.formOne;
const commentsOne = formOne.comments;

if (localStorage.getItem('commentsOne')) {
    commentsOne.value = localStorage.getItem('commentsOne');
}

commentsOne.addEventListener('input', e => {
    localStorage.setItem('commentsOne',commentsOne.value);
});
//------------------------------------------------------------------
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
const formTwo = document.forms.formTwo;

formTwo.addEventListener('input', e => {
    let elem = e.target;
    if (elem.type === 'radio' || elem.type === 'checkbox' || elem.tagName === 'SELECT') return;
    localStorage.setItem(elem.name, elem.value);
});

formTwo.addEventListener('change', e => {
    let elem = e.target;
    if (elem.type !== 'radio' && elem.type !== 'checkbox' && elem.tagName !== 'SELECT') return;
    if (elem.tagName === 'SELECT') localStorage.setItem(elem.name, elem.value);
    if (elem.type === 'checkbox') localStorage.setItem(elem.name, elem.checked);
    if (elem.type === 'radio') localStorage.setItem(elem.name, elem.id);
});


for (const elem of formTwo.querySelectorAll('[name]')) {
    if (elem.type !== 'radio' || elem.type !== 'checkbox') {
        if (localStorage.getItem(elem.name)) {
            elem.value = localStorage.getItem(elem.name);
        }
    }
    if (elem.type === 'checkbox') {
        if (localStorage.getItem(elem.name)) {
            elem.checked = JSON.parse(localStorage.getItem(elem.name));
        }
    }
    if (elem.type === 'radio') {
        if (localStorage.getItem(elem.name)) {
            const radio = document.getElementById(localStorage.getItem(elem.name))
            radio.checked = true;
        }
    }
}

//------------------------------------------------------------------
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
const formThree = document.forms.formThree;
const txtAreaCom = formThree.comments;
const btnSave = formThree.save;

const buttonLeft = document.createElement('button');
buttonLeft.id = 'buttonLeft';
buttonLeft.textContent = '◄';

const buttonRight = document.createElement('button');
buttonRight.id = 'buttonUp';
buttonRight.textContent = '►';

const btnContainer = document.createElement('div');
btnContainer.append(buttonLeft,buttonRight);
btnContainer.hidden = true;
formThree.prepend(btnContainer);

let index = 0; //текущий индекс для кнопок стрелок
// если страница была перезагружена
// если хранилище существует
// установить в поле textarea последнее введенное значение
if (localStorage.getItem('storage')) {
    const storage = JSON.parse(localStorage.getItem('storage'));
    txtAreaCom.value = storage[storage.length-1].comment;
    //текущий индекс для кнопок стрелок равен индексу последнего коментария в массиве
    //кнопка вперед теперь показывать последний коментарий
    index = storage.length-1;
}

btnSave.addEventListener('click', e => {
    if (btnContainer.hidden) btnContainer.hidden = false;
    //если хранилище не создано то создать его как массив объектов
    if (!localStorage.getItem('storage') && txtAreaCom.value.length) {
        let storage = [];
        storage.push({comment:txtAreaCom.value});
        //создать хранилище с помещенным в него первым комментом
        localStorage.setItem('storage', JSON.stringify(storage));
    }
    else {
        //если в поле было введено значение
        if (!txtAreaCom.value.length) return;
        //получаем хранилище
        let storage = JSON.parse(localStorage.getItem('storage'));
        //в конец массива помещаем текущий коммент
        storage.push({comment:txtAreaCom.value});
        //перезаписываем хранилище
        localStorage.setItem('storage', JSON.stringify(storage));
        //кнопка вперед теперь показывать последний коментарий
        index = storage.length-1;
    }
});

buttonLeft.addEventListener('click', e => {
    const storage = JSON.parse(localStorage.getItem('storage'));
    --index;
    if (index < 0) index = 0;
    //получить коммент по индексу вставить в textarea
    txtAreaCom.value = storage[index].comment;

    e.preventDefault();
});

buttonRight.addEventListener('click', e => {
    const storage = JSON.parse(localStorage.getItem('storage'));
    ++index;
    if (index > JSON.parse(localStorage.getItem('storage')).length-1) index = JSON.parse(localStorage.getItem('storage')).length-1;
    //получить коммент по индексу вставить в textarea
    txtAreaCom.value = storage[index].comment;

    e.preventDefault();
});

//------------------------------------------------------------------
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

//        Pешение в файле notebook.html








