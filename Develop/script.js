// use jQuery to get currentDay 
const currentDateArea = $("#currentDay");
const timeBlocks = $("#timeBlocks");
const saveButton = $(".saveBtn");
//use dayjs to display current date
currentDateArea.text(dayjs().format('dddd, MMMM D, YYYY'));


// set the number of hours in the work day
var workingHours = 8;
// set the hour the work day begins (in 24-hour format)
var startingHour = 9;
for (i = 0; i < workingHours; i++) {
  // create the div element variables that we will insert later
  var newDiv = $("<div>");
  var newTimeBlockRow = $("<div>");
  var hourDisplayBlock = $("<div class='col-2 col-md-1 hour text-center py-3'></div>");
  newDiv.addClass(function () { return "hour_" + (startingHour + i); });
  // add a class to the new row based on current time
  if ((startingHour + i) < dayjs().hour()) { newTimeBlockRow.addClass("row time-block past") }
  else if ((startingHour + i) == dayjs().hour()) { newTimeBlockRow.addClass("row time-block present") }
  else { newTimeBlockRow.addClass("row time-block future") }
  // append the newTimeBlockRow to the container
  newDiv.append(newTimeBlockRow);
  // create the time display area
  newTimeBlockRow.append(hourDisplayBlock);
  // add the current hour
  // display 12-hour format: if the startingHour+i > 12, subtract 12 and add "PM"
  hourDisplayBlock.prepend(function () {
    if ((i + startingHour) > 12) { return (startingHour + i) - 12 } else { return (startingHour + i) }
  });
  hourDisplayBlock.prepend(function () {
    if (startingHour + i < 12) { hourDisplayBlock.append("AM") }
    else { hourDisplayBlock.append("PM") }
  });
  // Create the input area and save button for the time block
  newTimeBlockRow.append("<textarea class='col-8 col-md-10 description' rows='3'> </textarea><button class='btn saveBtn col-2 col-md-1' aria-label='save'><i class='fas fa-save' aria-hidden='true'></i></button></div>");
  // add the time block to the parent container
  timeBlocks.append(newDiv);
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
