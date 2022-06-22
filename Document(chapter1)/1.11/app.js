// получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
};

// 11.1
const coord = field.getBoundingClientRect()
const p1 = `${coord.left}:${coord.top}`;
const p2 = `${coord.right}:${coord.bottom}`;
const p3 = `${coord.left + field.clientLeft}:${coord.top + field.clientTop}`;
const p4 = `${coord.right - field.clientLeft}:${coord.bottom - field.clientTop}`;
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

//11.2

/* function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
};

function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case 'top':
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.left + 'px';
      break;
    case 'right':
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.right + 'px';
      break;
    case 'bottom':
      elem.style.top = anchorCoords.bottom + elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.left + 'px';
      break;
  }
};
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
 */
//11.3
/* function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
};

function positionAt(anchor, position, elem) {
  const anchorCoords = getCoords(anchor);

  switch (position) {
    case 'top':
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.left + 'px';
      break;
    case 'right':
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.right + 'px';
      break;
    case 'bottom':
      elem.style.top = anchorCoords.bottom + elem.offsetHeight + 'px';
      elem.style.left = anchorCoords.left + 'px';
      break;
  }
};
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below"); */

//11.4
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.right - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }

}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");