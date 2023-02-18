// use jQuery to get currentDay 
const currentDateArea = $("#currentDay");
const timeBlocks = $("#timeBlocks");
const saveButton = $(".saveBtn");
//use dayjs to display current date
currentDateArea.text(dayjs().format('dddd, MMMM D, YYYY'));

//pseudocode
// store the number of working hours in a variable
// create a number of time block sections equal to number of working hours
// ex: 9am-5pm is 8 hour-long time blocks
// var workingHours = 8
// for (i = 0; i < workingHours; i++){
//   document.createElement("div")
// };
// using a for loop, assign an ID to each block, equal to the time it will represent
// block 1 = 9am
//for (i=0; i< workingHours; i++) {
//   hourBlock.setAttribute("id", [i]);
// }
// Set color of each block according to its relevance to the current hour
// if (hourBlock.id < currentHour) { hourBlock.style.backgroundColor = "grey"}
// else if (hourBlock.id = currentHour) { hourBlock.style.backgroundColor = "red"}
// else if { hourBlock.style.backgroundColor = "green"}

var workingHours = 8;
var startingHour = 9;
for (i = 0; i < workingHours; i++) {
  var newDiv = $("<div>");
  var newTimeBlockRow = $("<div>");
  var hourDisplayBlock = $("div");
  newDiv.addClass(function () { return "hour_" + (startingHour + i); });
  // need to clean this up by adding individual elements
  // then append the time and class to them
  // add a class to the new row based on current time
  if ((startingHour + i) < dayjs().hour()) { newTimeBlockRow.addClass("row time-block past") }
  else if ((startingHour + i) == dayjs().hour()) { newTimeBlockRow.addClass("row time-block present") }
  else { newTimeBlockRow.addClass("row time-block future") }
  // append the newTimeBlockRow to the container
  newDiv.append(newTimeBlockRow);
  newTimeBlockRow.append("<div class='col-2 col-md-1 hour text-center py-3'>9AM</div><textarea class='col-8 col-md-10 description' rows='3'> </textarea><button class='btn saveBtn col-2 col-md-1' aria-label='save'><i class='fas fa-save' aria-hidden='true'></i></button></div>");
  timeBlocks.append(newDiv);
  console.log(i);
}

$(function () {
  saveButton.on("click", function () { console.log("click") });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
