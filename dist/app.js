"use strict";
// Task list and ID tracker
let tasks = [];
let taskId = 0;
// DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
// Event: Add task on button click
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        addTask(text);
        taskInput.value = '';
    }
});
// Event: Add task on Enter key press
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const text = taskInput.value.trim();
        if (text) {
            addTask(text);
            taskInput.value = '';
        }
    }
});
// Function to add a task
function addTask(text) {
    const task = { id: taskId++, text };
    tasks.push(task);
    renderTasks();
}
// Function to edit a task
function editTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const currentText = tasks[index].text;
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            tasks[index].text = newText.trim();
            renderTasks();
        }
    }
}
// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
// Render the task list
function renderTasks() {
    taskList.innerHTML = '';
    for (const task of tasks) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task.text;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(task.id);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(task.id);
        const buttonGroup = document.createElement('div');
        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(buttonGroup);
        taskList.appendChild(li);
    }
}
//# sourceMappingURL=app.js.map