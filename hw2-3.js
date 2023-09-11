//Задание 1
let password = 'пароль';

let info = prompt('Введите пароль');
if (info === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен не верно');
}
//Задание 2
let c = 2;

if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 3
let d = 101;
let e = 5;

if (d || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 4
let a = '2';
let b = '3';

alert(a * b - true);
//Задание 5
let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default: console.log('Такого месяца не существует');
        break;
}
//Задание 7 (Не понимаю как сделать проверку на число)
let numeral = Number(prompt('Пожалуйста, введите любое число'));
if (numeral%2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}
//Задание 8