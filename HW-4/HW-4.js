// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//  Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


    function pr(a, b){
        let result=a*b
        console.log(result)
        return result
}
pr(10,30);


   function circle(P,r){
       let result= P*P*r
       console.log(result)
       return result

   }
   circle(5,6)

   function Cylinder(h,r){
       let result=2*h*r
       console.log(result)
       return result

   }
   Cylinder(5,1)


let Arr=[1,2,4,5,8,9,10];
   function arr(Arr){
   for(let i=0; i<Arr.length; i++){
     console.log(Arr[i])

   }
   }
   arr(Arr);

   function paragraph(text){
   document.write('<p>' + text + '</p>')

   }
   paragraph('qwe')

   function createList(text){
       document.write('<ul>');
       for(let i=0;i<3;i++){
           document.write('<li>' + text + ' </li>')


       }
       document.write('</ul>')

   }
   createList('zxc')

function create(text,count){
    document.write('<ul>');
    for(let i=0;i<count;i++){
        document.write('<li>' + text + ' </li>')
    }
    document.write('</ul>')

}
create('zxc',3)


let a=[5,true,'two',3];

   function Myarray(){
       document.write('<ul>');
       for (let i = 0; i <a.length;  i++) {

           document.write('<li>' + a[i] + '</li>');
       }
       document.write('</ul>');

   }
   Myarray(a)

let user=[
    {id:1,name:'Maks',age:25},
    {id:2,name:'Yura',age:30},
    {id:3,name:'oleg',age:27},

]

function display(user){
 for( let i=0; i<user.length;i++){
     let obj = user[i];
     document.write('<div>');
     document.write('<p>' + obj.id+'</p>')
     document.write('<p>' + obj.name+'</p>')
     document.write('<p>' + obj.age+'</p>')
     document.write('</div>');
 }

}
display(user)

let least = [10, 5, 4, 2, 1, 10, 0,20,3];

function less(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(less(least));


function suma() {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i];
    }
    return total;
}


let numbers = [1, 2, 10,5];
 console.log(suma(numbers))

function swap(arr, index1, index2) {

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

let num = [11, 22, 33, 44];
console.log(swap(num, 0, 1));


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let rate = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            rate = currencyValues[i].value;
            break;
        }
    }

    let exchangedSum = sumUAH / rate;
    return exchangedSum;
}


let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
console.log(exchange(10000, currencyValues, 'USD'));

