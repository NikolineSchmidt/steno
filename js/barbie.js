function showPopup(event, message) {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.textContent = message;

   
    popup.style.top = (event.target.offsetTop - popup.offsetHeight - 10) + 'px';
    popup.style.left = (event.target.offsetLeft + event.target.offsetWidth / 2 - popup.offsetWidth / 2) + 'px';

    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}