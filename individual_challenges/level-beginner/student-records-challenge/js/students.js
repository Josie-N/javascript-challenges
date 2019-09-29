// Access each student's record in the array, and print out the students name, 
// track, points, and achievements.

// The finished project should display a report containing a section with each 
// student's info: name at the top, and their track, points, and achievements.

// To do this, you'll need to use a loop.

// 1. Loop through each element of the array
// 2. Build up a message that contains all of the student records
// 3. Print that message to the page

// Some hints:
// The tricky part, is getting to the actual property value of each object.
// Remember, we can use dot notation to access a property of an object.
// For example, student.name, accesses the name property of an object name 
// student.

// But in this case, you'll be accessing array elements.

var message = '';

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// 1. Loop through each element of the array
// Our array: var students = [{},{},{},{},{}];

// access each student object using a 'for' loop
for(var i = 0; i < students.length; i++) {  // result: 0, 1, 2, 3, 4  (students.length = 5)
  // store each student object in a variable
  var student = students[i];  // result: students[0], students[1], students[2], students[3], students[4]
}

print();