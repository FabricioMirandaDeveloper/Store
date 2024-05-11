let buySelector = document.getElementById("buy")
buySelector.addEventListener("click", function(){
    // Vacía el array cartproducs
    cartproducs = []
    // Vacía el almacenamiento local
    localStorage.setItem("cart", JSON.stringify(cartproducs));
    // Obtiene y elimina los elementos relacionados con el carro de compras del DOM
    const cartProducts = document.getElementById("cartproducts");
    if (cartProducts) {
        cartProducts.remove();
    }
})

