console.log("running 2 index.js")
import  './styles.css'
import {coffeeQuiz} from './moduleCoffeeQuiz.js'
import {coffeeCard} from './coffeeCataolgue.js'


const main = ()=>{
    console.log("running")
    const coffeeQuizer = document.querySelector("#quiz")
    coffeeQuizer.onclick = function() {coffeeQuiz()}
    const coffeeCataolgue = document.querySelector("#browseCoffees")
    coffeeCataolgue.onclick = function(){coffeeCard()}

}


main()
