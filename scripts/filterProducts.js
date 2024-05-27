import { obtenerProducts } from "./funtions/utilProducts.js";
import { printCards } from "./productCards.js"
const productss = await obtenerProducts()
const searchSelector = document.getElementById("search")
searchSelector.addEventListener("keyup",event =>captureText(event))
function captureText (event) {
    const theEvent = event.target.value.toLowerCase()
    const search = productss.filter( Product => Product.title.toLowerCase().includes(theEvent));
    printCards(search, "products")
}