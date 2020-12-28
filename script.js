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

function removeColorPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const colorDiv = document.querySelectorAll('.color');
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorPalette.removeChild(colorDiv[index]);
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

function removePixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const lineOfPixels = document.querySelectorAll('.line');
  for (let index = 0; index < lineOfPixels.length; index += 1) {
    pixelBoard.removeChild(lineOfPixels[index]);
  }
}

function removeSelectedClass() {
  const coloDiv = document.querySelectorAll('.color');
  for (let index = 0; index < coloDiv.length; index += 1) {
    coloDiv[index].classList.remove('selected');
  }
}

function setSelectedColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    removeSelectedClass();
    event.target.classList += ' selected';
  });
}

function changePixelColor(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function changeToWhite(event) {
  event.preventDefault();
  event.target.style.backgroundColor = 'white';
}

function setPixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', changePixelColor);
    pixel[index].addEventListener('contextmenu', changeToWhite);
  }
}

function clearPixelBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function setPixelBoardSize() {
  const boardSize = document.querySelector('#board-size');
  removePixelBoard();
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

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgbArray = [red, green, blue];
  const color = `rgb(${rgbArray})`;
  return color;
}

function smallGrid() {
  const lineOfPixels = document.querySelectorAll('.line');
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < lineOfPixels.length; index += 1) {
    lineOfPixels[index].style.height = '20px';
  }
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.height = '20px';
    pixel[index].style.width = '20px';
  }
}

function bigGrid() {
  const lineOfPixels = document.querySelectorAll('.line');
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < lineOfPixels.length; index += 1) {
    lineOfPixels[index].style.height = '40px';
  }
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.height = '40px';
    pixel[index].style.width = '40px';
  }
}

function randomColorPallete() {
  const randomArray = ['black', randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];
  removeColorPalette();
  createColorPalette(randomArray);
}

function rainbownizer() {
  const rainbow = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  removeColorPalette();
  createColorPalette(rainbow);
}

window.onload = function () {
  const clearBoard = document.querySelector('#clear-board');
  const generateBoard = document.querySelector('#generate-board');
  const smallButton = document.querySelector('#small');
  const bigButton = document.querySelector('#big');
  const randomdButton = document.querySelector('#random');
  const raibowButton = document.querySelector('#rainbow');
  const randomArray = ['black', randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];

  clearBoard.addEventListener('click', clearPixelBoard);
  generateBoard.addEventListener('click', checkBoardSize);
  smallButton.addEventListener('click', smallGrid);
  bigButton.addEventListener('click', bigGrid);
  randomdButton.addEventListener('click', randomColorPallete);
  raibowButton.addEventListener('click', rainbownizer);

  createColorPalette(randomArray);
  createPixelBoard(5, 5);
  setSelectedColor();
  setPixelColor();
};
