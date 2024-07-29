// เลือกสกุลเงิน
const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");

// ค่าเงินที่ผู้ใช้กรอก
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");

// ค่าเงิน
const rateText = document.getElementById("rate");
// กดเพื่อแปลงค่า
const swap = document.getElementById("btn");

// เปลี่ยนแปลงค่า
currency_one.addEventListener("change", calculateMoney);
currency_two.addEventListener("change", calculateMoney);

// เอาค่าไปแทนในฟอร์ม
amount_one.addEventListener("input", calculateMoney);
amount_two.addEventListener("input", calculateMoney);

function calculateMoney() {
  const calOne = currency_one.value;
  const calTwo = currency_two.value;
  // เรียก api
  let url = `https://api.exchangerate-api.com/v4/latest/${calOne}`;
  //   fetch data
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[calTwo];
      rateText.innerText = `1 ${calOne} = ${rate} ${calTwo}`;
      amount_two.value = (amount_one.value * rate).toFixed(4);
    });
}
swap.addEventListener("click", () => {
  // ค่าแรก
  const currency_one_temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = currency_one_temp;
  calculateMoney();
});

calculateMoney();
