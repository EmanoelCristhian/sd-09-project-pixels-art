function criarQuadro () {
    for (index = 0 ; index < 5 ; index += 1) {
        let linha = document.createElement('tr');
        linha.className = 'pixel';
        let pixelBoard = document.getElementById('pixel-board');
        pixelBoard.appendChild(linha);
        for (index2 = 0; index2 < 5; index2 += 1) {
            let coluna = document.createElement('td');
            coluna.className = 'pixel';
            document.getElementById('pixel-board').appendChild(coluna);
        }

    }
    
}

criarQuadro();