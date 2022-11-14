var start= document.getElementById('start');
var reset= document.getElementById('reset');

var h = document.getElementById('hours');
var m = document.getElementById('minutes');
var s = document.getElementById('seconds');

var startTimer = null;


function timer(){
    if(h.value==0 && m.value == 0 && s.value == 0){
        h.value=0;
        m.value=0;
        s.value=0;
    }
    else if(s.value !=0){
        s.value--;
    }
    else if (m.value !=0 && s.value == 0){
        s.value=59;  //1 min = 60 secs
        m.value--; //post decrementing
    }
    else if (h.value !=0 && m.value==0 && s.value==0){
        m.value=59;
        h.value--;
    }
};
function stopTimer(){
   clearInterval(startTimer); //onclick clear the interval of the timer and resets to null

}
start.addEventListener("click", function(){
    //console.log("hello") Starts the function which starts the timer
    // nested function to initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
});
reset.addEventListener("click", function(){
    //console.log("bye"); reset the timer  by calling the stopTimer function
    h.value=0;
    m.value=0;
    s.value=0;
    stopTimer();
});