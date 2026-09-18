const music = document.getElementById("music");
const button = document.getElementById("playMusic");

button.addEventListener("click", function() {
  if (music.paused) {
    music.play();
    button.textContent = "Pause Music";
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
});

