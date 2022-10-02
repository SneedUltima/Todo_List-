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
            notes : notes,
            selected: false,
        }
        this.tasks.push(task)
        return task
    }

    selected = false;
}