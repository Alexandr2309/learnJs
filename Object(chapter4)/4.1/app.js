//1.1
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//1.2
let schedule = {};
const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  };

  return true
}

console.log(isEmpty(schedule)) // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

//1.3
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; // Да, это будет работать, так как перезаписывается значение, а не сама переменная. Объекты обладают ссылочной целостностью.

// 1.4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += key;
  };
  return sum;
};
console.log(sumSalaries(salaries)); // 390

// 1.5
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
/* menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */