let blackColor = document.querySelector('#black');
let redColor = document.querySelector('#red');
let cyanColor = document.querySelector('#cyan');
let yellowColor = document.querySelector('#yellow');

function palletColor() {
  blackColor.style.backgroundColor = 'black';
  redColor.style.backgroundColor = 'red';
  cyanColor.style.backgroundColor = 'cyan';
  yellowColor.style.backgroundColor = 'yellow';
}

function selectedClass(event) {
  let classSelected = document.querySelector('.selected');
  classSelected.className = 'color';
  event.target.className = 'color selected';
}
function clickColor() {
  let squade = document.querySelector('#color-palette');
  squade.addEventListener('click', selectedClass);
}

function clearbutton() {
  let buttonClear = document.createElement('button');
  let pixelBoard = document.querySelector('#button-container');
  buttonClear.innerText = 'Clear';
  pixelBoard.appendChild(buttonClear);
}

window.onload = function () {
  palletColor();
  clickColor();
  clearbutton();
};
