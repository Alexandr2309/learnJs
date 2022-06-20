// 11.1
// console.log(new Date(2012, 1, 20, 3, 12))
alert(new Date(2012, 1, 20, 3, 12))

//11.2
const getWeekDay = date => ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'].at(date.getDay())
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date))

// 11.3
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }
  return day;
}
console.log(getLocalDay(date));

//11.4
function getDateAgo(date, days) {
  const year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();
  return new Date(year, month, day - days);
};
/* 
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
} Более простой и правильный вариант в решении
 */
let dateTest = new Date(2015, 0, 2);
console.log(getDateAgo(dateTest, 1));
console.log(getDateAgo(dateTest, 365));

//11.5
const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

//11.6
const getSecondsToday = () => {
  const now = new Date();

  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diff = (now - current) / 1000;
  return Math.round(diff);
};
console.log(getSecondsToday());

//11.7
function getSecondsToTomorrow() {
  const now = new Date();

  const newDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const left = (newDay - now) / 1000;
  return Math.round(left);
};
console.log(getSecondsToTomorrow())

// 11.8
function formatDate(date) {
  const now = new Date();
  let diff = Math.round((now - date) / 1000);
  if (diff < 1) return 'Прямо сейчас';
  else if (diff < 60) return `${diff} секунд назад`;

  diff = Math.round(diff / 60);
  if (diff < 60) return `${diff} мин.назад`;

  const normalizeDate = (date) => `0${date}`.slice(-2); // Вспомогательная функция для приведения даты в форму с двумя цифрама

  let dateArr = [date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), date.getMinutes()]
    .map(elem => normalizeDate(elem));

  return dateArr.slice(0, 3).join('.') + ' ' +
    dateArr.slice(-2).join(':');

};
console.log(formatDate(new Date(new Date - 86400 * 1000))) 
