/*------------- В комментариях описаны ошибки -------------*/

function pow(x,n) // Нет пробела между функцией и её аргументами, а также самими аргументами
{ // скобка начинается с новой строки
  let result=1; // Нет пробела по бокам от знака =
  for(let i=0;i<n;i++) {result*=x;} // отсутствуют пробелы между операторами, а также между операндами и присваиванием. 
  //Содержимое скобок также лучше переносить на отдельную строку
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // нет пробелом между переменными и знаком =, а также лучше переносить присваивание на новую строку
// Отсутствует логически нужный отступ в 1 строку сверху
if (n<=0) // скобка открывается на строке с условием
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n)) // Вложенный вызов функции, но не критично
}
// Во всём коде отсутствуют точки с запятой