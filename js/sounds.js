export function Sound () {
    const soundForest = new Audio("sounds/Forest.wav")
    const soundRain = new Audio("sounds/Rain.wav")
    const soundCoffeeShop = new Audio("sounds/CoffeeShop.wav")
    const soundFireplace = new Audio("sounds/Fireplace.wav")
    soundForest.loop = true
    soundRain.loop = true
    soundCoffeeShop.loop = true
    soundFireplace.loop = true
    
    function pressForest() {
        soundForest.play()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
    }
    function pressRain() {
        soundForest.pause()
        soundRain.play()
        soundCoffeeShop.pause()
        soundFireplace.pause()
    }
    function pressCoffeeShop() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.play()
        soundFireplace.pause()
    }
    function pressFireplace() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.play()
    }

    return {
        pressForest,
        pressRain,
        pressCoffeeShop,
        pressFireplace
    }
}
