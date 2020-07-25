let container = document.querySelector('.container')
let containerWidth = Number(window.getComputedStyle(container).width.replace('px', ''));
createGrid();

function createGrid(sqr = 16) {
  for (let i = 0; i < sqr; i++) {
    let newContainer = document.createElement('div');
    for (let j = 0; j < sqr; j++) {
      let newSquare = document.createElement('div');
      newSquare.classList = 'square';
      newSquare.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      newSquare.style.width = Math.floor(containerWidth / sqr) + 'px';
      newSquare.style.height = Math.floor(containerWidth / sqr) + 'px';
      newSquare.addEventListener('mouseover', paint);
      newContainer.appendChild(newSquare);
    }
    container.appendChild(newContainer);
  }
}

document.querySelector('.clear-grid').addEventListener('click', clearGrid)

function clearGrid() {
  container.innerHTML = '';
  let newGrid = prompt('Please enter the new number of squares');
  createGrid(Number(newGrid))
}

let square = document.querySelectorAll('.square');

function paint(e) {
  let currentSquareColor = window.getComputedStyle(e.target).backgroundColor;
  let currentAlpha = Number(currentSquareColor.split('(')[1].split(',')[3].replace(')', ''));
  let newAplha = currentAlpha + 0.1;
  e.target.style.backgroundColor = `rgba(0, 0, 0, ${newAplha})`;
}

