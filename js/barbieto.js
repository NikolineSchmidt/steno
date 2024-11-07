"use strict";

// Funktion til at vise "Fortsæt videre" knappen, når brugeren er nederst på siden
function showRedirectButton() {
    const redirectButton = document.querySelector('.redirect-button');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        redirectButton.style.display = 'flex'; // Brug flex for at få knappen til at blive vist korrekt
    } else {
        redirectButton.style.display = 'none'; // Skjul knappen, hvis ikke i bunden
    }
}

// Funktion til at vise "Tilbage" knappen, når brugeren er øverst på siden
function showGoBackButton() {
    const goBackButton = document.querySelector('.go-back-button');
    if (window.scrollY === 0) {
        goBackButton.style.display = 'flex'; // Brug flex for at få knappen til at blive vist korrekt
    } else {
        goBackButton.style.display = 'none'; // Skjul knappen, hvis ikke øverst
    }
}

// Lyt efter scroll-events
window.addEventListener('scroll', function() {
    showRedirectButton(); // Tjek om vi er i bunden
    showGoBackButton();   // Tjek om knappen skal vises ved indlæsning
});

// Tjek for initial placering af knapperne, når siden loader
document.addEventListener('DOMContentLoaded', function() {
    showRedirectButton();  // Tjek for om knappen skal vises, når siden først indlæses
    showGoBackButton();    // Tjek for om knappen skal vises ved indlæsning
});

// Funktion til at navigere til næste side
// Funktion til at omdirigere til en ny side
function goToPage() {
    playSound();

    
    setTimeout(() => {
        window.location.href = "barbietre.html";
    }, 500);
}


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