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
