import './dialog.css';

const dialog = document.querySelector('#new-list-dialog');

// createListFunc: (name) => ...
// nameValidityCheckFunc: (name) => '' | errorMessage
const setup = (createListFunc, nameValidityCheckFunc) => {
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

const show = () => {
    dialog.showModal();
}

export {setup, show};