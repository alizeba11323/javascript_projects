const step = document.querySelectorAll(".step");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const numbers = document.querySelectorAll(".number");

step.forEach((st) => {
  st.style.display = "none";
});
let currentStep = 0;
numbers[currentStep].classList.add("active");
const displayCurrentStep = (currentStep) => {
  if (currentStep < 0) currentStep += 1;
  step[currentStep].style.display = "flex";
};
next.addEventListener("click", function () {
  console.log(currentStep);
  numbers[
    currentStep
  ].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10" />
</svg>`;
  if (prev.disabled) prev.disabled = false;
  step[currentStep].style.display = "none";
  currentStep++;
  if (currentStep === 3) {
    this.disabled = true;
    return;
  }
  numbers[currentStep].classList.add("active");
  displayCurrentStep(currentStep);
});
prev.addEventListener("click", function () {
  if (currentStep > 2) currentStep -= 1;
  if (next.disabled) next.disabled = false;
  numbers[currentStep].innerText = currentStep + 1;
  if (currentStep === 0) {
    this.disabled = true;
    return;
  }
  numbers[currentStep].classList.remove("active");
  numbers[currentStep].innerText = currentStep + 1;
  step[currentStep].style.display = "none";
  currentStep--;
  numbers[currentStep].classList.add("active");

  displayCurrentStep(currentStep);
});

displayCurrentStep(0);
