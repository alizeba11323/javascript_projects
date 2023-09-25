const TodoInput = document.querySelector(".todo_add");
const SendBtn = document.querySelector(".sendBtn");
const TodosElement = document.querySelector(".todos");

function handleClose(e) {
  e.target.parentElement.remove();
  // if (e.target.nodeName === "span") {
  //   console.log(e.target.nodeName);
  //   e.target.parentElement.remove();
  // } else if (e.target.nodeName === "path") {
  //   e.target.parentElement.parentElement.parentElement.remove();
  // } else if (e.target.nodeName === "svg") {
  //   e.target.parentElement.parentElement.remove();
}
function handleChange(e) {
  const target = e.target.parentElement.nextElementSibling;
  if (e.target.checked) {
    target.style.textDecoration = "line-through";
  } else {
    target.style.textDecoration = "none";
  }
}
SendBtn.addEventListener("click", function () {
  const inputValue = TodoInput.value;
  if (inputValue === "") return alert("Please Fill the Input");
  const div = document.createElement("div");
  div.className = "todo";
  div.innerHTML = `
         <div class="todo_span">
            <label>
              <input type="checkbox" class="checkbox_input" onchange="handleChange(event)" />
              <div class="checkbox_span"></div>
            </label>
            <span class="todo_title">${inputValue}</span>
          </div>
          <span class="close" onclick="handleClose(event)">
            Delete
          </span>
  `;
  TodosElement.appendChild(div);

  TodoInput.value = "";
});
/**
 * 
 * <svg
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
 */
