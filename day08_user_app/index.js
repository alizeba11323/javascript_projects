const box = document.querySelector(".box");

const addCardToBox = (photos) => {
  photos.forEach((photo) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
                <div class="image_box">
                  <img src=${photo.url} alt="" />
                </div>
                <div class="description">
                  ${photo.title}
                </div>
              `;
    box.appendChild(div);
  });
};

const getPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      addCardToBox(res);
    })
    .catch((err) => console.log("Not Found URL"));
};

getPhotos();
