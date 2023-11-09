const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey, I'm red!";
container.appendChild(redParagraph);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const pinkBox = document.createElement('div');
pinkBox.style.border = '1px solid black';
pinkBox.style.backgroundColor = 'pink';

const boxHeader = document.createElement('h1');
boxHeader.textContent = "I'm in a div!";
pinkBox.appendChild(boxHeader);

const boxParagraph = document.createElement('p');
boxParagraph.textContent = "ME TOO!";
pinkBox.appendChild(boxParagraph);

container.appendChild(pinkBox);