import home from './pages/home/home.js';
import menu from './pages/menu/menu.js';
import about from './pages/about/about.js';
import './style.css';

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

const navbar = document.querySelector('#navbar');
const nav = {
    '.home-nav-button': home,
    '.menu-nav-button': menu,
    '.about-nav-button': about
};

let currentNav = Object.keys(nav)[0];
let currentButton = null;

for (let selector in nav) {
    const button = navbar.querySelector(selector);
    const contentFunc = nav[selector];
    if (selector === currentNav) {
        button.classList.add('current');
        currentButton = button;
        setContent(contentFunc());
    }
    button.addEventListener('click', () => {
        if (currentButton !== null) {
            currentButton.classList.remove('current');
        }
        setContent(contentFunc());
        currentButton = button;
        currentButton.classList.add('current');
        content.style.animation = 'none';
        content.offsetHeight;  // Triggers reflow
        content.style.animation = null;
    });
}

