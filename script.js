//SET TIME OUT FUNCTION

//EX1

// console.log("WARNING! In exactly five seconds something will explode");

// function theExplosion() {
//   console.log("BOOM!");
// }

// setTimeout(theExplosion, 5000);


//EX2
// function theExplosion() {
//     alert("BOOM!");
//   }
  
//   const button = document.createElement("button");
//   button.textContent = "WARNING";
//   button.addEventListener("click", () => {
//     // this will delay the event by 5 seconds
//     setTimeout(theExplosion, 5000);
//   });
//   document.body.appendChild(button);

//RECURSION

// let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;

//   const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//   setTimeout(heyYou, nextCall);
// }

//SET INTERVAL

// let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// setInterval(heyYou, 1000);

//CLEARING TIME

// let interval;
// let times = 0;

// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// buttonThreeSeconds = document.createElement("button");
// buttonThreeSeconds.textContent = "say hey every 3 seconds";
// buttonThreeSeconds.addEventListener("click", () => {
//   interval = setInterval(heyYou, 3000);
// });

// buttonStop = document.createElement("button");
// buttonStop.textContent = "Stop saying hey";
// buttonStop.addEventListener("click", () => {
//   // We must first check if there is an interval
//   if (interval != undefined) {
//     clearInterval(interval);
//   }
// });

// document.body.appendChild(buttonThreeSeconds);
// document.body.appendChild(buttonStop);


// Exercise 1 - Write a function that mimics the behaviour of a typewriter.

// Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.

function writing(word, interval) {
    const letters = word.split('');   // Split the word into an array of individual letters
    let i = 0;
  
    const determineInterval = setInterval(() => {
      if (i < letters.length) {
        console.log(letters[i]);
        i++;
      } else {
        clearInterval(determineInterval);
      }
    }, interval);
  }
  
  let word = 'prout';
  let interval = 1000;
  
  writing(word, interval);

//EXERCISE 1 using setTimeOut

// function writing (word, intervals) {
//     const letters = word.split('');

//     letters.forEach((letter, index) => {
//         setTimeout(() => {
//           console.log(letter);
//         }, intervals * index);
      
//         if (index === letters.length) {
//             clearTimeout(timeoutId);
//           }});
//     }

//     const word = "happy";
//     const intervals = 2000;

//     writing(word, intervals);
  


// Exercise 2 - Write a function that displays every second that has passed on the page since it was opened. 
//The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

