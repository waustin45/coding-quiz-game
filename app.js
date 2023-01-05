const quizObject = [
    {
        question:"What is used to display data in the console?",
        answers: ["console.log","window.display","face.palm","console.map"],
        correct: "console.log",
    },
    {
        question:"What is used to make items line up as a column or row in flex-box?",
        answers: ["justify-direction","flex-direction", "align-items","grid"],
        correct: "flex-direction",
    },
    {
        question:"What does NaN stand for?",
        answers: ["never a number", "not a nut", "neglected a number", "not a number"],
        correct: "not a number",
    },
    {
        question:"In what element do you put your css file?",
        answers: ["link", "script", "head", "style"],
        correct: "link",
    },
    {
        question:"What do you surround an array with?",
        answers: ["<>", "{}", "[]", "||"],
        correct: "[]",
    },
    {
        question:"what is the last step in setting up a for loop?",
        answers: ["let i = 0", "i++", "i > 0", "i + 2"],
        correct: "i++",
    },
    {
        question:"How many children elements can you have within a parent?",
        answers: ["no limit", "twenty", "three", "sixteen"],
        correct: "no limit",
    },

]
//main HTML outputs
const questionOutput = document.querySelector('.question-output')
const answersOutput = document.querySelector('.answers-wrapper')
//timer output and score variable
const timeSpan =   document.querySelector('#timer-output')
let timer = 100
//highscore page log
const logHs = document.querySelector('.log-hs')
const scoreSpan = document.querySelector('.score-span')
const addScore = document.querySelector('.add-score-btn')
// set to -1 so the if statement will fire when array is at index 0.
let question = -1
//start button at load
const btnAnswer = document.querySelector('.btn-answer')
// displays an element informing user if they are right or wrong
const rightWrongDiv = document.querySelector('.wrong-right')
const rightWrong = document.querySelector('#right-wrong-span')
//input for typing in initials
const inputField = document.querySelector('#score-input')
//event listeners for starting the game.
btnAnswer.addEventListener('click', showQuestion)
btnAnswer.addEventListener('click', setTime)
function setTime () {
    //timer for game.
   const interval = setInterval(()=> {
        timer--
        timeSpan.textContent = timer
        if (timer === 0 || question === quizObject.length ) {
        clearInterval(interval)
    }
    }, 1000)
    
}
questionOutput.textContent = "Start Quiz"
answersOutput.textContent = "Rules: Complete the quiz as quick as possible. Each incorrect answer takes 10 seconds off the timer. The time left will be your score!"
function showQuestion () {
    btnAnswer.classList.add("hidden")
    //timer for the correct or wrong pop up when question is answered.
    const newTimer = setInterval(() => {
        let wrongTimer = 1
        wrongTimer--
        if (wrongTimer === 0 ) {
            rightWrongDiv.classList.remove('active') 
            clearInterval(newTimer)
        }
    }, 1000);
    question++
    if (question < quizObject.length) {
         //question variable increments each time button is clicked. question is used as index.
         questionOutput.innerHTML = quizObject[question].question
         const answerMap = quizObject[question].answers.map((info) => {
       return `<button id="quiz-btn" class="btn-answer" value="${info}" >${info}</button>`
    }).join('')

        answersOutput.innerHTML = answerMap
         console.log(question)
        const quizBtn = document.querySelectorAll('#quiz-btn')
            console.log(quizBtn)
            // runs a function for each button.
            quizBtn.forEach(each => {
                each.addEventListener("click", () => {
                    console.log(each.value)
                    if (each.value === quizObject[question].correct) {
                        rightWrongDiv.classList.add('active')
                        rightWrong.innerHTML = "Correct!"
                    showQuestion()
                   
                } else {
                    //incorrect answers subtract 10 seconds from timer. 
                    timer = timer - 10
                    rightWrongDiv.classList.add('active')
                    rightWrong.innerHTML = "Wrong!"
                    showQuestion()
                }
                })
                
            })
    } else {
        // prompts the user with a highscore screen to add a highscore.
        logHs.classList.add('active')
        questionOutput.innerHTML = ""
        answersOutput.innerHTML = ""
        answersOutput.style.margin = "0"
        questionOutput.style.margin = "0"
        scoreSpan.textContent = timer
        
    } 
    
    
}
// setting up local storage 
let scoreArray = [];
let scores;
addScore.addEventListener("click", addScoreCard)
function addScoreCard () {
   
 const promptCard =  inputField.value
    console.log(promptCard)

    
    if(localStorage.getItem('scores')) {
         scoreArray = JSON.parse(localStorage.getItem('scores'))
        
        console.log("scores")
        console.log(scoreArray + "in if statement")

    } else {
        scoreArray = []
    }
 scoreArray.push(`${promptCard} scored ${timer}`)
 localStorage.setItem('scores', JSON.stringify(scoreArray))
 console.log(scoreArray)
 location.href = "./highscore.html"
}

 
 