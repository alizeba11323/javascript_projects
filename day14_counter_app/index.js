const counterEle = document.querySelector(".counter");
const logs = document.querySelector(".logs");
const inc = document.querySelector(".inc");
let count = 0;
const history = [];

inc.addEventListener("click", function () {
  history.push({ type: "Inc", value: count });
  count++;
  counterEle.innerText = "Count: " + count;
  displayLogs();
});
const displayLogs = () => {
  logs.innerHTML = "";
  history.forEach((hist) => {
    const div = document.createElement("div");
    div.className = "log";
    div.innerText = `You Have ${
      hist.type === "Inc" ? "Incremented" : "Decremented"
    } from ${hist.value}`;
    if (hist.type === "Inc") {
      div.style.color = "red";
    }
    logs.appendChild(div);
  });
};
