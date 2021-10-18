// DOM Variables
var startButtonEl = document.getElementById("start-game");
var timerEl = document.getElementById("timer");

var curQn = 0; // tracks the current question
var timeLeft = 120; //the time left in the quiz, starts at 120
var timerInterval = 0;

function updateTimer() {
  // Set the time
  timerEl.textContent = timeLeft;
  timeLeft--;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function startCountdownTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}





// Function to shuffle the random questions array using the Knuth Shuffle method.
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
