import './dialog.css';

// createTaskFunc: (name, description, priority, dueDate) => ...
// titleValidityCheckFunc: (title) => '' | errorMessage
const newTaskDialogSetup = (createTaskFunc, titleValidityCheckFunc) => {
    const newButtons = document.querySelectorAll('.new-task-button');
    const dialog = document.querySelector('#new-task-dialog');
    newButtons.forEach(element => {
        element.onclick = () => dialog.showModal();
    });

    const closeButton = dialog.querySelector('.dialog-close-button');
    closeButton.onclick = () => dialog.close();

    // Make it so you can't set the due date in the past
    const dueDateInput = dialog.querySelector('#new-task-dialog__due-date-input');
    dueDateInput.min = new Date().toISOString().split("T")[0];

    const titleInput = dialog.querySelector('#new-task-dialog__title-input');
    const checkTitle = () => {
        const validity = titleValidityCheckFunc(titleInput.value);
        titleInput.setCustomValidity(validity);
    }

    checkTitle();
    titleInput.addEventListener('input', () => {
        checkTitle();
    });

    const addButton = dialog.querySelector('#new-task-dialog__add-button');
    const form = dialog.querySelector('form');
    const descriptionInput = dialog.querySelector('#new-task-dialog__description-input');
    const priorityInput = dialog.querySelector('#new-task-dialog__priority-input');
    addButton.addEventListener('click', (e) => {
        if (!form.checkValidity()) {
            return;
        }

        e.preventDefault();
        createTaskFunc(titleInput.value, descriptionInput.value, parseInt(priorityInput.value), dueDateInput.value);
        form.reset();
        dialog.close();
    });
}

export default newTaskDialogSetup;