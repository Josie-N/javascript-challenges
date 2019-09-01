/*

Level: Beginner

CODING CHALLENGE 5




You can use the map method to transform each item in an array into something else.
map() returns a new array leaving the original array unchanged.

Challenge 1:

We have an array of numbers that are stored as strings.
// Initial: [ '1', '2', '3', '4', '5' ];

Let's transform these strings into numbers using the map method.
// Result: [ 1, 2, 3, 4, 5 ];

Then store the new array we created in a variable.

--------------------------

Challenge 2:

We have an array of words that are stored in as strings.
// Initial: [ 'apple', 'pear', 'cherry' ];

Let's capitalize all the words we have within this array.*
// Result: [ 'APPLE', 'PEAR', 'CHERRY' ];

Then store the new array we created in a variable.

* The words will still be strings, just as before.

--------------------------

Challenge 3:

Turn this list of numbers into price strings with two digits and a dollar sign at the beginning.
// Initial: [5, 4.23, 6.4, 8.09, 3.20];

Dont forget to:
- Turn the numbers into strings
- Concatenate/ add the dollar sign 
- Make the prices have decimals
- Store the new array we created in a variable
// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ];

--------------------------

Challenge 4:

Use the map method on the daysOfWeek array, creating a new array of abbreviated week days.
- Each abbreviated string should be the first three letters of the long version in daysOfWeek.
- Store the new array in the variable abbreviatedDays.

// Initial: const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

// Result: const daysOfWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];


SOLUTIONS 👇🏼 

*/










// Without comments: 

// Challenge 1
const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));


// Challenge 2
const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());


// Challenge 3 - more complex solution
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => `$${price.toFixed(2)}`;
const priceTags = prices.map(priceToDollars);

// Challenge 3 - easier solution
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceTags = prices.map(price => '$' + price.toFixed(2));


// Challenge 4

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

abbreviatedDays = daysOfWeek.map(weekDay => weekDay.slice(0,3));

