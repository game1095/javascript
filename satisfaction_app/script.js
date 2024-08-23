const ratingContainer = document.querySelector(".rating-container");
const ratings = document.querySelectorAll(".rating");
const panel = document.getElementById("panel");
const sendbtn = document.getElementById("send");

let selected ;

ratingContainer.addEventListener("click" , (event)=>{
    if(event.target.parentNode.classList.contains("rating")){
        removeActive();
        event.target.parentNode.classList.add("active");
        selected = event.target.nextElementSibling.innerHTML;
    }
});

// Clear Active ตัวเดิม
function removeActive(){
    for(let i = 0; i<ratings.length; i++){
        ratings[i].classList.remove("active")
    }
}

sendbtn.addEventListener("click" , ()=>{
    panel.innerHTML = `
        <img src="./image/heart.svg" class="img-complete">
        <strong>ขอบคุณที่ใช้บริการ</strong>
        <br>
        <strong>ผลการประเมิน: ${selected}</strong>
    `
});