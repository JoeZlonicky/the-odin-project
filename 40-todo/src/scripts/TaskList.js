class TaskList {
    constructor(name, tasks=[], canBeRemoved=true) {
        this.name = name;
        this.tasks = tasks;
        this.canBeRemoved = canBeRemoved;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskTitle) {
        const idx = this.tasks.findIndex((element) => (element.title === taskTitle));
        if (idx === -1) return;
        this.tasks.splice(idx, 1);
    }

    doesTaskTitleExist(title) {
        const idx = this.tasks.findIndex((task) => task.title === title);
        return idx !== -1;
    }
}

export default TaskList;