import "./styles/main.scss"
import {Project} from "./project.js"
let projects = [];

const newProjectButton = document.querySelector("#new-project")
const newTaskButton = document.querySelector("#new-task")
const projectsContainer = document.querySelector(".projects-container")
const tasksContainer = document.querySelector(".tasks-container")
const innerTasks = document.querySelector(".tasks")

addEventListener('load', () => {
    const newProject = new Project("Default Project")
    newProject.newTask("aa","bb","cc",'DD')
    projects.push(newProject)
    addProjectButton("Default Project", newProject)

    const secondProject = new Project("Second Project")
    secondProject.newTask("gg","hh","aa",'nn')
    projects.push(secondProject)
    addProjectButton("Second Project", secondProject)

    createTask(newProject, secondProject)
    clearDisplay(innerTasks)
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
    const selectedProject = projects.find(project => project.selected === true)
    selectedProject.newTask(title, description, priority, notes)
    clearDisplay(innerTasks)
    changeTaskDisplay(selectedProject)
})

function changeTaskDisplay(selectedProject) {
    selectedProject.tasks.forEach(task => {
        createTask(task)
    })
}

function addProjectButton(projectName, project) {
    const button = document.createElement("button")
    button.textContent = projectName
    button.addEventListener("click", () => {
        projects.forEach(projectItem => {
            projectItem.selected = false;
        })
        project.selected = true;
        clearDisplay(innerTasks)
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
            innerTasks.appendChild(taskContainer)
            console.log(projects);

    })})
    projectsContainer.append(button)
}

function createTask(task) {
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
    innerTasks.append(taskContainer)
}

function clearDisplay(parent) {
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
        }
    }
    
    

// BUG: NEW TASKS DO NOT GET ADDED TO DISPLAY
// NEED TO ADD TASKS TO PARTICULAR PROJECTs

