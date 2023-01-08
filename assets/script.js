// Variables set to start the quiz (start button) 
var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startQuiz);

 function startQuiz() {
  console.log("button clicked")
  startBtn.classList.add('hide')
  questionsContainerElement.classList.remove('hide')

}


//Variable to set questions, next questions, and answers
var questionsContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerElement = document.getElementById('answer')


//Retrieve next question 
function nextQuestion(question) {
      
}


//Select Answer
function selectAnswer() {

}

//Questions
var questions = [
 {
   question: 'Which data type is NOT supported by JavaScript?',
   answers: [
      { text: 'marsh', correct: true },
      { text: 'boolean, string, array'}
   ]
 }
]
