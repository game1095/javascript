const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("btn-hidden");
const addContainer = document.getElementById("add-container");
const cardContainer = document.getElementById("card-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const currentEl = document.getElementById("current");
const clearBtn = document.getElementById("clear");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCard = document.getElementById("add-card");

let currentActiveCard = 0;
let cardEl = []; //เก็บจำนวนคำถามทั้งหมด
const cardData = getCardData();

// สร้าง card ขึ้นมา โดยนำข้อมูลจาก card data มา loop
function createCard() {
  cardData.forEach((data, index) => {
    createSingleCard(data, index);
  });
}

// สร้าง card
function createSingleCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index == 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <h2>${data.question}</h2>
            </div>
            <div class="inner-card-back">
                <h2>${data.answer}</h2>
            </div>
        </div>

    `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  cardEl.push(card);
  cardContainer.appendChild(card);
  updateCurrentQuestion();
}

// ทำงานในส่วนของ pagination
function updateCurrentQuestion() {
  currentEl.innerText = `${currentActiveCard + 1} / ${cardEl.length}`;
}

// เรียกใช้ function createCard()
createCard();

// กดแล้วจะเฉลยคำตอบ
showBtn.addEventListener("click", () => addContainer.classList.add("show"));

// กดแล้วจะปิดหหน้าสร้างคำถาม
hiddenBtn.addEventListener("click", () =>
  addContainer.classList.remove("show")
);

// กดปุ่มถัดไป
nextBtn.addEventListener("click", () => {
  cardEl[currentActiveCard].className = "card left";
  currentActiveCard = currentActiveCard + 1;
  if (currentActiveCard > cardEl.length - 1) {
    currentActiveCard = cardEl.length - 1;
  }
  cardEl[currentActiveCard].className = "card active";
  updateCurrentQuestion();
});

// กดปุ่มย้อนกลับบ
prevBtn.addEventListener("click", () => {
  cardEl[currentActiveCard].className = "card right";
  currentActiveCard = currentActiveCard - 1;
  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  cardEl[currentActiveCard].className = `card active`;
  updateCurrentQuestion();
});

// กดปุ่มเพิ่มการ์ดในแบบฟอร์ม
addCard.addEventListener("click", () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    createSingleCard(newCard);
    questionEl.value = "";
    answerEl.value = "";
    addContainer.classList.remove("show");
    cardData.push(newCard);
    setCardData(cardData);
  }
});

// สร้าง local stroage
function setCardData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}

// นำข้อมูลจาก local storage ไปแสดง
function getCardData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}

// กดปุ่มลบในหน้าหลักเพื่อลบข้อมูลใน local stroage
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardContainer.innerHTML = "";
  window.location.reload();
});
