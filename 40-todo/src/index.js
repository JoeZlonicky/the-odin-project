import App from './scripts/App.js';
import sidebarTaskList from './scripts/components/sidebarTaskList.js';
import taskCard from './scripts/components/taskCard.js';
import './style/index.css';
import './style/main.css';
import './style/sidebar.css';
import './style/dialog.css';
import './style/taskCard.css';

const app = new App();

// UI Updates
const sidebarListContainer = document.querySelector('.sidebar__list-container');
const mainTitle = document.querySelector('.main__title');

const updateCurrentViewedList = () => {
    const buttons = sidebarListContainer.querySelectorAll('.sidebar__task-list');
    const current = app.currentList;
    buttons.forEach((button) => {
        if (button.textContent === current.name) {
            button.classList.add('current');
            button.disabled = true;
        } else {
            button.classList.remove('current');
            button.disabled = false;
        }
    });
    mainTitle.textContent = `${current.name} - Tasks`;

    clearTaskCardsFromView();
    app.currentList.tasks.forEach((task) => {
        addTaskCardToView(task);
    });
}

const addNewListButton = (list) => {
    const button = sidebarTaskList(list.name);
    button.addEventListener('click', () => {
        app.currentList = list;
        updateCurrentViewedList();
    });
    sidebarListContainer.insertBefore(button, sidebarListContainer.lastElementChild);
}

const taskCardContainer = document.querySelector('#main__task-container');

const clearTaskCardsFromView = () => {
    const cards = taskCardContainer.querySelectorAll('.task-card');
    cards.forEach((card) => card.remove());
}

const addTaskCardToView = (task) => {
    const newCard = taskCard(task.title, task.priority, task.dueDate);
    const checkButton = newCard.querySelector('.task-card__check-button');
    checkButton.addEventListener('click', () => {
        newCard.remove();
        app.currentList.removeTask(task.title);
    });
    taskCardContainer.insertBefore(newCard, taskCardContainer.lastElementChild);
}

// Initial app setup
app.lists.forEach((list) => {
    addNewListButton(list);
});
updateCurrentViewedList();

// New List Dialog
(() => {
    const newButtons = document.querySelectorAll('.sidebar__new-list');
    const dialog = document.querySelector('#new-list-dialog');
    const form = dialog.querySelector('form');
    const closeButton = dialog.querySelector('.dialog-close-button');
    const nameInput = dialog.querySelector('#new-list-dialog__name-input');
    const addButton = dialog.querySelector('#new-list-dialog__add-button');

    newButtons.forEach(element => {
        element.onclick = () => dialog.showModal();
    });

    closeButton.onclick = () => dialog.close();

    addButton.addEventListener('click', (e) => {
        if (!form.checkValidity()) {
            return;
        }

        e.preventDefault();
        const newList = app.addNewList(nameInput.value, true);
        addNewListButton(newList);
        updateCurrentViewedList();
        form.reset();
        dialog.close();
    });

    const nameTakenCheck = () => {
        const taken = app.doesListNameExist(nameInput.value);
        if (taken) {
            nameInput.setCustomValidity('Name already in use.');

        } else {
            nameInput.setCustomValidity('');
        }
    }

    nameTakenCheck();
    nameInput.addEventListener('input', () => {
        nameTakenCheck();
    });
})();

// New Task Dialog
(() => {
    const newButtons = document.querySelectorAll('.main__new-task');
    const dialog = document.querySelector('#new-task-dialog');
    const form = dialog.querySelector('form');
    const closeButton = dialog.querySelector('.dialog-close-button');

    const titleInput = dialog.querySelector('#new-task-dialog__title-input');
    const descriptionInput = dialog.querySelector('#new-task-dialog__description-input');
    const dueDateInput = dialog.querySelector('#new-task-dialog__due-date-input');
    const priorityInput = dialog.querySelector('#new-task-dialog__priority-input');

    const addButton = dialog.querySelector('#new-task-dialog__add-button');

    newButtons.forEach(element => {
        element.onclick = () => dialog.showModal();
    });

    closeButton.onclick = () => dialog.close();

    dueDateInput.min = new Date().toISOString().split("T")[0];

    const titleTakenCheck = () => {
        const taken = app.currentList.doesTaskTitleExist(titleInput.value);
        if (taken) {
            titleInput.setCustomValidity('Title already in use.');
        } else {
            titleInput.setCustomValidity('');
        }
    }

    titleTakenCheck();
    titleInput.addEventListener('input', () => {
        titleTakenCheck();
    });

    addButton.addEventListener('click', (e) => {
        if (!form.checkValidity()) {
            return;
        }

        e.preventDefault();
        const newTask = app.addNewTaskToCurrentList(titleInput.value, descriptionInput.value, 
            parseInt(priorityInput.value), dueDateInput.value);
        addTaskCardToView(newTask);
        form.reset();
        dialog.close();
    });
})();
