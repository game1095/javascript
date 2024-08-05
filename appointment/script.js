// ส่วนเพิ่มการแจ้งเตือน
const inputContainer = document.getElementById("input-container");
const countDownForm = document.getElementById("countDownForm");
const title = document.getElementById("title");
const dateEl = document.getElementById("date-picker");

// ส่วนการ countdown
const countDownEl = document.getElementById("countdown");
const countDownTitleEl = document.getElementById("countdown-title");
const countDownBtn = document.getElementById("countdown-btn");
const timeEl = document.querySelectorAll("span");

// ส่วนกลางเสร็จสิ้น
const completeEl = document.getElementById("complete");
const completeInfoEl = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-btn");

// ตัวแปรควบคุมการทำงาน
let countDownTitle = "";
let countDownDate = "";
let countDownValue = Date; //เก็บวันที่เลือกจาก Form
let countDownActive; //ตัวนับเวลา ทำงานร่วมกับ setUpTime()
let saveCountDown; //เก็บข้อมูลหัวข้อและวันแจ้งเตือน

// ตัวแปรแปลงหน่อยเวลา
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

countDownForm.addEventListener("submit", updateCountDown);

function updateCountDown(event) {
  event.preventDefault();
  countDownTitle = event.srcElement[0].value;
  countDownDate = event.srcElement[1].value;

  if (countDownTitle === "" || countDownDate === "") {
    alert("ป้อนข้อมูลไม่ครบ");
  } else {
    saveCountDown = { title: countDownTitle, date: countDownDate };

    // เก็บข้อมูลใน local storage
    localStorage.setItem("countDown", JSON.stringify(saveCountDown));
    countDownValue = new Date(countDownDate).getTime(); //เวลาที่ตั้งไว้

    // สำหรับนับเวลาถอยหลัง
    setUpTime();
  }
}

function setUpTime() {
  countDownActive = setInterval(() => {
    //เริ่มนับเวลา
    // หาผลต่างเวลาปัจจุบันกับเวลาที่ตั้งเอาไว้
    const now = new Date().getTime();
    const distance = countDownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    inputContainer.hidden = true;

    if (distance < 0) {
      // หมดเวลา
      countDownEl.hidden = true;
      completeEl.hidden = false;
      // แสดงส่วนการแจ้งเตือนตอนหมดเวลา
      completeInfoEl.textContent = `${countDownTitle} วันที่ ${countDownDate}`;
      //   ให้เคลียการนับเวลา
      clearInterval(countDownActive);
    } else {
      // set หัวข้อในส่วนของการ countdown
      countDownTitleEl.textContent = `${countDownTitle}`;
      // นับถอยหลังต่อ
      timeEl[0].textContent = `${days}`;
      timeEl[1].textContent = `${hours}`;
      timeEl[2].textContent = `${minutes}`;
      timeEl[3].textContent = `${seconds}`;
      countDownEl.hidden = false;
      completeEl.hidden = true;
    }
  }, second);
}

// เอาข้อมูลจาก local storage มาแสดง
function callDataInStore() {
  if (localStorage.getItem("countDown")) {
    inputContainer.hidden = true;
    saveCountDown = JSON.parse(localStorage.getItem("countDown"));
    // title and date เอามาจาก local storage ที่ตั้งค่าเอาไว้
    countDownTitle = saveCountDown.title;
    countDownDate = saveCountDown.date;
    countDownValue = new Date(countDownDate).getTime();
    setUpTime();
  }
}

function reset() {
  // ล้างข้อมูลใน local storage
  localStorage.removeItem("countDown");
  countDownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countDownActive);
  countDownTitle = "";
  countDownDate = "";
}

countDownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);

callDataInStore();
