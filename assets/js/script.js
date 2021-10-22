// DOM Variables
var timerEl = document.getElementById("timer");
var startQuizContainerEl = document.getElementById("start-quiz-container");
var startButtonEl = document.getElementById("start-game");

var questionContainerEl = document.getElementById("question-container");
var questionDivEl = document.getElementById("question-div");
var questionTextEl = document.getElementById("qn-text");
var answerbuttonsEl = document.getElementById("answer-buttons");

var ansKeyContainerEl = document.getElementById("answer-key-container");
var rightAnswerEl = document.getElementById("right-ans");
var wrongAnswerEl = document.getElementById("wrong-ans");
var ansGoodEl = document.getElementById("ans-good");

// Global variables
var curQn = 0; // tracks the current question
var timeLeft = 120; // the time left in the quiz, starts at 120 seconds
const penalty = 10; // seconds penalized for wrong answers
var timerInterval = 0;
var gameOver = false;

// check that question bank is loaded from questions.js
console.log(questionBank);

// Shuffle the questionBank array and take the first 10 questions for the quiz
let quizQuestions = shuffle(questionBank).slice(0, 10);
console.log(quizQuestions);

function startQuiz() {
  // Clear the starting content, start the clock, then show the first quiz question
  showElement(startQuizContainerEl, false);
  startTimer();
  displayQuestion(curQn);
}

// Displays the question and answer choices from the quizQuestions array at the given index
var displayQuestion = function (index) {
  questionTextEl.innerText = "" + (index+1) + ". " + quizQuestions[index].qn;
  var answerbutton;
  for (var i = 0; i < quizQuestions[index].choices.length; i++) {
    answerbutton = document.createElement("button");
    answerbutton.innerText = quizQuestions[index].choices[i];
    answerbutton.classList.add("btn");
    answerbutton.classList.add("answerbtn");
    answerbutton.addEventListener("click", checkAnswer);
    answerbuttonsEl.appendChild(answerbutton);
  }
  showElement(questionContainerEl, true);
};

//check if answer is correct
var checkAnswer = function (event) {
  var selectedAnswer = event.target.innerText;
  var goodAnswer = quizQuestions[curQn].choices[quizQuestions[curQn].ans];
  console.log("selected answer = " + selectedAnswer);
  console.log("correct answer = " + goodAnswer );

  // if the right answer was chosen show the correct answer message on the screen, 
  // else show the wrong answer message. If the answer was wrong apply the time penalty as well.
  if (selectedAnswer === goodAnswer) {
    console.log("Correct answer chosen!!");
    showAnswerRightOrWrongMessage(curQn, true);
  } 
  else {
    console.log("Wrong answer chosen!!");
    showAnswerRightOrWrongMessage(curQn, false);
    applyPenalty();
  }

  // If we are more questions left, show the next question, else show the final score.
  curQn++;
  if (curQn < quizQuestions.length) {
    resetQuestionContainer();
    displayQuestion(curQn);
  }
  else {
    gameOver = true;
    // show the scores container
    // showScore();
  }
};

// before showing the next question, ensure that the buttons for the previous questions are removed.
function resetQuestionContainer() {
  questionTextEl.innerText = "";
  while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild);
  }
}

// to show if the previous question's answer was "Correct" or "Wrong"
function showAnswerRightOrWrongMessage(qnIdx, booleanRight) {
  if (booleanRight) {
    ansGoodEl.innerHTML = "" + (qnIdx+1) + ". " + "Correct &#9989";
    showElement(ansKeyContainerEl, true);
  } else {
    ansGoodEl.innerHTML = "" + (qnIdx+1) + ". " + "Wrong &#10060";
    showElement(ansKeyContainerEl, true);
  }
}

// penalty for a wrong answer is to reduce 10 seconds from the clock.
function applyPenalty() {
    timeLeft = timeLeft - penalty;
    if (timeLeft <= 0) {
        timeLeft = 0;
    }
}

// To show/hide the element - call showElement(el, true) - to show.
// Add the class "show" or "hide" to the element as specified by booleanShow
function showElement(elt, booleanShow) {
  // remove both classes if present, this ensures that only one of "show" or "hide" gets added to the classList.
  if (elt.classList.contains("show")) {
    elt.classList.remove("show");
  }
  if (elt.classList.contains("hide")) {
    elt.classList.remove("hide");
  }

  // if booleanShow = true, add the class 'show' else add the class 'hide'
  if (booleanShow) {
    elt.classList.add("show");
  } else {
    elt.classList.add("hide");
  }
}

// displays the time left in the timer element
function showTimeLeft() {
  if (gameOver || timeLeft <= 0) {
    stopTimer();
  }
  timerEl.textContent = timeLeft;
  timeLeft--;
}

// to stop the timer at the end of the quiz
function stopTimer() {
  clearInterval(timerInterval);
}

// Updates the countdown timer on the screen.
function startTimer() {
  timerInterval = setInterval(showTimeLeft, 1000);
}

// Event Listeners
startButtonEl.addEventListener("click", startQuiz);



/* ------------ Utility Functions  ------------- */

// Function to shuffle an array using the Knuth Shuffle method.
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
