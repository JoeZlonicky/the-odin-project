const sidebarTaskList = (name) => {
    const button = document.createElement('button');
    button.classList.add('sidebar__task-list');
    button.textContent = name;
    return button;
}

export default sidebarTaskList;