// var d = new Date();
// document.getElementById('year').innerHTML = d.getFullYear();

// var d = new Date();
// document.getElementById('date').innerHTML = d.getDate();

// function myFunc() {
//   var m = new Date();
//   var month = new Array(12);
//   month[0] = 'January';
//   month[1] = 'February';
//   month[2] = 'March';
//   month[3] = 'April';
//   month[4] = 'May';
//   month[5] = 'June';
//   month[6] = 'July';
//   month[7] = 'August';
//   month[8] = 'September';
//   month[9] = 'October';
//   month[10] = 'November';
//   month[11] = 'December';

//   var x = month[m.getMonth()];
//   document.getElementById('dem').innerHTML = x;
// }

// function myFunction() {
//   var d = new Date();
//   var weekday = new Array(7);
//   weekday[0] = 'Sunday';
//   weekday[1] = 'Monday';
//   weekday[2] = 'Tuesday';
//   weekday[3] = 'Wednesday';
//   weekday[4] = 'Thursday';
//   weekday[5] = 'Friday';
//   weekday[6] = 'Saturday';

//   var n = weekday[d.getDay()];
//   document.getElementById('demo').innerHTML = n;
// }
// var up = document.getElementById('GFG_UP');

// up.innerHTML =
//   'Click on button to get the first ' + 'and last day of current month';

// var down = document.getElementById('GFG_DOWN');
// function GFG_Fun() {
//   var date = new Date();

//   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

//   var lastDay = function(year, month) {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0);
//   };

//   down.innerHTML = 'First day = ' + firstDay + '<br>Last day = ' + lastDay;
// }

var c_date = new Date();
function lastday() {
  y = c_date.getFullYear();
  result = '<br>';
  for (m = 0; m <= 11; m++) result += new Date(y, m + 1, 0) + '<br>';
  return result;
}
document.getElementById('res').innerHTML = lastday();
