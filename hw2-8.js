//Задание 1
const peopleArr = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
  ];
  
  peopleArr.sort((a, b) => a.age - b.age);
  
  console.log(peopleArr);

  //Задание 2
  function isPositive(el) {
     return el > 0 ? true : false;
    }
    function isMale(obj) {
    return obj.gender === 'male' ? true : false;
    }
    function filter(array, callback) {
    return array.filter ((el) => callback(el));
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));
    //Задание 3 
    const timeId = setInterval(() => console.log(new Date()), 3000);
    setTimeout(() => {
        clearInterval(timeId);
        console.log('30 секунд прошло');
    }, 1000 * 30);

    //Задание 4
    function delayForSecond(callback) {
        setTimeout(callback, 1000);
    }
    
    delayForSecond(function () {
       console.log('Привет, Глеб!');
    });
    //Задание 5
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
                    if(cb) { 	cb(); }
    
        }, 1000)
    }
    
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }
    
    delayForSecond(() => sayHi('Глеб'))