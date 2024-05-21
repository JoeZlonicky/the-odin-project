import './home.css';
import Barley from '../../images/barley.svg';

const home = () => {
    const element = document.createElement('div');
    element.classList.add('home__container');

    const header = document.createElement('h1');
    header.innerText = 'The Bread Restaurant';
    element.appendChild(header);

    const subtitle = document.createElement('h2');
    subtitle.innerText = 'Yes, we serve bread.'
    element.appendChild(subtitle);

    const image = new Image();
    image.src = Barley;
    image.classList.add('home__icon');
    element.appendChild(image);
    
    return element;
}

export default home;