var gameState = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

var cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});


function handleClick(event) {
    var Index = event.target.getAttribute("data-cell");

    if (gameState[Index] === "") {
    gameState[Index] = currentPlayer;
    event.target.innerHTML = currentPlayer;
    
        if (playerwinner()) {
            winneris.innerHTML = `Bravo ! Le joueur ${currentPlayer} a gagné !`;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // ou ---->
            // winneris.innerHTML = `C\'est le tour du joueur ${currentPlayer}`;
    //   if (currentPlayer == 'X') {
    //     currentPlayer = 'O';
    // } else {
    //     currentPlayer = 'X';
    // }
        }
    }
}

function playerwinner() {
  if (
    // Lignes
    (gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer) ||
    (gameState[3] === currentPlayer && gameState[4] === currentPlayer && gameState[5] === currentPlayer) ||
    (gameState[6] === currentPlayer && gameState[7] === currentPlayer && gameState[8] === currentPlayer) ||
    // Colonnes
    (gameState[0] === currentPlayer && gameState[3] === currentPlayer && gameState[6] === currentPlayer) ||
    (gameState[1] === currentPlayer && gameState[4] === currentPlayer && gameState[7] === currentPlayer) ||
    (gameState[2] === currentPlayer && gameState[5] === currentPlayer && gameState[8] === currentPlayer) ||
    // Diagonales
    (gameState[0] === currentPlayer && gameState[4] === currentPlayer && gameState[8] === currentPlayer) ||
    (gameState[2] === currentPlayer && gameState[4] === currentPlayer && gameState[6] === currentPlayer)
  ) {
    return true;
  } else if (!gameState.includes('')){
    winneris.innerHTML = 'partie nulle'
  } else {
    return false;
  }
}


function restartGame(){
    currentPlayer = 'X';
    gameState = ['','','','','','','','',''];
    document.querySelectorAll('.cell').forEach(cell => {
      cell.innerHTML = '';
    });

    document.querySelectorAll('#winneris').forEach(winneris => {
        winneris.innerHTML = '';
    })
  }