const music = document.getElementById("music");

document.getElementById("playMusic").addEventListener("click", function() {
    music.play()
        .then(() => {
            console.log("Audio playing successfully.");
        })
        .catch(error => {
            console.error("Playback failed:", error);
        });
});
