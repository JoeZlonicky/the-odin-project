import './index.css';

import * as listView from './components/listView/listView';
import * as sidebar from './components/sidebar/sidebar';
import newListDialogSetup from './components/dialog/newListDialogSetup';
import newTaskDialogSetup from './components/dialog/newTaskDialogSetup';

import App from './scripts/App.js';

const app = new App();

// sidebar setup
const onListSelected = (list) => {
    app.currentList = list;
    sidebar.updateCurrentViewedList(app.currentList);
    listView.updateTitle(list.name);
    listView.clearTasks();
    list.tasks.forEach((task) => {
        listView.addTask(task, () => {app.currentList.removeTask(task.title)});
    });
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

newListDialogSetup(createNewList, listNameCheck);

// new task dialog setup
const createNewTask = (title, description, priority, dueDate) => {
    const newTask = app.addNewTaskToCurrentList(title, description, priority, dueDate);
    listView.addTask(newTask, () => {app.currentList.removeTask(newTask.title)});
}

const taskTitleCheck = (title) => {
    const isTaken = app.currentList.doesTaskTitleExist(title);
    return isTaken ? 'Title already in use.' : '';
}

newTaskDialogSetup(createNewTask, taskTitleCheck);