import './dialog.css';

// createListFunc: (name) => ...
// nameValidityCheckFunc: (name) => '' | errorMessage
const newListDialogSetup = (createListFunc, nameValidityCheckFunc) => {
    const newButtons = document.querySelectorAll('.new-list-button');
    const dialog = document.querySelector('#new-list-dialog');
    newButtons.forEach(element => {
        element.onclick = () => dialog.showModal();
    });

    const closeButton = dialog.querySelector('.dialog-close-button');
    closeButton.onclick = () => dialog.close();

    const nameInput = dialog.querySelector('#new-list-dialog__name-input');
    const checkTitle = () => {
        const validity = nameValidityCheckFunc(nameInput.value);
        nameInput.setCustomValidity(validity);
    }

    checkTitle();
    nameInput.addEventListener('input', () => {
        checkTitle();
    });

    const addButton = dialog.querySelector('#new-list-dialog__add-button');
    const form = dialog.querySelector('form');
    addButton.addEventListener('click', (e) => {
        if (!form.checkValidity()) {
            return;
        }

        e.preventDefault();
        createListFunc(nameInput.value);
        form.reset();
        dialog.close();
    });
}

export default newListDialogSetup;