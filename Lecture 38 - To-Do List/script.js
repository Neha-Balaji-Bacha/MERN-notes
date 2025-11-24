const addBtn = document.querySelector(".add-btn");
const todoItemsSection = document.querySelector("#todo-items");
const todoElement = document.querySelector("#todo");
//add a check to stop user for creating a Todo with empty todo value
todoElement.addEventListener("input", () => {
  if (todoElement.value === "") {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (todoElement.value === "") return;

  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.innerHTML = `
        <p>${todoElement.value}</p>
        <div class="todo-buttons">
            <button id="edit-btn">Edit</button>
            <button id="delete-btn">Delete</button>
        </div>
    `;
  todoItemsSection.appendChild(todoItem);

  const deleteBtn = todoItem.querySelector("#delete-btn");
  deleteBtn.onclick = () => todoItem.remove();

  const editBtn = todoItem.querySelector("#edit-btn");
  editBtn.addEventListener("click", () => {
    const pElement = todoItem.querySelector("p");

    if (editBtn.textContent == "Save") {
      const newInputElement = todoItem.querySelector("input");

      // if user is saving an empty todo, we'll retrieve the original todo
      if (newInputElement.value) {
        pElement.textContent = newInputElement.value;
      }

      newInputElement.remove();
      editBtn.textContent = "Edit";
      pElement.style.display = "block";
    } else {
      const todoButtons = todoItem.querySelector(".todo-buttons");

      editBtn.textContent = "Save";
      pElement.style.display = "none";

      const newInputElement = document.createElement("input");
      newInputElement.value = pElement.textContent;

      todoItem.insertBefore(newInputElement, todoButtons);
    }
  });

  todoElement.value = "";
});
