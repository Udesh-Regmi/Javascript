   
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const dataIdInput = document.getElementById("data_id");
  const dataNameInput = document.getElementById("data_name");
  const outputContainer = document.getElementById("output");
  const dropContainer = document.getElementById("outdrop");
  let draggedElement = null;


  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = dataIdInput.value.trim();
    const name = dataNameInput.value.trim();

    if (id && name) {
      createDraggableItem(id, name);
      taskForm.reset();
    } else {
      alert("Please fill in both ID and Name fields.");
    }
  });


  function createDraggableItem(id, name) {
    const item = document.createElement("div");
    item.classList.add("draggable-item");
    item.setAttribute("draggable", "true");
    item.innerHTML = `
      <div class="item-id">${id}</div>
      <div class="item-name">${name}</div>
      <button class="edit-btn"><i class='bx bxs-edit'></i></button>
      <button class="delete-btn">Del</button>
    `;

    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);

    // Event listeners for edit and delete buttons
    item.querySelector(".edit-btn").addEventListener("click", () => editItem(item));
    item.querySelector(".delete-btn").addEventListener("click", () => deleteItem(item));

    outputContainer.appendChild(item);
  }

  function handleDragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.effectAllowed = "move";
    event.target.classList.add("dragging");
  }

  function handleDragEnd(event) {
    event.target.classList.remove("dragging");
    draggedElement = null;
  }


  function setupDropZone(container) {
    container.addEventListener("dragover", (event) => event.preventDefault());
    container.addEventListener("dragenter", (event) => {
      if (event.target === container) {
        container.classList.add("dragover");
      }
    });
    container.addEventListener("dragleave", (event) => {
      if (event.target === container) {
        container.classList.remove("dragover");
      }
    });
    container.addEventListener("drop", (event) => {
      event.preventDefault();
      if (event.target === container && draggedElement) {
        container.appendChild(draggedElement);
        container.classList.remove("dragover");
      }
    });
  }


  function editItem(item) {
    const currentId = item.querySelector(".item-id").textContent;
    const currentName = item.querySelector(".item-name").textContent;

    dataIdInput.value = currentId;
    dataNameInput.value = currentName;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.type = "button";
    saveButton.classList.add("save-btn");

    // Replace the Add button with the Save button
    const addButton = document.getElementById("add");
    addButton.style.display = "none";
    taskForm.querySelector(".btncont").appendChild(saveButton);

    /**
     * Saves the edited values back to the draggable item.
     */
    const saveEdits = () => {
      const newId = dataIdInput.value.trim();
      const newName = dataNameInput.value.trim();

      if (newId && newName) {
        item.querySelector(".item-id").textContent = newId;
        item.querySelector(".item-name").textContent = newName;
        taskForm.reset();
        saveButton.remove();
        addButton.style.display = "inline-block";
      } else {
        alert("Please fill in both ID and Name fields.");
      }
    };

    saveButton.addEventListener("click", saveEdits);
  }


  function deleteItem(item) {
    item.remove();
  }
  // Initialize drop zones
  setupDropZone(outputContainer);
  setupDropZone(dropContainer);
});
