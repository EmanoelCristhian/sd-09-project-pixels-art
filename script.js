let baseDoQuadro = 5;
sessionStorage.selectedColor = 'black';

const colorArray = ['#2a9d8f','#f4a261','#c5c3c6','#46494c','#1985a1',
  '#cb997e','#ddbea9','#e5989b','#b5838d','#e63946','#a8dadc','#457b9d',
  '#457b9d','#f4f1de','#e07a5f','#81b29a','#f2cc8f','#ffd6a5','#9bf6ff',
  '#ffc6ff','#d00000','#ffba08','#00b4d8','#90e0ef','#caf0f8','#fca311',
  '#06d6a0','#073b4c','#f77f00','#fcbf49','#b7e4c7','#8ecae6','#ffddd2',
  '#ff006e','#3a86ff','#8338ec','#48cae4','#ea9ab2','#b3dee2','#4ecdc4',
  '#ffe66d','#d8572a','#edb183','#251605','#0d21a1','#e18ad4','#f2545b',
  '#890620','#890620','#01baef'];

function pickStarterColors(array) {
  let starterColors = [];
  let ok;
  let num;
  for (let idx = 0; idx < 3 ; idx += 1) {
    ok = false;
    while (!ok) {
      num = Math.floor(Math.random()*array.length);
      if (!starterColors.includes(array[num])) {
        starterColors.push(array[num]);
        ok = true;
      }
    }
  }
  return (starterColors);
}

function setStarterColors(){
  let starterColors = pickStarterColors(colorArray);
  let colors = document.querySelectorAll('.color');
  for (let idx = 1; idx < colors.length; idx += 1){
    colors[idx].style.backgroundColor = starterColors[idx-1];
    colors[idx].innerText = starterColors[idx-1];
  }
}

function clearBoard() {
  let allPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < allPixels.length; idx += 1) {
    allPixels[idx].style.backgroundColor = 'white';
  }
}

let clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function (target) {
  clearBoard(target);
});


for (let idx = 0; idx < baseDoQuadro; idx += 1) {
  const newLine = document.createElement('div');
  newLine.className = 'linha';
  document.querySelector('#pixel-board').appendChild(newLine);
}

let minhasLinhas = document.querySelectorAll('.linha');
for (let idx = 0; idx < minhasLinhas.length; idx += 1) {
  minhasLinhas[idx].style.height = '40px';
  minhasLinhas[idx].style.width = `${baseDoQuadro * 40}px`;
}

for (let idx = 0; idx < minhasLinhas.length; idx += 1) {
  for (let idx2 = 0; idx2 < baseDoQuadro; idx2 += 1) {
    const newPixel = document.createElement('div');
    newPixel.style.backgroundColor = 'white';
    newPixel.className = 'pixel';
    minhasLinhas[idx].appendChild(newPixel);
  }
}

const colorButtons = document.querySelectorAll('.color');

function removeColorButtonMarks() {
  for (let idx = 0; idx < colorButtons.length; idx += 1) {
    if (colorButtons[idx].classList.contains('selected')) {
      colorButtons[idx].classList.toggle('selected');
    }
  }
}

function selectColor(self) {
  removeColorButtonMarks();
  let selectedColor = self.target.style.backgroundColor;
  sessionStorage.selectedColor = selectedColor;
  self.target.classList.toggle('selected');
}

for (let idx = 0; idx < colorButtons.length; idx += 1) {
  colorButtons[idx].addEventListener('click', function (target) {
    selectColor(target);
  });
}

function colorPixel(self) {
  self.target.style.backgroundColor = sessionStorage.selectedColor;
}

const myPixels = document.querySelectorAll('.pixel');

for (let idx = 0; idx < myPixels.length; idx += 1) {
  myPixels[idx].addEventListener('click', function (target) {
    colorPixel(target);
  });
}
