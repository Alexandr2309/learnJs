//9.1
/* const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//9.2
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);
 */
//9.3
const right = (field.clientWidth /2) - (ball.offsetWidth / 2);
const topBall = (field.clientHeight / 2) - (ball.offsetHeight / 2);
console.log(right, topBall)
ball.style.left = Math.round(right) + 'px';
ball.style.top = Math.round(topBall) + 'px';

//9.4
/* 
-ClientWidth возвращает число, а getComputedStyle - строку с px;
-Свойство clientWidth стабильно с полосой прокрутки и др. мелькими моментами
-getComputedStyle может возвращать не числовые значения(auto)
-getComputedStyle возвращает CSS стили, из за чего глобальные изменения в файле стилей могут не совпадать с тем, что предоставляет свойство clientWidth(например при разных значениях box-sizing будут возвращены разные значения)
*/