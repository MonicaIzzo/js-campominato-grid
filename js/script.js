/* # Griglia Campo Minato

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

console.log("JS OK");

// FUNZIONI
function startGame() {
  // cambio in ricomincia
  playGame.innerText = "Ricomincia";
  grid.innerHTML = "";

  const level = levelSelect.value;

  let rows;
  let cols;

  switch (level) {
    case "hard":
      rows = 7;
      cols = 7;
      break;
    case "normal":
      rows = 9;
      cols = 9;
      break;
    case "easy":
    default:
      rows = 10;
      cols = 10;
  }

  let totalCells = rows * cols;

  for (let i = 0; i < totalCells; i++) {
    const square = createSquare();
    square.innerText = i + 1;
    square.classList.add(level);
    console.log(level);

    square.addEventListener("click", function () {
      square.classList.add("hover");

      console.log(++i);
    });
    grid.appendChild(square);
  }
}

const createSquare = () => {
  const square = document.createElement("div");
  square.classList.add("square");

  return square;
};

// #0 Mi prepraro la sruttura del HTML + CSS.

// #1 Svuotamento

// OPERAZIONI INIZIALI

// #2 Recupero dal DOM gli elementi dalla pagina
const grid = document.getElementById("grid");
const playGame = document.getElementById("playGame");
const levelSelect = document.getElementById("livello");
console.log(levelSelect);

// #3 Setto delle variabili di comodo e mi creo le SQUARE

let rows;
let cols;

let level;

if ((level = "easy")) {
  rows = 10;
  cols = 10;
} else if ((level = "normal")) {
  rows = 9;
  cols = 9;
} else {
  rows = 7;
  cols = 7;
}

totalCells = rows * cols;
console.log(totalCells);

// #4 applico al Bottone [Crea] il compito di generare i square.
playGame.addEventListener("click", startGame);
