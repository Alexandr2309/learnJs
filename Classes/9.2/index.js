
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

// 
class ExtendedClock extends Clock {
  constructor({ template }, precision) {
    super({ template });
    this.precision = precision || 1000;
  }

  start() {
    console.log(this.precision)
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};


