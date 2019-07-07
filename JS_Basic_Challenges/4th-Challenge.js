/*

Level: Beginner

CODING CHALLENGE 4




Implement a function that can detect whether an image is landscape.
The function should take two parameters: the width and height of an image. 

If it the width parameter returns true, then the image is landscape
(which means width is greater than height). 
Otherwise - if the height is greater than the width - it returns false.


SOLUTION 👇🏼 

*/







// With comments: 


function isLandscape(width, height) {
  // 1. Create a conditional ternary operator
  //    explicit: (width > height) ? true : false 
  //    implicit: (width > height)

  // 2. Store the value of the expression in a variable
  const calculateRatio = (width > height);

  // 3. Use an 'if...else' conditional statement to display different messages.  
  if(calculateRatio) {
    return 'Your image is portrait.';
  } else {
    return 'Your image is landscape.';
  }
}

console.log(isLandscape(10,40));




/* ------------------------------------ */

// Without comments: 


function isLandscape(width, height) {
  const calculateRatio = (width > height);

  if(calculateRatio) {
    return 'Your image is portrait.';
  } else {
    return 'Your image is landscape.';
  }
}

console.log(isLandscape(10,40));
