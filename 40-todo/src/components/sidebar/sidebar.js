import './sidebar.css';

const listContainer = document.querySelector('.sidebar__list-container');

const listSelectButton = (name) => {
    const button = document.createElement('button');
    button.classList.add('list-select-button');
    button.textContent = name;
    return button;
}

// onSelected: (list) => ...
const addListButton = (list, onSelected=null) => {
    const button = listSelectButton(list.name);
    button.addEventListener('click', () => {
        onSelected(list);
    });
    listContainer.insertBefore(button, listContainer.lastElementChild);
}

const updateCurrentViewedList = (currentList) => {
    const buttons = listContainer.querySelectorAll('.list-select-button');
    buttons.forEach((button) => {
        if (button.textContent === currentList.name) {
            button.classList.add('current');
            button.disabled = true;
        } else {
            button.classList.remove('current');
            button.disabled = false;
        }
    });
}


export {addListButton, updateCurrentViewedList};