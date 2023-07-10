var starterBtn = document.querySelector("#startBtn");
var starterPage = document.querySelector("#starter-page");
var questionPage = document.querySelector("#question-page")

var questions = [
    {
        title: "Javascript is an _______ language?",
        choices: ["Object-Orientated", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Orientated"
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "A and B", "None of the above"],
        answer: "A and B"
    },
    {
        title: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementbyid()", "getElementsByClassName()", "A and B", "None of the above"],
        answer: "A and B"
    },
    {
        title: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the above"],
        answer: "Ignores the statement"
    },
    {
        title: "Arrays in JavaScript are defined by which of the following statements?",
        choices: ["Values", "Objects", "String", "Functions"],
        answer: "Values"
    },
]


starterBtn.addEventListener("click", startGame)

function startGame() {
    starterPage.classList.add("hidePage")
    questionPage.classList.remove("hidePage")
    console.log('Start')

}

  

