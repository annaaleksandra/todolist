
const container = document.querySelector('.container');
const taskNameInput = document.querySelector('#taskName');
const saveButton = document.querySelector('#save');
const resetButton = document.querySelector('#reset');
const addButton = document.querySelector('#addNew');
const newTaskScreen = document.querySelector('#newTask');

let tasks = [ 
    {name: "Taskname",
    description: "Task description",
    date: "Due Date: 24 Jun" }
];

addButton.addEventListener('click', showAddNewTask);

function showAddNewTask() {
    
    newTaskScreen.classList.remove('hidden');
    newTaskScreen.classList.add('show');
}

function hideAddNewTask() {
    newTaskScreen.classList.remove('show');
    newTaskScreen.classList.add('hidden');
}

saveButton.addEventListener('click', addNewTaskToTheArray);

function Todo(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;

}

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
/*
function sendToFirebase(taskname, taskDescription) {
    let newItem = firebaseReference.push();
    newItem.addNewTaskToTheArray({
        name: taskname,
        description: taskDescription,

    });
}
*/

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


function getDate(taskDate) {
    let array = taskDate.split('-');
    let remove2020 = array.shift();
    array = array.reverse();

    if (array[1] === "01") {
        array[1] = "Jan";
    } else if (array[1] === "02") {
        array[1] = "Feb";
    } else if (array[1] === "03") {
        array[1] = "Mar";
    } else if (array[1] === "04") {
        array[1] = "Apr";
    } else if (array[1] === "05") {
        array[1] = "May"
    } else if (array[1] === "06") {
        array[1] = "Jun"
    } else if (array[1] === "07") {
        array[1] = "Jul"
    } else if (array[1] === "08") {
        array[1] = "Aug"
    } else if (array[1] === "09") {
        array[1] = "Sep"
    } else if (array[1] === "10") {
        array[1] = "Oct"
    } else if (array[1] === "11") {
        array[1] = "Nov"
    } else if (array[1] === "12") {
        array[1] = "Dec"
    } else {
        console.log("problem")
    }

    array = array.join(" ")

    return array
}

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





  //sendToFirebase(taskname, taskDescription);



/*displays each object on the tasks-array to the screen
function displayTasks() {
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        taskElement.innerText = task.name;

        const description = document.createElement('p');
        description.innerText = task.description;


        taskElement.appendChild(description);

        container.appendChild(taskElement);
        
    })
}*/






/* (function () {
    const important = document.getElementById('important');
    const somewhat = document.getElementById('somewhat');
    const notimportant = document.getElementById('notimportant')

    if (important.checked) {
        taskElement.classList.add('important');
    } else if (somewhat.checked) {
        taskElement.classList.add('somewhat');
    } else if (notimportant.checked) {
        taskElement.classList.add('notimportant')
    } else {
        console.log(error);
    }
})();*/



/*
function Task(name) {
    this.createItem(name);

    createItem(name) {
        let itemBox = document.createElement('div')

        let taskName = document.createElement('p');
        taskName.value = name;

        container.appendChild(itemBox)

        itemBox.appendChild(taskName);
    }
}

const kissa = new Task("kissa");

console.log(kissa)*/

/*let name = document.getElementById("taskName").value

let list = document.querySelector('li');






let list = [];

function Task(name, importance, description, dueDate) {
    this.name = getName(name);
    this.importance = importance;
    this.description = getDescription(description);
    this.dueDate = dueDate;

    function getName(name){
        let taskname = document.createElement('li');
        taskname.textContent = name;

        list.appendChild(taskname);
    }

    function getDescription(description);

}

let todo = new Task("moro", "very", "dothis", "january");
console.log(todo.name)
*/