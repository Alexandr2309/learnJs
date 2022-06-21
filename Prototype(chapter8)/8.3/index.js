//3.1
function f() {
  alert("Hello!");
}
Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
};
f.defer(1000);

//3.2
function f(a, b) {
  console.log(a + b);
}
Function.prototype.defer = function (ms) {
  let funcThis = this;

  function func(...arg) {
    setTimeout(() => funcThis.apply(this, arg), ms)
  };
  return func
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.