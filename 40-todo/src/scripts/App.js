import TaskList from './TaskList';
import Task from './Task';

const defaultListName = 'Default';

class App {
    constructor() {
        this.lists = [];
        this.addNewList(defaultListName, false);

        this.currentList = this.lists[0];
    }

    addNewList(name, canBeRemoved=true) {
        const newList = new TaskList(name, [], canBeRemoved);
        this.lists.push(newList);
        return newList;
    }

    addNewTaskToCurrentList(title, description='', priority=0, dueDateString='') {
        if (this.currentList === null) return null;

        const newTask = new Task(title, description, priority, dueDateString);
        this.currentList.addTask(newTask);
        return newTask;
    }

    getListFromName(name) {
        const listIdx = this.lists.findIndex((list) => list.name === name);
        if (listIdx === -1) return null;
        return this.lists[listIdx];
    }

    doesListNameExist(name) {
        const idx = this.lists.findIndex((list) => list.name === name);
        return idx !== -1;
    }

    deleteCurrentListAndSetToDefault() {
        if (this.currentList.name === defaultListName) return;

        const listIdx = this.lists.findIndex((list) => list.name === this.currentList.name);
        if (listIdx === -1) return;

        this.lists.splice(listIdx, 1);
        this.currentList = this.lists[0];
    }
}

export default App;