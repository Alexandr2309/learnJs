class Rabbit extends Object {
  constructor(name) {
    super();// Необходимо вызвать суппер наследуемого класса или объекта.
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка