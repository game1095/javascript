const cardHeader = document.getElementById("card-header");
const cardTitle = document.getElementById("card-title");
const description = document.getElementById("card-description");
const profileImg = document.getElementById("profile-img");
const sellerName = document.getElementById("name");
const price = document.getElementById("price");

const animatedBg = document.querySelectorAll(".animated_bg");
const animateText = document.querySelectorAll(".animated_text");

// 2000ms = 2s
setTimeout(showContent, 2000);

function showContent() {
  cardHeader.innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636__340.jpg">`;
  cardTitle.innerHTML = `Sofa`;
  description.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique, minima! Quas eum praesentium necessitatibus
                    exercitationem eos voluptatibus mollitia, unde eius
                    quibusdam
                    voluptatem obcaecati porro explicabo, nihil blanditiis.
                    Beatae,
                    doloribus inventore!`;

  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/women/75.jpg">`;
  sellerName.innerHTML = "Ronaldo";
  price.innerHTML = "200,000 USD";
  animatedBg.forEach((bg) => bg.classList.remove("animated_bg"));
  animateText.forEach((text) => text.classList.remove("animated_text"));
}
