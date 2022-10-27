import { Sound }  from "./sounds.js";
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const soundChoiceForest = document.querySelector('.forest')
const soundChoiceRain = document.querySelector('.rain')
const soundChoiceCoffeeShop = document.querySelector('.coffee-shop')
const soundChoiceFireplace = document.querySelector('.fireplace')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut 

const sound = Sound()

function resetTimer(){
    updateDisplayTimer(minutes, 0)
    clearTimeout(timerTimeOut)
}

function resetPlayAndPause(){
    play.classList.remove( 'hide' )
    pause.classList.add( 'hide' )
}

function updateDisplayTimer( minutes, seconds ) {
    minutesDisplay.textContent = String(minutes).padStart( 2, "0")
    secondsDisplay.textContent = String(seconds).padStart( 2, "0")
}

function countdown() {
    timerTimeOut = setTimeout( function () {
        let seconds =  Number(secondsDisplay.textContent)
        let minutes =  Number(minutesDisplay.textContent)
        let countdownFinished = minutes <= 0 && seconds <= 0

        if ( countdownFinished ) {
            resetPlayAndPause()
            return
        }

        if ( seconds <= 0 ) {
            seconds = 10
            --minutes
        }
    
        updateDisplayTimer(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}


play.addEventListener( 'click', () => {
    play.classList.add( 'hide' )
    pause.classList.remove('hide')
    countdown()
})

pause.addEventListener( 'click', () => {
    resetPlayAndPause()
    clearTimeout(timerTimeOut)
})

reset.addEventListener( 'click', () =>{
    resetTimer()
    resetPlayAndPause()
})

plus.addEventListener( 'click', () =>{
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5 ).padStart( 2, '0' )
})

minus.addEventListener( 'click', () => {

    if(minutesDisplay.textContent <= 5) {
        updateDisplayTimer( 0, 0 )
    } else {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5 ).padStart( 2, '0' ) 
    }
})

soundChoiceForest.addEventListener('click', () =>{
    soundChoiceForest.classList.add('selected')
    soundChoiceRain.classList.remove('selected')
    soundChoiceCoffeeShop.classList.remove('selected')
    soundChoiceFireplace.classList.remove('selected')
    document.getElementById('bg').style.backgroundColor = '#239d343b'
    sound.pressForest()
})

soundChoiceRain.addEventListener('click', () =>{
    soundChoiceRain.classList.add('selected')
    soundChoiceForest.classList.remove('selected')
    soundChoiceCoffeeShop.classList.remove('selected')
    soundChoiceFireplace.classList.remove('selected')
    document.getElementById('bg').style.backgroundColor = '#237f9d3b'
    sound.pressRain()
})

soundChoiceCoffeeShop.addEventListener('click', () =>{
    soundChoiceRain.classList.remove('selected')
    soundChoiceForest.classList.remove('selected')
    soundChoiceCoffeeShop.classList.add('selected')
    soundChoiceFireplace.classList.remove('selected')
    document.getElementById('bg').style.backgroundColor = '#8e9d233b'
    sound.pressCoffeeShop()
})

soundChoiceFireplace.addEventListener('click', () =>{
    soundChoiceRain.classList.remove('selected')
    soundChoiceForest.classList.remove('selected')
    soundChoiceCoffeeShop.classList.remove('selected')
    soundChoiceFireplace.classList.add('selected')
    document.getElementById('bg').style.backgroundColor = '#9d23233b'
    sound.pressFireplace()
})
