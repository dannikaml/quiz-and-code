// Variables set to start the quiz (start button) 
var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startQuiz);

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
var answerElement = document.getElementById('answer')

//setting an index for the questions and setting them to appear randomly
let randomQuestion, currentQuestionIndex


//Retrieve next question 
function submitQuestion() {
   showQuestion(randomQuestion[currentQuestionIndex])

      
}

function showQuestion(questions) {
   questionElement.innerText = questions.questions

}


//Select Answer
function selectAnswer() {

}

//Questions
var questions = [
 {
   questions: 'Which data type is NOT supported by JavaScript?',
   answers: [
      { text: 'marsh', correct: true },
      { text: 'boolean, string, array', correct: false}
   ]
 }
]
