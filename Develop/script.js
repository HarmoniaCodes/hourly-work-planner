// use jQuery to get currentDay 
const currentDateArea = $("#currentDay");
const timeBlocks = $("#timeBlocks");
const saveButton = $(".saveBtn");
//use dayjs to display current date
currentDateArea.text(dayjs().format('dddd, MMMM D, YYYY'));
// set the number of hours in the work day
var workingHours = 9;
// set the hour the work day begins (in 24-hour format)
var startingHour = 9;
for (i = 0; i < workingHours; i++) {
  // create the div element variables that we will insert later
  var newDiv = $("<div>");
  var newTimeBlockRow = $("<div>");
  var hourDisplayBlock = $("<div class='col-2 col-md-1 hour text-center py-3'></div>");
  var textInput = $("<textarea class='col-8 col-md-10 description' rows='3'></textarea>")
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
  // Create the input area 
  newTimeBlockRow.append(textInput);
  // check if localstorage value exists for each timeblock, if not: return nothing
  textInput.append(function () { if (localStorage.getItem("hour_" + (startingHour + i) == null)) { return } else { return localStorage.getItem("hour_" + (startingHour + i)) } });
  // add the save button
  newTimeBlockRow.append("<button class='btn saveBtn col-2 col-md-1' aria-label='save'><i class='fas fa-save' aria-hidden='true'></i></button></div>");
  // add the time block to the parent container
  timeBlocks.append(newDiv);
}

// when the user clicks the save button, store the text field data for that row in localstorage (hour_i, value)
$(".saveBtn").on("click", function () {
  console.log($(this).parent().parent().children().children()[1].value)
  localStorage.setItem($(this).parent().parent().prop("class"), $(this).parent().parent().children().children()[1].value)
})