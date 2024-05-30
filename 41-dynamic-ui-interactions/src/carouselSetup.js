import './carousel.css';

import tree1 from './images/tree1.jpg';
import tree2 from './images/tree2.jpg';
import tree3 from './images/tree3.jpg';
import tree4 from './images/tree4.jpg';
import tree5 from './images/tree5.jpg';

const imageSources = [tree1, tree2, tree3, tree4, tree5];

const idleTimeoutMS = 10000;
const idleNextMS = 5000;

const carouselSetup = (carouselElement) => {
  const innerContainer = carouselElement.querySelector('.carousel__inner-container');
  const slideNav = carouselElement.querySelector('.carousel__slide-nav');
  let idleStartTimer = null;
  let idleNextInterval = null;

  let currentSlideIdx = 0;

  const moveSlides = (offset) => {
    const nMoves = Math.abs(offset);
    for (let i = 0; i < nMoves; ++i) {
      if (offset > 0) {
        innerContainer.appendChild(innerContainer.firstChild);
      } else {
        innerContainer.insertBefore(innerContainer.lastChild, innerContainer.firstChild);
      }
    }
  };

  const updateCurrentSlideIdx = (newIdx) => {
    // Doesn't need to be done for first calling of this function
    if (newIdx !== currentSlideIdx) {
      const currentNavButton = slideNav.children[currentSlideIdx];
      currentNavButton.classList.remove('current');
      currentNavButton.disabled = false;
    }

    const offset = newIdx - currentSlideIdx;
    currentSlideIdx = newIdx;

    const newNavButton = slideNav.children[currentSlideIdx];
    newNavButton.classList.add('current');
    newNavButton.disabled = false;

    moveSlides(offset);
  };

  const startIdleTimer = () => {
    window.clearTimeout(idleStartTimer);
    window.clearInterval(idleNextInterval);
    idleStartTimer = window.setTimeout(() => {
      startIdleInterval();
      goToNextSlide();
    }, idleTimeoutMS);
  };

  const startIdleInterval = () => {
    idleNextInterval = window.setInterval(() => {
      goToNextSlide();
    }, idleNextMS);
  };

  const goToNextSlide = () => {
    updateCurrentSlideIdx((currentSlideIdx + 1) % slideNav.children.length);
  };

  const goToPreviousSlide = () => {
    updateCurrentSlideIdx((currentSlideIdx - 1 + slideNav.children.length) % slideNav.children.length);
  };

  imageSources.forEach((imageSource, idx) => {
    const image = new Image();
    image.src = imageSource;
    innerContainer.appendChild(image);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
      updateCurrentSlideIdx(idx);
      startIdleTimer();
    });
    slideNav.appendChild(button);
  });

  const leftNav = carouselElement.querySelector('.carousel__left-nav');
  leftNav.addEventListener('click', () => {
    goToPreviousSlide();
    startIdleTimer();
  });

  const rightNav = carouselElement.querySelector('.carousel__right-nav');
  rightNav.addEventListener('click', () => {
    goToNextSlide();
    startIdleTimer();
  });

  updateCurrentSlideIdx(0);
  startIdleInterval();
};

export default carouselSetup;
