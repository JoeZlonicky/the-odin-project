import './home.css';
import Barley from '../../images/barley.svg';
import BarleyOff from '../../images/barley-off.svg';

const home = (bread=true) => {
    const element = document.createElement('div');
    element.classList.add('home__container');

    const header = document.createElement('h1');
    header.innerText = (bread) ? 'The Bread Restaurant' : "The No Bread Restaurant";
    element.appendChild(header);

    const subtitle = document.createElement('h2');
    subtitle.innerText = (bread) ? 'Yes, we serve bread.' : "No, we don't serve bread.";
    element.appendChild(subtitle);

    const barleyButton = document.createElement("button");
    barleyButton.classList.add('bread-toggle');

    const image = new Image();
    image.src = (bread) ? Barley : BarleyOff;
    image.classList.add('home__icon');
    barleyButton.appendChild(image);

    element.appendChild(barleyButton);
    
    return element;
}

export default home;