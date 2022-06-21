//8.1
const printNumbers = (from, to) => {
  let i = from;
  let time = setTimeout(function func() {
    console.log(i);
    if (i === to) {
      clearTimeout(time);
      return;
    };
    i++
    time = setTimeout(func, 1000)
  }, 1000)
};
const printNumbersInterval = (from, to) => {
  let timer = setInterval(() => {
    console.log(from++);
    if(from > to) clearInterval(timer);
  }, 1000)
};
// printNumbersInterval(1, 10);
// 8.2
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
} // setTimeout покажет 100000000, потому что будет выполнен после основного кода.
