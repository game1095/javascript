const count = 10;
const apiKey = "ZOhTUpuQ23aWz6z8EXj-fPEW1slFtLBYfDrapQdiBRc";
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById("img-container");
let imagesArray = [];
async function getImage() {
  try {
    const response = await fetch(url);
    imagesArray = await response.json();
    displayImage();
  } catch (error) {
    console.log(error);
  }
}

function displayImage() {
  imagesArray.forEach((image) => {
    // ใส่ link ให้ภาพ
    const item = document.createElement("a");
    item.setAttribute("href", image.links.html);
    item.setAttribute("target", "_blank");

    // เอารูปภาพใส่ tag img
    const img = document.createElement("img");
    img.setAttribute("src", image.urls.regular);
    img.setAttribute("title",image.alt_description);
    img.setAttribute("alt",image.alt_description);

    // เอา img ยัดใส่ tag a 
    item.appendChild(img);
    // เอา tag a ยัดใส่ image-container
    imageContainer.appendChild(item)
  });
}

getImage();

window.addEventListener("scroll", ()=>{
    // เช็คว่า scroll มาสุดหน้าจอหรือยัง
    if(window.innerHeight+window.scrollY >= document.body.offsetHeight-100){
        // ดึงข้อมูลมาแสดงผล
        getImage();
    }
});