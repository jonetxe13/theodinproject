const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
redText.classList.add('red-text');
redText.textContent = 'Hey I’m red!';
redText.style.color = 'red';

const blueH3 = document.createElement('h3');
blueH3.classList.add('blue-text');
blueH3.textContent = 'I’m a blue h3!';
blueH3.style.color = 'blue';

//pinkDiv with elements in it
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-back');
pinkDiv.style.border = '1px solid black';
pinkDiv.style.backgroundColor = 'pink';

const inADiv = document.createElement('h1');
inADiv.textContent = 'I’m in a div';

const meToo = document.createElement('p');
meToo.textContent = 'ME TOO!';

pinkDiv.appendChild(inADiv);
pinkDiv.appendChild(meToo);
//end of pinkDiv


container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueH3);
container.appendChild(pinkDiv);


//button alert
//create an alert
function alertFunction() {
	alert('hello world');
}

const btn = document.querySelector('#btn'); //selects the button
btn.onclick = alertFunction; //just one onclick event

const btn2 = document.querySelector('#btn2'); //selects the button
btn2.addEventListener('click', function (e) {
	e.target.style.background = 'blue';
}); //adds an event listener to the button
 //with addEventListener you can have multiple calls


//listeners to groups of nodes
const buttons = document.querySelectorAll('button'); //selects all buttons

//adds an event listener to all buttons
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		alert(button.id);
	});
}); 
