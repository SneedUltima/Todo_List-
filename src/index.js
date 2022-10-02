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
    if(projects.every(projectItem => 
        projectItem.selected === false)) {
        alert("You must first either select a project or create a new one.")
        return
        }
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
        createTask(task, selectedProject)
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
            createTask(task, project)

    })})
    projectsContainer.append(button)
}

function createTask(task, selectedProject) {
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
    const bin = document.createElement("i")
    bin.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    bin.classList.add("bin")
    taskContainer.append(title, description, priority, notes, bin)
    innerTasks.append(taskContainer)
    bin.addEventListener("click", () => {
        task.selected = true;
        
        let taskRemove = selectedProject.tasks.findIndex(task => task.selected === true)
        console.log(taskRemove);
        selectedProject.tasks.splice(taskRemove, 1)
        innerTasks.removeChild(taskContainer)  
      })
}

function clearDisplay(parent) {
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
        }
    }
    
// TASKS VISUALLY SHOULD BE SAME LENGTH