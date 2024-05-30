import dropdownSetup from './dropdownSetup.js';
import carouselSetup from './carouselSetup.js';

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => dropdownSetup(dropdown));

const carousels = document.querySelectorAll('.carousel');
carousels.forEach((carousel) => carouselSetup(carousel));
