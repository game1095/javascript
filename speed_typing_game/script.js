const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const btnLevelEl = document.getElementById("level-btn");
const settingsEl = document.getElementById("settings");
const levelFormEl = document.getElementById("level-form");
const levelEl = document.getElementById("level");
const gameOverEl = document.getElementById("gameover-container");

// สุ่มคำ
const words = ["เต่า", "ม้า", "หมี", "โปโยะ", "โปนี่", "แคร์แบร์"];
let randomText;
let score = 0;
let time = 15;
let level = "medium";

// สร้าง localstroage
const saveMode =
  localStorage.getItem("mode") !== null
    ? localStorage.getItem("mode")
    : "medium";

const timeInterval = setInterval(updateTime, 1000);

// สุ่มคำจาก array words
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// เอาข้อความที่สุ่มจาก getRandomWord ไปแสดงในหน้า html
function displayWordToUI() {
  randomText = getRandomWord();
  wordEl.innerHTML = randomText;
  timeEl.innerHTML = time;
}

// เริ่มเกมส์ พร้อมกับ set เวลาจากค่า mode
function startGame() {
  levelEl.value = saveMode;
  if (saveMode == "easy") {
    time = 15;
  } else if (saveMode == "medium") {
    time = 10;
  } else {
    time = 5;
  }
  displayWordToUI();
}

// ปุ่มเปลี่ยน level
levelEl.addEventListener("change", (e) => {
  level = e.target.value;
  localStorage.setItem("mode", level);
});

btnLevelEl.addEventListener("click", () => {
  settingsEl.classList.toggle("hide");
  // hide เอามาจาก class ในหน้า index
});

// ส่วนของการพิมพ์ข้อความ
textEl.addEventListener("input", (e) => {
  const inputText = e.target.value;
  if (inputText === randomText) {
    if (saveMode == "easy") {
      time += 5;
    } else if (saveMode == "medium") {
      time += 3;
    } else {
      time += 2;
    }
    displayWordToUI();
    updateScore();
    e.target.value = "";
  }
});

function updateScore() {
  score += 10;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  gameOverEl.innerHTML = `
    <h1>จบเกมส์แล้วจ้า</h1><p>คุณได้คะแนน ${score} คะแนน</p>
    <button onClick="location.reload()">เล่นอีกครั้ง</button>
    `;
  gameOverEl.style.display = "flex";
}

startGame();
textEl.focus();
