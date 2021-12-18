/*global $  */
let countHour = 0;
let countMin = 0;
let countSec = 0;
let countMs = 0;
var intervalTimer;
$(document).ready(function(){
    
    $(".StartButton").click(function(){
        document.getElementsByClassName("StartButton")[0].disabled = true;
        const countUp = () => {
            countMs++
            if(countMs >= 10){
                countMs = 0;
                countSec++
                if (countSec >= 60){
                    countSec = 0;
                    countMin++
                    if (countMin >= 60){
                        countMin = 0;
                        countHour++
                        let get__textHour = $(".Timer__hour").text(countHour);
                    }
                    let get__textMin = $(".Timer__minute").text(countMin);
                }
                let get__textSec = $(".Timer__second").text(countSec);
            }
            let get__textMs = $(".Timer__millisecond").text(countMs);
        }
        intervalTimer = setInterval(countUp, 100);
        
    })
    
    $(".StopButton").click(function(){
        clearInterval(intervalTimer);
        document.getElementsByClassName("StartButton")[0].disabled = false;
    })
    
    $(".ResetButton").click(function(){
        countHour = 0;
        countMin = 0;
        countSec = 0;
        countMs = 0;
        let get__textHour = $(".Timer__hour").text(countHour);
        let get__textMin = $(".Timer__minute").text(countMin);
        let get__textSec = $(".Timer__second").text(countSec);
        let get__textMs = $(".Timer__millisecond").text(countMs);
    })
});