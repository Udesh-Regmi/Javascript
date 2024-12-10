// Local Storage Keys
const TODOS_KEY = "todos";
const LAST_RESET_KEY = "lastResetDate";

// Initialize todos
let todos = [];

// DOM Elements
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const globalTimerInput = document.getElementById("timer-duration-input");

// Audio for notifications
const timerBeep = new Audio("./beep.wav");
const taskCompletedSound = new Audio("./final.wav");

// Initialize Application
function initializeApp() {
  loadTodosWithDailyReset();

  // Event Listeners
  addTodoBtn.addEventListener("click", addNewTodo);

  // Initial render
  renderTodos();
}

// Load Todos with Daily Reset Check
function loadTodosWithDailyReset() {
  const storedTodos = JSON.parse(localStorage.getItem(TODOS_KEY) || "[]");
  const lastResetDate = localStorage.getItem(LAST_RESET_KEY);
  const today = new Date().toISOString().split('T')[0];

  // Check if daily reset is needed
  if (lastResetDate !== today) {
    todos = storedTodos.map(todo => ({
      ...todo,
      completed: false,
      timerStart: null,
      elapsedTime: null
    }));
    
    // Update last reset date
    localStorage.setItem(LAST_RESET_KEY, today);
    saveTodos();
  } else {
    todos = storedTodos;
  }
}

// Save Todos to Local Storage
function saveTodos() {
  try {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos:", error);
    alert("Could not save todos. Local storage might be full.");
  }
}

// Validate Timer Input
function isValidTime(time) {
  const timeValue = parseInt(time, 10);
  return !isNaN(timeValue) && timeValue >= 1 && timeValue <= 120;
}

// Start Timer for a Todo
function startTimer(index) {
  const todo = todos[index];
  
  // Use task-specific timer or global timer
  const taskTimerDuration = todo.timerDuration || 
    (globalTimerInput.value ? parseInt(globalTimerInput.value) : 25);
  
  const totalTimerDuration = taskTimerDuration * 60 * 1000; // Convert to milliseconds

  // Ensure timer hasn't already started
  if (!todo.timerStart) {
    todo.timerStart = Date.now() - (todo.elapsedTime || 0);
    saveTodos();
  }

  // Create timer interval
  const timerInterval = setInterval(() => {
    const elapsedTime = Date.now() - todo.timerStart;
    const timeRemaining = totalTimerDuration - elapsedTime;

    if (timeRemaining > 0) {
      updateTimerDisplay(index, timeRemaining, taskTimerDuration);
      playBeepIfNeeded(elapsedTime);
    } else {
      clearTimerForTodo(index);
    }

    updateProgressBar();
  }, 1000);

  todo.timerInterval = timerInterval;
}

// Play Beep Sound Periodically
function playBeepIfNeeded(elapsedTime) {
  if (elapsedTime % (20 * 60 * 1000) < 1000) {
    timerBeep.play();
  }
}

// Clear Timer for a Todo
function clearTimerForTodo(index) {
  const todo = todos[index];
  
  // Clear interval
  if (todo.timerInterval) {
    clearInterval(todo.timerInterval);
  }

  // Mark as completed
  todo.completed = true;
  todo.elapsedTime = null;
  todo.timerStart = null;
  todo.timerInterval = null;

  saveTodos();
  taskCompletedSound.play();
  renderTodos();
}

// Stop Timer
function stopTimer(index) {
  const todo = todos[index];

  if (todo.timerInterval) {
    clearInterval(todo.timerInterval);
    todo.elapsedTime = Date.now() - todo.timerStart;
    todo.timerStart = null;
    todo.timerInterval = null;
    saveTodos();
  }
}

// Update Timer Display
function updateTimerDisplay(index, timeRemaining, taskTimerDuration) {
  const todoItem = document.querySelector(`[data-index='${index}']`);
  if (!todoItem) return;

  const timerSpan = todoItem.querySelector(".todo-timer");
  const minutes = Math.max(Math.floor(timeRemaining / 1000 / 60), 0);
  const seconds = Math.max(Math.floor((timeRemaining % 60000) / 1000), 0);

  if (timerSpan) {
    timerSpan.textContent = ` ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  // Manage task color
  todoItem.classList.toggle("timer-active", timeRemaining > 0);
  todoItem.classList.toggle("checked", timeRemaining <= 0);
}

// Update Progress Bar
function updateProgressBar() {
  if (todos.length === 0) {
    progressBar.value = 0;
    progressText.textContent = "0%";
    return;
  }

  const totalProgress = todos.reduce((acc, todo) => {
    // Use task-specific or global timer duration
    const taskTimerDuration = todo.timerDuration || 
      (globalTimerInput.value ? parseInt(globalTimerInput.value) : 25);
    const totalTimerDuration = taskTimerDuration * 60 * 1000;

    if (todo.timerStart) {
      const elapsedTime = Date.now() - todo.timerStart;
      return acc + Math.min(elapsedTime / totalTimerDuration, 1);
    }
    return acc + (todo.completed ? 1 : 0);
  }, 0);

  const normalizedProgress = (totalProgress / todos.length) * 100;
  progressBar.value = normalizedProgress;
  progressText.textContent = `${Math.round(normalizedProgress)}%`;
}

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "checked" : ""}`;
    li.setAttribute("data-index", index);

    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""} data-index="${index}">
      <span class="todo-text">${todo.text}</span>
      <input type="number" class="task-timer" min="1" max="120" 
             value="${todo.timerDuration || globalTimerInput.value || 25}" 
             placeholder="Time (min)" data-index="${index}">
      <span class="todo-timer">${todo.timerStart || todo.elapsedTime ? " 00:00" : ""}</span>
      <div>
        <button class="edit-btn" data-index="${index}">✏️</button>
        <button class="delete-btn" data-index="${index}">❌</button>
      </div>
    `;

    // Checkbox Event
    li.querySelector(".todo-checkbox").addEventListener("change", (e) => {
      const todoIndex = e.target.dataset.index;
      todos[todoIndex].completed = e.target.checked;

      if (e.target.checked) {
        startTimer(todoIndex);
      } else {
        stopTimer(todoIndex);
      }
      saveTodos();
      renderTodos();
    });

    // Task-Specific Timer Input
    const taskTimerInput = li.querySelector(".task-timer");
    taskTimerInput.addEventListener('change', (e) => {
      const todoIndex = e.target.dataset.index;
      const newTimerDuration = parseInt(e.target.value, 10);
      
      if (isValidTime(newTimerDuration)) {
        todos[todoIndex].timerDuration = newTimerDuration;
        saveTodos();
      } else {
        alert("Please enter a valid time between 1 and 120 minutes.");
        e.target.value = todos[todoIndex].timerDuration || globalTimerInput.value || 25;
      }
    });

    // Edit Button Event
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newTask = prompt("Edit your task:", todo.text);
      if (newTask) {
        todos[index].text = newTask;
        saveTodos();
        renderTodos();
      }
    });

    // Delete Button Event
    li.querySelector(".delete-btn").addEventListener("click", () => {
      stopTimer(index);
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  });

  updateProgressBar();
}

// Add New Todo
function addNewTodo() {
  const task = newTodoInput.value.trim();
  const defaultTimer = globalTimerInput.value || 60;

  if (task) {
    todos.push({ 
      text: task, 
      completed: false,
      timerStart: null,
      elapsedTime: null,
      timerDuration: parseInt(defaultTimer, 10)
    });
    saveTodos();
    renderTodos();
    newTodoInput.value = "";
  }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initializeApp);