//4.1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // Выведется 4, так как массивы обладают ссылочной целостностью

//4.2
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);

//4.3
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // Результатом будет этот же массив, т.к. массив, по сути своей - это тот же объект

//4.4
function sumInput() {
  let arr = [],
    sum = 0;
  while (true) {
    const num = prompt('Введите число', 0);
    if (!isFinite(num) || num === (null || '')) break;
    arr.push(+num);
  };
  for (elem of arr) sum += elem;
  return elem;
}
//4.5
function getMaxSubSum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0 ; j < arr.length; j++) {
      sum += arr[j];
      max = sum > max ? sum : max;
    }
  };
  return max;
}