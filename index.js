// Import stylesheets
import './style.css';

// Write Javascript code!
const squares = document.querySelectorAll('.square');
const turnDisplay = document.querySelector('.turn');
const resetButton = document.querySelector('.reset-button');
let xIsNext = true;

for (const square of squares) {
  square.addEventListener('click', handleClick);
}

resetButton.addEventListener('click', resetBoard);

function handleClick() {
  if (this.textContent === '') {
    this.textContent = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    turnDisplay.textContent = checkWinner() || `${xIsNext ? 'X' : 'O'}'s turn`;
  }
}

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
      return `${squares[a].textContent} wins!`;
    }
  }
  if ([...squares].every(square => square.textContent)) {
    return 'Draw';
  }
  return null;
}

function resetBoard() {
  for (const square of squares) {
    square.textContent = '';
  }
  xIsNext = true;
  turnDisplay.textContent = `X's turn`;
}

