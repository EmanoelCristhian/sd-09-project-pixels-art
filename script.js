window.onload = function () {

  setEvents();
  setNumberOfLines();

}

function setNumberOfLines() {

  let minValueOfQtty = 5;
  let maxValueOfQtty = 50;
  let inputValue = parseInt(document.querySelector('#board-size').value);
  validator(inputValue, minValueOfQtty, maxValueOfQtty);

}

function validator(inputValue, minValueOfQtty, maxValueOfQtty) {
    
  if (isNaN(inputValue)) {
      alert('Board inválido!');
      return;
  }
  if (inputValue >= 5 && inputValue <= 50) {
      createLinesContents(inputValue);
      return
  } else if (inputValue < 5) {
      createLinesContents(minValueOfQtty);
      return;
  }
  createLinesContents(maxValueOfQtty);

}

function createLinesContents(qtty) {

  let sectionOfBoard = document.querySelector('#pixel-board');
  clearBoard(sectionOfBoard.children.length);
  for (let index = 0; index < qtty; index += 1) {
      sectionOfBoard.appendChild(setNumberOfPixels());
  }

}

function setNumberOfPixels() {

  let inputValue = parseInt(document.querySelector('#board-size').value);
  return checkSize(inputValue);

}

function clearBoard(numberOfChilds) {

  let sectionOfBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < numberOfChilds; index += 1) {
      sectionOfBoard.removeChild(sectionOfBoard.firstElementChild);
  }

}

function checkSize(inputValue) {

  let minValueOfQtty = 5;
  let maxValueOfQtty = 50;
  let subDiv = document.createElement('div');
  subDiv.className = 'line-pixels';
  if (inputValue >= 5 && inputValue <= 50) {
      subDiv = createDivs(inputValue, subDiv);
  } else if (inputValue < minValueOfQtty) {
      subDiv = createDivs(minValueOfQtty, subDiv);
  }else {
      subDiv = createDivs(maxValueOfQtty, subDiv);
  }
  return subDiv;

}

function createDivs(inputValue, subDiv) {

  for (let index = 0; index < inputValue; index += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel white';
      subDiv.appendChild(newPixel);
  }
  return subDiv;

}

function setEvents() {

  setPaletteEvent();
  setBoardEvent();
  let clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoardOfPixels);
  let generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', setNumberOfLines);

}

function clearBoardOfPixels() {

  let mainColor = 'white';
  let classPosition = 1;
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = pixels[index].className.replace(pixels[index].classList[classPosition], mainColor);
  }

}

function setBoardEvent() {

  let divElements = document.querySelector('#pixel-board');
  divElements.addEventListener('click', changePixelColor);

}

function changePixelColor(event) {

  if (!(event.target.className === '' || event.target.className === null)) {
      let colorPosition = 1;
      let selected = document.querySelector('.selected');
      event.target.className = event.target.className.replace(event.target.classList[colorPosition], selected.classList[colorPosition]);
  }

}

function setPaletteEvent() {

  let divElements = document.querySelector('#color-palette');
  divElements.addEventListener('click', changeSelectedColor);

}

function changeSelectedColor(event) {

  let classSelected = 'selected';
  if (!(event.target.className === "" || event.target.className === null)) {
      let divElements = document.querySelectorAll('#color-palette div');
      divElements = removeAllSelections(divElements);
      event.target.className = event.target.className + ' ' + classSelected;
  }

}

function removeAllSelections(divElements) {

  let replacePosition = 2;
  let lengthOfClassList = 3;
  for (let index = 0; index < divElements.length; index += 1) {
      if (divElements[index].classList.length === lengthOfClassList) {
          divElements[index].classList.remove(divElements[index].classList[replacePosition])
      }
  }
  return divElements;

}
