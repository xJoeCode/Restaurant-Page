console.log("running 2 index.js")
import  './styles.css'
import {coffeeQuiz, roastProfileQn} from './moduleCoffeeQuiz.js'
import {coffeeCard} from './moduleCoffeeCataolgue.js'

let questionArray = []

const main = ()=>{
    console.log("running")
    const coffeeQuizer = document.querySelector("#quiz")
    coffeeQuizer.onclick = function() {coffeeQuiz(), nespressocardQn()}
    const coffeeCataolgue = document.querySelector("#browseCoffees")
    coffeeCataolgue.onclick = function(){coffeeCard()}

    const nespressocardQn = () =>{
        console.log("question?")
        const nespressocard = document.querySelectorAll(".coffeeCards")
        nespressocard.forEach(card => card.onclick = function() {roastProfileQn(),pushQuestion(card)}) 
    }

    const pushQuestion = card => {
         const ansOne = card.getAttribute('data-id')
         questionArray.push(ansOne)
         console.log(questionArray)
    }
    
}


main()
