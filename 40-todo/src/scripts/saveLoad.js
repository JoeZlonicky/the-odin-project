import Task from './Task';
import TaskList from './TaskList';


const saveListsToStorage = (lists) => {
    const s = JSON.stringify(lists);
    localStorage.setItem('lists', s);
}

const loadListsFromStorage = () => {
    const s = localStorage.getItem('lists');
    if (s === null) return [];

    const savedLists = JSON.parse(s);
    const recreatedLists = [];
    savedLists.forEach((oldList) => {
        const newList = new TaskList(oldList.name, [], oldList.canBeRemoved);
        oldList.tasks.forEach((oldTask) => {
            const newTask = new Task(oldTask.title, oldTask.description, oldTask.priority, oldTask.dueDateString);
            newList.addTask(newTask);
        });
        recreatedLists.push(newList);
    });
    return recreatedLists;
}

export {saveListsToStorage, loadListsFromStorage};