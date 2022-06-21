// 7.1
/* elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */
// 1 и 3 работают одинаково, вставляют текст

//7.2
function clear(elem) {
  elem.innerHTML = '';
}

// clear(elem);
// 7.3
// Почему остаётся "aaa"? - в теги table не может быть текста, поэтому HTML автоматически исправляет данный момент и выносит данный текст за тег

// 7.4
const addUserLi = () => {
  let userPrompt = null;
  while (true) {
    console.log(userPrompt);
    userPrompt = prompt('Введите элемент списка', '');
    if (userPrompt === null || userPrompt === '') break;
    const appendElem = document.createElement('li');
    appendElem.innerHTML = userPrompt
    elem.append(appendElem);
  }
}
// addUserLi()

// 7.5
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const container = document.getElementById('container');
const createTree = (elem = container, tree) => {
  elem.innerHTML = createTreeText(tree);
};

function createTreeText(obj) {
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}
//7.7 Calendar
const getDay = d => d === 0 ? 6 : d - 1;

const createCalendar = (elem, year, month) => {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let i = 0; i < getDay(d.getDay()); i++) {
    table += `<td></td>`
  };

  while (d.getMonth() === mon) {
    table += `<td>${d.getDate()}</td>`;
    if (getDay(d.getDay()) % 7 === 6) table += `<tr></tr>`;

    d.setDate(d.getDate() + 1);
  };

  table += '</tr></table>';

  elem.innerHTML = table;
};


createCalendar(cal, 2012, 9);

//7.8
const getTimeNow = () => {
  const [time, min, sec] = clock.children;
  const d = new Date();

  time.textContent = (`0` + d.getHours()).slice(-2);
  min.textContent = (`0` + d.getMinutes()).slice(-2);
  sec.textContent = (`0` + d.getSeconds()).slice(-2);
}
let timer;
const startClock = () => {
  timer = setInterval(getTimeNow, 1000);
};
const stopClock = () => {
  clearInterval(timer);
  timer = null;
};
start.onclick = startClock;
stopBtn.onclick = stopClock;

// 7.9
one.insertAdjacentHTML('afterend', `<li>2</li><li>3</li>`);

// 7.10
const table = last.querySelector('table');

const sortByName = (field) => {
  return (a, b) => a.cells[0][field] >
    b.cells[1][field] ? 1 : -1;
};


const sortTableByName = () => {
  let [body] = table.tBodies;
  const rows = Array.from(body.rows);

  const result = rows.slice().sort(sortByName('innerHTML'));

  body.append(...result);
};
sortTableByName();