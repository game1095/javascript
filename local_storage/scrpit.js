const setting = document.getElementById("setting");
const text = document.querySelector("p");
const resetBtn = document.getElementById("reset");
const body = document.querySelector("body");

setting.addEventListener("change", () => {
  // ตั้งค่า localstorage
  localStorage.setItem("dark-mode", setting.checked);
  loadTheme();
});

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  loadTheme();
});

function loadTheme() {
  // ดึงการตั้งค่า local storage
  const status = JSON.parse(localStorage.getItem("dark-mode"));
  setting.checked = status;
  if (setting.checked) {
    text.innerText = "โหมดกลางคืน";
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  } else {
    text.innerText = "โหมดกลางวัน";
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  }
}

loadTheme();
