"use strict;"

function showPopup(event, message) {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.textContent = message;

   
    const rect = event.target.getBoundingClientRect();
    
  
    popup.style.top = window.scrollY + rect.top - popup.offsetHeight - 10 + 'px';
    popup.style.left = window.scrollX + rect.left + rect.width / 2 - popup.offsetWidth / 2 + 'px';

   
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

function goToPage() {
    window.location.href = 'barbieto.html'; 
}