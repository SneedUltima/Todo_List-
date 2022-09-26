import {Project} from "./project.js"
let projects = [];

const newProjectButton = document.querySelector("#new-project")
const newTaskButton = document.querySelector("#new-task")
const projectsContainer = document.querySelector(".projects-container")
const tasksContainer = document.querySelector(".tasks-container")

addEventListener('load', (event) => {
    const newProject = new Project("Default Project")
    projects.push(newProject)
    changeProjectDisplay()
});

newProjectButton.addEventListener("click", () => {
    const projectName = prompt("Name of Project?: ")
    const newProject = new Project(projectName)
    projects.push(newProject)
    console.log(projects);
    changeProjectDisplay()
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


function changeProjectDisplay() {
    projects.forEach(project => {
        const div = document.createElement("div")
        div.textContent = project.name
        projectsContainer.appendChild(div)
})}

function changeTaskDisplay() {
    projects.forEach(project => {
    project.tasks.forEach(task => {
        const div = document.createElement("div")
        div.textContent = task.title
        tasksContainer.appendChild(div)
    })
})}