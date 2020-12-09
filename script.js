function generatePalette() {
  const palette = document.getElementById('color-palette');
  const colorPaletteArray = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'teal', 'pink', 'gray'];
  const paletteSize = 4;

  // [Task 3] First color is always BLACK
  const firstColor = document.createElement('div');
  firstColor.className = 'color selected';
  firstColor.style.backgroundColor = 'black';
  palette.appendChild(firstColor);

  // Remaining colors
  for (let i = 1; i < paletteSize; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    // color.style.backgroundColor = colorPaletteArray[randomizeColor(colorPaletteArray.length)];
    color.style.backgroundColor = colorPaletteArray[i];
    palette.appendChild(color);
  }
}

function generateBoardColumn(pixelBoard) {
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    pixelBoard.appendChild(row);
  }
}

function generateBoardRow() {
  const pixelBoard = document.querySelectorAll('.row');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    generateBoardColumn(pixelBoard[i]);
  }
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  const colors = document.getElementsByClassName('color');
  colorPalette.addEventListener('click', function (colorSelection) {
    if (colorSelection.target.className === 'color') {
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].className = 'color';
        colorSelection.target.className = 'color selected';
      }
    } else if (colorSelection.target.className === 'selected color') {
      colorSelection.target.className = 'color';
    }
  });
}

function paint() {
  const board = document.getElementById('pixel-board');

  board.addEventListener('click', function (pixelSelection) {
    const currentColor = document.querySelector('.selected');
    const color = currentColor.style.backgroundColor;
    if (pixelSelection.target.className === 'pixel') {
      pixelSelection.target.style.backgroundColor = color;
    }
  });
}

function clearButton() {
  const container = document.getElementById('button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  container.appendChild(button);

  button.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

window.onload = function () {
  generatePalette();
  generateBoardRow();
  selectColor();
  paint();
  clearButton();
};
