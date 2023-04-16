const year = document.getElementById("year");
const month = document.getElementById("month");
const btn = document.getElementById("ok");
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "December",
];
const output = document.getElementById("output");
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (var i = 1990; i < 2050; i++) {
  year.innerHTML += `<option value = ${i}>${i}</option>`;
}

btn.addEventListener("click", (e) => {
  var m = +month.value + 1;
  var D = year.value % 100; //to ge the last two digits of the year value
  var C = Math.floor(year.value / 100); //to get the first two digits of the year value
  var last = days[month.value]; // the last no of the month entitiy

  if (m > 2) m -= 2;
  else {
    m += 10;
    D -= 1;
  }

  var f =
    1 +
    Math.floor((13 * m - 1) / 5) +
    D +
    Math.floor(D / 4) +
    Math.floor(C / 4) -
    2 * C;
  if (f < 0) f = 7000 + f;
  f = f % 7;

  outputHTML = `<table border='2' cellpadding='20'> <tr><th colspan='7'>${
    monthName[month.value]
  } ${
    year.value
  }</tr> <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th></tr>`;

  var count = 1;

  var row = "<tr>";

  for (var temp = 0; temp < f; temp++) row += "<td></td>";

  for (var c = f; c < 7; c++) {
    row += `<td>${count}</td>`;
    count += 1;
  }

  row += "</tr>";

  outputHTML += row;

  while (count <= last) {
    row = "<tr>";
    var tot = 0;

    for (; tot < 7 && count <= last; tot++, count++) row += `<td>${count}</td>`;

    row += "</tr>";
    outputHTML += row;
  }

  outputHTML += "</table>";

  output.innerHTML = outputHTML;
});
