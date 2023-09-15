const fileUpload = document.querySelector(".file-upload");
const images = document.querySelector(".images");
let imageArr = [];
const loadImage = (imgArr) => {
  Array.from(imgArr).forEach((image, idx) => {
    const div = document.createElement("div");
    div.className = "img_container";
    const img = document.createElement("img");
    img.className = "image";
    img.src = URL.createObjectURL(image);
    const span = document.createElement("span");
    span.innerText = "x";
    span.className = "close";
    span.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      imageArr = Array.from(imageArr).filter((i) => i !== image);
      // imageArr.splice(idx, 1);
      console.log(imageArr);
    });
    div.appendChild(img);
    div.appendChild(span);
    images.appendChild(div);
  });
};
fileUpload.addEventListener("change", function (e) {
  console.log(e.target.files);
  imageArr = [...imageArr, ...Array.from(e.target.files)];
  loadImage(e.target.files);
});
