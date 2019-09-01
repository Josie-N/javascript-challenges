/*

Level: Beginner

CODING CHALLENGE 2




John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which team wins in average (highest average score), 
and print the winner to the console. 
Also include the average score in the output.

3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw 
(the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. 

5. Like before, change the scores to generate different winners, keeping 
in mind there 
might be draws.



SOLUTION 👇🏼 

*/










// With comments: 


//  1. Calculate the average score for each team

var johnAverageScore = (89 + 120 + 103) / 3;  // 104
var mikeAverageScore = (116 + 94 + 123) / 3;  // 111
var marryAverageScore = (97 + 134 + 105) / 3;  // 112

//  2. Decide which team wins in average (highest average score), 
//  and print the winner to the console. 

//  3. Then change the scores to show different winners. Don't forget to take into 
//  account there might be a draw (the same average score)


//  4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
//  Like before, log the average winner to the console. 
//  HINT: you will need the && operator to take the decision. 


//  5. Like before, change the scores to generate different winners, keeping in mind there 
//  might be draws.


if (johnAverageScore > mikeAverageScore && johnAverageScore > marryAverageScore) {
  console.log('John\'s team is winning with ' + johnAverageScore + ' points');
} else if (mikeAverageScore > johnAverageScore && mikeAverageScore > marryAverageScore) {
  console.log('Mike\'s team is winning with ' + mikeAverageScore + ' points!');
} else if (maryyAverageScore > johnAverageScore && marryAverageScore > mikeAverageScore) {
  console.log('Marry\'s team is winning with ' + marryAverageScore + ' points!');
} else {
  console.log('It\'s a draw!');
}




