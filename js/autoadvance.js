function timer(time,update) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
        }
        else update(Math.floor(now/1000));
    },500); // the smaller this number, the more accurate the timer will be
}

function timerInit(){
    timer(
        5400000, // milliseconds
        function(timeleft) { // called every step to update the visible countdown
            hours = timeleft / 3600;
            mins = (timeleft  / 60) % 60;
            sec = timeleft  % 60;
            document.getElementById('timer').innerHTML = Math.floor(hours) + ":" + Math.floor(mins) + ":" + sec;
            if (timeleft % 5 == 0){
                console.log('ding!');
                impress().next();
            }
        });
}


