const videoEl = document.getElementById("video");
const reqBtn = document.getElementById("request-btn");
const shareBtn = document.getElementById("share-btn");

// เลือกหน้าจอที่จะแชร์
reqBtn.addEventListener("click", () => {
  selectMediaStream();
});

// ปุ่มนี้กดแล้วจะมีหน้าจอที่แชร์แสดงขึ้นมา
shareBtn.addEventListener("click", async () => {
  shareBtn.disabled = true;
  await videoEl.requestPictureInPicture();
  shareBtn.disabled = false;
});

// ส่งคำขอเข้าถึงอุปกรณ์ (เลือกหน้าจอที่ต้องการแชร์)
async function selectMediaStream() {
  try {
    //
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
    // shareBtn.disabled = false;
  } catch (error) {
    console.log(error);
  }
}
