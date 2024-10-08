let todoList = [];

document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const task = taskInput.value.trim();

    if (task) {
        todoList.push({ task, done: false });
        taskInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todoList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.task;

        if (task.done) {
            taskElement.classList.add('done');
        }

        taskElement.addEventListener('click', () => {
            task.done = !task.done;
            renderTodoList();
        });

        todoListElement.appendChild(taskElement);
    });
}

renderTodoList();