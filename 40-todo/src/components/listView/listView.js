import './listView.css';
import taskCard from '../taskCard/taskCard';

const listView = document.querySelector('.list-view');
const mainTitle = listView.querySelector('.list-view__title');
const taskContainer = listView.querySelector('.list-view__task-container');
const discardListButton = listView.querySelector('.list-view__discard-list-button');
const taskToCard = new Map();

let onCardRemoved = undefined;
let onCardEdit = undefined;
let onListDelete = undefined;

// onCardRemovedFunc: (task) => ...
// onCardEditFunc: (task) => ...
// onListDeleteFunc: (list) => ...
const setup = (onCardRemovedFunc, onCardEditFunc, onListDeleteFunc) => {
    onCardRemoved = onCardRemovedFunc;
    onCardEdit = onCardEditFunc;
    onListDelete = onListDeleteFunc;
}

const updateTitle = (title) => {
    mainTitle.textContent = `${title} - Tasks`;
}

const clearTasks = () => {
    const cards = taskContainer.querySelectorAll('.task-card');
    cards.forEach((card) => card.remove());
}

// If idx -1 the new card will just get placed at the end
const addTask = (task, idx=-1) => {
    const newCard = taskCard(task.title, task.priority, task.dueDateString);
    const checkButton = newCard.querySelector('.task-card__check-button');
    const editButton = newCard.querySelector('.task-card__edit-button');
    checkButton.addEventListener('click', () => {
        newCard.remove();
        onCardRemoved(task);
    });
    editButton.addEventListener('click', () => {
        onCardEdit(task);
    });
    if (idx === -1) {
        taskContainer.insertBefore(newCard, taskContainer.lastElementChild);
    } else {
        taskContainer.insertBefore(newCard, taskContainer.childNodes[idx]);
    }
    
    taskToCard.set(task, newCard);
}

const updateTask = (task) => {
    const card = taskToCard.get(task);
    if (card === undefined) return;

    const idx = Array.prototype.indexOf.call(taskContainer.children, card);
    card.remove();
    
    addTask(task, idx);
}

const updateCurrentViewedList = (list) => {
    updateTitle(list.name);
    clearTasks();
    list.tasks.forEach((task) => {
        addTask(task);
    });
    if (list.canBeRemoved) {
        discardListButton.classList.remove('hidden');
        discardListButton.onclick = () => onListDelete(list);
    } else {
        discardListButton.classList.add('hidden');
        discardListButton.onclick = null;
    }
}

export {setup, updateCurrentViewedList, addTask, updateTask};