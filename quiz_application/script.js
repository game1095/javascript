const questionData = [
  {
    question: "1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
    a: "ระบบปฏิบัติการดอส",
    b: "ไมโครซอฟท์เวิร์ด",
    c: "ไมโครซอฟต์วินโดวส์",
    d: "ระบบปฏิบัติการแอนดรอยด์",
    correct: "b",
  },
  {
    question: "2.ข้อใดคือโปรแกรม Web Browser",
    a: "Google Chrome",
    b: "Keyboard",
    c: "Mouse",
    d: "Monitor",
    correct: "a",
  },
  {
    question: "3.ข้อใดคือฮา์ดแวร์",
    a: "Keyboard",
    b: "Mouse",
    c: "Monitor",
    d: "ถูกทุกข้อ",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const choiceA = document.getElementById("a-text");
const choiceB = document.getElementById("b-text");
const choiceC = document.getElementById("c-text");
const choiceD = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
const questionContainer = document.querySelector(".question-container");

let currentQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
  checkChoice();

  const currentQuizData = questionData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  choiceA.innerText = currentQuizData.a;
  choiceB.innerText = currentQuizData.b;
  choiceC.innerText = currentQuizData.c;
  choiceD.innerText = currentQuizData.d;
}

function checkChoice() {
  answerEls.forEach((ans) => (ans.checked = false));
}

submitBtn.addEventListener("click", () => {
  let answer = getChoiceAnswer();
  if (answer) {
    if (answer === questionData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questionData.length) {
      loadQuestion();
    } else {
      questionContainer.innerHTML = `<h2>คุณได้คะแนน: ${score}/${questionData.length}</h2>`;
    }
  }
});

function getChoiceAnswer() {
  let answer;
  answerEls.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}
