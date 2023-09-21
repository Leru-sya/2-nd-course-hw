//Задание1
function less(a, b) {
    return Math.min(a, b)
}
console.log(less(8, 2));

//Задание 2
function parity(c) {
    if (c % 2 == 0) {
        return ('Число чётное')
    } else {
        return ('Число нечётное')
    }
}
console.log(parity(8));

//Задание 3
function number(d) {
    let numberSquare = d ** 2;
    console.log(numberSquare);
    return numberSquare;
}
number(8)

//Задание 4
function userAge() {
    let age = prompt('Сколько Вам лет?');

    if (age < 0) {
        console.log('Вы ввели неправильное значение');

    } else if (isNaN(age)) {
        console.log('Вы ввели неправильное значение');

    } else if (age <= 12) {
        console.log('Привет, друг!');
        
    } else {
        console.log('Добро пожаловать!');
    }
}
userAge()

//Задание 5
function numberChek() {
    let numOne = prompt('Введите число');
    let numTwo = prompt('Введите число');

    if (!isNaN(numOne) && !isNaN(numTwo)) {
        return console.log(numOne * numTwo);
    }
    else {
        return console.log('Одно или оба значения не являются числом');
    }
}
numberChek();

//Задание 6
function nameNum() {
    let numCube = prompt('Введите число');

    if (!isNaN(numCube)) {
        return console.log(`${numCube} в кубе равняется ${numCube ** 3}`);
    }
    else {
        return console.log('Переданный параметр не является числом');
    }
}
nameNum()

//Задание 7
function circleArea() {
    return ((this.radius ** 2) * 3.14)
}
function circlePerimeter() {
    return (this.radius * 2 * 3.14)
}
const circle1 = {
    radius: 10,
    getArea: circleArea,
    getPerimeter: circlePerimeter,
};
const circle2 = {
    radius: 5,
    getArea: circleArea,
    getPerimeter: circlePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

