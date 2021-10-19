// DOM Variables
var timerEl = document.getElementById("timer");
var startQuizContainerEl = document.getElementById("start-quiz-container");
var startButtonEl = document.getElementById("start-game");

var questionContainerEl = document.getElementById("question-container");
var questionDivEl = document.getElementById("question-div");
var questionTextEl = document.getElementById("qn-text");
var answerbuttonsEl = document.getElementById("answer-buttons");

// Global variables
var curQn = 0; // tracks the current question
var timeLeft = 120; // the time left in the quiz, starts at 120 seconds
var timerInterval = 0;
var gameOver = false;

// check that question bank is loaded from questions.js
console.log(questionBank);

// Shuffle the questionBank array and take the first 10 questions for the quiz
let quizQuestions = shuffle(questionBank).slice(0, 10);
console.log(quizQuestions);

function startQuiz() {
  // Clear the starting content, start the clock, then show the first quiz question
  toggleElementDisplay(startQuizContainerEl);
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
  toggleElementDisplay(questionContainerEl);
};

//check if answer is correct
var checkAnswer = function (event) {
  var selectedanswer = event.target;

  /*
  if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
    answerCorrect();
    score = score + 7;
  } else {
    answerWrong();
    score = score - 1;
    timeleft = timeleft - 3;
  }

  //go to next question, check if there is more questions
  QuestionIndex++;
  if (arrayShuffledQuestions.length > QuestionIndex + 1) {
    setQuestion();
  } else {
    gameover = "true";
    showScore();
  }
  */
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

// To show/hide the element
function toggleElementDisplay(elt) {
  // If the elt contains the class "show" then remove it and add the class "hide"
  if (elt.classList.contains("show")) {
    elt.classList.add("hide");
    elt.classList.remove("show");
  } else {
    elt.classList.add("show");
    elt.classList.remove("hide");
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
