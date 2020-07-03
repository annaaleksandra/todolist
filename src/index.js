import {getDate} from './date.js';

const container = document.querySelector('.container');
const taskNameInput = document.querySelector('#taskName');
const saveButton = document.querySelector('#save');
const resetButton = document.querySelector('#reset');
const addButton = document.querySelector('#addNew');
const newTaskScreen = document.querySelector('#newTask');

addButton.addEventListener('click', showAddNewTask);
saveButton.addEventListener('click', addNewTaskToTheArray);

let tasks = [];

function Todo(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
}

//Defines when the "Add New Task" screen pops up
function showAddNewTask() { 
    newTaskScreen.classList.remove('hidden');
    newTaskScreen.classList.add('show');
}

function hideAddNewTask() {
    newTaskScreen.classList.remove('show');
    newTaskScreen.classList.add('hidden');
}

//Add new task to the "tasks" array based on the user input
function addNewTaskToTheArray(e) {
    e.preventDefault();
    
    let taskname = document.querySelector('#taskName').value;
    let taskDescription = document.querySelector('#description').value;
    let taskDate = document.querySelector('input[type="date"]').value;

    let newElement = new Todo(taskname, taskDescription, getDate(taskDate))
  
    tasks = [];
    tasks.push(newElement);
    hideAddNewTask();
    displayTasks();

    document.querySelector('#taskName').value = "";
    document.querySelector('#description').value = "";
    document.querySelector('input[type="date"]').value = "";
}

//Adds the task to the screen
function displayTasks() {
   
    for (let i = 0; i < tasks.length; i++) {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        taskElement.innerText = tasks[i].name;

        const description = document.createElement('p');
        description.classList.add('smalltext');
        description.innerText = tasks[i].description;

        let date = document.createElement('p');
        date.classList.add('smalltext');
        date.innerText = "Due date: " + tasks[i].date;
        
        taskElement.appendChild(description);
        taskElement.appendChild(date);
        container.appendChild(taskElement);
    }
}


//Add one task manually for styling 
function addTaskManuallyForStyling() {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    taskElement.innerText = "Pay Council Tax";

    const description = document.createElement('p');
    description.classList.add('smalltext');
    description.innerText = "Council Tax 139 pounds";


    let date = document.createElement('p');
    date.classList.add('smalltext');
    date.innerText = "Due Date: 5 Jul";
    
    taskElement.appendChild(description);
    taskElement.appendChild(date);
    container.appendChild(taskElement);

}

addTaskManuallyForStyling();

