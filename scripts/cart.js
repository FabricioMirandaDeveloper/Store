// Traigo los productos de mi local storage y los convierto en un array
let cartproducs = JSON.parse(localStorage.getItem("cart"))

function createCart(cartproducs) {
    return `
        <div class="product-info">
            <div>
                <img class="product-img" src="${cartproducs.image}" alt="Macbook Pro"/>
                <input type="number" name="quantity" min="1" id="${cartproducs.id}" onchange="changeQuantity(event)">
            </div>
            <div>
                <span class="product-title">${cartproducs.title}</span>
                <span class="product-color">${cartproducs.color}</span>
                <span class="product-color">${cartproducs.description}</span>
            </div>
            <div class="product-price-block">
                <span class="price" id="product-price-${cartproducs.id}">S/ ${cartproducs.price}</span>
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


function changeQuantity(event) {
    const idProduct = event.target.id
    const valueProduct = Number(event.target.value);
    const productFound = cartproducs.find(x => x.id === idProduct)
    productFound.quantity = valueProduct
    productFound.subTotal = (productFound.price * productFound.quantity).toFixed(2)
    localStorage.setItem("cart", JSON.stringify(cartproducs))
    const subtotalElement = document.getElementById(`product-price-${idProduct}`);
    subtotalElement.innerText = `S/ ${productFound.subTotal}`;
    createTotalTemplate(cartproducs);
}




