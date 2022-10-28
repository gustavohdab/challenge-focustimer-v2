export function Sound ({
    soundChoiceCoffeeShop, 
    soundChoiceFireplace,
    soundChoiceForest,
    soundChoiceRain
}) {
    const soundForest = new Audio("sounds/Forest.wav")
    const soundRain = new Audio("sounds/Rain.wav")
    const soundCoffeeShop = new Audio("sounds/CoffeeShop.wav")
    const soundFireplace = new Audio("sounds/Fireplace.wav")
    
    soundForest.loop = true
    soundRain.loop = true
    soundCoffeeShop.loop = true
    soundFireplace.loop = true

    function timeEnd(){
        kitchenTimer.play()
        soundChoiceForest.classList.remove('selected')
        soundChoiceRain.classList.remove('selected')
        soundChoiceCoffeeShop.classList.remove('selected')
        soundChoiceFireplace.classList.remove('selected')
    }
    
    function pressForest() {
        soundForest.play()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        soundChoiceForest.classList.add('selected')
        soundChoiceRain.classList.remove('selected')
        soundChoiceCoffeeShop.classList.remove('selected')
        soundChoiceFireplace.classList.remove('selected')
        document.getElementById('bg').style.backgroundColor = '#239d343b'
    }

    function pressRain() {
        soundForest.pause()
        soundRain.play()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        soundChoiceRain.classList.add('selected')
        soundChoiceForest.classList.remove('selected')
        soundChoiceCoffeeShop.classList.remove('selected')
        soundChoiceFireplace.classList.remove('selected')
        document.getElementById('bg').style.backgroundColor = '#237f9d3b'
    }

    function pressCoffeeShop() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.play() 
        soundFireplace.pause()
        soundChoiceRain.classList.remove('selected')
        soundChoiceForest.classList.remove('selected')
        soundChoiceCoffeeShop.classList.add('selected')
        soundChoiceFireplace.classList.remove('selected')
        document.getElementById('bg').style.backgroundColor = '#8e9d233b'
    }
    
    function pressFireplace() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.play()
        soundChoiceRain.classList.remove('selected')
        soundChoiceForest.classList.remove('selected')
        soundChoiceCoffeeShop.classList.remove('selected')
        soundChoiceFireplace.classList.add('selected')
        document.getElementById('bg').style.backgroundColor = '#9d23233b'
    }

    return {
        pressForest,
        pressRain,
        pressCoffeeShop,
        pressFireplace,
        timeEnd,
        soundChoiceCoffeeShop, 
        soundChoiceFireplace,
        soundChoiceForest,
        soundChoiceRain
    }
}
