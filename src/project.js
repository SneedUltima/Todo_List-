// Class object to create projects that contain tasks
export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  newTask(title, date, priority, notes) {
    let task = {
      title: title,
      date: date,
      priority: priority,
      notes: notes,
      selected: false,
    };
    this.tasks.push(task);
    return task;
  }

  selected = false;
}
