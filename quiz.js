// const quizData = [
//     {
//         question: "What is Shinchan's full name?",
//         options: ["Shinchan Nohara", "Shinosuke Nohara", "Shinchan Shin", "Shin Nohara"],
//         answer: "Shinosuke Nohara",
//         image: "assets/shinchan1.gif"
//     },
//     {
//         question: "What is the name of Shinchan's dog?",
//         options: ["Mugi", "Shiro", "Hana", "Siro"],
//         answer: "Shiro",
//         image: "assets/shiro1.gif" 
//     },
//     {
//         question: "Where does Shinchan live?",
//         options: ["Osaka", "Tokyo", "Kasukabe", "Nagoya"],
//         answer: "Kasukabe",
//         image: "assets/Kasukabe.gif"
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     const quizContainer = document.getElementById('quiz');
//     quizContainer.innerHTML = '';
//     currentQuestionIndex = 0;
//     score = 0;
//     displayQuestion();
//     quizContainer.style.display = 'block';
// }

// function displayQuestion() {
//     const quizContainer = document.getElementById('quiz');
//     const currentQuestion = quizData[currentQuestionIndex];

//     const questionElement = document.createElement('div');
//     questionElement.classList.add('quiz-question');
//     questionElement.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image"><p>${currentQuestion.question}</p>`;

//     currentQuestion.options.forEach(option => {
//         const optionContainer = document.createElement('div');
//         optionContainer.classList.add('quiz-option-container');

//         const optionElement = document.createElement('input');
//         optionElement.type = 'radio';
//         optionElement.name = 'option';
//         optionElement.value = option;

//         const label = document.createElement('label');
//         label.innerHTML = option;
//         label.classList.add('quiz-option');

//         optionContainer.appendChild(optionElement);
//         optionContainer.appendChild(label);
//         questionElement.appendChild(optionContainer);
//     });

//     const submitButton = document.createElement('button');
//     submitButton.innerText = 'Submit';
//     submitButton.classList.add('submit-button');
//     submitButton.onclick = checkAnswer;
//     questionElement.appendChild(submitButton);

//     quizContainer.innerHTML = '';
//     quizContainer.appendChild(questionElement);
// }

// function checkAnswer() {
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//     if (!selectedOption) {
//         alert("Please select an answer!");
//         return;
//     }

//     const answer = selectedOption.value;
//     if (answer === quizData[currentQuestionIndex].answer) {
//         score++;
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizData.length) {
//         displayQuestion();
//     } else {
//         displayResult();
//     }
// }

// function displayResult() {
//     const quizContainer = document.getElementById('quiz');
//     quizContainer.innerHTML = '';
//     if (score === 3) {
//         showCongrats('assets/7-1-removebg-preview.png', 'Congratulations! You scored 3 out of 3!');
//     } else if (score === 2) {
//         showCongrats('assets/download-removebg-preview.png', 'Just missed! You scored 2 out of 3.');
//     } else if (score === 1) {
//         showCongrats('assets/png-clipart-shin-chan-illustration-crayon-shin-chan-drawing-shinnosuke-nohara-desktop-kasukabe-shinchan-love-child-thumbnail-removebg-preview.png', 'Not bad! You scored 1 out of 3.');
//     } else {
//         showCongrats('assets/images-removebg-preview (1).png', 'Better luck next time! You scored 0 out of 3.');
//     }
// }

// function showCongrats(image, message) {
//     const congratsMessage = `
//         <div class="congrats-popup">
//             <img src="${image}" alt="Shinchan" class="shinchan-img">
//             <h2>${message}</h2>
//             <p>Well done!</p>
//         </div>
//     `;
//     document.body.innerHTML = congratsMessage;
// }


const quizData = [
    {
        question: "What is Shinchan's full name?",
        options: ["Shinchan Nohara", "Shinosuke Nohara", "Shinchan Shin", "Shin Nohara"],
        answer: "Shinosuke Nohara",
        image: "assets/shinchan1.gif"
    },
    {
        question: "What is the name of Shinchan's dog?",
        options: ["Mugi", "Shiro", "Hana", "Siro"],
        answer: "Shiro",
        image: "assets/shiro1.gif"
    },
    {
        question: "Where does Shinchan live?",
        options: ["Osaka", "Tokyo", "Kasukabe", "Nagoya"],
        answer: "Kasukabe",
        image: "assets/Kasukabe.gif"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    quizContainer.style.display = 'block';
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz');
    const currentQuestion = quizData[currentQuestionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('quiz-question');
    questionElement.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image"><p>${currentQuestion.question}</p>`;

    currentQuestion.options.forEach(option => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('quiz-option-container');

        const optionElement = document.createElement('input');
        optionElement.type = 'radio';
        optionElement.name = 'option';
        optionElement.value = option;

        const label = document.createElement('label');
        label.innerHTML = option;
        label.classList.add('quiz-option');

        optionContainer.appendChild(optionElement);
        optionContainer.appendChild(label);
        questionElement.appendChild(optionContainer);
    });

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.classList.add('submit-button');
    submitButton.onclick = checkAnswer;
    questionElement.appendChild(submitButton);

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const answer = selectedOption.value;
    if (answer === quizData[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    if (score === 3) {
        showCongrats('assets/7-1-removebg-preview.png', 'Congratulations! You scored 3 out of 3!');
    } else if (score === 2) {
        showCongrats('assets/download-removebg-preview.png', 'Just missed! You scored 2 out of 3.');
    } else if (score === 1) {
        showCongrats('assets/png-clipart-shin-chan-illustration-crayon-shin-chan-drawing-shinnosuke-nohara-desktop-kasukabe-shinchan-love-child-thumbnail-removebg-preview.png', 'Not bad! You scored 1 out of 3.');
    } else {
        showCongrats('assets/images-removebg-preview (1).png', 'Better luck next time! You scored 0 out of 3.');
    }
}

function showCongrats(image, message) {
    const congratsMessage = `
        <div class="congrats-popup">
            <img src="${image}" alt="Shinchan" class="shinchan-img">
            <h2>${message}</h2>
            <p>Well done!</p>
        </div>
    `;
    document.body.innerHTML = congratsMessage;
}
