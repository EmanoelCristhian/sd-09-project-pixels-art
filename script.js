function createColorPalette(colorsArray) {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < colorsArray.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = colorsArray[index];
    colorPalette.appendChild(colorDiv);
    if (colorsArray[index] === 'black') {
      colorDiv.className += ' selected';
    }
  }
}

function createPixelBoard(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let indexOfLine = 0; indexOfLine < size; indexOfLine += 1) {
    const lineOfPixels = document.createElement('div');
    lineOfPixels.className = 'line';
    pixelBoard.appendChild(lineOfPixels);
    for (let indexOfPixel = 0; indexOfPixel < size; indexOfPixel += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      lineOfPixels.appendChild(pixel);
    }
  }
}

function setSelectedColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      selectedColor.className = 'color';
      color[index].className += ' selected';
    });
  }
}

function setPixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function () {
      const color = document.querySelector('.selected').style.backgroundColor;
      pixel[index].style.backgroundColor = color;
    });
  }
}

function clearPixelBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function removeAllPixels() {
  const pixelBoard = document.querySelector('#pixel-board');
  const lineOfPixels = document.querySelectorAll('.line');
  for (let index = 0; index < lineOfPixels.length; index += 1) {
    pixelBoard.removeChild(lineOfPixels[index]);
  }
}

function setPixelBoardSize() {
  const boardSize = document.querySelector('#board-size');
  removeAllPixels();
  if (boardSize.value > 50) {
    createPixelBoard(50);
  } else if (boardSize.value < 5) {
    createPixelBoard(5);
  } else {
    createPixelBoard(boardSize.value);
  }
  setSelectedColor();
  setPixelColor();
}

function checkBoardSize() {
  const boardSize = document.querySelector('#board-size');
  if (boardSize.value !== '') {
    setPixelBoardSize();
  } else {
    alert('Board inválido!');
  }
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgbArray = [red, green, blue];
  const color = `rgb(${rgbArray})`;
  return color;
}

window.onload = function () {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', clearPixelBoard);
  const generateBoard = document.querySelector('#generate-board');
  generateBoard.addEventListener('click', checkBoardSize);

  createColorPalette(['black', generateRandomColor(), generateRandomColor(), generateRandomColor()]);
  createPixelBoard(5, 5);
  setSelectedColor();
  setPixelColor();
};
