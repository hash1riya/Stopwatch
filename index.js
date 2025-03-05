// Variables

let hours = 0;
let minutes = 0;
let seconds = 0;
let count = 0;

let timer = false;

// Functions

function Stopwatch() {
  if (timer) {
    count++;

    if (count == 100) {
      seconds++;
      count = 0;
    }

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      hours++;
      minutes = 0;
    }

    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("count").innerHTML = count;

    setTimeout(Stopwatch, 1);
  }
}

function Start() {
  timer = true;
  Stopwatch();
}

function Stop() {
  timer = false;
}

function Reset() {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;

  document.getElementById("hr").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  document.getElementById("count").innerHTML = count;
}
