import TaskList from './TaskList';
import Task from './Task';

class App {
    constructor() {
        this.lists = [];
        this.currentList = null;
        this.addNewList('Default', true);
        this.addNewList('List 2');
    }

    addNewList(name, setToCurrent=false) {
        const newList = new TaskList(name);
        this.lists.push(newList);
        if (setToCurrent) {
            this.currentList = newList;
        }
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
}

export default App;