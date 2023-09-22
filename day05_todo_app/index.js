const inputValue = document.querySelector(".todo_add");
const sendBtn = document.querySelector(".sendBtn");
const todosContainer = document.querySelector(".todos");

sendBtn.addEventListener("click", function () {
  const todo = {
    id: Math.floor(Math.random() * 100),
    title: inputValue.value,
    completed: false,
  };
  const todoLocal = JSON.parse(localStorage.getItem("todos")) || [];
  todoLocal.unshift(todo);
  localStorage.setItem("todos", JSON.stringify(todoLocal));
  getAllTodos();
  inputValue.value = "";
});

function getAllTodos() {
  todosContainer.innerHTML = "";
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(todos);
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo";
    todoElement.innerHTML = `<div class="todo_span">
            <label>
              <input type="checkbox" class="checkbox_input" />
              <div class="checkbox_span"></div>
            </label>
            <span>${todo.title}</span>
          </div>
          <span class="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trash"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </span>`;
    todosContainer.appendChild(todoElement);
  });
}
getAllTodos();
