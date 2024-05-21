import _ from 'lodash';
import myName from './myName';
import './style.css';
import Squiggle from './images/squiggle.png';
import XMLNotes from './data/notes.xml';
import CSVNotes from './data/notes.csv';
import Tom from './data/tom.yaml';

function webpackComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello,', 'webpack!'], ' ');
    element.classList.add('hello');
    return element;
}

function squiggleComponent() {
    const img = new Image();
    img.src = Squiggle;
    return img;
}

function nameComponent() {
    const element = document.createElement('div');
    element.textContent = myName('Joe');
    return element;
}

document.body.appendChild(webpackComponent());
document.body.appendChild(nameComponent());
document.body.appendChild(squiggleComponent());
console.log(XMLNotes);
console.log(CSVNotes);
console.log(Tom);