import './listView.css';
import taskCard from '../taskCard/taskCard';

const listView = document.querySelector('.list-view');
const mainTitle = listView.querySelector('.list-view__title');
const taskContainer = listView.querySelector('.list-view__task-container');
const taskToCard = new Map();

const updateTitle = (title) => {
    mainTitle.textContent = `${title} - Tasks`;
}

const clearTasks = () => {
    const cards = taskContainer.querySelectorAll('.task-card');
    cards.forEach((card) => card.remove());
}

// onRemoveFunc: () => ...
// onEditFunc: () => ...
// If idx -1 the new card will just get placed at the end
const addTask = (task, onRemoveFunc, onEditFunc, idx=-1) => {
    const newCard = taskCard(task.title, task.priority, task.dueDateString);
    const checkButton = newCard.querySelector('.task-card__check-button');
    const editButton = newCard.querySelector('.task-card__edit-button');
    checkButton.addEventListener('click', () => {
        newCard.remove();
        onRemoveFunc();
    });
    editButton.addEventListener('click', () => {
        onEditFunc();
    });
    if (idx === -1) {
        taskContainer.insertBefore(newCard, taskContainer.lastElementChild);
    } else {
        taskContainer.insertBefore(newCard, taskContainer.childNodes[idx]);
    }
    
    taskToCard.set(task, newCard);
}

// onRemoveFunc: () => ...
// onEditFunc: () => ...
const updateTask = (task, onRemoveFunc, onEditFunc) => {
    const card = taskToCard.get(task);
    if (card === undefined) return;

    const idx = Array.prototype.indexOf.call(taskContainer.children, card);
    card.remove();
    
    addTask(task, onRemoveFunc, onEditFunc, idx);
}

export {updateTitle, clearTasks, addTask, updateTask};