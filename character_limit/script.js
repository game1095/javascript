const textarea = document.querySelector("textarea");
const amount = document.querySelector(".amount");
const limit = document.querySelector(".limit");
const max = 20;

textarea.addEventListener("keyup", () => {
  const count = textarea.value.length;
  amount.innerText = count;

  if (count > max) {
    limit.classList.add("active")
  }else{
    limit.classList.remove("active")
  }
});
