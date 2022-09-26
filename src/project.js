// import {Tasks} from "./tasks.js"

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }

    newTask(title, description, priority, notes){
        let task = {
            title : title, 
            description : description, 
            priority : priority, 
            notes : notes
        }
        this.tasks.push(task)
        return task
    }
}