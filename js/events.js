export function Events({
    controls,
    timer,
    sound,
    buttonPlay,
    buttonMinus,
    buttonPause,
    buttonStop,
    buttonPlus,
    soundChoiceForest,
    soundChoiceRain,
    soundChoiceCoffeeShop,
    soundChoiceFireplace
}) {

    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countdown()
    })

    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
    })

    buttonStop.addEventListener('click', () => {
        timer.reset()
        controls.reset()
    })

    buttonPlus.addEventListener('click', () => {
        timer.plus()
    })

    buttonMinus.addEventListener('click', () => {
        timer.minus()
    })

    soundChoiceForest.addEventListener('click', () => {
        sound.pressForest()
    })

    soundChoiceRain.addEventListener('click', () => {
        sound.pressRain()
    })

    soundChoiceCoffeeShop.addEventListener('click', () => {
        sound.pressCoffeeShop()
    })

    soundChoiceFireplace.addEventListener('click', () => {
        sound.pressFireplace()
    })
}
