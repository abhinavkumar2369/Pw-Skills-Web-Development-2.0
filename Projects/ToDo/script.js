document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const createTodoBtn = document.getElementById('createTodoBtn');
    const todoList = document.getElementById('todoList');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    renderTodos();
    
    createTodoBtn.addEventListener('click', addTodo);
    
    function addTodo() {
        const text = todoInput.value.trim();
        if (text !== '') {
            todos.push(text);
            saveToLocalStorage();
            renderTodos();
            todoInput.value = '';
        }
    }
    
    function renderTodos() {
        todoList.innerHTML = '';
        
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            
            // Normal view
            const normalView = document.createElement('div');
            normalView.innerHTML = `
                <div>${todo}</div>
                <div class="todo-actions">
                    <button class="btn btn-success edit-btn">Edit</button>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </div>
            `;
            
            // Edit view
            const editView = document.createElement('div');
            editView.classList.add('hidden');
            editView.innerHTML = `
                <input type="text" class="todo-input edit-input" value="${todo}">
                <div class="edit-mode">
                    <button class="btn btn-danger cancel-btn">Cancel</button>
                    <button class="btn btn-primary save-btn">Save</button>
                </div>
            `;
            
            todoItem.appendChild(normalView);
            todoItem.appendChild(editView);
            
            // Event listeners
            const editBtn = normalView.querySelector('.edit-btn');
            const deleteBtn = normalView.querySelector('.delete-btn');
            const cancelBtn = editView.querySelector('.cancel-btn');
            const saveBtn = editView.querySelector('.save-btn');
            
            editBtn.addEventListener('click', () => {
                normalView.classList.add('hidden');
                editView.classList.remove('hidden');
            });
            
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                saveToLocalStorage();
                renderTodos();
            });
            
            cancelBtn.addEventListener('click', () => {
                normalView.classList.remove('hidden');
                editView.classList.add('hidden');
            });
            
            saveBtn.addEventListener('click', () => {
                const newText = editView.querySelector('.edit-input').value.trim();
                if (newText !== '') {
                    todos[index] = newText;
                    saveToLocalStorage();
                    renderTodos();
                }
            });
            
            todoList.appendChild(todoItem);
        });
    }
    
    function saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});