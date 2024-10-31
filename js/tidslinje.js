"use script";
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.scrollY; // Hvor meget der er scrollet ned
    const windowHeight = window.innerHeight; // Højden på viewport
    const documentHeight = document.body.scrollHeight; // Den totale højde af dokumentet

    // Beregn procentdelen af scroll
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Opdater indikatorens højde
    scrollIndicator.style.height = scrollPercent + '%'; // Indikatorens højde i procent
});

// Tilføj dette efter det eksisterende scroll-event
window.addEventListener('scroll', function() {
    const quizButton = document.getElementById('quiz-button-container');
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollTop = window.scrollY;

    // Tjek, om brugeren er tæt på bunden af siden
    if (scrollTop + windowHeight >= documentHeight - 100) { // 100px fra bunden
        quizButton.style.display = 'block'; // Vis knappen
    } else {
        quizButton.style.display = 'none'; // Skjul knappen
    }
});

// Skjul knappen ved indlæsning
document.addEventListener('DOMContentLoaded', function() {
    const quizButton = document.getElementById('quiz-button-container');
    quizButton.style.display = 'none'; // Start med skjult
});

