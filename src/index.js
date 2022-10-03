import "./styles/main.scss"
import {Project} from "./project.js"

let projects = [];

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
// Collecting Form Data
const formTitle = document.querySelector("#title")
const formDate = document.querySelector("#date")
const formPriority = document.querySelector("#priority")
const formNotes = document.querySelector("#notes")
const formProjectName = document.querySelector("#project-name")

addEventListener('load', () => {
    deleteContainer.remove()
    const newProject = new Project("Default Project")
    newProject.newTask("Hit the gym","2022-10-12","High",'Powerlifting meetup prep')
    projects.push(newProject)
    addProjectButton("Default Project", newProject)

    const secondProject = new Project("Empty Project")
    projects.push(secondProject)
    addProjectButton("Empty Project", secondProject)

    createTask(newProject)
    clearDisplay(innerTasks)
});

newProjectButton.addEventListener("click", () => {
    projectModal.classList.add("show")
    bodyContainer.classList.add("blur");
})

projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    removeModal(projectModal)
    if(!formProjectName.value){
        return
    }
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
})

deleteProjectButton.addEventListener("click", () => {
    let projectIndex = projects.findIndex(project=> project.selected === true)
    let projectRemove = projects[projectIndex].name 
    console.log(projectRemove);
    projects.splice(projectIndex, 1)
    for(const button of document.querySelectorAll("button")) {
        console.log("HH");
        if(button.textContent.includes(projectRemove)){
            console.log("hello");
            projectsContainer.removeChild(button)
            deleteContainer.remove()
        }
    }

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
        })
        
        deleteProjectDisplay(project)
        
    })
    projectsContainer.append(button)
}

function deleteProjectDisplay(project) {
    if(project.tasks.length > 0){
        deleteContainer.remove()
    }
    else if(project.tasks.length === 0){
        tasksContainer.append(deleteContainer)
    }
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
        
        deleteProjectDisplay(selectedProject)
      })
}

function clearDisplay(parent) {
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
        }
    }
    
// IMPLEMENT EDIT BUTTON FOR TASKS AND PROJECTS
// TASK CIRCLE FUNCTIONALITY
// LOCAL STORAGE