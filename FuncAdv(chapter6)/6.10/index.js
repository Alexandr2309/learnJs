// 10.1
function f() {
  alert(this); //  Выведет null
}

let user = {
  g: f.bind(null)
};

user.g(); // Выведет null

//10.2
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();// Выведет Вася. Контекст записывается при первом вызове. Изменить существующую привязку нельзя

// 10.3
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log(bound.test); // undefined, т,к контекст(this) поменялся и у объекта нет такого свойства
// 10.4
/* function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok.bind(user2)();
  else fail.bind(user2)();
}

let user2 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user2.loginOk, user2.loginFail);
 */
//10.5
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false)); // ?
