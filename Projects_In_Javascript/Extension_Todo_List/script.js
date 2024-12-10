const TODOS_KEY = "todos";
const todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const renderTodos = () => {
  todoList.innerHTML = "";
  let completedCount = 0;

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "checked" : ""}`;

    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""} data-index="${index}">
      <span class="todo-text">${todo.text}</span>
      <div>
        <button class="edit-btn" data-index="${index}">✏️</button>
        <button class="delete-btn" data-index="${index}">❌</button>
      </div>
    `;

    if (todo.completed) completedCount++;

    li.querySelector(".todo-checkbox").addEventListener("change", (e) => {
      todos[index].completed = e.target.checked;
      saveTodos();
      renderTodos();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newTask = prompt("Edit your task:", todo.text);
      if (newTask) {
        todos[index].text = newTask;
        saveTodos();
        renderTodos();
      }
    });

    todoList.appendChild(li);
  });

  const progress = todos.length ? (completedCount / todos.length) * 100 : 0;
  progressBar.value = progress;
  progressText.textContent = `${Math.round(progress)}%`;
};

addTodoBtn.addEventListener("click", () => {
  const task = newTodoInput.value.trim();
  if (task) {
    todos.push({ text: task, completed: false });
    saveTodos();
    renderTodos();
    newTodoInput.value = "";
  }
});

const resetDaily = () => {
  const today = new Date().toLocaleDateString();
  if (localStorage.getItem("lastReset") !== today) {
    todos.forEach((todo) => (todo.completed = false));
    localStorage.setItem("lastReset", today);
    saveTodos();
    renderTodos();
  }
};

resetDaily();
renderTodos();
