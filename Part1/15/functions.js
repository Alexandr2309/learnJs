// 15.1 
// Оба варианта функций отработают одинково, отличий нет.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
/* function checkAge(age) {
  if (age > 18) {
    return true;
  }

  return confirm('Родители разрешили?');
}
 */
// 15.2
function checkAge2(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
};
/* function checkAge2(age) {
 return (age > 18) || confirm('Родители разрешили?'); 
} */
// 15.3
function min(a, b) {
  return a < b ? a : b;
}
// 15.4
function pow(x, n) {
  if(x < 1) return alert('Число должно быть натуральным');
  return alert(x ** n);
};
const num = prompt('Введите число', '');
const degree = prompt('Введите степень', '');
pow(num, degree);

