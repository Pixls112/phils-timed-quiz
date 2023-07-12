var starterBtn = document.querySelector("#startBtn");
var starterPage = document.querySelector("#starter-page");
var questionPage = document.querySelector("#question-page");
var sampleQuestions = document.querySelector(".question");
var answerBtn = document.querySelector("#answerButtons");
var currentIndex = 0;
var timerCount = document.querySelector("#timer-gauge")
var countDown = 60;
var endingPage = document.querySelector("#end-page")

var questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [{text:"Object-Orientated"}, {text:"Object-Based"}, {text:"Procedural"}, {text:"None of the above"}],
        correct: "Object-Orientated"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [{text:"var"}, {text:"let"}, {text:"A and B"}, {text:"None of the above"}],
        correct: "A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [{text:"getElementbyid()"}, {text:"getElementsByClassName()"}, {text:"A and B"}, {text:"None of the above"}],
        correct: "A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: [{text:"Throws an error"}, {text:"Ignores the statement"}, {text:"Gives a warning"}, {text:"None of the above"}],
        correct: "Ignores the statement"
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [{text:"Values"}, {text:"Objects"}, {text:"String"}, {text:"Functions"}],
        correct: "Values"
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
        answerBtn.appendChild(button)
        button.addEventListener("click", function(){
            if (button.innerText === questions[currentIndex].correct){
                proceedQuestion()
            } else {
                countDown=countDown-5
                alert("Wrong\nTime deducted")
            }
            
        })
    })
 
}

function proceedQuestion() {
    resetState()
    currentIndex++;
    sampleQuestions.innerText = questions[currentIndex].question
    var question = questions[currentIndex]
    
    question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button)
    button.addEventListener("click", function(){
        if (button.innerText === questions[currentIndex].correct){
            proceedQuestion2()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
}

function proceedQuestion2() {
    resetState()
    currentIndex++;
    sampleQuestions.innerText = questions[currentIndex].question 
    var question = questions[currentIndex]
    
    question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button)
    button.addEventListener("click", function(){
        if (button.innerText === questions[currentIndex].correct){
            proceedQuestion3()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
}

function proceedQuestion3() {
    resetState()
    currentIndex++;
    sampleQuestions.innerText = questions[currentIndex].question 
    var question = questions[currentIndex]
    
    question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button)
    button.addEventListener("click", function(){
        if (button.innerText === questions[currentIndex].correct){
            proceedQuestion4()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
}

function proceedQuestion4() {
    resetState()
    currentIndex++;
    sampleQuestions.innerText = questions[currentIndex].question 
    var question = questions[currentIndex]
    
    question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button)
    button.addEventListener("click", function(){
        if (button.innerText === questions[currentIndex].correct){
            proceedQuestionFinal()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
}

function proceedQuestionFinal() {
    endPage()
}


function endPage() {
    endingPage.classList.remove("hidePage")
    questionPage.classList.add("hidePage")
}

function resetState() {
    while(answerBtn.firstChild) {
        answerBtn.removeChild(
            answerBtn.firstChild
        )
    }
}

function setTime() {
    
    var timerInterval = setInterval(function(){
        countDown--;
        timerCount.innerText = countDown + " seconds left";

        if (countDown === 0) {
            clearInterval(timerInterval)
            endPage()
        }
        

    },1000)
}
