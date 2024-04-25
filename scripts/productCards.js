
// let productsTemplate = `<a class="product-card" href="details.html">
// <img class="product-img" src="assets/armas/arma1.webp" alt="Macbook Pro"/>
// <div class="product-info">
//     <span class="product-title">Pistola TAURUS G2C </span>
//     <span class="product-description">(10018432) 9x19mm (9mm PB)</span>
//     <div class="product-price-block">
//         <span class="price">S/ 2240.00</span>
//         <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">IGV incluido</div>
// </div>
// </a>`

// productsSelector.innerHTML = productsTemplate

function createCard(card) {
    return `
        <a class="product-card" href="details.html?id=${card.id}">
        <img class="product-img" src="${card.img}" alt="Macbook Pro"/>
        <div class="product-info">
            <span class="product-title">${card.title}</span>
            <span class="product-description">${card.description}</span>
            <div class="product-price-block">
                <span class="price">${card.price}</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">${card.igv}</div>
        </div>
    `
}


function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = ""
    for(const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element)
    }
    const productsSelector = document.getElementById(idSelector)
    productsSelector.innerHTML = productsTemplate
}
printCards(card,"products")
