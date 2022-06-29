import coffeeMachine from './Assets/coffee-machine.png'
import mokaport from './Assets/moka-pot.png'
import frenchpress from './Assets/french-press.png'

const coffeeQuiz = () => {
    console.log("creating quiz")
    const coffeeQuizContainer = document.getElementById("coffeeQuizContainer");
    
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    
    coffeeQuizContainer.setAttribute("class", "rounded-lg md:bg-[#8eb0bc] container m-auto mt-4 p-8 h-1/2")
    const headertext = document.createElement("h2");
    headertext.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    headertext.textContent = "Hi there, First up, how do you make your coffee"
    coffeeQuizContainer.appendChild(headertext)
    const coffeeCardsWrapper = document.createElement("div")
    coffeeCardsWrapper.setAttribute("class","flex flex-wrap justify-center");
    coffeeQuizContainer.appendChild(coffeeCardsWrapper)

    //create nespressocard
    const NespressoContainer = document.createElement("div")
    NespressoContainer.setAttribute("class","coffeeCards");
    coffeeCardsWrapper.appendChild(NespressoContainer)
    const nespressoImage = document.createElement("img")
    nespressoImage.setAttribute("class","w-24");
    nespressoImage.src = coffeeMachine
    NespressoContainer.appendChild(nespressoImage)
    const nespressotext = document.createElement("p")
    nespressotext.textContent = "Nespresso"
    nespressotext.setAttribute("class","font-Days_One mt-4");
    NespressoContainer.appendChild(nespressotext)

    //create mokapotCard
    const mokaPotContainer = document.createElement("div")
    mokaPotContainer.setAttribute("class","coffeeCards");
    coffeeCardsWrapper.appendChild(mokaPotContainer)
    const mokaPotImage = document.createElement("img")
    mokaPotImage.setAttribute("class","w-24");
    mokaPotImage.src = mokaport
    mokaPotContainer.appendChild(mokaPotImage)
    const mokaPotText = document.createElement("p")
    mokaPotText.textContent = "Mokapot"
    mokaPotText.setAttribute("class","font-Days_One mt-4");
    mokaPotContainer.appendChild(mokaPotText)

    //create frenchPressCard
    const frenchPressContainer = document.createElement("div")
    frenchPressContainer.setAttribute("class","coffeeCards");
    coffeeCardsWrapper.appendChild(frenchPressContainer)
    const frenchPressImage = document.createElement("img")
    frenchPressImage.setAttribute("class","w-24");
    frenchPressImage.src = frenchpress
    frenchPressContainer.appendChild(frenchPressImage)
    const frenchPressText = document.createElement("p")
    frenchPressText.textContent = "Frenchpress"
    frenchPressText.setAttribute("class","font-Days_One mt-4");
    frenchPressContainer.appendChild(frenchPressText)
}


export{coffeeQuiz}