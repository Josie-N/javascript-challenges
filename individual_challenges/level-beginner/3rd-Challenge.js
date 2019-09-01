/*

Level: Beginner

CODING CHALLENGE 3




John and his family went on a holiday and went to 3 different restaurants. 
The bills were: $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). 

He likes to tip: 
20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)



SOLUTION 👇🏼 

*/










// With comments: 


// Store the initial values that were given.

var bills = [124, 48, 268];   // in dollars $
var tips = [20, 15, 10];      // in percentage %



// Declare a function to calculate the tip.
// Pass 'billAmount' as a parameter.
// Store the final tip amount in 'finalTip'.
// Return 'finalTip'.

function tipCalculator(billAmount) {
  var finalTip = (billAmount * 20) / 100;  // (bill total amount * 20% extra tip) / 100 
  return finalTip;
}



// Add a conditional is/ else if statement to calculate 
// tips for all three scenarios (20%, 25%, 10%). 

function tipCalculator(billAmount) {
  var finalTip;

  if (billAmount < 50) {
    finalTip = (billAmount * 20) / 100;
  } else if (billAmount >= 50 && billAmount < 200) {
    finalTip = (billAmount * 15) / 100;
  } else {
    finalTip = (billAmount * 10) / 100;
  }
  return finalTip;
}



// Update the 'tips' variable by calling the 'tipCaculator' function.

// Add the 'bills' array values inside the 'tipCaculator' function
// by referring to their index number.  


var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];



// Store the final amount value inside a new variable.

// We now have the final paid amounts (bill + tip), 
// referenced by their index number, for all three scenarios (20%, 25%, 10%).


var finalAmount = [bills[0] + tips[0], 
                   bills[1] + tips[1], 
                   bills[2] + tips[2]];




/* ------------------------------------ */

// Without comments: 


function tipCalculator(billAmount) {
  var finalTip;

  if (billAmount < 50) {
    finalTip = (billAmount * 20) / 100;
  } else if (billAmount >= 50 && billAmount < 200) {
    finalTip = (billAmount * 15) / 100;
  } else {
    finalTip = (billAmount * 10) / 100;
  }
  return finalTip;
}


var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalAmount = [bills[0] + tips[0], 
                   bills[1] + tips[1], 
                   bills[2] + tips[2]];


