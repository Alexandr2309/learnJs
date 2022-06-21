//6.1 
function makeCounter() {

  function counter() {
    return counter.count++;
  };
  counter.set = (value) => counter.count = value
  counter.decrease = () => counter.count--
  counter.count = 0;

  return counter;
};
const counter = makeCounter();
console.log(counter())
console.log(counter())
counter.set(22);
counter.decrease()
console.log(counter.count)
// 6.2
const sum = function sumFunc(a = 0) {
  let current = a;
  function f(x) {
    current += x;
    return f;
  };
  f.toString = function () {
    current;
  }

  return f
};
console.log(sum(1)(2))