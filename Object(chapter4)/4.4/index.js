// 4.1
let user = {
  name: "Джон",
  go: function () { alert(this.name) }
}; // необходима точка с запятой

(user.go)() // ошибка!

//4.2
let obj, method;

obj = {
  go: function () { alert(this); }
};

obj.go();               // (1) [object Object] Стандартный вызов метода объекта

(obj.go)();             // (2) [object Object] // Просто добавлены скобки.

(method = obj.go)();    // (3) undefined Присвоение метода в переменную и вызов его. Вызывается метод без this

(obj.go || obj.stop)(); // (4) undefined // obj.go возвращает ссылку у которой нет this.

//4.3
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user2 = makeUser();
// Литерал объекта сам по себе не влияет на this
alert(user2.ref.name); // Error: Cannot read property 'name' of undefined

// 4.4
let calculator = {
  a: 0,
  b: 0,
  read: () => {
    this.a = +prompt("Введите первое число", 0);
    this.b = +prompt("Введите второе число", 0);
  },
  sum: () => this.a + this.b,
  mul: () => this.a * this.b,
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// 4.5

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
    return this;
  }
};