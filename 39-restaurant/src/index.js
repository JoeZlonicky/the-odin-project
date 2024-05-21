import home from './pages/home/home.js';
import menu from './pages/menu/menu.js';
import about from './pages/about/about.js';
import './style.css';

const content = document.querySelector('#content');
const siteNames = document.querySelectorAll('.site-name');

let bread = true;

const clearContent = () => {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

const updateSiteNames = () => {
    siteNames.forEach(element => {
        element.innerText = (bread) ? 'The Bread Restaurant' : 'The No Bread Restaurant';
    });
}

const hookUpBreadToggles = () => {
    const buttons = document.querySelectorAll('.bread-toggle');
    buttons.forEach(button => {
        button.onclick = () => {
            bread = !bread;
            const contentFunc = nav[currentNav];
            setContent(contentFunc(bread));
            updateSiteNames();
        }
    });
}

const setContent = (newContent) => {
    clearContent();
    content.appendChild(newContent);
    hookUpBreadToggles();
    content.style.animation = 'none';
    content.offsetHeight;  // Triggers reflow
    content.style.animation = null;
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
        setContent(contentFunc(bread));
    }
    button.addEventListener('click', () => {
        if (currentButton !== null) {
            currentButton.classList.remove('current');
        }
        setContent(contentFunc(bread));
        currentButton = button;
        currentButton.classList.add('current');
    });
}

