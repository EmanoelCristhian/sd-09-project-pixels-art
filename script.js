const pixelBoard = document.querySelector('#pixel-board');
function pxBoard() {
  for (let lineIndex = 0; lineIndex < 5; lineIndex += 1) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'pixel-line';
    for(let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
      const pxColumn = document.createElement('div');
      pxColumn.className = 'pixel';
      lineContainer.appendChild(pxColumn);
    }
    pixelBoard.appendChild(lineContainer);
  }
}
pxBoard();

function colorSelecter(event) {
  const selected = document.querySelector('.selected');
  const targetSelected = event.target;
  if (targetSelected !== selected) {
    selected.classList.remove('selected');
    targetSelected.classList.add('selected');
  }
}

function getSelecter() {
  for (let index = 0; index < 4; index += 1) {
    const paletteList = document.querySelectorAll('.color')[index];
    paletteList.addEventListener('click', colorSelecter);
  }
}

getSelecter();

function bgPaint(event) {
  let classSelector = document.querySelector('.selected');
  event.target.style.backgroundColor = classSelector.style.backgroundColor;
}

pixelBoard.addEventListener('click', bgPaint);

const cleaner = document.querySelector('#clear-board');
const pxel = document.querySelectorAll('.pixel');

function clearboard() {
  for (let index = 0; index < pxel.length; index += 1) {
    pxel[index].style.backgroundColor = 'white';
  }
}

function btnClick() {
  cleaner.addEventListener('click', clearboard);
}

btnClick();
