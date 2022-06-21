// //9.1
// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }
// function spy(func) {

//   a.calls = [];

//   function a(...b) {
//     func.call(func, ...b);
//     a.calls.push(b)
//   };

//   return a;
// }
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }

// // 9.2
// function f(x) {
//   console.log(x);
// }

// function delay(f, ms) {
//   return function a(...arg) {
//     setTimeout(() => {
//       f.apply(f, arg)
//     }, ms);
//   }
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// //
// const debounce = (f, ms) => {
//   a.isReady = true;
//   function a(...arg) {
//     if (!a.isReady) return;

//     f.apply(this, arg);
//     a.isReady = false;
//     setTimeout(() => a.isReady = true, ms)
//   };
//   return a;
// };
// let f2 = debounce(alert, 1000);

// f2(1); // выполняется немедленно
// f2(2); // проигнорирован

// setTimeout(() => f2(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f2(4), 1100); // выполняется
// setTimeout(() => f2(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// 9.4
function f3(a) {
  console.log(a)
}

function throttle(f, msx) {
  let isReady = true;
  let lastCall = null;
  function a(...arg) {
    if (!isReady) {
      lastCall = arg;
      return;
    };
    f.apply(this, arg);
    isReady = false;
    setTimeout(() => {
      isReady = true;
      lastCall ? f.apply(this, lastCall) : null;
    }, msx)
  };

  return a;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let fT1000 = throttle(f3, 1000);

fT1000(1); // показывает 1
fT1000(2); // (ограничение, 1000 мс ещё нет)
fT1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
