//Задание 8

function timeYear() {
    let month = prompt('Введите номер месяца');

    if (month <= 0 || month > 12 || isNaN(month)) {
        alert(`Введите число от 1 до 12`)
    }
    else if (month == 1 || month == 2 || month == 12) {
        alert('Зима')
    }
    else if (month >= 3 && month <= 5) {
        alert('Весна')
    }
    else if (month >= 6 && month <= 8) {
        alert('Лето')
    }
    else if (month >= 9 && month <= 11) {
        alert('Осень')
    }
}
//Задание 11
function guessThewords() {
    let wordsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordsArr.sort(() => Math.random() - 0.5);
    alert(wordsArr);
    let firstQuestion = prompt('Чему равнялся первый элемент массива?');
    let secondQuestion = prompt('Чему равнялся последний элемент массива?');
    if (wordsArr[0].toLowerCase() === firstQuestion.toLowerCase() && wordsArr[wordsArr.length - 1].toLowerCase() === secondQuestion.toLowerCase()) {
        alert('Поздравляем,ты угадал оба слова!');
    } else if (wordsArr[0].toLowerCase() === firstQuestion.toLowerCase() || wordsArr[wordsArr.length - 1].toLowerCase() === secondQuestion.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Увы,не правильно.');
    }
}
