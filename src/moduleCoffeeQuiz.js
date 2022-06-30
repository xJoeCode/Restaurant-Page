import coffeeMachine from './Assets/coffee-machine.png'
import mokapot from './Assets/moka-pot.png'
import frenchpress from './Assets/french-press.png'

let questionArray = []

const coffeeQuiz = () => {
    
    console.log("creating quiz")
    const coffeeQuizContainer = document.getElementById("coffeeQuizContainer");
    
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    
    coffeeQuizContainer.setAttribute("class", "rounded-lg md:bg-[#8eb0bc] container m-auto mt-4 p-8 ")
    const headertext = document.createElement("h2");
    headertext.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    headertext.textContent = "Hi there, First up, how do you make your coffee"
    coffeeQuizContainer.appendChild(headertext)
    const coffeeCardsWrapper = document.createElement("div")
    coffeeCardsWrapper.setAttribute("class"," flex flex-wrap justify-center");
    coffeeQuizContainer.appendChild(coffeeCardsWrapper)

    for (let i = 0; i < 3; i++){
        const NespressoContainer = document.createElement("div")
        NespressoContainer.setAttribute("class","coffeeCards")
        const nespressoImage = document.createElement("img")
        nespressoImage.setAttribute("class","w-24")
        const nespressotext = document.createElement("p")
        switch (i){
            case 2:
                NespressoContainer.setAttribute("data-id","Nespresso")  
                nespressoImage.src = coffeeMachine
                nespressotext.textContent = "Nespresso" 
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break 
            case 1:
                NespressoContainer.setAttribute("data-id","MokaPot")  
                nespressoImage.src = mokapot
                nespressotext.textContent = "Mokapot"
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break  
            case 0:
                NespressoContainer.setAttribute("data-id","FrenchPress")  
                nespressoImage.src = frenchpress
                nespressotext.textContent = "Frenchpress" 
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break   
        }
        coffeeCardsWrapper.appendChild(NespressoContainer)
        NespressoContainer.appendChild(nespressoImage)
        nespressotext.setAttribute("class","font-Days_One mt-4");
        NespressoContainer.appendChild(nespressotext)
    }

} 

const pushQuestion = card => {
    //const ansOne = card.getAttribute('data-id')
    questionArray.push(card)
    console.log(questionArray)
}

const roastProfileQn = () => {
    console.log(coffeeQuizContainer)
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    const headertext2 = document.createElement("h2");
    headertext2.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    headertext2.textContent = "In order for us to recommend a coffee most suited to you, we will need to understand a little about your sensory palate. So which of these do you like?"
    coffeeQuizContainer.appendChild(headertext2)
    const coffeeCardsWrapper = document.createElement("div")
    coffeeCardsWrapper.setAttribute("class"," flex flex-wrap justify-center");
    coffeeQuizContainer.appendChild(coffeeCardsWrapper)
    for(let i = 0; i < 6; i++){
        const secondContainer = document.createElement("div")
        secondContainer.setAttribute("class","questionCards1");
        secondContainer.onclick = function(){roastProfileAns()}
        if (i == 0){
            secondContainer.textContent = "Berries"
            secondContainer.setAttribute("data-id","Berries")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
       } else if (i == 1){
            secondContainer.textContent = "Caramel"
            secondContainer.setAttribute("data-id","Caramel")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
           } else if (i == 2){
            secondContainer.textContent = "Chocolate"
            secondContainer.setAttribute("data-id","Chocolate")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
               } else if (i == 3){
                secondContainer.textContent = "Citrus Lemons"
                secondContainer.setAttribute("data-id","Citrus Lemons")
                secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                    } else if (i == 4){
                        secondContainer.textContent = "Edible Flowers"
                        secondContainer.setAttribute("data-id","Edible Flowers")
                        secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                        } else if(i == 5){
                            secondContainer.textContent = "Stone Fruits"
                            secondContainer.setAttribute("data-id","Stone Fruits")
                            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                     }
            coffeeCardsWrapper.appendChild(secondContainer)        
    }
}

const roastProfileAns = () => {
    console.log("Answer Time")
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    const profileAnsTest = document.createElement("p");
    profileAnsTest.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    profileAnsTest.textContent = "The Brazil IPANEMA B67 Brown Sugar is most suited for you"
    coffeeQuizContainer.appendChild(profileAnsTest)
}


export{coffeeQuiz, roastProfileQn, roastProfileAns}