// อ้างอิง element จาก index.html
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dataTransaction = [
  { id: 1, text: "ค่าจ้างเด็ก", amount: -5000 },
  { id: 2, text: "เงินเดือน", amount: 20000 },
];

const transactions = dataTransaction;

function init() {
  transactions.forEach(addDataToList);
  calculateMoney();
}

// เอาข้อมูลไปแสดงตรงประวัติธุรกรรม
function addDataToList(transactions) {
  const symbol = transactions.amount < 0 ? "-" : "+";
  const status = transactions.amount < 0 ? "minus" : "plus";
  const item = document.createElement("li");
  const result = formatNumber(Math.abs(transactions.amount));
  item.classList.add(status);
  item.innerHTML = `${transactions.text}<span>${symbol} ${result}</span><button class="delete-btn">X</button>`;
  list.appendChild(item);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// คิดเงินคงเหลือ
function calculateMoney() {
  // เรียกค่า amount มาทั้งหมดจาก transaction
  const amounts = transactions.map((transactions) => transactions.amount);

  // คำนวณยอดคงเหลือ
  const total = amounts
    .reduce((result, item) => (result += item), 0)
    .toFixed(2);

  // คำนวณรายรับ
  const income = amounts
    .filter((item) => item > 0)
    .reduce((result, item) => (result += item))
    .toFixed(2);

  // คำนวณรายจ่าย
  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((result, item) => (result += item)) * -1).toFixed(2);
      
  // แสดงผล
  balance.innerText = `฿ ` + formatNumber(total);
  money_plus.innerText = `฿ ` + formatNumber(income);
  money_minus.innerText = `฿ ` + formatNumber(expense);
}

init();
