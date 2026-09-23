const music = document.getElementById("music");
const button = document.getElementById("playMusic");

button.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            button.textContent = "Pause Music";
        } catch (error) {
            console.error("Music could not play:", error);
        }
    } else {
        music.pause();
        button.textContent = "Play Music";
    }
});
