var starterBtn = document.querySelector("#startBtn");
var starterPage = document.querySelector("#starter-page");
var questionPage = document.querySelector("#question-page");
var sampleQuestions = document.querySelector(".question");
var answerBtn = document.querySelector("#answerButtons");
var currentIndex = 0;
var timerCount = document.querySelector("#timer-gauge")
var countDown = 60;
var questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [
            {text: "Object-Orientated", correct:true},
            {text: "Object-Based", correct:false},
            {text: "Procedural", correct:false},
            {text: "None of the above", correct:false},
        ]
    },
    {
        question: "Eekum Bokum",
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
    setTime()

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

function setTime() {
    
    var timerInterval = setInterval(function(){
        countDown--;
        timerCount.innerText = countDown + " seconds left";

        if (countDown === 0) {
            clearInterval(timerInterval)
        }

    },1000)
}