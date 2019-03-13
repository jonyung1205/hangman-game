// Linkin Park Hangman Game 
window.onload = function () {
  setUpTimer();
}

// Setting up an array named songs
var songs = ["Numb", "In the End", "Crawling", "Castle of Glass", "Papercut", "Breaking the Habit", "New Divide", "One Step Closer", "Heavy", "Faint", "Burn it Down", "One More Night", "Leave Out All the Rest", "Somewhere I Belong", "Waiting for the End", "Lost in the Echo", "Battle Symphony", "Given Up", "The Catalyst", "Final Masquerade", "Good Goodbye", "Pushing Me Away", "Runaway", "A Place for My Head", ]

// Setting up an array of letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting each variable that hold references to the places in the html
var userChoice;
var incorrect;

// Creating arrays to store guessed letters and letters already guessed
var guessedLetters;
var AlreadyGuessed;

// Calculating the number of wins, losses and guessed letters
var wins = 0;
var losses = 0;
var userGuessesRemaining = 10;

// Timer 
function setUpTimer() {
  var wordContainer = document.getElementById("word");
  wordContainer.innerHTML = "";

  // Elements
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = userGuessesRemaining;

  // Reset the won / lost message / play again
  document.getElementById("won").style.display = "none";
  document.getElementById("lost").style.display = "none";

  // Captures keyboard input depending on the letter pressed.
  document.onkeyup = function (event) {
    var letters = event.key;
    console.log(letters);
  }

  // Captures the key press and convers the user's answer to lowercase.
  var userChoice = songs[Math.floor(Math.random() * songs.length)].toLowerCase();
  console.log(userChoice)

  // Numbers of Guesses Left
  guessedLetters = [];
  incorrect = 10;

  // Displaying underscores
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] == "letters") {}
  }

  // Displaying numbers
  if (incorrect > 0) {

    // Letters Already Guessed
    var AlreadyGuessed = guessedLetters.join("");
    document.getElementById("AlreadyGuessed").innerHTML = AlreadyGuessed;

    // Receiving 1 point
    document.getElementById("wins").innerHTML = wins;

    // Alert the winning message
    ('You won! Play again?');
    wins++
    underscore = "_ _ _ _ _";

    // If it is in the array

  } else {

    // Deducting 1 point
    document.getElementById("incorrect").innerHTML = incorrect;
    if (incorrect == 0)

      // Alert the losing message
      ('You lost! Play again?');
    losses++
    underscore = "_ _ _ _ _";

  }
}