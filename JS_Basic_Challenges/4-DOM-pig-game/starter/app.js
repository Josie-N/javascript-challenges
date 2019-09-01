/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
- Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
- After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var totalScore, currentScore, activePlayer;

var totalScore = [0,0];     // the total score each player has, added together, after multiple rounds of rolling the dice
var currentScore = 0;       // the score each player has per round/ session, when it's they're actively rolling the dice 
var activePlayer = 0;       // the player that is currently rolling the dice (can either be 0 or 1)

// Setting a value
// Use the 'querySelector' method to select and change the value of the html element with the id starting with "current-". 
// The 'textContent' property sets the text content of the node you specify. In our case, that's the dice value of the player rolling it.
// Use concatenation (+) to create a dynamic class; the player can either be 0 (id="current-0") or 1 (id="current-1").
// document.querySelector('#current-'  + activePlayer).textContent = dice;
// Longer version: document.querySelector('#current-' + activePlayer).textContent = Math.floor(Math.random() * 6) + 1;

// Getting a value
// Read the value or the content of the element with this id (id="score-0"), and then store it into variable x.
// var x = document.querySelector('#score-0').textContent;

// Change the style of the dice using the style method and selecting the '.dice' class
// The dice is now hidden when user first loads the page and hasn't started rolling the dice yet.
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// Add the event listener to the button that rolls the dice, using the .addEventListener method
// The event listener controls (through a function) what happens when the user clicks on the 'roll dice' button.
document.querySelector('.btn-roll').addEventListener('click', function(){

  // 1. Create a random number from 1 to 6 (included) that imitates throwing a dice.

  // The .random method generates a number from 0 to 1 (ex: 0.5678)
  // The .floor method rounds a number downwards to it's nearest integer (ex: from 2.3 to 2)
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result on the page.

  // Select the .dice class from the DOM and store it in a variable.
  var diceDOM = document.querySelector('.dice');

  // Make it visible again (the dice is initially hidden).
  diceDOM.style.display = 'block';

  // Display the correct number (from 1 to 6), depending on which dice value the user gets.
  // Set a different png for every dice value from 1 to 6.
  // The src property sets the value of the src attribute of our png.
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the new value after rolling the dice, as long as the rolled number is NOT 1 (see game rules above).
  if (dice !== 1) {
    // If the dice value is NOT 1:
    // 1. Update the currentScore with the new dice value.
    currentScore = currentScore + dice;
    // 2. Display the updated currentScore in our UI.
    document.querySelector('#current-'  + activePlayer).textContent = currentScore;
  } else {
    // If the dice value is 1: 
    // 1. Switch to the opposite player. (0 or 1) 
    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    
    // 2. Reset the current score to 0, so that next player doesn't inherit the other players last dice value.
    // currentScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // 3. Change the style of the card when the player is active. The style has switch between the 2 players.
    // The 'classList' property is useful to add, remove and toggle CSS classes on an element.
    // Remove the 'active' class that is initially set by default to player 0.
    document.querySelector('.player-0-panel').classList.remove('active');
    // Remove the 'active' class that is initially set by default to player 0.
    document.querySelector('.player-1-panel').classList.add('active');
  }
});

// document.querySelector('#current-'  + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
