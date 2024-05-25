import TaskList from './TaskList';
import Task from './Task';

class App {
    constructor() {
        this.lists = [];
        this.addNewList('Default');

        this.currentList = this.lists[0];
    }

    addNewList(name) {
        const newList = new TaskList(name);
        this.lists.push(newList);
        return newList;
    }

    addNewTaskToCurrentList(title, description='', priority=0, dueDate=null) {
        if (this.currentList === null) return null;

        const newTask = new Task(title, description, priority, dueDate);
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
}

export default App;