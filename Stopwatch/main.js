var second = 0
var minute = 0
var hour = 0

timer_running = false

function StopTimer() {
    if (timer_running == true){
        timer_running = false
    }
}

function StartTimer() {
    if (timer_running == false){
        timer_running = true
        TimerOn()
    }
}

function TimerOn() {
    if (timer_running == true){
        second ++
        if (second == 60){
            minute ++
            second = 0
        }
        if (minute == 60){
            hour ++
            minute = 0
            second = 0
        }
        if (second < 10 && second.toString().length < 2){
            second = "0" + second 
        }
        if (minute < 10 && minute.toString().length < 2){
            minute = "0" + minute 
        }
        if (hour < 10 && hour.toString().length < 2){
            hour = "0" + hour 
        }
        if (hour == 100){
            hour = 0
            minute = 0 
            second = 0
        }
    document.getElementById('timer').innerHTML = `${hour} : ${minute} : ${second}`
    setTimeout('TimerOn()', 1000)
    }
}

function ResetTimer() {
    timer_running = false
    document.getElementById('timer').innerHTML = `00 : 00 : 00`
    second = 0
    minute = 0
    hour = 0
}