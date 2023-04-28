//Global var
var timeRecord = questions.length * 15;
var timerId;
var highScores = [];


// Variables set to start/finish the quiz (start/finish button) 
var startBtn = document.querySelector("#start"); 
var finishBtn = document.querySelector("#finish");
var timerStart = document.getElementById("time");
//Variable to set questions, next questions, and answers
var questionsContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('questions')
var answerElement = document.getElementById('answers')
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

//start the countdown/timer
  timerId = setInterval(countDown, 1000);
  timerStart.textContent = timeRecord;

}


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
      finishBtn.innerText = 'Finish'
      finishBtn.classList.remove('hide')
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

finishBtn.addEventListener("click", finishQuiz)

 function finishQuiz(event) {
   var finishBtn = event.target;
   console.log('finish button clicked')
   // to stop the timer
   clearInterval(timerId);
 
   saveScore();
   window.location.href = 'highscore.html';

       // show end screen
   var finishPage = document.getElementById('end-page');
    finishPage.removeAttribute('class');
    finishBtn.innerText = ('Finish');
    finishBtn.classList.add('hide');
 
   // show final score
   var showScore = document.getElementById('show-score');
   showScore.textContent = timeRecord;
 
   // hide questions section
   questionElement.setAttribute('class', 'hide');
 }

 

 function countDown() {
   // time set
   timeRecord--;
   timerStart.textContent = timeRecord;
 }

 

 answerElement.addEventListener("click", incorrectAnswer)





 function incorrectAnswer() {
   console.log("answer button clicked");

   if (!answerElement.matches('incorrect')) {
      return;
    }

   if (answerElement.value !== questions[currentQuestionIndex = correct].answers) {
      // subract the time from time remaining
      timeRecord -= 15;
  
      if (timeRecord < 0) {
        timeRecord = 0;
      }
      //show remaining time
      timerStart.textContent = timeRecord; 
}
 
   // to check if time has run out berfore or by end of quiz
   if (timeRecord <= 0) {
     finishQuiz();
   }
 }

 function checkAnswer(selectedButton) {
   const selectedAnswer = selectedButton.dataset.correct === 'true';
   if (selectedAnswer) {
     showStatus(selectedButton, true);
   } else {
     showStatus(selectedButton, false);
     timeRecord -= 15;
     if (timeRecord < 0) {
       timeRecord = 0;
     }
     timerStart.textContent = timeRecord;
   }
   if (randomQuestion.length > currentQuestionIndex + 1) {
     submitBtn.classList.remove('hide');
   } else {
     finishBtn.innerText = 'Finish';
     finishBtn.classList.remove('hide');
   }
 }

 

 function saveScore() {
   const name = prompt("Please enter your name:");
   const score = { name, score: timeRecord };
   highScores.push(score);
   localStorage.setItem('highscores', JSON.stringify(highScores));
 
   var highScoresList = document.getElementById('highScoresList');
   if (highScoresList) {
     highScoresList.innerHTML = ''; // clear the list before re-populating
     highScores.forEach(score => {
       var li = document.createElement('li');
       li.innerText = score.name + ' - ' + score.score;
       highScoresList.appendChild(li);
     });
   }
 
   finishBtn.addEventListener('click', () => {
    saveScore();
    window.location.assign('highscores.html');
  });
 }
 

