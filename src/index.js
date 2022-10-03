import "./styles/main.scss"
import {Project} from "./project.js"

let projects = [];

const bodyContainer = document.querySelector(".body-container")
const newProjectButton = document.querySelector("#new-project")
const newTaskButton = document.querySelector("#new-task")
const projectsContainer = document.querySelector(".projects-container")
const tasksContainer = document.querySelector(".tasks-container")
const innerTasks = document.querySelector(".tasks")
const taskModal = document.querySelector(".task-modal")
const submitButton = document.querySelector("#submit")
const exitButton = document.querySelectorAll("#exit")
const projectModal = document.querySelector(".project-modal")
const projectSubmitButton = document.querySelector("#project-submit")
// Collecting Form Data
const formTitle = document.querySelector("#title")
const formDate = document.querySelector("#date")
const formPriority = document.querySelector("#priority")
const formNotes = document.querySelector("#notes")
const formProjectName = document.querySelector("#project-name")

addEventListener('load', () => {
    const newProject = new Project("Default Project")
    newProject.newTask("Hit the gym","2022-10-12","High",'Powerlifting meetup prep')
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
    projectModal.classList.add("show")
    bodyContainer.classList.add("blur");
})

projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    removeModal(projectModal)
    const projectName = formProjectName.value
    const newProject = new Project(projectName)
    projects.push(newProject)
    addProjectButton(projectName, newProject)
    clearModal()
})

newTaskButton.addEventListener("click", () => {
    if(projects.every(projectItem => 
        projectItem.selected === false)) {
        alert("You must first either select a project or create a new one.")
        return
        }
    taskModal.classList.add("show")
    bodyContainer.classList.add("blur");
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    removeModal(taskModal)
    const title = formTitle.value
    const date = formDate.value
    const priority = formPriority.value
    const notes = formNotes.value
    const selectedProject = projects.find(project => project.selected === true)
    selectedProject.newTask(title, date, priority, notes)
    clearDisplay(innerTasks)
    changeTaskDisplay(selectedProject)
    clearModal()
})


exitButton.forEach(function(btn) {
    btn.addEventListener("click", () => {
        removeModal(taskModal)
        removeModal(projectModal)
    })
})

function clearModal() {
    formTitle.value = "";
    formDate.value = "";
    formPriority.value = "";
    formNotes.value = "";
    formProjectName.value = "";

}

function removeModal(modal) {
    modal.classList.remove("show")
    bodyContainer.classList.remove("blur");
}

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
    const circle = document.createElement("i")
    circle.innerHTML = '<i class="fa-regular fa-circle"></i>'
    circle.classList.add("circle")

    const title = document.createElement("p")
    title.textContent = `${task.title}`
    const date = document.createElement("p")
    date.textContent = `${task.date}`
    date.classList.add("date")
    const priority = document.createElement("p")
    priority.textContent = `${task.priority}`
    priority.classList.add("priority")
    const notes = document.createElement("p")
    notes.textContent = `Notes: ${task.notes}`
    notes.classList.add("notes")
    const edit = document.createElement("i")
    edit.innerHTML= "<i class='fa-solid fa-pen-to-square'></i>"
    edit.classList.add("edit")
    const bin = document.createElement("i")
    bin.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    bin.classList.add("bin")

    const upperContent = document.createElement("div")
    upperContent.classList.add("upper-content")
    const leftContent = document.createElement("div")
    leftContent.classList.add("left-content")
    const rightContent = document.createElement("div")
    rightContent.classList.add("right-content")
    leftContent.append(circle, title)
    rightContent.append(date, priority, edit, bin)
    upperContent.append(leftContent, rightContent)
    const lowerContent = document.createElement("div")
    lowerContent.classList.add("lower-content")
    lowerContent.append(notes)
    const taskContent = document.createElement("div")
    taskContent.classList.add("task-content")
    taskContent.append(upperContent, lowerContent)

    taskContainer.append(taskContent)
    innerTasks.append(taskContainer)
    bin.addEventListener("click", () => {
        task.selected = true;
        
        let taskRemove = selectedProject.tasks.findIndex(task => task.selected === true)
        selectedProject.tasks.splice(taskRemove, 1)
        innerTasks.removeChild(taskContainer)  
      })
}

function clearDisplay(parent) {
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
        }
    }
    
// EASE IN
// FORMAT TASK CONTAINER VISUALLY
// NEW PROJECT MODAL
// IMPLEMENT EDIT BUTTON
// USER MUST FILL ALL SPACES ON TASK MODALs