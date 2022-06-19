// 2.1
// const num1 = prompt('Введите первое число', '');// Или поставить + перед prompt
// const num2 = prompt('Введите второе число', ''); // Или поставить + перед prompt

// console.log(`Сумма чисел ${num1} и ${num2} равна ${+num1 + +num2}`);

//2.2
/* Почему 6.35.toFixed(1) == 6.3
Всё из-за потери точноси двоичной дроби.
Исправить можно так: Math.round(6.35 * 10) / 10;
*/

//2.3
function readNumber() {
  let number;

  do {
    number = prompt('Введите число', '');
  } while (isNaN(number));

  return number === (null || '') ? null : +number;
};

//2.4
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// } // Этот цикл бесконечный, потому что i не приравнивается к 10 из-за потери точночти десятичных дробей, такова особенность JavaScript.

//2.5
const random = (min, max) => Math.random() * (max - min) + min;

//2.6
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
