// 1.1
const sumTo = n => n == 1 ? n : n + sumTo(n - 1);
/* 
const sumTo = n => {
  let sum = 0;
  for(let i =1; i<=n; i++) sum +=i;
  return sum
};
const sumTo = n => n * (n + 1) / 2; // Фрифметическая прогрессия
*/
console.log(sumTo(4))
console.log(sumTo(100))

// 1.2 
const factorial = n => n == 1 ? n : n * factorial(n - 1);
console.log(factorial(5))

//1.3
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};
console.log(fib(3))
function fiban(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  };
  return b;
}
//1.4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
const printList = list => {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  };
  return;
};
printList(list)
function printList2(list) {
  let nowList = list;
  do {
    console.log(nowList.value);
    nowList = nowList.next
  } while (nowList);

};
printList2(list)

// 1.5 
const printListReverse = list => {
  if (list.next) {
    printListReverse(list.next);
  };
  console.log(list.value);
  return
};
function printListReverse2(list) {
  let arr = [];
  let nowList = list;
  while(nowList) {
    arr.push(nowList.value);
    nowList = nowList.next
  };
  arr.reverse().forEach(item => console.log(item));
}
printListReverse(list);
printListReverse2(list)