// 8.1
alert(null || 2 || undefined); // 2
// 8.2
alert(alert(1) || 2 || alert(3)); // 1, а после 2
//8.3
alert(1 && null && 2); // null
//8.4
/*  alert( alert(1) && alert(2) ); // undefined
//8.5 
alert( null || 2 && 3 || 4 ); // 3
//8.6 
if(age >= 14 && age <= 90);
//8.7
if(age < 14 || age > 90); // Первый вариант
if(!(age >= 14 && age <= 90)); // Второй вариант */
//8.8
//Выполнится first и third
if (-1 || 0) alert('first'); //в if будет -1, соответствует true
if (-1 && 0) alert('second'); // в if будет 0, соответствует false
if (null || -1 && 1) alert('third'); // в if будет 1, соответствует true
//8.9
const result = prompt('Кто там?', '');

if (!result) alert('Отменено');

else if (result == 'Админ') {

  let password = prompt('Пароль?', '');
  if (!password) alert('Отменено');

  password == 'Я главный'
    ? alert('Здравствуйте!')
    : alert('Неверный пароль');

} else {
  alert('Я вас не знаю');
}


