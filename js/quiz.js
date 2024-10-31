const quizData = [
    {
        image: "img/1950.webp",
        options: ["1950", "1960", "1980", "2000"],
        answer: "1950"
    },
    {
        image: "img/1980.webp",
        options: ["1920", "1950", "1980", "2010"],
        answer: "1980"
    },
    {
        image: "img/1900.webp",
        options: ["1900", "1920", "1980", "1990"],
        answer: "1900"
    },
    {
        image: "img/1990.webp",
        options: ["1940", "1980", "1990", "2000"],
        answer: "1990"
    }
];

let score = 0;

// Funktion til at generere quiz-spørgsmål
function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    quizData.forEach((item, index) => {
        const quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = `Billede for år ${item.answer}`;

        const options = document.createElement("div");
        options.classList.add("options");

        item.options.forEach(option => {
            const label = document.createElement("label");
            label.classList.add("option-label");
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            options.appendChild(label);
        });

        quizItem.appendChild(image);
        quizItem.appendChild(options);
        quizContainer.appendChild(quizItem);
    });
}

// Funktion til at beregne og vise resultatet
function calculateScore() {
    score = 0;

    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const optionLabels = document.querySelectorAll(`input[name="question${index}"]`);

        optionLabels.forEach(label => {
            const labelText = label.parentNode;
            if (label.value === item.answer) {
                // Marker det korrekte svar med grønt
                labelText.style.backgroundColor = "#d4edda";
                labelText.style.color = "#155724";
            } else if (selectedOption && label.value === selectedOption.value && label.value !== item.answer) {
                // Marker brugerens forkerte svar med rødt
                labelText.style.backgroundColor = "#f8d7da";
                labelText.style.color = "#721c24";
            }
            // Deaktiver alle valgmuligheder, så man ikke kan ændre svaret efter feedback
            label.disabled = true;
        });

        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });

    const result = document.getElementById("result");
    result.textContent = `Du havde ${score} ud af ${quizData.length} rigtige!`;
}

// Hent quizzen, når siden er loadet
document.addEventListener("DOMContentLoaded", loadQuiz);

// Beregn score, når brugeren trykker på knappen
document.getElementById("submit-btn").addEventListener("click", calculateScore);
