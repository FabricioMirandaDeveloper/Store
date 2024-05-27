import { obtenerProducts } from "./funtions/utilProducts.js";
const productss = await obtenerProducts()
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

function printDetails(id) {
    const product = productss.find((product) => product.id === id);
    const detailsTemplate = `
    <div class="product-images">
		<div class="images-small">
		${product.imagesSmall.map(each =>`<img src="${each}" alt="mini" id="changeMini"/>`).join("")}
		</div>
		<div class="image-big">
		<img src="${product.img}" alt="" id="bigImg">
		</div>
	</div>
		<div class="product-description">
			<h1>${product.title}</h1>
			<form class="selector">
				<fieldset>
					<label class="label" for="color">Color</label>
					<select type="text" placeholder="Selecciona un color" id="color-">
					${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
					</select>
				</fieldset>
			</form>
			<div class="description">
				<span>Descripción</span>
				<span>${product.description}</span>
			</div> 
		</div>
		<div class="product-checkout">
			<span>TOTAL</span>
			<span class="price" id="price">S/ ${product.price}</span>
			<span>${product.igv}</span>
			<div>
				<i class="fa-solid fa-cart-shopping iconss"></i>
				<span>Agrega el producto al carrito para conocer los costos de envio</span>
			</div>
			<div>
				<i class="fa-solid fa-plane iconss"></i>
				<span>Recibe aproximadamente entre 10 y 15 dias habiles seleccionando envio normal</span>
			</div>
			<div class="buy">
				<form id="form">
					<label for="">
						<button type="button" class="btn-number" data-increment="-1">-</button>			
						<input class="cantidad" type="number" name="" onchange="changeSubtotal(event)" value="1" id="quantity-" min="1">	
						<button type="button" class="btn-number" data-increment="1">+</button>
					</label>	
				</form>
				<button type="button" id="saveProduct">Añadir al carrito</button>
				<button type="button" id="heartIcon"><i class="fa-regular fa-heart"></i></button>
			</div>
		</div>
	</div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;

}
printDetails(id)


document.getElementById("saveProduct").addEventListener("click", (event) => {
	// 1. Obtener el producto seleccionado
	const found = productss.find((product) => product.id === id);
	 // 2. Crear el objeto producto
	let product = {
		id: id,
		title: found.title,
		price: found.price,
		image: found.img,
		description: found.description,
		color: document.querySelector(`#color-`).value, 
		quantity: parseInt(document.querySelector("#quantity-").value),
	}
	 // 3. Obtener productos almacenados en el carrito
	const productsInCart = localStorage.getItem("cart")
	let products= []
	if(productsInCart) {
		products = JSON.parse(productsInCart)
	}
	 // 4. Buscar producto existente en el carrito
	 const existingProductIndex = products.findIndex((productInCart) => productInCart.id === product.id);

	 // 5. Actualizar la cantidad si el producto existe
	 if (existingProductIndex !== -1) {
        const existingProduct = products[existingProductIndex];
        if (existingProduct.quantity === product.quantity) {
            // Si la cantidad no ha cambiado, mostrar la notificación
            swal.fire({
                title: "El producto ya se encuentra en el carrito",
            });
        } else {
            // Si la cantidad ha cambiado, actualizarla en el producto existente
            products[existingProductIndex].quantity = product.quantity;
			swal.fire({
                title: `Cantidad de ${product.title} se actualizó correctamente`,
                icon: "success",
            });
        }
    } else {
        // 6. Agregar producto al carrito si no existe
        products.push(product);
		// Mostrar alerta personalizada
        swal.fire({
            title: `${product.title} se agregó correctamente al carrito`,
            icon: "success",
        });
    }
	// 7. Guardar el carrito actualizado
	localStorage.setItem("cart", JSON.stringify(products))
});
document.getElementById("heartIcon").addEventListener('click', (event) => {
    const found = productss.find((product) => product.id === id)
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
})
document.getElementById("changeMini").addEventListener('click', (event) => {
	const selectedSrc = event.target.src;
	const bigSelector = document.querySelector("#bigImg");
	bigSelector.src = selectedSrc;
})
document.getElementById("quantity-").addEventListener("change", (event) => {
	const cantidadProducts = parseInt(event.target.value)
	const product = productss.find((product) => product.id === id);
	const subtotal = (cantidadProducts * product.price).toFixed(2)
	const newPrice = document.getElementById("price")
	newPrice.textContent = `S/ ${subtotal}`
}); 

document.getElementById('form').addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-number')) {
		const incrementOrDecrement = parseInt(event.target.getAttribute('data-increment'));
		let inputValue = parseInt(document.getElementById("quantity-").value);
		inputValue += incrementOrDecrement;
		inputValue = Math.max(inputValue, 1)
		document.getElementById("quantity-").value = inputValue;
	}
})
document.getElementById("quantity-").addEventListener("blur", function() {
    if (this.value === '') {
        this.value = "1";
    }
});

