//Задание 1
let lineTop = 'ДобРое УтрО';
lineTop = lineTop.toUpperCase();
console.log(lineTop);
//Задание 2
function wordSearch(arr, prefix) {
    let NewArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentStr = arr[i].toLowerCase();

        if (currentStr.startsWith(prefix.toLowerCase())) {
            NewArr.push(currentStr);
        }
    }

    return NewArr;
}

console.log(wordSearch(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
//Задание 3 
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
//Задание 4
let numArr = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));
//Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));
//Задание 6
function getRandomArrNumbers(n) {
    let randomArr = [];
    for (let i = 0; i < n / 2; i++) {
        randomArr.push(Math.floor(Math.random() * (n + 1)));
    }
    return randomArr;
}
console.log(getRandomArrNumbers(6));
//Задание 7 (Кажется что 5 и 7 задание одно и то же)
function getRandomIntRep(minV, maxV) {
    return Math.round(Math.random() * (maxV - minV)) + minV;
}
console.log(getRandomIntRep(1, 10));
//Задание 8
let curDate = new Date();
console.log(curDate);
//Задание 9
let currentDate = new Date();
let willDate = new Date(currentDate);
willDate.setDate(currentDate.getDate() + 73);
console.log(willDate);
//Задание 10 
function convertDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let fullDate = date.getDate() + " " + date.toLocaleString("DEFAULT", { month: "short" }) + " " + date.getFullYear() + " - это " + days[date.getDay()];
    let fulltime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return `Дата: ${fullDate}.\nВремя:${fulltime}`;
}
const todayDate = new Date();
console.log(convertDate(todayDate));

