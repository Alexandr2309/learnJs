// 9.1
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = objSalaries => Object.values(objSalaries).reduce((a, b) => a + b);

console.log( sumSalaries(salaries) );
// 9.2
let user = {
  name: 'John',
  age: 30
};
const count = obj => Object.keys(obj).length;
console.log( count(user) ); // 2