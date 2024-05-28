import './dialog.css';
import {format as formatDate} from 'date-fns';

const dialog = document.querySelector('#edit-task-dialog');
const dialogTitle = dialog.querySelector('.dialog-title');
const form = dialog.querySelector('form');

const titleInput = dialog.querySelector('#edit-task-dialog__title-input');
const dueDateInput = dialog.querySelector('#edit-task-dialog__due-date-input');
const descriptionInput = dialog.querySelector('#edit-task-dialog__description-input');
const priorityInput = dialog.querySelector('#edit-task-dialog__priority-input');

const confirmButton = dialog.querySelector('#edit-task-dialog__confirm-button');

let isEditMode = false;
let currentlyEditingTask = null;

// createTaskFunc: (name, description, priority, dueDate) => ...
// editTaskFunc: (originalTask, newName, newDescription, newPriority, newDueDate) => ...
// titleValidityCheckFunc: (title) => '' | errorMessage
const setup = (createTaskFunc, editTaskFunc, titleValidityCheckFunc) => {
    const closeButton = dialog.querySelector('.dialog-close-button');
    closeButton.onclick = () => {
        if (isEditMode) {
            form.reset();
        }
        dialog.close();
    }

    // Make it so you can't set the due date in the past
    dueDateInput.min = new Date().toISOString().split("T")[0];

    const checkTitle = () => {
        const validity = titleValidityCheckFunc(titleInput.value);
        titleInput.setCustomValidity(validity);
    }

    checkTitle();
    titleInput.addEventListener('input', () => {
        checkTitle();
    });

    confirmButton.addEventListener('click', (e) => {
        if (!form.checkValidity()) {
            return;
        }

        e.preventDefault();
        let dueDate = new Date(dueDateInput.value);
        if (isNaN(dueDate.getTime())) {
            dueDate = null;
        }
        if (isEditMode) {
            editTaskFunc(currentlyEditingTask,
                titleInput.value, 
                descriptionInput.value, 
                parseInt(priorityInput.value), 
                dueDate);
        } else {
            createTaskFunc(titleInput.value, 
                descriptionInput.value, 
                parseInt(priorityInput.value), 
                dueDate);
        }
        
        form.reset();
        dialog.close();
    });
}

const showNew = () => {
    dialogTitle.textContent = 'Add Task';
    confirmButton.textContent = 'Add';
    isEditMode = false;
    currentlyEditingTask = null;
    dialog.showModal();
}

const showEdit = (task) => {
    titleInput.value = task.title;
    dueDateInput.value = (task.dueDate !== null) ? formatDate(task.dueDate, 'yyyy-MM-dd') : null;
    descriptionInput.value = task.description;
    priorityInput.value = task.priority;
    dialogTitle.textContent = 'Edit Task';
    confirmButton.textContent = 'Update';
    isEditMode = true;
    currentlyEditingTask = task;
    dialog.showModal();
}

export {setup, showNew, showEdit};