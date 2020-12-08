window.onload = function() {
  let div_colorPalette = document.querySelector('#div_colorPalette');
  let div_matriz = document.querySelector('#div_matriz');
  let entrada = 5;
  div_matriz.style.width = (entrada*40);
  // let columns = 5;
  function createDivsRowsColumns(entrada) {
    for (let i = 1; i <= entrada; i += 1) {
      for (let j = 1; j <= entrada; j += 1) {
        let div = document.createElement('div');
        div.id = `${i}x${j}`
        div_matriz.appendChild(div);
      }
    }
  }
  createDivsRowsColumns(entrada)
  console.log(div_colorPalette);
  console.log(div_matriz);
}
