const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
const answerButtonOne = document.getElementById('ans1');
const answerButtonTwo = document.getElementById('ans2');
const answerButtonThree = document.getElementById('ans3');
const answerButtonFour = document.getElementById('ans4');
const nextButton = document.getElementById('next-btn');





 


console.log("Element: ", startButton)

startButton.addEventListener('click', startQuiz);

// -- This is our DATASET -- //
const question = [
    {
        question: 'What are objects in JavaScript?',
        answers: [
            {Text:'An ordered list of elements containing any data type', correct: true},
            {Text:'Obsticals', correct: false},
            {Text:'A strict code', correct: false},
            {Text:'An array helps you build an object', correct: false},
        ]
        
    },
    {
        question: 'What is an array in JavaScript?',
        answers: [
            {Text:'An ordered list of elements containing any data type', correct: false},
            {Text:'Obsticals', correct: false},
            {Text:'A strict code', correct: true},
            {Text:'An array helps you build an object', correct: true},
        ]
        
    },
    {
        question: "What is a function in JavaScript?",
        answers: [
            {Text:"A song by E-40", correct: false},
            {Text:"Code and its ability to make things run ", correct: false},
            {Text:"An action or occurrence that happens as a result of user interaction", correct: false},
            {Text:"A reusable piece of code that can be used to perform a specific task", correct: true},
    
        ]
    },
    {
        question: "A key feature in JavaScript is?",
        answers: [
            {Text:"Object-orientedt", correct: false},
            {Text:"Cross-platform compatibilitys", correct: false},
            {Text:"Interactivity", correct: false},
            {Text:"All of the above", correct: true},
    
        ]
    }
]


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextButton.classList.remove('hide')
    setNextQuestion()

}



    
function setNextQuestion(){
    // Update the VIEWERS question content
    questionElement.textContent = question[currentQuestionIndex].question
    answerButtonOne.textContent = question[currentQuestionIndex].answers[0].Text
    answerButtonTwo.textContent = question[currentQuestionIndex].answers[1].Text
    answerButtonThree.textContent = question[currentQuestionIndex].answers[2].Text
    answerButtonFour.textContent = question[currentQuestionIndex].answers[3].Text
       
   
}

 // We need to CAPTURE the USER Choice
 answerButtonsElement.addEventListener('click', function(event) {
    console.log("Event: ", event);

    event.stopPropagation();
    console.log("Target: ", event.target);
    console.log("Content: ", event.target.textContent);

    // Run some validation --> Check is the USER choice the CORRECT answer(?)
    // IF YES --> add to score , AND SHOW NEXT QUESTION
    if (question[currentQuestionIndex].answers[event.target.dataset.answer].correct) {

    
    
        //after you get the question right add points to time and seconds to the time increment the current question index.
        alert("correctAnswer");
        currentQuestionIndex++;
        setNextQuestion();
    }
    else {
        alert("wrongAnswer")
    }
    // IF NO --> subtract time, AND SHOW NEXT QUESTION
});

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.array.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.Text
        button.classList.add('btn')
        
    });
    

}

function timeTick() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}





function selectAnswer(){
    
}