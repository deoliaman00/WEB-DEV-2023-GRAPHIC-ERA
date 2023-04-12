// Get the month and year select elements
var monthSelect = document.getElementById("monthSelect");
var yearSelect = document.getElementById("yearSelect");

// Populate the year select with options for the years from 2000 to 2030
for (var i = 2000; i <= 2030; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  yearSelect.add(option);
}

// Function to display the calendar for the selected month and year
function displayCalendar() {
  var month = parseInt(monthSelect.value);
  var year = parseInt(yearSelect.value);
  var calendarContainer = document.getElementById("calendarContainer");

  // Clear any existing calendar
  calendarContainer.innerHTML = "";

  // Create a new table element for the calendar
  var table = document.createElement("table");

  // Create the table header with the days of the week
  var headerRow = document.createElement("tr");
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (var i = 0; i < daysOfWeek.length; i++) {
    var th = document.createElement("th");
    th.textContent = daysOfWeek[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // css
  // Copy code
  // Create the table rows for the calendar days
  var date = new Date(year, month - 1, 1);
  var lastDay = new Date(year, month, 0).getDate();
  var firstDayOfWeek = date.getDay();
  var currentDay = 1;

  while (currentDay <= lastDay) {
    var row = document.createElement("tr");

    for (var i = 0; i < 7; i++) {
      var td = document.createElement("td");
      if (i >= firstDayOfWeek && currentDay <= lastDay) {
        td.textContent = currentDay;
        currentDay++;
      }
      row.appendChild(td);
    }

    table.appendChild(row);
  }

  calendarContainer.appendChild(table);
}
