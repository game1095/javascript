const slideContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-content");
const slideLeft = document.querySelector(".left-content");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

// จำนวนภาพ slide
const sildeLength = slideRight.querySelectorAll("div").length;

// กำหนดว่าทำงานอยู่ที่สมาชิกตัวที่เท่าไหร่
let activeIndex = 0;

upBtn.addEventListener("click", () => changeImage("up"));
downBtn.addEventListener("click", () => changeImage("down"));

function changeImage(direction) {
  const slideHeight = slideContainer.clientHeight;

  if (direction == "up") {
    activeIndex++;
    if (activeIndex > sildeLength - 1) {
      activeIndex = 0;
    }
  } else if (direction == "down") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = sildeLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
  slideRight.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
}
