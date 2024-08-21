const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// mouse อยู่ในพื้นที่ฝั่งซ้าย ให้เพิ่ม class hover-left
left.addEventListener("mouseenter" , ()=>{
    container.classList.add("hover-left");
});

// mouse อยู่ในพื้นที่ฝั่งขวา ให้เพิ่ม class hover-right
right.addEventListener("mouseenter" , ()=>{
    container.classList.add("hover-right");
});

// mouse ไม่อยู่ในพื้นที่ฝั่งซ้าย ให้ลบ class hover-left
left.addEventListener("mouseleave" , ()=>{
    container.classList.remove("hover-left");
});

// mouse ไม่อยู่ในพื้นที่ฝั่งซ้าย ให้ลบ class hover-right
right.addEventListener("mouseleave" , ()=>{
    container.classList.remove("hover-right");
});


