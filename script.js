window.onload = function () {
  const chngClr = document.querySelectorAll('.color');
  const paletteRed = document.querySelector('.red');
  function changeColorToRed() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 1) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteRed.classList.add('selected');
      }
    }
  }
  const paletteBlue = document.querySelector('.blue');
  function changeColorToBlue() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 2) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteBlue.classList.add('selected');
      }
    }
  }
  const paletteGreen = document.querySelector('.green');
  function changeColorToGreen() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 3) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteGreen.classList.add('selected');
      }
    }
  }
  const paletteBlack = document.querySelector('.black');
  function changeColorToBlack() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 0) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteBlack.classList.add('selected');
      }
    }
  }
  paletteRed.addEventListener('click', changeColorToRed);
  paletteBlue.addEventListener('click', changeColorToBlue);
  paletteGreen.addEventListener('click', changeColorToGreen);
  paletteBlack.addEventListener('click', changeColorToBlack);


  function paintPixel() {
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', function (event) {
      const selectedColor = document.querySelector('.selected');
      let colr;
      if (selectedColor.classList[1] === 'red') {
        colr = 'red';
      } else if (selectedColor.classList[1] === 'blue') {
        colr = 'blue';
      } else if (selectedColor.classList[1] === 'green') {
        colr = 'green';
      } else {
        colr = 'black';
      }
      event.target.style.backgroundColor = colr;
    });
  }
  paintPixel();

  function minSizeBoard() {
    const minSize = document.getElementById('board-size');
    minSize.addEventListener('keyup', function () {
      if (minSize.value < 5) {
        alert('Board inválido!');
        minSize.value = '5';
      }
    });
  }
  minSizeBoard();

  function clearPixelsButton(buttonName) {
    const botao = document.querySelector('#clear');
    const newButton = document.createElement('button');
    const newButtonID = 'clear-board';
    const newButtonClass = 'clear-board';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    newButton.className = newButtonClass;
    botao.appendChild(newButton);
  }
  clearPixelsButton('Limpar');
  const clr = document.querySelectorAll('.pixel');
  const bttn = document.querySelector('#clear-board');
  const color = 'white';
  function clearPixels() {
    for (let index = 0; index < clr.length; index += 1) {
      clr[index].style.backgroundColor = color;
    }
  }
  bttn.addEventListener('click', clearPixels);
};
