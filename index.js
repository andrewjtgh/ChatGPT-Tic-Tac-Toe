// Import stylesheets
import './style.css';

// Write Javascript code!
const squares = document.querySelectorAll(".square");
const result = document.querySelector(".result");
const resetButton = document.querySelector(".reset");

let xIsNext = true;
let winner = null;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (winner !== null || squares[i].textContent !== "") {
      return;
    }

    if (xIsNext) {
      squares[i].textContent = "X";
    } else {
      squares[i].textContent = "O";
    }

    xIsNext = !xIsNext;

    winner = getWinner();

    if (winner === "X") {
      result.textContent = "X wins!";
    } else if (winner === "O") {
      result.textContent = "O wins!";
    } else if (winner === "tie") {
      result.textContent = "It's a tie.";
    }
  });
}

resetButton.addEventListener("click", function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }

  xIsNext = true;
  winner = null;
  result.textContent = "";
});

function getWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent &&
      squares[a].textContent !== ""
    ) {
      return squares[a].textContent;
    }
  }

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return null;
    }
  }

  return "tie";
}
