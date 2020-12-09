let pixelBoard = document.querySelector('#pixel-board');
let pxColumn = document.querySelector('.pixel-column');

function pxBoard(){
    let line;
    for(let lineIndex = 0; lineIndex < 5; lineIndex += 1) {
        let lineContainer = document.createElement('div');
        lineContainer.className = 'pixel-line';
        for(let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
            let pxColumn = document.createElement('div');
            pxColumn.className = 'pixel';
            lineContainer.appendChild(pxColumn);
        }
        pixelBoard.appendChild(lineContainer);
    }
}
pxBoard();
