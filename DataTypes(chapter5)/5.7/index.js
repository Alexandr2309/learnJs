//7.1
function unique(arr) {
  return Array.from(new Set(arr)).join(', ')
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O

//7.2
const aclean = arr => {
  return Array.from(
    new Map(arr.map(item =>
      [item.toLowerCase().split('').sort().join(''), item]
    ))
      .values());

}
let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr2));

//7.3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //Вызвать метод from у Array. map.keys() возвращает итерируемый объект, а не массив.


keys.push("more"); 

