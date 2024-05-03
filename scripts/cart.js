let cartproducs = JSON.parse(localStorage.getItem("cart"))
console.log(cartproducs);


function createCart(cartproducs) {
    return `
        <div class="product-info">
            <div>
                <img class="product-img" src="${cartproducs.image}" alt="Macbook Pro"/>
            </div>
            <div>
                <span class="product-title">${cartproducs.title}</span>
                <span class="product-color">${cartproducs.color}</span>
                <span class="product-color">${cartproducs.description}</span>
            </div>
            <div class="product-price-block">
                <span class="price">S/ ${cartproducs.price}</span>
            </div>
        </div>
    `
}
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = ""
    for(const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCart(element)
    }
    const productsSelector = document.getElementById(idSelector)
    productsSelector.innerHTML = productsTemplate

    
}
printCards(cartproducs,"cartproducts")

function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(
    (each) => (total = total + each.price * each.quantity)
    );
    const totals = document.getElementById("total")
    console.log(totals)
    totals.innerHTML = `
    <h4 class="total-title"> Resumen del pedido </h4>
    <p class="total-p">Subtotal $ ${total}</p>
    <button id="buy" type="button">COMPRAR</button>
    `;
}
createTotalTemplate(cartproducs)
console.log(createTotalTemplate(cartproducs))
