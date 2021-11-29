// Declaração de variaveis e constantes.
let boardSize = document.querySelector('#board-size');
const firstBoard = 5;
const pBoard = document.getElementById('pixel-board');
const newColors = document.querySelector('#restart');
const vqv = document.querySelector('#generate-board');
const black = document.querySelector('#black');
const paletteSize = document.getElementsByClassName('color');

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
  document.querySelector('selected').classList.remove('selected');
  sel.target.classList.add('selected');
  console.log('sel');
}
for (let i2 = 0; i2 < paletteSize.lenght; i2 += 1) {
  paletteSize[i2].addEventListener('click', getColor);
}

function paint(event) {
  const clicked = event.target;
  const choosen = document.querySelector('.selected');
  if (choosen === black) {
    clicked.classList.remove('clean');
    clicked.classList.add('black');
  } else if (choosen === document.querySelector('#color2')) {
    clicked.classList.remove('clean');
    const choosen2 = document.querySelector('#color2').style.backgroundColor;
    clicked.classList.add('sel2').style.backgroundColor = choosen2;
  } else if (choosen === document.querySelector('#color3')) {
    clicked.classList.remove('clean');
    const choosen3 = document.querySelector('#color3').style.backgroundColor;
    clicked.classList.add('sel3').style.backgroundColor = choosen3;
  } else {
    clicked.classList.remove('clean');
    const choosen4 = document.querySelector('#color2').style.backgroundColor;
    clicked.classList.add('sel4').style.backgroundColor = choosen4;
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

/* fonte do classList.add:
https://pt.stackoverflow.com/questions/288080/como-criar-elementos-e-adicionar-atributos-com-o-javascript-puro */
/* for (let i = 0; i < firstBoard; i += 1); {
  const line = document.createElement('div');
  line.classList.add('linha');
  pBoard.appendChild('line');
  for (let ii = 0; ii < firstBoard; ii += 1); {
    const circle = document.createElement('div');
    circle.classList.add('pixel', 'clean');
    circle.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      let clicked = event.target;
      if (selected === black) {
        clicked.classList.remove('clean');
        clicked.classList.add('black');
      } else if (selected === ) {
        clicked.classList.remove('clean');
        clicked.classList.add('2');
      } else if (selected === ) {
        clicked.classList.remove('clean');
        clicked.classList.add('3');
      } else {
        clicked.classList.remove('clean');
        clicked.classList.add('4');
      }
    });
  }
} */

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
window.onload = generatePalette;
newColors.addEventListener('click', generatePalette);
console.log(randomize);
