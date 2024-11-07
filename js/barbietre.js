"use strict";  

// Funktion til at gå tilbage i browserens historik
function goBack() {
    playSound();

  
    setTimeout(() => {
        window.history.back();
    }, 500);
}

function playSound() {
    const sound = document.getElementById("button-sound");
    if (sound) {
        sound.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
    }
}