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
        question:"In what element to you put your css file?",
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

const questionOutput = document.querySelector('.question-output')
const answersOutput = document.querySelector('.answers-wrapper')
const timeSpan =   document.querySelector('#timer-output')
const logHs = document.querySelector('.log-hs')
const scoreSpan = document.querySelector('.score-span')
let timer = 100
let question = -1
const btnAnswer = document.querySelector('.btn-answer')
const addScore = document.querySelector('.add-score-btn')

// answersOutput.innerHTML = answerMap
btnAnswer.addEventListener('click', showQuestion)
btnAnswer.addEventListener('click', setTime)
function setTime () {
   const interval = setInterval(()=> {
        timer--
        timeSpan.textContent = timer
        if (timer === 0 ) {
        clearInterval(interval)
    }
    }, 1000)
    
}
questionOutput.textContent = "Start Quiz"
answersOutput.textContent = "Rules: Complete the quiz as quick as possible. Each incorrect answer takes 10 seconds off the timer. The time left will be your score!"
function showQuestion () {
    btnAnswer.classList.add("hidden")
    question++
    if (question < quizObject.length) {
         
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
                    showQuestion()
                } else {
                    // inject timing reduction code
                    timer = timer - 10
                    showQuestion()
                }
                })
                
            })
    } else {
        // prompts the user with a highscore screen. to add a highscore.
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
   
 const promptCard =  prompt("Enter Your Initials")
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
 location.reload()
}

 
 