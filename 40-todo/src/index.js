import './index.css';

import * as listView from './components/listView/listView';
import * as sidebar from './components/sidebar/sidebar';
import * as newListDialog from './components/dialog/newListDialog';
import * as editTaskDialog from './components/dialog/editTaskDialog';

import App from './scripts/App.js';

const app = new App();

// main list view setup
const onCardRemoveFunc = (task) => {app.currentList.removeTask(task.title)};
const onCardEditFunc = (task) => {editTaskDialog.showEdit(task)};
const onListDeleteFunc = (list) => {
    sidebar.removeListButton(list);
    app.deleteCurrentListAndSetToDefault();
    onListSelected(app.currentList);
}
listView.setup(onCardRemoveFunc, onCardEditFunc, onListDeleteFunc);

// sidebar setup
const onListSelected = (list) => {
    app.currentList = list;
    sidebar.updateCurrentViewedList(app.currentList);
    listView.updateCurrentViewedList(app.currentList);
}

app.lists.forEach((list) => {
    sidebar.addListButton(list, onListSelected);
});
sidebar.updateCurrentViewedList(app.currentList);

// new list dialog setup
const createNewList = (name) => {
    const newList = app.addNewList(name);
    sidebar.addListButton(newList, onListSelected);
    onListSelected(newList);
}

const listNameCheck = (name) => {
    const isTaken = app.doesListNameExist(name);
    return isTaken ? 'Name already in use.' : '';
}

newListDialog.setup(createNewList, listNameCheck);

const newListButtons = document.querySelectorAll('.new-list-button');
newListButtons.forEach((button) => {
    button.onclick = () => newListDialog.show();
});

// new task dialog setup
const createNewTask = (title, description, priority, dueDateString) => {
    const newTask = app.addNewTaskToCurrentList(title, description, priority, dueDateString);
    listView.addTask(newTask);
}

const editTask = (originalTask, newTitle, newDescription, newPriority, newDueDateString) => {
    originalTask.title = newTitle;
    originalTask.description = newDescription;
    originalTask.priority = newPriority;
    originalTask.dueDateString = newDueDateString;
    listView.updateTask(originalTask);
}

const taskTitleCheck = (title) => {
    const isTaken = app.currentList.doesTaskTitleExist(title);
    return isTaken ? 'Title already in use.' : '';
}

editTaskDialog.setup(createNewTask, editTask, taskTitleCheck);

const newTaskButtons = document.querySelectorAll('.new-task-button');
newTaskButtons.forEach((button) => {
    button.onclick = () => editTaskDialog.showNew();
});

listView.updateCurrentViewedList(app.currentList);