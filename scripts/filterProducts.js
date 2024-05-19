import { card } from "./products.js"
import { printCards } from "./productCards.js"

const searchSelector = document.getElementById("search")
searchSelector.addEventListener("keyup",event =>captureText(event))
function captureText (event) {
    const theEvent = event.target.value.toLowerCase()
    const search = card.filter( Product => Product.title.toLowerCase().includes(theEvent));
    printCards(search, "products")
}