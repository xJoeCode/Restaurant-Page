import coffeebean from "./Assets/coffee-bean.png"

const coffeeCard = () => {
    console.log("creating coffee Catalogue")
    const catalogueContainer = document.querySelector("#coffeeQuizContainer")
    while(catalogueContainer.hasChildNodes()){
        catalogueContainer.removeChild(catalogueContainer.lastChild)
    }
    catalogueContainer.setAttribute("class", "rounded-lg md:bg-[#8eb0bc] container m-auto mt-4 p-8 ")
    const coffeeHeader = document.createElement("h2")
    coffeeHeader.textContent = "Our Coffees"
    coffeeHeader.setAttribute("class","font-Days_One text-center text-3xl")
    catalogueContainer.appendChild(coffeeHeader)

    const coffeeCardContainer = document.createElement("div")
    coffeeCardContainer.setAttribute("class","  flex flex-wrap justify-center items-center mt-4")
    catalogueContainer.appendChild(coffeeCardContainer)
    for(let i = 0; i < 3; i++){
        const card = document.createElement("div")
        card.classList.add("catalogueCards")
        coffeeCardContainer.appendChild(card)
        const coffeeImage = document.createElement("img")
        coffeeImage.setAttribute("class","w-20 hidden md:block")
        coffeeImage.src = coffeebean
        card.appendChild(coffeeImage)

        const coffeeText = document.createElement("p")
        coffeeText.setAttribute("class","font-Days_One mt-4 px-4")
        if (i == 0){
             coffeeText.textContent = "Brazil IPANEMA C39 Tobacco"
        } else if (i == 1){
            coffeeText.textContent = "Brazil IPANEMA B67 Brown Sugar"
            } else if (i == 2){
                coffeeText.textContent = "Kenya Muthunzuuni PB"
                }
        card.appendChild(coffeeText)


    }
}

export {coffeeCard}