"use strict";

// Funktion til at vise pop-up med besked, når der klikkes på hotspot
function showPopup(event, message) {
    const popup = document.getElementById('popup'); 
    popup.style.display = 'block'; 
    popup.textContent = message; 

    // Beregn positionen af hotspot (det område, der blev klikket på)
    const rect = event.target.getBoundingClientRect();

    // Juster pop-up'ens position, så den vises lige over hotspot
    popup.style.top = window.scrollY + rect.top - popup.offsetHeight - 10 + 'px'; 
    popup.style.left = window.scrollX + rect.left + rect.width / 2 - popup.offsetWidth / 2 + 'px';

    // Skjul pop-up'en efter 3 sekunder
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Funktion til at omdirigere til en ny side
function goToPage() {
    
    const sound = document.getElementById("button-sound");
    
    
    if (sound) {
        sound.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
    }

   
    setTimeout(() => {
        window.location.href = "barbieto.html"; 
    }, 500); 
}