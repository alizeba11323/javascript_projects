const button = document.querySelector(".color_generate");
const message = document.querySelector(".message");
const color_container = document.querySelector("span.color");
const copyColor = document.querySelector("button.copy_color");
let color;
function getColor() {
  copyColor.removeAttribute("disabled");
  const rand = Math.floor(Math.random() * 0xffffff);
  color = `#${rand.toString(16)}`;
  color_container.innerText = color;
  document.body.style.backgroundColor = color;
}
button.addEventListener("click", getColor);
copyColor.addEventListener("click", function () {
  navigator.clipboard.writeText(color);
  message.innerText = "Your Color is Copied!!!";
  this.setAttribute("title", "copied ");
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
  this.setAttribute("disabled", true);
});

getColor();

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   navigator.clipboard.writeText("hello");
//   navigator.clipboard.readText("hello").then((data) => console.log(data));
// });
