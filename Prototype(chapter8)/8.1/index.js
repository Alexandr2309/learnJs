//1.1
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert(rabbit.jumps); // true

delete rabbit.jumps;

alert(rabbit.jumps); // null

delete animal.jumps;

alert(rabbit.jumps); // undefined

//1.2
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
// Вопрос 2: Не важно. Современные движки оптимизированы и производительность не теряется при более длинной цепочке поиска

//1.3
/* let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); */ // Запись будет произведена в rabbit, т.к. __proto__ не влияет на this, this - это то что идёт перед точкой.

// 1.4
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple