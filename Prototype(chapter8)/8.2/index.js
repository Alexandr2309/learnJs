//2.1
/* 1 - true, после присвоения prototype сохраняется и не перезаписывается
2 - false, свойство изменилось по ссылке
3 - true, свойство берётся из prototype а не из rabbit;
4 - undefined, свойство было удалено из prototype
*/
//2.2
function obj() {
  obj.prototype = {
    constructor: obj
  } // или ничего не делать, в prototype по умлочанию лежит constructor, который ссылается на родительский функцию(объект)
}
let obj2 = new obj.constructor();