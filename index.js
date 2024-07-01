// current day
let today = new Date();

let day = today.getDay();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = daysOfWeek[day];

document.getElementById("currentDay").textContent = currentDay + ",";

// current time
function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  var prepend = hours >= 12 ? " PM " : " AM ";

  // Convert 24-hour format to 12-hour format
  hours = hours >= 12 ? hours - 12 : hours;

  // Check for special cases when hour is 0
  if (hours === 0 && prepend === " PM ") {
    if (minutes === 0 && seconds === 0) {
      hours = 12;
      prepend = " Noon";
    } else {
      hours = 12;
      prepend = " PM";
    }
  }

  if (hours === 0 && prepend === " AM ") {
    if (minutes === 0 && seconds === 0) {
      hours = 12;
      prepend = " Midnight";
    } else {
      hours = 12;
      prepend = " AM";
    }
  }

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + ":" + minutes + ":" + seconds + prepend;

  document.getElementById("currentTimeUTC").textContent = currentTime;
}

// Update the time per second
updateTime();
setInterval(updateTime, 1000);
