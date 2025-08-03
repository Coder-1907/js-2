
var studentNamesLiteral = [];


var studentNamesObject = new Array();


var stringsArray = ["Ali", "Ahmed", "Sara"];


var numbersArray = [10, 20, 30, 40];


var booleanArray = [true, false, true];


var mixedArray = ["John", 25, true, null];


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


document.write("<h2>Qualifications in Pakistan:</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");

var studentNames = ["Ali", "Sara", "Ahmed"];

// Store their scores
var studentScores = [400, 350, 450];

// Total marks for each student
var totalMarks = 500;

// Loop through each student and display score and percentage
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;

  document.write(
    "Score of " + studentNames[i] + " is " + studentScores[i] +
    ". Percentage: " + percentage.toFixed(2) + "%<br>"
  );
}

var colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<b>Initial Colors:</b> " + colors.join(", ") + "<br><br>");

// (a) Add color to the beginning
var colorStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorStart);
document.write("<b>After adding to beginning:</b> " + colors.join(", ") + "<br><br>");

// (b) Add color to the end
var colorEnd = prompt("Enter a color to add to the end:");
colors.push(colorEnd);
document.write("<b>After adding to end:</b> " + colors.join(", ") + "<br><br>");

// (c) Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors to beginning:</b> " + colors.join(", ") + "<br><br>");

// (d) Delete the first color
colors.shift();
document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br><br>");

// (e) Delete the last color
colors.pop();
document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br><br>");

// (f) Add color at a user-defined index
var indexAdd = prompt("Enter the index where you want to add a color:");
var colorAtIndex = prompt("Enter the color name to add:");
colors.splice(indexAdd, 0, colorAtIndex);
document.write("<b>After adding color at index " + indexAdd + ":</b> " + colors.join(", ") + "<br><br>");

// (g) Delete color(s) at a user-defined index and count
var indexDelete = prompt("Enter the index where you want to delete color(s):");
var deleteCount = prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexDelete + ":</b> " + colors.join(", ") + "<br><br>");

var scores = [320, 230, 480, 120];

document.write("<b>Scores of Students:</b> " + scores.join(", ") + "<br><br>");

// Sort the array in ascending order
scores.sort(function (a, b) {
  return a - b; // Ascending numeric sort
});

document.write("<b>Ordered Scores:</b> " + scores.join(", "));

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 cities into selectedCities array
// For example, copy elements from index 1 to index 3 (Lahore, Islamabad, Quetta)
var selectedCities = cities.slice(1, 4);

// Display original cities
document.write("<b>All Cities:</b> " + cities.join(", ") + "<br><br>");

// Display selected cities
document.write("<b>Selected Cities:</b> " + selectedCities.join(", "));


var arr = ["This ", " is ", " my ", " cat"];

// Join the array into a single string
var joinedString = arr.join("");

// Display the result
document.write("<b>Array:</b> " + arr + "<br><br>");
document.write("<b>String:</b> " + joinedString);


var fifoQueue = [];

// Store values one by one
fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");
fifoQueue.push("Value 4");

document.write("<b>Initial Queue:</b> " + fifoQueue.join(", ") + "<br><br>");

// Accessing values in FIFO order
document.write("<b>Accessing values in FIFO order:</b><br>");
while (fifoQueue.length > 0) {
  var item = fifoQueue.shift(); // removes from front
  document.write(item + "<br>");
}


var lifoStack = [];

// Store values one by one
lifoStack.push("Item 1");
lifoStack.push("Item 2");
lifoStack.push("Item 3");
lifoStack.push("Item 4");

document.write("<b>Initial Stack:</b> " + lifoStack.join(", ") + "<br><br>");

// Accessing values in LIFO order
document.write("<b>Accessing values in LIFO order:</b><br>");
while (lifoStack.length > 0) {
  var item = lifoStack.pop(); // removes from end
  document.write(item + "<br>");
}

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    // Start the <select> dropdown
    document.write("<select>");

    // Loop through the array and add <option> for each manufacturer
    for (var i = 0; i < manufacturers.length; i++) {
      document.write("<option>" + manufacturers[i] + "</option>");
    }

    // Close the <select> dropdown
    document.write("</select>");