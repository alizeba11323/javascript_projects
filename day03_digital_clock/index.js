const h = document.querySelector(".hour");
const m = document.querySelector(".minute");
const s = document.querySelector(".second");
const dayS = document.querySelector(".day");
const dateS = document.querySelector(".date-day");
const month = document.querySelector(".month-sel");
const yearS = document.querySelector(".year-sel");
setInterval(() => {
  const date = new Date();
  const hour =
    (date.getHours().toString().length === 1 ? "0" : "") + date.getHours();
  const minutes =
    (date.getMinutes().toString().length === 1 ? "0" : "") + date.getMinutes();
  const seconds =
    (date.getSeconds().toString().length === 1 ? "0" : "") + date.getSeconds();
  h.innerText = hour;
  m.innerText = minutes;
  s.innerText = seconds;
}, 1000);
const date = new Date();
const t = date.getMonth();
const day = date.getDay();
const d1 = date.getDate();
const year = date.getFullYear();
const d = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednusday",
  "Thurday",
  "Friday",
  "Satarday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log();
dayS.innerText = d[day];
yearS.innerText = year;
dateS.innerText = d1;
month.innerText = months[t];
