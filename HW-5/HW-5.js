// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
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
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let pr=(a,b)=> a*b
let result=pr(7,8)
console.log(result)

let circle=(r,P)=>P*r*r
let circleResult=circle(10,5)
console.log(circleResult)
let cylinder=(h,r)=>2*h*r
let cylinderResult=cylinder(10,3)
console.log(cylinderResult)

let array = [1, 2, 3];
let arrayelements=(arr)=> array.forEach(element=>console.log(element))
arrayelements(array)

let createParagraph = text => console.log(`<p>${text}</p>`);
createParagraph('Hello');

let createListWithCountElemen = (text, count) => {
    document.write('<ul>');
    for(let i=0;i<count;i++){
        document.write('<li>' + text + ' </li>')
    }
    document.write('</ul>')

}
createListWithCountElemen("Item", 3);



let createListWithCountElements = (text) => {
    document.write('<ul>');
    for(let i=0;i<3;i++){
        document.write('<li>' + text + ' </li>')


    }
    document.write('</ul>')

}
createListWithCountElements("Item");

let createListFromArray = arr => {
    document.write('<ul>');
    for (let i = 0; i <primitiveArray.length;  i++) {

        document.write('<li>' + primitiveArray[i] + '</li>');
    }
    document.write('</ul>');

};
let primitiveArray = [1, "two", true];
createListFromArray(primitiveArray);


let objects = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Alice', age: 25},
    {id: 3, name: 'Bob', age: 35}
];

let displayObjects = objectsArray => {
    for (let i = 0; i < objectsArray.length; i++) {
        let obj = objectsArray[i];
        document.write('<div>');
        document.write('<p>' + obj.id + '</p>');
        document.write('<p>' + obj.name + '</p>');
        document.write('<p>' + obj.age + '</p>');
        document.write('</div>');
    }
};

displayObjects(objects);

let least = [10, 5, 4, 2, 1, 10, 0,20,3];
let findMinNumber = arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinNumber(least));

let sum = arr => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i];
    }
    return total;
}


let numbers = [1, 2, 10,5];
console.log(sum(numbers));


let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};
let swapArray = [11, 22, 33, 44];
console.log(swap(swapArray, 0, 1));

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    return sumUAH / exchangeRate;
};
let uah = 10000;
let values = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
let currency = 'USD';
console.log(exchange(uah, values, currency));