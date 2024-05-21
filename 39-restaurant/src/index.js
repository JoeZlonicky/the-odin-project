import home from './pages/home.js';
import menu from './pages/menu.js';
import about from './pages/about.js';
import './style.css'

const content = document.querySelector('#content');

const clearContent = () => {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

const setContent = (newContent) => {
    clearContent();
    content.appendChild(newContent);
}

setContent(home());

const navbar = document.querySelector('#navbar');
navbar.querySelector('.home-nav-button').addEventListener('click', () => {
    setContent(home());
});
navbar.querySelector('.menu-nav-button').addEventListener('click', () => {
    setContent(menu());
});
navbar.querySelector('.about-nav-button').addEventListener('click', () => {
    setContent(about());
});