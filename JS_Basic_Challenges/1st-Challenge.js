/*

Level: Beginner

CODING CHALLENGE 1


/*

Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 


SOLUTION 👇🏼 

*/










// With comments: 

// Store variables for Mark

var markMass = 68;   // kg
var markHeight = 1.78;   // cm

// Calculate the BMI
var markBMI = markMass / (markHeight * markHeight);

// Show Marks final BMI in console
console.log(Math.round(markBMI));

// Store variables for John

var johnMass = 102;  // kg
var johnHeight = 1.88;  // cm

var johnBMI = johnMass / (johnHeight * johnHeight);

// Show John's final BMI in console
console.log(Math.round(johnBMI));

// Who's BMI is higher?
var higherBMI = markMass > johnMass;

// Print final result (higher BMI)
var resultMessage = 'Is Mark\'s BMI higher than John\'s?' + ' ' + higherBMI;
console.log(resultMessage);




/* ------------------------------------ */

// Without comments: 


var markMass = 68;  // kg's
var markHeight = 1.78;  // cm's

var markBMI = markMass / (markHeight * markHeight);

console.log(Math.round(markBMI));


var johnMass = 102; 
var johnHeight = 1.88;  

var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(Math.round(johnBMI));


var higherBMI = markMass > johnMass;

var resultMessage = 'Is Mark\'s BMI higher than John\'s?' + ' ' + higherBMI;

console.log(resultMessage);




