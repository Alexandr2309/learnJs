//8.1 
/* if ("0") {
  alert( 'Привет' );
} // Выведется 
*/

//8.2 
/* 
const answer = prompt('Какое «официальное» название JavaScript?');
if(answer === 'ECMAScript' ) {
  alert('Верно!') 
} else {
  alert('Не знаете? ECMAScript!');
}
  */
//8.3
const resultPrompt = +prompt('Введите число', 0);
if (resultPrompt > 0) {
  alert(1)
} else if (resultPrompt < 0) {
  alert(-1)
} else if (resultPrompt === 0) {
  alert(0);
}

// 8.4
/* 
let result;

result = (a + b < 4) ? 'Мало' : 'Много';
 */

//8.5
let message;

message = login == 'Сотрудник' ? 'Привет' :
login == 'Директор' ? 'Здравствуйте' :
login == '' ? 'Нет логина' :
''
