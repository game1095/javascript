const toggle = document.getElementById("toggle");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
// อ้างอิงปุ่มสร้างบัญชีผู้ใช้
const open = document.getElementById("open");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// ปิด modal โดยคลิกพื้นที่นอก modal
window.addEventListener("click", (event) =>
  event.target == modal ? modal.classList.remove("show-modal") : false
);
