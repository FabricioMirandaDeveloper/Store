import { obtenerProducts } from "./funtions/utilProducts.js";

export function createCard(product) {
    const formattedPrice = product.price.toFixed(2);
    return `
        <a class="product-card" href="details.html?id=${product.id}">
            <img class="product-img" src="${product.img}" alt="Macbook Pro"/>
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-price">S/ ${formattedPrice}</span>
            </div>
        </a>
    `
}
export function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = ""
    for(const element of arrayOfProducts) {
        productsTemplate += createCard(element)
    }
    document.getElementById(idSelector).innerHTML = productsTemplate
}
const products = await obtenerProducts()
printCards(products,"products")
