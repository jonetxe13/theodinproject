				function computerPlay(){
					const i = Math.floor(Math.random() * (4 - 1)) + 1;
					let computer = "tijeras";
					if (i == 1){
						 computer = "piedra";
					}
					if(i == 2){
 						 computer = "papel";
					}
					return computer;
				}
				function playRound(playerSelection, computerSelection) {
					let res = "has ganado";
					if (playerSelection == computerSelection){
 							res = "empate";
					}
					if (playerSelection == "piedra" & computerSelection == "papel"){
 							res = "el ordenador gana";
					}
					//console.log("el resultado es: " + res);
					return res;
				}
let computerSelection = computerPlay();

const container = document.querySelector("body");

const piedra = document.createElement("button");
const papel = document.createElement("button");
const tijeras = document.createElement("button");

//piedra.className = "piedra";
//papel.className = "papel";
//tijeras.className = "tijeras";

piedra.textContent = "piedra";
papel.textContent = "papel";
tijeras.textContent = "tijeras";

container.appendChild(piedra);
container.appendChild(papel);
container.appendChild(tijeras);


piedra.addEventListener('click', () => {alert(playRound("piedra", computerSelection))});
papel.addEventListener('click', () => {alert(playRound("papel", computerSelection))});
tijeras.addEventListener('click', () => {alert(playRound("tijeras", computerSelection))});
