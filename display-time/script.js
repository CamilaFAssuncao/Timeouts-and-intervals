// Exercise 2

// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
 
/* variables for the timer */
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let timer = document.querySelector('.timer');
// let reset = document.querySelector(".reset");

// setInterval(() => {
//   seconds += 1;
//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//     }
//   }


//   let m = minutes < 10 ? ("0" + minutes) : minutes;
//   let s = seconds < 10 ? ("0" + seconds) : seconds;
//   timer.innerHTML = `:${s}`;

//   if (seconds === 0 && minutes > 0 && minutes % 1 === 0) {
//     alert(`${minutes} minute(s) have passed!`);
//   }
// }, 1000);

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = document.querySelector('.timer');
let message = document.querySelector('.message');
let reset = document.getElementById("reset");
let stopstatus; // Variable to store the interval ID

reset.addEventListener('click', () => {
  clearInterval(stopstatus);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerHTML = '00';
  message.innerHTML = ''; // Clear the message
  startTimer(); // Start the timer again
});

function startTimer() {
  stopstatus = setInterval(() => {
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ? ("0" + seconds) : seconds;
    timer.innerHTML = `${s}`;

    if (seconds === 0 && minutes > 0 && minutes % 1 === 0) {
      message.innerHTML = `${minutes} minute(s) have passed!`;
    } else {
      message.innerHTML = ''; // Clear the message if it's not time yet
    }
  }, 1000);
}

startTimer(); // Start the timer initially
