const heartIcon = document.getElementById("heartIcon")
console.log(heartIcon);
heartIcon.addEventListener('click', function () {
    console.log(heartIcon);
    const found = card.find((product) => product.id === id)
    let product = {
        id: id,
		title: found.title,
		price: found.price,
		image: found.img,
		description: found.description,
		color: document.querySelector(`#color-`).value, 
		quantity: document.querySelector("#quantity-").value,
    }
    console.log(product)
	const productsInCart = localStorage.getItem("favorits")
	let products= []
	if(productsInCart) {
		products = JSON.parse(productsInCart)
	}
	products.push(product)
	localStorage.setItem("favorits", JSON.stringify(products))

});

