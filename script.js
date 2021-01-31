window.onload = function () {
  let corPreta = document.getElementById('color1');
  corPreta.className += ' selected';
}

function setBoardSize () {
  let botaoVqv = document.querySelector('#generate-board');
  let input = document.querySelector('input');
  let pixelBoard = document.querySelector('#pixel-board');
  botaoVqv.addEventListener ('click', function () {
    let boardSize = input.value;
    if (boardSize) {
      pixelBoard.innerText = '';
    function criarQuadro (boardSize) {
      for (index = 0 ; index < boardSize ; index += 1) {
        let linha = document.createElement('tr');
        let pixelBoard = document.getElementById('pixel-board');
        pixelBoard.appendChild(linha);
        for (index2 = 0; index2 < boardSize; index2 += 1) {
          let coluna = document.createElement('td');
          coluna.className = 'pixel';
          document.getElementById('pixel-board').appendChild(coluna);
        }
      }
    }
    criarQuadro(boardSize);
    }
    else {
      alert('Board inválido!');
    }
  })
}

function selectedColorChoise () {
  let paletaDeCores = document.getElementById('color-palette');
  paletaDeCores.addEventListener ('click', function (event) {
    let divsCores = document.getElementsByClassName('color');
    for (index = 0; index < divsCores.length; index += 1) {
      divsCores[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}

function paintPixel () {
  let quadroPixels = document.querySelector('#pixel-board');
  quadroPixels.addEventListener('click', function (event) {
      let corSelecionada = document.querySelector('.selected');
      let styleCorSelecionada = window.getComputedStyle(corSelecionada).getPropertyValue('background-color');
      event.target.style.backgroundColor = styleCorSelecionada;
  })
}

function limpaQuadro () {
  let botaoLimpa = document.querySelector('#clear-board');
  botaoLimpa.addEventListener('click', function () {
    pixels = document.getElementsByClassName ('pixel');
    for (index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = '';
    }
  })
}

function criarQuadro () {
  for (index = 0 ; index < 5 ; index += 1) {
    let linha = document.createElement('tr');
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(linha);
    for (index2 = 0; index2 < 5; index2 += 1) {
      let coluna = document.createElement('td');
      coluna.className = 'pixel';
      document.getElementById('pixel-board').appendChild(coluna);
    }
  }
}

selectedColorChoise();
paintPixel();
limpaQuadro();
setBoardSize();
criarQuadro();