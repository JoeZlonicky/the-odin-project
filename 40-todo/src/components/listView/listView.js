import './listView.css';
import taskCard from '../taskCard/taskCard';

const listView = document.querySelector('.list-view');
const mainTitle = listView.querySelector('.list-view__title');
const taskTable = listView.querySelector('.list-view__task-table');

const updateTitle = (title) => {
    mainTitle.textContent = `${title} - Tasks`;
}

const clearTasks = () => {
    const cards = taskTable.querySelectorAll('.task-card');
    cards.forEach((card) => card.remove());
}

// onRemoveFunc: () => ...
const addTask = (task, onRemoveFunc) => {
    const newCard = taskCard(task.title, task.priority, task.dueDate);
    const checkButton = newCard.querySelector('.task-card__check-button');
    checkButton.addEventListener('click', () => {
        newCard.remove();
        onRemoveFunc();
    });
    taskTable.insertBefore(newCard, taskTable.lastElementChild);
}

export {updateTitle, clearTasks, addTask};