const musicConthainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = ["Contra", "HavestMoon", "Mario"];
let index = 2;

function loadSongs(song) {
  title.innerText = `เพลง : ${song} .mp3`;
  cover.src = `./cover/${song}.jpg`;
  audio.src = `./music/${song}.mp3`;
}

loadSongs(songs[index]);

// กดคลิกปุ่ม play จะเล่นเพลง
playBtn.addEventListener("click", () => {
  const isPlay = musicConthainer.classList.contains("play"); //เชคว่าเล่นเพลงอยู่หรือไม่
  if (isPlay) {
    pauseSong(); //หยุดเล่น
  } else {
    playSong(); //เล่นเพลง
  }
});

// กดปุ่มเล่นเพลงก่อนหน้า
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = songs.length - 1;
  }
  loadSongs(songs[index]);
  playSong();
});

// กดปุ่มเล่นเพลงถัดไป
nextBtn.addEventListener("click", () => {
  index++;
  if (index > songs.length - 1) {
    index = 0;
  }
  loadSongs(songs[index]);
  playSong();
});

function playSong() {
  musicConthainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  //play เป็น function ของ js
  audio.play();
}

function pauseSong() {
  musicConthainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  //pause เป็น function ของ js
  audio.pause();
}

audio.addEventListener("timeupdate", (event) => {
  //currentTime กับ duration เป็น function ของ audio
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener("click", setProgress);

function setProgress(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function nextSong() {
  index++;
  if (index > songs.length - 1) {
    index = 0;
  }
  loadSongs(songs[index]);
  playSong();
}

audio.addEventListener("ended", nextSong);
