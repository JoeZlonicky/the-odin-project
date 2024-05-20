import _ from 'lodash';
import myName from './myName';

function webpackComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello,', 'webpack!'], ' ');
    return element;
}

function nameComponent() {
    const element = document.createElement('div');
    element.textContent = myName('Joe');
    return element;
}

document.body.appendChild(webpackComponent());
document.body.appendChild(nameComponent());