var date = dayjs("02-21-23").format("MMM D, YYYY")
$("#date-time").text(date);
console.log(date);

var dateTimeEl = document.querySelector("#date-time")

var timeIncrease = setInterval(runFunction, 1000);
var time = dayjs(time).format("h:mm:ss A")
$("#date-time").text(time);
console.log(time);