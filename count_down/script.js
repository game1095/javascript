const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear(); //ดึงปีปัจจุบัน

// set เวลาปลายทางที่ต้องการ
const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  const currentTime = new Date(); //เวลาปัจจุบัน
  const diff = newYearTime - currentTime;
  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;
  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}

setInterval(updateCountDown, 1000);
