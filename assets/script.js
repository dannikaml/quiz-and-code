// Variables set to start the quiz (start button) 
var startBtn = document.querySelector("#start"); 

//setting an index for the questions and setting them to appear randomly
let randomQuestion, currentQuestionIndex

//(submitBtn .addEventListener / ++ to add one to index)
startBtn.addEventListener("click", startQuiz)


 function startQuiz() {
  console.log("button clicked")
  startBtn.classList.add('hide')
  randomQuestion = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionsContainerElement.classList.remove('hide')
  submitQuestion()

}

//Variable to set questions, next questions, and answers
var questionsContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('questions')
var answerElement = document.getElementById('answers')

//to set the answers and submit 
var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', resetAnswers);
submitBtn.addEventListener('click', () => {
   currentQuestionIndex++
   submitQuestion()
})

//Retrieve next question 
function submitQuestion() {
   resetAnswers()
   showQuestion(randomQuestion[currentQuestionIndex])

      
}

function showQuestion(questions) {
   questionElement.innerText = questions.questions
   questions.answers.forEach(answers => {
      var button = document.createElement('button')
      button.innerText = answers.text
      button.classList.add('btn')
      if (answers.correct) {
         button.dataset.correct = answers.correct
      }
      button.addEventListener('click', selectAnswer)
      answerElement.appendChild(button)
   });

}

//function to reset the questions and answers
function resetAnswers() {
   submitBtn.classList.add('hide')
   while (answerElement.firstChild) {
      answerElement.removeChild
      (answerElement.firstChild)
      
   }
}


//Select Answer function / submit button to move on to next question
function selectAnswer(e) {
   var answerBtn = e.target
   var correct = answerBtn.dataset.correct
   showStatus(document.body, correct)
   Array.from(answerElement.children).forEach(button => {
      showStatus(button, button.dataset.correct)
   })
   if (randomQuestion.length > currentQuestionIndex + 1) {
      submitBtn.classList.remove('hide')
   }  else {
      startBtn.innerText = 'Finish'
      startBtn.classList.remove('hide')
   }
   

}

//show whether answer selected is correct or incorrect
function showStatus(element, correct) {
   clearStatus(element)
   if (correct) {
      element.classList.add('correct')
   } else {
      element.classList.add('incorrect')
   }
}

//set remove correct or incorrect
function clearStatus(element) {
   element.classList.remove('correct')
   element.classList.remove('incorrect')

}

//Questions
var questions = [
 {
   questions: 'Which data type is NOT supported by JavaScript?',
   answers: [
      { text: 'marsh', correct: true },
      { text: 'boolean', correct: false},
      { text: 'array', correct: false},
      { text: 'string', correct: false},
   ]
 },
 {
   questions: 'To indicate a String in JavaScript, which symbols would be used?',
   answers: [
      { text: 'hashtags', correct: false },
      { text: 'quotations', correct: true},
      { text: 'question mark', correct: false},
      { text: 'amperstand', correct: false},
   ]
},
{
   questions: 'What is the function of isNan?',
   answers: [
      { text: 'To check whether a given value is an illegal number or not', correct: true },
      { text: 'To set a program and function', correct: false},
      { text: 'To file away information into a database of stored information', correct: false},
      { text: 'To move information from one file to another', correct: false},
   ]
},
{
   questions: 'What is a prompt box?',
   answers: [
      { text: 'A box that allows the user to type stored notes', correct: false },
      { text: 'A box for collecting symbols', correct: false},
      { text: 'A box that allows the user to enter input by providing a text box', correct: true},
      { text: 'A box for prompts', correct: false},
   ]
},
]

