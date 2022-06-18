//5.2
function Calculator() {
  this.a = 2;
  this.b = 2;
  this.read = () => {
    this.a = +prompt("Введите первое число", 0);
    this.b = +prompt("Введите второе число", 0);
  };
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;
};
let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

// 5.3
function Accumulator(startingValue) {
 this.value = startingValue;

 this.read = () => {
    this.value += +prompt("Введите число", 0);
 }
}