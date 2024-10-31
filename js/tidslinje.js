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
