const contents = document.querySelectorAll(".content");

document.addEventListener("scroll", showText);

function showText() {
  contents.forEach((content) => {
    const imgEl = content.querySelector("img");
    const textEl = content.querySelector(".text");
    const scrollPos = window.pageYOffset;

    // offsetTop = จุดที่สูงที่สุดของภาพ / offsethieght = ความสูงของภาพ
    const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
    if (scrollPos > textPos) {
      // แสดงเนื้อหา
      textEl.classList.add("show-reveal");
    } else {
      // ปิดการแสดงเนื้อหา
      textEl.classList.remove("show-reveal");
    }
  });
}
