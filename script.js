sessionStorage.selectedColor = 'black';


function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < allPixels.length; idx += 1) {
    allPixels[idx].style.backgroundColor = 'white';
  }
}

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function (target) {
  clearBoard(target);
});

function destructBoard() {
  const linhas = document.querySelectorAll('.linha');
  for (let index = linhas.length - 1; index >= 0; index -= 1) {
    linhas[index].parentNode.removeChild(linhas[index]);
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
  const selectedColor = self.target.style.backgroundColor;
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
function assignPixels() {
  const myPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < myPixels.length; idx += 1) {
    myPixels[idx].addEventListener('click', function (target) {
      colorPixel(target);
    });
  }
}

function constructBoard(baseDoQuadro) {
  destructBoard();
  for (let idx = 0; idx < baseDoQuadro; idx += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'linha';
    newLine.style.height = '40px';
    newLine.style.width = `${baseDoQuadro * 42}px`;
    document.querySelector('#pixel-board').appendChild(newLine);
  }
  const myLines = document.querySelectorAll('.linha');
  for (let idx = 0; idx < baseDoQuadro; idx += 1) {
    for (let idx2 = 0; idx2 < baseDoQuadro; idx2 += 1) {
      const newPixel = document.createElement('div');
      newPixel.style.backgroundColor = 'white';
      newPixel.className = 'pixel';
      myLines[idx].appendChild(newPixel);
    }
  }
  assignPixels();
}

function verificaNovaBase(number) {
  if (number >= 50) {
    return 50;
  } else if (number <= 5) {
    return 5;
  } 
  return number;
}

function mudaBoardPeloBotao() {
  const fieldValue = document.querySelector('.input').value;
  if (fieldValue === '' || fieldValue < 0){
    document.querySelector('.input').value = '';
    return alert('Board inválido!');
  }
  const answer = verificaNovaBase(fieldValue);
  constructBoard(answer);
  document.querySelector('.input').value = '';
}

document.querySelector('.confirmButton').addEventListener('click', mudaBoardPeloBotao);

function mudaPeloEnter(self) {
  const key = self.keyCode;
  if (key === 13) {
    const fieldValue = document.querySelector('.input').value;
    if (fieldValue ===''|| fieldValue < 0){
      document.querySelector('.input').value = '';
      return alert ('Board inválido!');
    }
    const answer = verificaNovaBase(fieldValue);
    constructBoard(answer);
    document.querySelector('.input').value = '';
  }
}

document.querySelector('.input').addEventListener('keydown', mudaPeloEnter);
