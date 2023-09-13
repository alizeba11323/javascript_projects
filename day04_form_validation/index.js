const fileUplaod = document.querySelector(".file-upload");
const img = document.createElement("img");
img.style.width = "100px";
img.style.height = "100px";
img.style.borderRadius = "50%";
const image_container = document.querySelector(".image_container");
fileUplaod.addEventListener("change", function (e) {
  const target = e.target.files[0];
  const url = URL.createObjectURL(target);
  img.src = url;
  image_container.prepend(img);
});
