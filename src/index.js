console.log("running 2 index.js")
import  './styles.css'
import {coffeeQuiz, roastProfileQn, roastProfileAns} from './moduleCoffeeQuiz.js'
import {coffeeCard} from './moduleCoffeeCataolgue.js'



const main = ()=>{
    console.log("running")
    const coffeeQuizer = document.querySelector("#quiz")
    coffeeQuizer.onclick = function() {coffeeQuiz()}
    const coffeeCataolgue = document.querySelector("#browseCoffees")
    coffeeCataolgue.onclick = function(){coffeeCard()}

  //  const nespressocardQn = () =>{
  //      console.log("question?")
 //       const nespressocard = document.querySelectorAll(".coffeeCards")
  //      nespressocard.forEach(card => card.onclick = function() {roastProfileQn(),pushQuestion(card)}) 
  //  }

    

    
    
}


main()
