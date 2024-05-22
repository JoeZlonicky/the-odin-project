class Task {
    constructor(title, description='', priority=0, dueDate=null) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueData = dueDate;
    }
}

export default Task;