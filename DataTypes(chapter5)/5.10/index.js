// 10.1
let user = {
  name: "John",
  years: 30
};
const { name, years, isAdmin = false } = user;
console.log(name, years, isAdmin);

//10.2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
const topSalary = obj => {
  let maxSalary = 0,
    name;
  Object.entries(obj).forEach(([key, value]) => {
    if (value > maxSalary) {
      maxSalary = value;
      name = key
    }
  });
  return name;
}

console.log(topSalary(salaries))