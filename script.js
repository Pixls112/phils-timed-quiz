//These are my global defined var
var starterBtn = document.querySelector("#startBtn");
var starterPage = document.querySelector("#starter-page");
var questionPage = document.querySelector("#question-page");
var sampleQuestions = document.querySelector(".question");
var answerBtn = document.querySelector("#answerButtons");
var currentIndex = 0;
var timerCount = document.querySelector("#timer-gauge");
var countDown = 60;
var endingPage = document.querySelector("#end-page");
var userScore = document.querySelector("#score");
var score = 0;
var scoreBtn = document.querySelector("#highscoreBtn");
var scorePage = document.querySelector(".highscore");
var initialS = [];
var finalScore = [];
var recentScore = document.querySelector(".recentScores");
var refreshBtn = document.querySelector("#refresh-button");
var recentScore2 = document.querySelector(".recentScores2");
//This variable is where all the questions are stored and can be accessed as an array when called upon through other functions
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
];

//Makes it so that when the button is clicked on the page it loads the function set
refreshBtn.addEventListener("click", refreshPage);

scoreBtn.addEventListener("click", scorepage);

starterBtn.addEventListener("click", startGame);

//This function is used to start the game. When the startGame function is called it hides the other html elements around the page and shows the correct one to display for the user
//This will also ask for the players initials at the beginning of the quiz to record there score
function startGame() {
    starterPage.classList.add("hidePage")
    questionPage.classList.remove("hidePage")
    initialS = prompt("Enter your initials")
    console.log(initialS)
    nextQuestions()
    setTime()
    userScore.innerText = "Score: " + score;
};
//Similar to the startGame function this one simply hides the other html elements and reveals the score section in the html
function scorepage() {
    starterPage.classList.add("hidePage")
    scorePage.classList.remove("hidePage")
    endingPage.classList.add("hidePage")
    recentScore.innerText = localStorage.getItem("final-score")

};

//This function is used to populate the html page with new buttons with the answers given in a variable onto them
//When the correct answer is clicked the function will take us to the next question where the process repeats itself until we run out of questions to call on
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
                score++;
                userScore.innerText = "Score: " + score;
            } else {
                countDown=countDown-5
                alert("Wrong\nTime deducted")
            }
            
        })
    })
 
};

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
            score++;
            userScore.innerText = "Score: " + score;
            proceedQuestion2()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
};

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
            score++;
            userScore.innerText = "Score: " + score;
            proceedQuestion3()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
};

function proceedQuestion3() {
    resetState();
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
            score++;
            userScore.innerText = "Score: " + score;
            proceedQuestion4()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
};

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
            score++;
            userScore.innerText = "Score: " + score;
            proceedQuestionFinal()
        } else {
            countDown=countDown-5
            alert("Wrong\nTime deducted")
        }
    })
})
};

//This function is called on after the final correct answer is clicked. It loads  up the endPage function while showing the player there initials and score for the quiz
function proceedQuestionFinal() {
    finalScore = initialS + " : " + score
    console.log(finalScore)
    localStorage.setItem("final-score", finalScore)
    endPage()
};

//This function is similar to that of startGame where it hides other elements and shows the player the hidden html section appropriate for the situation
function endPage() {
    endingPage.classList.remove("hidePage")
    questionPage.classList.add("hidePage")
    recentScore2.innerText = localStorage.getItem("final-score")
    timeReset()
};

//This function resets the html to its original point so that each time a question is answered the old questions are removed and are able to be repopulared with the new answers.
function resetState() {
    while(answerBtn.firstChild) {
        answerBtn.removeChild(
            answerBtn.firstChild
        )
    }
};

//This function simply refreshes the page
function refreshPage() {
    window.location.reload()
};

// This function adds a countdown timer for the player which when the timer hits 0 the endPage function from earlier is called upon
function setTime() {
    
    var timerInterval = setInterval(function(){
        countDown--;
        timerCount.innerText = countDown + " seconds left";

        if (countDown === 0) {
            clearInterval(timerInterval)
            endPage()
        }
    },1000)
};

//This simply sets the countdown timer to 0 when the player finishes the quiz
function timeReset(){
    countDown=1
};
