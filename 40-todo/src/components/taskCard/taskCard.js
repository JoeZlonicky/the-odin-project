import './taskCard.css';
import CheckMark from '../../images/check-bold.svg';
import SquareEdit from '../../images/square-edit.svg';

import {format as formatDate} from 'date-fns';

const currentYear = new Date().getFullYear();

const createIconButton = (src) => {
    const button = document.createElement('button');
    button.classList.add('svg-button');

    const image = new Image();
    image.src = src;
    image.classList.add('task-card__icon');
    button.appendChild(image);
    return button;
}

const taskCard = (title, priority, dueDate=null) => {
    const card = document.createElement('div');
    card.classList.add('task-card');

    const titleLabel = document.createElement('div');
    titleLabel.classList.add('task-card__title');
    titleLabel.textContent = title;

    card.appendChild(titleLabel);

    const footer = document.createElement('div');
    footer.classList.add('task-card__footer');
    
    const dueDateLabel = document.createElement('div');
    dueDateLabel.classList.add('task-card__due-date');
    if (dueDate !== null) {
        const date = new Date(dueDate);
        const formatStr = date.getFullYear() === currentYear ? 'MMM do' : 'MMM do, y';
        dueDateLabel.textContent = formatDate(date, formatStr);
    }
    
    footer.appendChild(dueDateLabel);

    const editButton = createIconButton(SquareEdit);
    editButton.classList.add('task-card__edit-button');
    footer.appendChild(editButton);

    const checkmark = createIconButton(CheckMark);
    checkmark.classList.add('task-card__check-button');
    footer.appendChild(checkmark);

    card.appendChild(footer);

    card.setAttribute('priority', priority.toString());

    return card;
}

export default taskCard;