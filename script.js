// Declaração de variaveis e constantes.
let boardSize = document.querySelector('#board-size');
const firstBoard = 5;
const pBoard = document.getElementById('pixel-board');
const newColors = document.querySelector('#restart');
const clearBt = document.querySelector('#clear-board')
const vqv = document.querySelector('#generate-board');
const black = document.querySelector('.black');
const palettes = document.getElementsByClassName('color');

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

function getColor(sel) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  sel.target.classList.add('selected');
  console.log(sel.target);
}
for (let i2 = 0; i2 < palettes.lenght; i2 += 1) {
  palettes[i2].addEventListener('click', getColor);
}

function paint(event) {
  const clicked = event.target;
  const choosen = document.querySelector('.selected');
  if (choosen === black) {
    clicked.classList.remove('clean');
    clicked.classList.add('black');
  } else if (choosen === document.getElementById('color2')) {
    clicked.classList.remove('clean');
    const choosen2 = document.getElementById('color2').style.backgroundColor;
    clicked.style.backgroundColor = choosen2;
  } else if (choosen === document.getElementById('color3')) {
    clicked.classList.remove('clean');
    const choosen3 = document.getElementById('color3').style.backgroundColor;
    clicked.style.backgroundColor = choosen3;
  } else {
    clicked.classList.remove('clean');
    const choosen4 = document.getElementById('color4').style.backgroundColor;
    clicked.style.backgroundColor = choosen4;
  }
}

for (let i = 0; i < firstBoard; i += 1) {
  const line = document.createElement('div');
  line.classList.add('line');
  pBoard.appendChild(line);
  for (let ii = 0; ii < firstBoard; ii += 1) {
    const circle = document.createElement('div');
    circle.classList.add('pixel', 'clean');
    line.appendChild(circle);
    circle.addEventListener('click', paint);
  }
}

function setFirstSelection() {
  const first = document.getElementsByClassName('color')[0];
  first.classList.add('selected');
}

clearBt.addEventListener('click', () => {
  const board = document.getElementsByClassName('pixel');
  for (let i3 = 0; i3 < board.lenght; i3 += 1) {
    board[i3].className('clean');
    // board[i3].style.backgroundColor = 'white';
  }
});

/* function boardChanger() {
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
vqv.addEventListener('click', boardChanger); */

// EVENTOS
window.onload = setFirstSelection;
generatePalette();
newColors.addEventListener('click', generatePalette);
console.log(randomize);
