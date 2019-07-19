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

var totalScore, currentScore, activePlayer, dice;

var totalScore = [0,0];    // the total score each player has, added together, after multiple rounds of rolling the dice
var currentScore = 0;       // the score each player has per round/ session, when it's they're actively rolling the dice 
var activePlayer = 0;     // the player that is currently rolling the dice 

dice = Math.floor(Math.random() * 6) + 1;  // create a dice that generates a random number from 1 to 6 (included)
