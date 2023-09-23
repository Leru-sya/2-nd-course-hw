//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}
//Задание 2

const ind = [1, 5, 4, 10, 0, 3];

console.log(ind.indexOf(4));
//Задание 3
let j = [1, 3, 5, 10, 20];
j = j.join(' ');
console.log(j);
//Задание 4
let gArr=[];
let pArr=[];
for (let a = 0; a<3; a++){
    pArr.push(1);
}
for (let a = 0; a<3;a++){
    gArr.push(pArr);
}
console.log(gArr);
//Задание 5
let num = [1, 1, 1];
num.push(2, 2, 2);
console.log(num);
//Задание 6
let s = [9, 8, 7, 'a', 6, 5];
s = s.sort();
s.pop();
console.log(s);
//Задание 7 (Почему без Number перед prompt не работает и почему нельзя сделать без доп переменной)
let mystery = [9, 8, 7, 6, 5];
let b = 0;
let arrNum = Number(prompt('Угадайте число от 1 до 10'));

mystery.forEach((el) => {
    if(el === arrNum){
        b++;
    }
})
if (b >= 1){
    console.log('Угадал');
}
if (b === 0) {
    console.log('Не угадал');
}

//Задание 8 (не уверена)
let vice = 'abcdef';
vice = vice.split('');
vice.reverse();
vice=vice.join('');
console.log(vice);
//Задание 9
let apart = [[1, 2, 3,],[4, 5, 6]];
apart = apart.flat();
console.log(apart);
//Задание 10
let sumArr = [1,2,3,4,5,8];
let result = 0;
for (let el of sumArr){
    result += el;
    console.log(result);
}
//Задание 11
function squareArr (wholeArr) {
    let inArr = wholeArr;
    let wArr = inArr.map(item => item *item);
    console.log(wArr);   
    }
    squareArr([2,2,4]);
//Задание 12
function wordLen (len) {
    let inputArr = len;
    let lenArr = inputArr.map(item => item.length);
    console.log(lenArr);
    }
    wordLen(["Ведьмак", "Киберпанк", "Симс"]);
//Задание 13
function filterPositive(array) {
    let negArr = array;
    let negNum = negArr.filter(item => item < 0)
      console.log(negNum);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]);
