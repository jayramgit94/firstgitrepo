document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskActions(e) {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        } else {
            e.target.classList.toggle('completed');
        }
    }
});
