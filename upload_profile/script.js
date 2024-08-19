const image = document.querySelector("img");
const input = document.querySelector("input");

input.addEventListener("change" ,()=>{
    // ดึงไฟล์ แล้วเอา path ของ ไฟล์ไปยัดใน src ของ img
    image.src = URL.createObjectURL(input.files[0]);
})