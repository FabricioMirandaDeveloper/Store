import { obtenerProducts } from "./funtions/utilProducts.js";

export function createCard(card) {
    const formattedPrice = card.price.toFixed(2);
    return `
        <a class="product-card" href="details.html?id=${card.id}">
        <img class="product-img" src="${card.img}" alt="Macbook Pro"/>
        <div class="product-info">
            <span class="product-title">${card.title}</span>
            <div class="product-price-block">
                <span class="price">S/ ${formattedPrice}</span>
            </div>
        </div>
        </a>
    `
}

export function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = ""
    for(const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element)
    }
    const productsSelector = document.getElementById(idSelector)
    productsSelector.innerHTML = productsTemplate
}
const productss = await obtenerProducts()
printCards(productss,"products")
