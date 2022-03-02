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
					if (playerSelection == "papel" & computerSelection == "tijeras"){
 							res = "el ordenador gana";
					}
					if (playerSelection == "tijeras" & computerSelection == "piedra"){
 							res = "el ordenador gana";
					}
					//console.log("el resultado es: " + res);
					return res;
				}
let computerSelection = computerPlay();

const container1 = document.querySelector(".container1");

const piedra = document.createElement("button");
const papel = document.createElement("button");
const tijeras = document.createElement("button");

container1.style.textAlign = "center";
//piedra.className = "piedra";
//papel.className = "papel";
//tijeras.className = "tijeras";

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

piedra.addEventListener('click', () => {
	container2.textContent = playRound("piedra", computerSelection);
	console.log(playRound("piedra", computerSelection));
});
papel.addEventListener('click', () => {
	container2.textContent = (playRound("papel", computerSelection));
	console.log(playRound("papel", computerSelection));
});
tijeras.addEventListener('click', () => {
	container2.textContent = (playRound("tijeras", computerSelection));
	console.log(playRound("tijeras", computerSelection));
});
