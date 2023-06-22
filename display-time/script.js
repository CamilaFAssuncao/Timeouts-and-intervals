// Exercise 2

// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let timer = document.querySelector('.demo');


// function displayingTime () {

// }

/* variables for the timer */
let seconds = 0;
let minutes =0;
let hours = 0;

let start = document.getElementById('start'); 
let pause = document.getElementById('pause');
let reset = document.getElementById('reset'); 
let stopstatus = 0;
/* DOM element to update timer */
let timer = document.querySelector('.timer');



/* function to start the timer */
start.addEventListener('click', ()=>{
    if(stopstatus!==0){
        clearInterval(stopstatus);
    }
    stopstatus = setInterval(()=>{
        seconds+=1;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    let h = hours < 10 ? ("0" + hours ): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    timer.innerHTML = ` ${h} : ${m} : ${s}`;
},1000);
});


/* function to pause the timer */
pause.addEventListener('click', ()=>{
    clearInterval(stopstatus);
});

/* function to reset the timer */
reset.addEventListener('click', ()=>{
    clearInterval(stopstatus);
    seconds = 0;
    minutes =0;
    hours = 0;
    timer.innerHTML = '00 : 00 : 00 ';
});
