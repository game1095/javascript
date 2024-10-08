const rating = document.querySelectorAll("i");
const result = document.getElementById("result");

rating.forEach((star, selectIndex) => {
  star.addEventListener("click", () => {
    rating.forEach((star, choice) => {
      if (selectIndex >= choice) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
    result.innerText = "ผลการประเมิน " + (selectIndex + 1) + "/5";
  });
});
