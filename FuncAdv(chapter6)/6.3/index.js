//3.1
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1 У них разные лексические окружения

// 3.2
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counterClass = new Counter();

alert(counterClass.up()); // 1
alert(counterClass.up()); // 2
alert(counterClass.down()); // 1

// 3.3
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();// Ошибка, функция была создана в блоке if и не видна дальше этого блока

//3.4
const sum = a => b => a + b;
console.log(sum(5)(-1))

// 3.5
function inBetween(a, b) {
  return x => x >= a && x <= b;
};
const inArray = (arr) => {
  return elem => arr.includes(elem);
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// 3.6
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
const byField = field => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};
console.log(users.sort(byField('age')))
console.log(users.sort(byField('name')))

// 3.7
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;// функция shooter
    let shooter = function() { 
      console.log( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...