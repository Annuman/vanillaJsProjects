let time = document.getElementById("time");
let small = document.querySelector("small");

function digitalClock() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = "AM";

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    timeFormat = "PM";
  }

  let finalTime = `${hours}:${minutes}:${seconds}`;

  time.innerText = finalTime;
  small.innerText = timeFormat;

  setInterval(digitalClock, 1000);
}
digitalClock();
