const quizContainer = document.querySelector(".quiz_container");
const resultContainer = document.querySelector(".result_container");
const welcomeContainer = document.querySelector(".welcome_container");
const questionNo = document.querySelector(".question_no");
const startBtn = document.querySelector(".start_btn");
const question = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const optionBtn = document.querySelector(".options");
const nextBtn = document.querySelector(".next_btn");
const result = document.querySelector(".result");
const exit = document.querySelector(".exit");
const replay = document.querySelector(".replay");
const username = document.querySelector("#username");
nextBtn.style.display = "none";
resultContainer.style.display = "none";
quizContainer.style.display = "none";
startBtn.disabled = true;
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false },
    ],
  },
  {
    question: "Javascript is a _____ language.",
    answers: [
      { text: "Programming", correct: false },
      { text: "Application", correct: false },
      { text: "Scripting", correct: true },
      { text: "None", correct: false },
    ],
  },
  {
    question: "JavaScript is a _____ Side Scripting Language.",
    answers: [
      { text: "Server", correct: false },
      { text: "Browser", correct: true },
      { text: "ISP", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "JavaScript can be written",
    answers: [
      { text: "Directly on Server Side", correct: false },
      { text: "Directly on HTML Page", correct: true },
      { text: "All of The Above", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "JavaScript code is written inside file having extension",
    answers: [
      { text: ".jvs", correct: false },
      { text: ".js", correct: true },
      { text: ".jsc", correct: false },
      { text: ".javascript", correct: false },
    ],
  },
];

username.addEventListener("change", function () {
  startBtn.disabled = false;
});

startBtn.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});
let index = 0;
let score = 0;
let total = questions.length;
const loadQuestion = () => {
  const currentQuestion = questions[index];
  question.innerText = `${index + 1}) ${currentQuestion.question}`;
  questionNo.innerText = `${index + 1} of ${total}`;
  Array.from(currentQuestion.answers).forEach((answer, idx) => {
    options[idx].innerText = answer.text;
    if (answer.correct) {
      options[idx].setAttribute("correct", true);
    }
  });
};
const resetButton = () => {
  Array.from(options).forEach((btn) => {
    if (btn.hasAttribute("correct")) {
      btn.removeAttribute("correct");
    }
    btn.style.backgroundColor = "transparent";
    btn.disabled = false;
  });
};
const replayStart = () => {
  index = 0;
  score = 0;
  resetButton();
};

nextBtn.addEventListener("click", function () {
  this.style.display = "none";
  if (index < total - 1) {
    index++;
    if (index === 4) {
      this.innerText = "Finish";
    }
    resetButton();
    loadQuestion();
  } else {
    quizContainer.style.display = "none";
    result.innerText = `congrate ${username.value},Your score is ${score} out of ${total}`;
    resultContainer.style.display = "block";
  }
});
optionBtn.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    nextBtn.style.display = "block";
    if (e.target.hasAttribute("correct")) {
      score++;
      e.target.style.backgroundColor = "#1abc9c";
    } else {
      e.target.style.backgroundColor = "red";
      Array.from(options).forEach((btn) => {
        if (btn.hasAttribute("correct")) {
          btn.style.backgroundColor = "#1abc9c";
        }
      });
    }
    Array.from(options).forEach((btn) => {
      btn.disabled = true;
    });
  }
});
exit.addEventListener("click", function () {
  resultContainer.style.display = "none";
  welcomeContainer.style.display = "flex";
  username.value = "";
  replayStart();
});
replay.addEventListener("click", function () {
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
  replayStart();
  loadQuestion();
});
