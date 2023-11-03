const password = document.querySelector(".password");
const span = document.querySelector(".span");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  span.innerText = "";
  const val = password.value;
  if (val.length === 0) {
    span.innerText = "Password Cant be Empty";
    span.style.display = "flex";
  } else if (val.length < 8) {
    span.innerText = "Length Should Be Greater than 8";
    span.style.display = "flex";
  } else if (
    !val.includes("@") &&
    !val.includes("$") &&
    !val.includes("&") &&
    !val.includes("*") &&
    !val.includes("#")
  ) {
    span.innerText = "Password Must Contains any of these spacial charecter";
    span.style.display = "flex";
  }
});
