const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Developed by Megamind";
let speed = 300 / speedEl.value;
let characterId = 1;

function writeText() {
  textEl.innerText = text.slice(0, characterId);
  characterId++;

  if (characterId > text.length) {
    characterId = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (event) => {
  speed = 300 / event.target.value;
});

writeText();
