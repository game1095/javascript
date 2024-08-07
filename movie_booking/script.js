const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let price = +movieSelect.value; // เปลี่ยน type movieSelect เป็น integer

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    updateSelected();
  }
});

movieSelect.addEventListener("change", (event) => {
  // แปลงค่า value กาก ตอน select เป็น integer
  price = +event.target.value;
  setMovieData(event.target.selectedIndex, event.target.value);
  updateSelected();
});

// เก็บข้อมูลการเลือกที่นั่ง
function updateSelected() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const countSeats = selectedSeats.length;
  //หา index
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  //สร้าง local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  count.innerText = countSeats;
  total.innerText = countSeats * price;
}

// เก็บข้อมูล index ของหนัง และ ราคา โดยอิงจาก tag select
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("movieIndex", movieIndex);
  localStorage.setItem("moviePrice", moviePrice);
}

function showDataToUI() {
  // ดึงข้อมูลจาก localstorage selectedSeats
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  //เก็บหนังที่เราจองไว้
  const selectMovieIndex = localStorage.getItem("movieIndex");
  seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
      seat.classList.add("selected");
    }
  });
  if (selectMovieIndex != null) {
    movieSelect.selectedIndex = selectMovieIndex;
  }
}

showDataToUI();
updateSelected();
