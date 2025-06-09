

let studyBtn = document.querySelector("#study-btn");
let breakBtn = document.querySelector("#break-btn");
let timerElem = document.querySelector("#time-left");
let studyElem = document.querySelector("#study-count");
let breakElem = document.querySelector("#break-count");

studyElem.textContent = "0";
breakElem.textContent = "0";

let studyCount = 0;
let breakCount = 0;


//add a comment to test branches
//@nd B

let totalMin;
let totalSec
studyBtn.addEventListener("click", function(){
    console.log("Study Clicked");

    studyElem.textContent = ++studyCount;
    timerElem.textContent= "25:00";

    totalMin = 24;
    totalSec = 59;



    let id = setInterval(() => {  // run function every 1000 milliseconds (1 second)
        timerElem.textContent = `${totalMin}:${totalSec}`;
        totalSec--;
        if(totalSec === 0){
            totalMin--;
            totalSec = 59;
            if(totalMin <= 0 && totalSec <= 0){
                clearInterval(id);
            }
        }

    } , 1000);



})

breakBtn.addEventListener("click", function(){
    console.log("Break Clicked");
    breakElem.textContent = breakCount++;
    timerElem.textContent= "5:00";

    totalMin = 4;
    totalSec = 59;


    let id = setInterval(() => {  // run function every 1000 milliseconds (1 second)
        timerElem.textContent = `${totalMin}:${totalSec}`;
        totalSec--;
        if(totalSec === 0){
            totalMin--;
            totalSec = 59;
        }
        if(totalMin < 0 ){
            clearInterval(id);
        }
    } , 1000);



})
