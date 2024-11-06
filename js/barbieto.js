"use strict;"

function goToPage() {
    window.location.href = 'barbietre.html'; 
}


function goBack() {
    window.history.back();
}

 // Vælg knappen
 const redirectButton = document.querySelector('.redirect-button');

 // Funktion til at tjekke om man er i bunden af siden
 function checkScrollPosition() {
     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
         // Hvis vi er i bunden af siden, vis knappen
         redirectButton.classList.add('show');
     } else {
         // Hvis vi scroller væk fra bunden, skjul knappen
         redirectButton.classList.remove('show');
     }
 }

 // Lyt til scroll-eventen
 window.addEventListener('scroll', checkScrollPosition);