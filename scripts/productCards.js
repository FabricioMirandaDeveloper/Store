function createCard(card) {
    return `
        <a class="product-card" href="details.html?id=${card.id}">
        <img class="product-img" src="${card.img}" alt="Macbook Pro"/>
        <div class="product-info">
            <span class="product-title">${card.title}</span>
            <span class="product-description"></span>
            <div class="product-price-block">
                <span class="price">S/ ${card.price}</span>
            </div>
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
