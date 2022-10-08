import "./styles/main.scss"
import {Project} from "./project.js"

// DOM Elements
const bodyContainer = document.querySelector(".body-container")
const newProjectButton = document.querySelector("#new-project")
const newTaskButton = document.querySelector("#new-task")
const projectsContainer = document.querySelector(".projects-container")
const tasksContainer = document.querySelector(".tasks-container")
const deleteContainer = document.querySelector(".delete-container")
const deleteProjectButton = document.querySelector("#delete-project")
const innerTasks = document.querySelector(".tasks")
const taskModal = document.querySelector(".task-modal")
const submitButton = document.querySelector("#submit")
const exitButton = document.querySelectorAll("#exit")
const projectModal = document.querySelector(".project-modal")
const projectSubmitButton = document.querySelector("#project-submit")
// Collecting Form Data from DOM Elements
const formTitle = document.querySelector("#title")
const formDate = document.querySelector("#date")
const formPriority = document.querySelector("#priority")
const formNotes = document.querySelector("#notes")
const formProjectName = document.querySelector("#project-name")

// Array to contain projects
let projects = [];

// Event listener that loads an example project and projects created from local storage
addEventListener('load', () => {
    deleteContainer.remove()
    const newProject = new Project("Example Project")
    newProject.newTask("Coding Project #1","2022-10-12","High",'Finish my To-Do-List application')
    newProject.newTask("Coding Project #2","2022-11-14","Low",'Finish my Tic-Tac-Toe game')
    projects.push(newProject)
    addProjectButton("Example Project", newProject)
    createTask(newProject)

    // Looks into local storage to find and display previous made projects and tasks
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let project = JSON.parse(localStorage.getItem(key))
            let storageProject = new Project(project.name)
            storageProject.tasks = project.tasks
            projects.push(storageProject)
            addProjectButton(`${key}`, storageProject)
            createTask(storageProject)
        }
    }
    clearDisplay(innerTasks)
});

// Event listener on New Project button that displays the create project modal
newProjectButton.addEventListener("click", () => {
    projectModal.classList.add("show")
    bodyContainer.classList.add("blur");
})

// Event listener for project submit button to create a project button + object and store in local storage 
projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    removeModal(projectModal)
    if(!formProjectName.value){
        return
    }
    const projectName = formProjectName.value
    const newProject = new Project(projectName)
    let projectSerialized = JSON.stringify(newProject)
    localStorage.setItem(`${projectName}`, projectSerialized);
    projects.push(newProject)
    addProjectButton(projectName, newProject)
    clearModal()
})

// Event listener for create task button to display task modal
newTaskButton.addEventListener("click", () => {
    if(projects.every(projectItem => 
        projectItem.selected === false)) {
        alert("You must first either select a project or create a new one.")
        return
        }
    taskModal.classList.add("show")
    bodyContainer.classList.add("blur");
})

// Event listener for submit button on task modal
// Takes data from form to create a task on the selected project, display it and store it in localStorage 
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    removeModal(taskModal)
    if(!formTitle.value || !formDate.value || !formPriority.value) {
        alert("Please enter at a minimum the task title, due date and task priority")
        return
    }
    const title = formTitle.value
    const date = formDate.value
    const priority = formPriority.value
    const notes = formNotes.value

    const selectedProject = projects.find(project => project.selected === true)
    selectedProject.newTask(title, date, priority, notes)

    clearDisplay(innerTasks)
    changeTaskDisplay(selectedProject)
    deleteProjectDisplay(selectedProject)
    clearModal()

    let retrievedObject = localStorage.getItem(`${selectedProject.name}`);
    let stored = JSON.parse(retrievedObject);
    stored.tasks.push(selectedProject.newTask(title, date, priority, notes));
    let taskSerialized = JSON.stringify(stored);
    localStorage.setItem(`${selectedProject.name}`, taskSerialized);
})

// Event listener for delete project button to delete project from display and localStorage
deleteProjectButton.addEventListener("click", () => {
    let projectIndex = projects.findIndex(project=> project.selected === true)
    let projectRemove = projects[projectIndex].name 
    projects.splice(projectIndex, 1)
    for(const button of document.querySelectorAll("button")) {
        if(button.textContent.includes(projectRemove)){
            projectsContainer.removeChild(button)
            deleteContainer.remove()
        }
    }
    localStorage.removeItem(`${projectRemove}`);
})

// Event listener for the exit button on the task and project modal to exit modal
exitButton.forEach(function(btn) {
    btn.addEventListener("click", () => {
        removeModal(taskModal)
        removeModal(projectModal)
    })
})

// Function to clear the modal of typed data after a submit
function clearModal() {
    formTitle.value = "";
    formDate.value = "";
    formPriority.value = "";
    formNotes.value = "";
    formProjectName.value = "";
}

// Function to clear modal display and blur effect
function removeModal(modal) {
    modal.classList.remove("show")
    bodyContainer.classList.remove("blur");
}

// Function to create and display tasks for each project
function changeTaskDisplay(selectedProject) {
    selectedProject.tasks.forEach(task => {
        createTask(task, selectedProject)
    })
}

// Function to create a project button
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
        })
        
        deleteProjectDisplay(project)
        
    })
    projectsContainer.append(button)
}

// Function to display project delete option if selected project has no tasks
function deleteProjectDisplay(project) {
    if(project.tasks.length > 0){
        deleteContainer.remove()
    }
    else if(project.tasks.length === 0){
        tasksContainer.append(deleteContainer)
    }
}

// Function to create the visual elements of the task and add event listeners to buttons on task
function createTask(task, selectedProject) {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    const circle = document.createElement("i")
    circle.innerHTML = '<i class="fa-regular fa-circle"></i>'
    circle.classList.add("circle")
    circle.addEventListener("click", () => {
        if(circle.innerHTML === '<i class="fa-regular fa-circle"></i>') {
            circle.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
            title.classList.add("strike")
            notes.classList.add("strike")
        } else {
            circle.innerHTML = '<i class="fa-regular fa-circle"></i>'
            title.classList.remove("strike")
            notes.classList.remove("strike")
        }
    })

    const title = document.createElement("p")
    title.textContent = `${task.title}`
    title.classList.add("title")
    const date = document.createElement("p")
    date.textContent = `${task.date}`
    date.classList.add("date")
    const priority = document.createElement("p")
    priority.textContent = `${task.priority}`
    priority.classList.add("priority")
    if(task.priority === "High"){
        priority.classList.add("high")
    }
    else if(task.priority === "Medium"){
        priority.classList.add("medium")
    }
    else if(task.priority === "Low"){
        priority.classList.add("low")
    }
    const notes = document.createElement("p")
    notes.textContent = `Notes: ${task.notes}`
    notes.classList.add("notes")
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
    rightContent.append(date, priority, bin)
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
        
        deleteProjectDisplay(selectedProject)

        let retrievedObject = localStorage.getItem(`${selectedProject.name}`);
        let stored = JSON.parse(retrievedObject);
        stored.tasks.splice(taskRemove, 1);
        let taskSerialized = JSON.stringify(stored)
        localStorage.setItem(`${selectedProject.name}`, taskSerialized);
      })
}

// Function to clear the container display
function clearDisplay(parent) {
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
        }
    }
    
