// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let array= [ 1,true,false,{},[5,3], null,undefined,{name},{id:1},10];
console.log(array)
let book1={title:'Harry Potter',pageCount:300,genre:'Fiction'};
let book2={title:'1504',pageCount:156,genre:'Fiction'};
let book3={title:'stars',pageCount:200,genre:'Fiction'};
let book4={title:'stars',pageCount:200,genre:'Fiction',authors:[{name:'Rowling',age:35}]};
let book5={title:'Harry Potter',pageCount:300,genre:'Fiction',authors:[{name:'Rowling',age:35}]};
let book6={title:'Harry Potter',pageCount:300,genre:'Fiction',authors:[{name:'Rowling',age:35}]};

let users=[
    {name:'anna',password:123,username:'qwe'},
    {name:'olya',password:'qwe',username:'qwe'},
    {name:'anna',password:'whefb',username:'yu'},

];
console.log(users[0].password,users[1].password,users[2].password);

let weather=[
    {day:'Monday',morning:18,afternoon:24,evening:20},
    {day:'Tuesday',morning:19,afternoon:26,evening:17},
    {day:'Wednesday',morning:21,afternoon:22,evening:18},
    {day:'Thursday',morning:18,afternoon:23,evening:15},
    {day:'Friday',morning:16,afternoon:21,evening:16},
    {day:'Saturday',morning:18,afternoon:26,evening:21},
    {day:'Sunday',morning:23,afternoon:20,evening:23},

];
let x=0;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

let time=20;
if(time<15){
    console.log('Перша четвреть години');
} else if(time<30){
    console.log('Друга четверть години');
}  else if(time<45){
    console.log('Третя четверть години');
} else{
    console.log('Четверта четверть години');
}
let day=25;
if(day<=10){
    console.log('Перша половина місяця')
} else if(day<=20){
    console.log('Друга половина місяця')
} else{
    console.log('Третя половина місяця')
}

let dayofweek=7;

switch(dayofweek){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}

let num1=100;
let num2=8;
if(num1>num2){
    console.log(num1)
} else if(num2>num1){
    console.log(num2)}
else {
    console.log('Числа рівні')
}
{
    let x =0
    if (!x ) {
        x = 'default'
        console.log(x)
    } else{
        console.log(true)
    }
}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('super')
}else if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super')
}else if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('super')
} else if (coursesAndDurationArray[3].monthDuration>5)
{
    console.log('super')
} else if  (coursesAndDurationArray[4].monthDuration>5)
{
    console.log('super')
} else if  (coursesAndDurationArray[5].monthDuration>5){
    console.log('super')
}
