const searchSelector = document.getElementById("search")
searchSelector.addEventListener("keyup",event =>captureText(event))
function captureText (event) {
    const theEvent = event.target.value.toLowerCase()
    console.log(theEvent)
    const search = card.filter( Product => Product.title.toLowerCase().includes(theEvent));
    printCards(search, "products")
}