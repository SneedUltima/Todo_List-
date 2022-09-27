import "./styles/main.scss"
import {Project} from "./project.js"
let projects = [];

const newProjectButton = document.querySelector("#new-project")
const newTaskButton = document.querySelector("#new-task")
const projectsContainer = document.querySelector(".projects-container")
const tasksContainer = document.querySelector(".tasks-container")

addEventListener('load', (event) => {
    const newProject = new Project("Default Project")
    newProject.newTask("aa","bb","cc",'DD')
    projects.push(newProject)
    addProjectButton("Default Project", newProject)
    const secondProject = new Project("Second Project")
    secondProject.newTask("gg","hh","aa",'nn')
    projects.push(secondProject)
    addProjectButton("Second Project", secondProject)
});

newProjectButton.addEventListener("click", () => {
    const projectName = prompt("Name of Project?: ")
    const newProject = new Project(projectName)
    projects.push(newProject)
    console.log(projects);
    addProjectButton(projectName)
})

newTaskButton.addEventListener("click", () => {
    const title = prompt("Title?: ")
    const description = prompt("Description?: ")
    const priority = prompt("Priority?: ")
    const notes = prompt("Notes?: ")
    let project = projects[0]
    console.log(project);
    project.newTask(title, description, priority, notes)
    changeTaskDisplay()
})

function changeTaskDisplay() {
    projects.forEach(project => {
    project.tasks.forEach(task => {
        const taskContainer = document.createElement("div")
        taskContainer.classList.add("task-container")
        const title = document.createElement("p")
        title.textContent = `Task: ${task.title}`
        const description = document.createElement("p")
        description.textContent = `Description: ${task.description}`
        const priority = document.createElement("p")
        priority.textContent = `Priority: ${task.priority}`
        const notes = document.createElement("p")
        notes.textContent = `Notes: ${task.notes}`
        taskContainer.append(title, description, priority, notes)
        tasksContainer.appendChild(taskContainer)
    })
})}

function addProjectButton(projectName, project) {
    const button = document.createElement("button")
    button.textContent = projectName
    button.addEventListener("click", () => {
        project.tasks.forEach(task => {
            const taskContainer = document.createElement("div")
            taskContainer.classList.add("task-container")
            const title = document.createElement("p")
            title.textContent = `Task: ${task.title}`
            const description = document.createElement("p")
            description.textContent = `Description: ${task.description}`
            const priority = document.createElement("p")
            priority.textContent = `Priority: ${task.priority}`
            const notes = document.createElement("p")
            notes.textContent = `Notes: ${task.notes}`
            taskContainer.append(title, description, priority, notes)
            tasksContainer.appendChild(taskContainer)

    })})
    projectsContainer.append(button)
}

