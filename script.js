document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    
    if(taskInput.trim() === '') return;

    let taskList = document.getElementById('taskList');
    let newTask = document.createElement('li');
    newTask.textContent = taskInput;

    // Add edit and delete buttons
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    newTask.appendChild(editBtn);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);
    document.getElementById('taskInput').value = '';

    // Mark task as completed
    newTask.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    // Edit task
    editBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        let newTaskText = prompt('Edit Task:', newTask.firstChild.textContent);
        if (newTaskText) {
            newTask.firstChild.textContent = newTaskText;
        }
    });

    // Delete task
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        newTask.remove();
    });
});
