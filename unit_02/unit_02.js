// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;

console.log(a * b);


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;

document.querySelector('.out-2').textContent = c / d;



// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;

document.querySelector('.out-3').textContent = e + f;



// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;

document.querySelector('.out-4').textContent = e1 + f1;
// 3 не число а строка, поэтому они просто слипаются получается 35 



// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector('.out-5').textContent = e2 / f2;
// Infinity



// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';

document.querySelector('.out-6').textContent = e3 + f3;
// слипаются получается 3Hello



// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.out-7').textContent = e4 * f4;
// NaN  Not a Number



// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let inputIn = document.querySelector('.input-in');

function t8() {
    let b = inputIn.value;

    console.log(b);
}

document.querySelector('.b-8').onclick = t8;



// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inputNine = document.querySelector('.i-9');

function t9() {
    let b = +inputNine.value;

    console.log(b);
    inputNine.value = '';
}

document.querySelector('.b-9').onclick = t9;



// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inputTen = document.querySelector('.i-10');
let outTen = document.querySelector('.out-10');

function t10() {
    let b = +inputTen.value;
    outTen.innerHTML = b;
}

document.querySelector('.b-10').onclick = t10;



// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let intupEleven = document.querySelector('.i-11');
let outEleven = document.querySelector('.out-11');

function t11() {
    let b = +intupEleven.value;
    outEleven.innerHTML = b + 10;
}

document.querySelector('.b-11').onclick = t11;



// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputTwelve = document.querySelector('.i-12_1');
let inputTwelve2 = document.querySelector('.i-12_2');
let outTwelve = document.querySelector('.out-12');

function t12() {
    let a = inputTwelve.value;
    let b = inputTwelve2.value;

    outTwelve.innerHTML = 'Hello ' + a + ' ' + b;
    // console.log('Hello ' + a + ' ' + b);
}

document.querySelector('.b-12').onclick = t12;



// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let inputThirteen = document.querySelector('.i-13_1');
let inputThirteen2 = document.querySelector('.i-13_2');
let outThirteen = document.querySelector('.out-13');

function t13() {
    let g = inputThirteen.value;
    let h = inputThirteen2.value;

    outThirteen.innerHTML = g + h;
}

document.querySelector('.b-13').onclick = t13;



// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 'Hello';



// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';



// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inputSixteen = document.querySelector('.i-16_1');
let inputSixteen2 = document.querySelector('.i-16_2');
let outSixteen = document.querySelector('.out-16');

function t16() {
    let a = inputSixteen.value;
    let b = inputSixteen2.value;

    outSixteen.innerHTML = a + b;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.



let inputSeventeen = document.querySelector('.i-17');
let outSeventeen= document.querySelector('.out-17');

function t17() {
    let t = inputSeventeen.value;

    t = parseInt(t);

    outSeventeen.innerHTML = t;
}

document.querySelector('.b-17').onclick = t17;



// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputEight = document.querySelector('.i-18');

function t18() {
    let t = inputEight.value;

    t = parseFloat(t);

    console.log(t);
}

document.querySelector('.b-18').onclick = t18;



// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let inputNineteen = document.querySelector('.i-19_1');
let inputNineteen2 = document.querySelector('.i-19_2');
let outNineteen = document.querySelector('.out-19');

function t19() {
    let a = +inputNineteen.value;
    let b = +inputNineteen2.value;
    let c = a + b;

    c = parseInt(c);


    outNineteen.innerHTML = c;
}

document.querySelector('.b-19').onclick = t19;



// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let inputTwenty = document.querySelector('.i-20_1');
let inputTwenty2 = document.querySelector('.i-20_2');
let inputTwenty3 = document.querySelector('.i-20_3');
let inputTwenty4 = document.querySelector('.i-20_4');
let outTwenty = document.querySelector('.out-20');

function t20() {
    let a = inputTwenty.value;
    let b = inputTwenty2.value;
    let c = inputTwenty3.value;
    let d = inputTwenty4.value;

    outTwenty.innerHTML = 'Уважаемый ' + a + ', ' + b + ', ваш возраст ' + c + ' года' + ' по професси вы ' + d;

}

document.querySelector('.b-20').onclick = t20;