const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const date1 = document.getElementById("initDate").value;
  const date2 = document.getElementById("endDate").value;

  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const times = Math.abs(endDate - startDate); //ได้ข้อมูลกลับมาเป็น millisecond
  const days = Math.round(times/(1000*60*60*24));
  result.innerText = `ระยะเวลาห่างกัน ${days} วัน`
});
