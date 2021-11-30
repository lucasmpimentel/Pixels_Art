// --------------- Declarações de interface -------------------------

const pBoard = document.getElementById('pixel-board');
const newColors = document.querySelector('#restart');
const clearBt = document.getElementById('clear-board');
const vqv = document.querySelector('#generate-board');
const pixels = document.getElementsByClassName('pixel');
const palettes = document.getElementsByClassName('color');

// ---------------------------- FUNÇÕES ------------------------------

/* Após ler a documentação de Math.floor e Math.random e buscar
soluções e discutir com colegas, cheguei a essa conclusão para
gerar cores aleatórias */
/* pesquisando formas de encurtar a função, achei essas arrow funcions
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions */

// ----------------------------  CORES ALEATÓRIAS ----------------------------
const randomize = () => Math.floor(Math.random() * (255 - 1) + 1);
const generatePalette = () => {
  const c1 = document.querySelector('#color1');
  c1.style.backgroundColor = 'black';
  const c2 = document.querySelector('#color2');
  c2.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
  const c3 = document.querySelector('#color3');
  c3.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
  const c4 = document.querySelector('#color4');
  c4.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
};

// ---------------------------- PRIMEIRO QUADRO ------------------------------

function genBoard(size = 5) {
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pBoard.appendChild(line);
    for (let ii = 0; ii < size; ii += 1) {
      const circle = document.createElement('div');
      circle.classList.add('pixel');
      circle.style.backgroundColor = 'white';
      line.appendChild(circle);
    }
  }
}
genBoard();
// ------------------------------ SELECINAR PRETO ----------------------------

const first = document.getElementById('color1');
first.classList.add('selected');

// -------------------------- SELECIONAR COR DA PALETA ------------------------

for (const iii of palettes) {
  iii.addEventListener('click', (event) => {
    const lastColor = document.querySelector('.selected');
    lastColor.classList.remove('selected');
    event.target.classList.add('selected');
    console.log('removeu selected')
  });
}

// -------------------------------- COLORIR PIXELS -----------------------------

for (const iv of pixels) {
  iv.addEventListener('click', (event) => {
    const clickedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = clickedColor;
    console.log('colocou selected');
  });
}

// ------------------------------ LIMPAR QUADRO ---------------------------------
function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}

// ---------------- EVENTOS --------------------------
generatePalette();
newColors.addEventListener('click', generatePalette);
clearBt.addEventListener('click', clearBoard);

// ------------------------- QUADRO DEFINIDO NO INPUT ------------------------
function removeBoard() {
  while (document.getElementsByClassName('line')[0]) {
    document.getElementsByClassName('line')[0].remove();
  }
}
vqv.addEventListener('click', () => {
  console.log('start');
  let boardSize = document.getElementById('board-size').value;
  removeBoard();
  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize <= 5) {
    boardSize = 5;
    genBoard(boardSize);
  } else if (boardSize >= 50) {
    boardSize = 50;
    genBoard(boardSize);
  } else {
    boardSize = parseInt(boardSize, 10);
    genBoard(boardSize);
  }
});
