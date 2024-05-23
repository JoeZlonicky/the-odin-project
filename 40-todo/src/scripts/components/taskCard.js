import CheckMark from '../../images/check-bold.svg';
import ArrowExpand from '../../images/arrow-expand.svg';

const createIconButton = (src) => {
    const button = document.createElement('button');
    button.classList.add('svg-button');

    const image = new Image();
    image.src = src;
    image.classList.add('task-card__icon');
    button.appendChild(image);
    return button;
}

const taskCard = (title, priority=1, dueDate=null) => {
    const card = document.createElement('div');
    card.classList.add('task-card');

    const header = document.createElement('div');
    header.classList.add('task-card__header');

    const titleLabel = document.createElement('div');
    titleLabel.classList.add('task-card__title');
    titleLabel.textContent = title;
    header.appendChild(titleLabel);

    const checkmark = createIconButton(CheckMark);
    checkmark.classList.add('task-card__check-button');
    header.appendChild(checkmark);

    const expandButton = createIconButton(ArrowExpand);
    expandButton.classList.add('task-card__expand-button');
    header.appendChild(expandButton);

    card.appendChild(header);

    const footer = document.createElement('div');
    footer.classList.add('task-card__footer');
    
    const dueDateLabel = document.createElement('div');
    dueDateLabel.classList.add('task-card__due-date');
    dueDateLabel.textContent = (dueDate !== null) ? dueDate.toString() : '';
    footer.appendChild(dueDateLabel);

    const priorityLabel = document.createElement('div');
    priorityLabel.classList.add('task-card__priority');
    priorityLabel.textContent = priority.toString();
    footer.appendChild(priorityLabel);

    card.appendChild(footer);

    return card;
}

export default taskCard;