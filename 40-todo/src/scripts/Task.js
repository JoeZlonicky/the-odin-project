class Task {
    constructor(title, description='', priority=0, dueDateString='') {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDateString = dueDateString;
    }
}

export default Task;