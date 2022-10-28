export function Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {
    let minutes = Number(minutesDisplay.textContent)
    let timerTimeOut

    function updateDisplay( newMinutes, seconds ) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart( 2, "0")
        secondsDisplay.textContent = String(seconds).padStart( 2, "0")
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout( function () {
            const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
            function timeEnd(){
                kitchenTimer.play()
            }
            let seconds =  Number(secondsDisplay.textContent)
            let minutes =  Number(minutesDisplay.textContent)
            let countdownFinished = minutes <= 0 && seconds <= 0

            if ( countdownFinished ) {
                resetControls()
                updateDisplay()
                timeEnd()
                return
            }

            if ( seconds <= 0 ) {
                seconds = 60
                --minutes
            }
        
            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function plus () {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5 ).padStart( 2, '0' )
    }

    function minus () {
        if(minutesDisplay.textContent <= 5) {
            updateDisplay( 0, 0 )
        } else {
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5 ).padStart( 2, '0' ) 
        }
    }

    function hold () {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        hold,
        plus,
        minus,
    }
}
