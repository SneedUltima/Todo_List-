import {Task} from "./task.js"

export class Tasks {
    constructor() {
        this.tasks = []
    }

    newTask(title, description, priority, notes){
        let task = new Task(title, description, priority, notes)
        this.tasks.push(task)
        return task
    }
}