// DOM Variables
var timerEl = document.getElementById("timer");
var startQuizContainerEl = document.getElementById("start-quiz-container");
var startButtonEl = document.getElementById("start-game");

var questionContainerEl = document.getElementById("question-container");
var questionDivEl = document.getElementById("question-div");
var questionTextEl = document.getElementById("qn-text");
var answerbuttonsEl = document.getElementById("answer-buttons");

var rightAnswerEl = document.getElementById("right-ans");
var wrongAnswerEl = document.getElementById("wrong-ans");

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
  questionTextEl.innerText = quizQuestions[index].qn;
  for (var i = 0; i < quizQuestions[index].choices.length; i++) {
    var answerbutton = document.createElement("button");
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

  // if the right answeer was chosen show the correct answer message on the screen, 
  // else show the wrong answer message. If the answer was wrong apply the time penalty as well.
  if (selectedAnswer === goodAnswer) {
    console.log("Correct answer chosen!!");
    showAnswerRightOrWrongMessage(true);
  } 
  else {
    console.log("Wrong answer chosen!!");
    showAnswerRightOrWrongMessage(false);
    applyPenalty();
  }

};

// Displays the question and answer choices from the quizQuestions array at the given index
function showQuestion(index) {
  // Clear the box
  quizContentEl.innerHTML = "";

  //Create h1 for the question
  var h1El = document.createElement("h1");
  h1El.innerHTML = questionsArray[index].question;
  quizContentEl.append(h1El);

  //Create ul
  var ulEl = document.createElement("ul");
  ulEl.style = "list-style-type:none";
  quizContentEl.append(ulEl);

  //Create li for each question answer
  for (var i = 0; i < questionsArray[index].answers.length; i++) {
    //create li
    var liEl = document.createElement("li");
    liEl.classList.add("p-1");
    ulEl.append(liEl);

    //Create button for each li
    var buttonEl = document.createElement("button");
    var questionNumber = i + 1;
    buttonEl.classList.add("btn");
    buttonEl.classList.add("btn-info");
    buttonEl.textContent =
      questionNumber + ". " + questionsArray[index].answers[i];
    liEl.append(buttonEl);
  }
}

function showAnswerRightOrWrongMessage(booleanRight) {
  if (booleanRight) {
    showElement(rightAnswerEl, true);
    showElement(wrongAnswerEl, false);
  } else {
    showElement(rightAnswerEl, false);
    showElement(wrongAnswerEl, true);
  }
}

function applyPenalty() {
    timeLeft = timeLeft - penalty;
    if (timeLeft <= 0) {
        timeLeft = 0;
    }
}

// To show/hide the element - call showElement(el, true) - to show.
// Add the class "show" or "hide" to the element as specified by booleanShow
function showElement(elt, booleanShow) {
  // remove both classes if present, this ensures that only one of "show" or "hide" gets added to teh classList.
  if (elt.classList.contains("show")) {
    elt.classList.remove("show");
  }
  if (elt.classList.contains("hide")) {
    elt.classList.remove("hide");
  }

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
