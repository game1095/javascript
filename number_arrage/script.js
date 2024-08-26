const amountEl = document.getElementById("amount");
const outputEl1 = document.getElementById("output1");
const outputEl2 = document.getElementById("output2");
const outputEl3 = document.getElementById("output3");

amountEl.addEventListener("input", (event) => {
  const number = event.target.value;
  // การจัดรูปแบบตัวเลข
  outputEl1.innerText = Intl.NumberFormat().format(number);
  outputEl2.innerText = Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(number);
  outputEl3.innerText = Intl.NumberFormat("en",{notation:"compact"}).format(number)
});
