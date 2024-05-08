// Mandamos al localstorage los productos favoritos
const heartIcon = document.getElementById("heartIcon")
heartIcon.addEventListener('click', function () {
    const found = card.find((product) => product.id === id)
    let product = {
        id: id,
		title: found.title,
		price: found.price,
		image: found.img,
		description: found.description,
		/* color: document.querySelector(`#color-`).value, 
		quantity: document.querySelector("#quantity-").value, */
    }
	const productsInCart = localStorage.getItem("favorits")
	let products= []
	if(productsInCart) {
		products = JSON.parse(productsInCart)
	}
	// Verifica si el producto ya existe en la lista de favoritos
	const productExists = products.some((p) => p.id === product.id);
	if (!productExists) {
        // Agrega el producto solo si no existe
        products.push(product);
        localStorage.setItem("favorits", JSON.stringify(products));
    }
});


