/* The Random Number Guessing Game 
Generates a number between 1 and 6
and gives a player two attempts to guess the number.*/

// Assume player didn't guess correctly
var correctGuess = false;

//Generate random number from 1 to 6
var randomNumber = Math.floor(Math.floor(Math.random() * 6)+ 1);

var guess = prompt("I am thinking of a number between 1 and 6. What is it?");

/* test to see if player is 
1. Correct
2. guessed too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber) {
   correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
   var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
   if (parseInt(guessMore) === randomNumber) {
     correctGuess = true;
   } else if (parseInt(guess) > randomNumber) { 
   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
   if (parseInt(guessMore) === randomNumber) {
     correctGuess = true;
   }
}
if (correctGuess) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry the number was ' + randomNumber + '</p>');
}
}