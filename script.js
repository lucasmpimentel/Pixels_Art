let boardSize = document.querySelector('#board-size');
const pBoard = document.querySelector('#pixel-board');
const circle = document.createElement('div');
const newColors = document.querySelector('#restart');
const vqv = document.querySelector('#generate-board');

/* fonte do classList.add:
https://pt.stackoverflow.com/questions/288080/como-criar-elementos-e-adicionar-atributos-com-o-javascript-puro */
circle.classList.add('pixel');

/* Após ler a documentação de Math.floor e Math.random e buscar
soluções e discutir com colegas, cheguei a essa conclusão para
gerar cores aleatórias */
/* pesquisando formas de encurtar a função, achei essas arrow funcions */
const randomize = () => Math.floor(Math.random() * (255 - 1) + 1);
const generatePalette = () => {
  const pC2 = document.getElementById('color2');
  pC2.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
  const pC3 = document.getElementById('color3');
  pC3.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
  const pC4 = document.getElementById('color4');
  pC4.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
};

function boardChanger() {
  if (boardSize !== '' && boardSize.value > 5) {
    boardSize = 5;
    boardSize = parseInt(boardSize, 10);
  } else if (boardSize !== '' && boardSize.value > 50) {
    boardSize = 50;
    boardSize = parseInt(boardSize, 10);
  } else {
    boardSize = (boardSize.value);
    boardSize = parseInt(boardSize, 10);
  }
  return boardSize;
}
vqv.addEventListener('click', boardChanger);

function insertPixels() {
  pBoard.appendChild(circle);
}
function generateBoard() {
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    insertPixels();
  }
}

// EVENTOS
window.onload = generatePalette;
newColors.addEventListener('click', generatePalette);
console.log(randomize);
