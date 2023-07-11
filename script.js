var starterBtn = document.querySelector("#startBtn");
var starterPage = document.querySelector("#starter-page");
var questionPage = document.querySelector("#question-page");
var sampleQuestions = document.querySelector(".question");
var answerBtn = document.querySelector("#answerButtons");
var currentIndex = 0;

var questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [
            {text: "Object-Orientated", correct:true},
            {text: "Object-Based", correct:false},
            {text: "Procedural", correct:false},
            {text: "None of the above", correct:false},
        ]
    }
]


starterBtn.addEventListener("click", startGame)

function startGame() {
    starterPage.classList.add("hidePage")
    questionPage.classList.remove("hidePage")
    nextQuestions()
    console.log('Start')
}


function nextQuestions() {
    sampleQuestions.innerText = questions[currentIndex].question
    var question = questions[currentIndex]
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')

    button.addEventListener("click", function(){

    }) 
        answerBtn.appendChild(button)
    })
 
}