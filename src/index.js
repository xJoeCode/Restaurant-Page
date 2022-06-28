console.log("running 2 index.js")
import  './styles.css'
import {coffeeQuiz} from './moduleCoffeeQuiz.js'


const main = ()=>{
    console.log("running")
    const coffeeMain = document.querySelector("#quiz")
    coffeeMain.onclick = function() {coffeeQuiz()}

}


main()
