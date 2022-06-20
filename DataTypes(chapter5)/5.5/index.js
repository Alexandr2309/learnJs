//5.1
const camelize = str => {
  str.split('')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

/* Вариант 2 
const camelize = str => str.split('-')
  .reduce(
    (a, b) => a + (b[0].toUpperCase() + b.slice(1))
  ); */

//5.2 
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
};

//5.3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < a || current > b) {
      arr.splice(i, 1);
      i--;
    };
  }
};

// 5.4

let arr = [5, 2, 1, -10, 8];
arr = arr.sort((a, b) => b - a);
console.log(arr)

// 5.5
let array = ["HTML", "JavaScript", "CSS"];
const copySorted = arr => arr.slice().sort();
let sorted = copySorted(array);

console.log(sorted); // CSS, HTML, JavaScript
console.log(array); // HTML, JavaScript, CSS (без изменений)

//5.6
function Calculator() {

  this.calculate = (str) => {
    let arrayForCalc = str.split(' ');
    return this[arrayForCalc[1]](+arrayForCalc[0], +arrayForCalc[2])
  }
  this['+'] = (a, b) => a + b;
  this['-'] = (a, b) => a - b;
  this.addMethod = (method, cb) => {
    this[method] = cb;
  }
};
let calc = new Calculator;
console.log(calc.calculate('3 + 7'));
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3");
console.log(result); // 8

//5.7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name).join(', ');

console.log(names); // Вася, Петя, Маша

// 5.8
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2
  .map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Вася Пупкин

//5.9
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arrOfUser = [vasya3, petya3, masha3];
function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
sortByAge(arrOfUser);

// теперь: [vasya, masha, petya]
console.log(arrOfUser[0].name); // Вася
console.log(arrOfUser[1].name); // Маша
console.log(arrOfUser[2].name); // Петя

//5.10
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
}

// 5.11
let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };

let arr4 = [vasya4, petya4, masha4];

const getAverageAge = users => users.reduce((a, b) => a + b.age, 0) / users.length;
console.log(getAverageAge(arr4)); // (25 + 30 + 29) / 3 = 28

//5.12
function unique(arr) {
  const result = [];
  strings.forEach(item => result.includes(item) ? null : result.push(item));
  return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O