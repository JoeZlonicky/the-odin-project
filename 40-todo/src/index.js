import App from './scripts/App.js';
import sidebarTaskList from './scripts/components/sidebarTaskList.js';
import './style/index.css';
import './style/main.css';
import './style/sidebar.css';
import './style/dialog.css';

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
}

const addNewListButton = (list) => {
    const button = sidebarTaskList(list.name);
    button.addEventListener('click', () => {
        app.currentList = list;
        updateCurrentViewedList();
    });
    sidebarListContainer.insertBefore(button, sidebarListContainer.lastElementChild);
};

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
        nameInput.setCustomValidity('');
        const takenIndex = app.lists.findIndex((list) => list.name === nameInput.value);
        if (takenIndex != -1) {
            nameInput.setCustomValidity('Name already in use.');
        }
    }

    nameTakenCheck();
    nameInput.addEventListener('input', (e) => {
        nameTakenCheck();
    });
})();

// New Task Dialog
(() => {
    const newButtons = document.querySelectorAll('.main__new-task');
    const dialog = document.querySelector('#new-task-dialog');
    const closeButton = dialog.querySelector('.dialog-close-button');
    const dueDatePicker = dialog.querySelector('#new-task-dialog__due-date-input');

    newButtons.forEach(element => {
        element.onclick = () => dialog.showModal();
    });

    closeButton.onclick = () => dialog.close();

    dueDatePicker.min = new Date().toISOString().split("T")[0];
})();
