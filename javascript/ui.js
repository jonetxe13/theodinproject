function computerPlay() {
  const i = Math.floor(Math.random() * (4 - 1)) + 1;
  let computer = "tijeras";
  if (i == 1) {
    computer = "piedra";
  }
  if (i == 2) {
    computer = "papel";
  }
  return computer;
}
function playRound(playerSelection, computerSelection) {
  let res = "has ganado";
  if (playerSelection == computerSelection) {
    res = "empate";
  }
  if ((playerSelection == "piedra") & (computerSelection == "papel")) {
    res = "el ordenador gana";
  }
  if ((playerSelection == "papel") & (computerSelection == "tijeras")) {
    res = "el ordenador gana";
  }
  if ((playerSelection == "tijeras") & (computerSelection == "piedra")) {
    res = "el ordenador gana";
  }
  return res;
}

const container1 = document.querySelector(".container1");

const piedra = document.createElement("button");
const papel = document.createElement("button");
const tijeras = document.createElement("button");

container1.style.textAlign = "center";

piedra.textContent = "piedra";
papel.textContent = "papel";
tijeras.textContent = "tijeras";

piedra.style.margin = "10px";
papel.style.margin = "10px";
tijeras.style.margin = "10px";

piedra.style.padding = "10px";
papel.style.padding = "10px";
tijeras.style.padding = "10px";

container1.appendChild(piedra);
container1.appendChild(papel);
container1.appendChild(tijeras);

//results and current score of the game
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

let wscore = 0;
let lscore = 0;

function game() {
  piedra.onclick = () => {
    let computerSelection = computerPlay();
    container2.textContent = playRound("piedra", computerSelection);
    if (container2.textContent == "has ganado") {
      wscore++;
    }
    if (container2.textContent == "el ordenador gana") {
      lscore++;
    }
    container3.textContent = "puntos ganados: " + wscore + " puntos perdidos: " + lscore;
    if (wscore == 5) {
      container3.textContent = "Has ganado";
      wscore = 0;
      lscore = 0;
    }
    if (lscore == 5) {
      container3.textContent = "Has perdido";
      wscore = 0;
      lscore = 0;
    }

  };
  papel.onclick = () => {
    let computerSelection = computerPlay();
    container2.textContent = playRound("papel", computerSelection);
    if (container2.textContent == "has ganado") {
      wscore++;
    }
    if (container2.textContent == "el ordenador gana") {
      lscore++;
    }
    container3.textContent = "puntos ganados: " + wscore + " puntos perdidos: " + lscore;
    if (wscore == 5) {
      container3.textContent = "Has ganado";
      wscore = 0;
      lscore = 0;
    }
    if (lscore == 5) {
      container3.textContent = "Has perdido";
      wscore = 0;
      lscore = 0;
    }
  };
  tijeras.onclick = () => {
    let computerSelection = computerPlay();
    container2.textContent = playRound("tijeras", computerSelection);
    if (container2.textContent == "has ganado") {
      wscore++;
    }
    if (container2.textContent == "el ordenador gana") {
      lscore++;
    }
    container3.textContent = "puntos ganados: " + wscore + " puntos perdidos: " + lscore;
    if (wscore == 5) {
      container3.textContent = "Has ganado";
      wscore = 0;
      lscore = 0;
    }
    if (lscore == 5) {
      container3.textContent = "Has perdido";
      wscore = 0;
      lscore = 0;
    }
  };
}
game();

container2.style.textAlign = "center";
container3.style.textAlign = "center";

