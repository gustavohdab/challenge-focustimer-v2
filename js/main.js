import { Sound }  from "./sounds.js";
import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import { Events } from "./events.js";
import { Swapper } from "./swapper.js";
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    soundChoiceForest,
    soundChoiceRain,
    soundChoiceCoffeeShop,
    soundChoiceFireplace, 
} from "./elements.js"; 

const swapper = Swapper()

const sound = Sound({
    soundChoiceCoffeeShop,
    soundChoiceFireplace,
    soundChoiceForest,
    soundChoiceRain
})

const controls = Controls({
    buttonPlay,
    buttonPause,
    minutesDisplay,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

Events({
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
})
