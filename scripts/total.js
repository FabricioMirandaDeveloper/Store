function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(
    (each) => (total = total + each.price * each.quantity)
    );
    const totals = document.getElementById("total")
    totals.innerHTML = `
    <div>
        <h4 class="total-title"> Resumen del pedido </h4>
        <p class="total-p">Total $ ${total}</p>
        <button id="buy" type="button">Finalizar tu compra</button>
    </div>
    `;
}
createTotalTemplate(cartproducs)