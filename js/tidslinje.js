document.addEventListener("DOMContentLoaded", () => {
    const circlesContainer = document.querySelector('.circles-container');
    const years = [
        "Ca. 1900",
        "1920",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "2000",
        "2010"
    ];

    years.forEach((year, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = year;

        // Placer cirklen korrekt
        const position = (index / (years.length - 1)) * 100; // Procentdel af linjen
        circle.style.left = `${position}%`;

        // Tilføj cirklen til cirklernes container
        circlesContainer.appendChild(circle);
    });
});
