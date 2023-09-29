const items = document.querySelectorAll(".item");
const leftContainer = document.querySelector(".left");
const RightContainer = document.querySelector(".right");

for (let item of items) {
  item.addEventListener("dragstart", function () {
    item.classList.add("dragging");
    console.log("drag started");
  });
  item.addEventListener("dragend", function (e) {
    item.classList.remove("dragging");
    console.log("dragEnd");
  });
}

leftContainer.addEventListener("dragover", function (e) {
  e.preventDefault();
  console.log("dragged over");
});
leftContainer.addEventListener("dragenter", function (e) {
  this.style.backgroundColor = "brown";
});
leftContainer.addEventListener("dragleave", function (e) {
  this.style.backgroundColor = "rgb(20,20,20)";
});
leftContainer.addEventListener("drop", function (e) {
  e.preventDefault();
  this.style.backgroundColor = "rgb(20,20,20)";
  console.log("dragged over");
  const dragElement = document.querySelector(".dragging");
  this.appendChild(dragElement);
});
RightContainer.addEventListener("dragover", function (e) {
  e.preventDefault();
  console.log("dragged over");
});
RightContainer.addEventListener("drop", function (e) {
  e.preventDefault();
  this.style.backgroundColor = "rgb(20,20,20)";
  const dragElement = document.querySelector(".dragging");
  this.appendChild(dragElement);
});
RightContainer.addEventListener("dragenter", function (e) {
  this.style.backgroundColor = "brown";
});
RightContainer.addEventListener("dragleave", function (e) {
  this.style.backgroundColor = "rgb(20,20,20)";
});
