class TaskList {
    constructor(name, tasks=[]) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskTitle) {
        const idx = this.tasks.findIndex((element) => (element.title === taskTitle));
        if (idx === -1) return;
        this.tasks.splice(idx, 1);
    }
}

export default TaskList;