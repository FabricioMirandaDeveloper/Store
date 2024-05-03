const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

function printDetails(id) {
    const product = card.find((product) => product.id === id);
    const detailsTemplate = `
    <div class="product-images">
		<div class="images-small">
		${product.imagesSmall.map(each =>`<img src="${each}" alt="mini" onclick="changeMini(event)"/>`).join("")}
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
				<label for="">
					<input class="cantidad" type="number" name="" onchange="changeSubtotal(event)" value="1" id="quantity-">
				</label>							
				<button type="button" onclick="saveProduct()">Añadir al carrito</button>
			</div>
		</div>
	</div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id)

function changeMini(event) {
	const selectedSrc = event.target.src;
	const bigSelector = document.querySelector("#bigImg");
	bigSelector.src = selectedSrc;
}

function changeSubtotal(event){
	const cantidadProducts = event.target.value
	const product = card.find((product) => product.id === id);
	console.log(product);
	const subtotal = cantidadProducts * product.price
	const newPrice = document.getElementById("price")
	newPrice.textContent = `S/ ${subtotal}`
	console.log(subtotal);
}

function saveProduct(event) {
	const found = card.find((product) => product.id === id);
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
	const productsInCart = localStorage.getItem("cart")
	let products= []
	if(productsInCart) {
		products = JSON.parse(productsInCart)
	}
	products.push(product)
	localStorage.setItem("cart", JSON.stringify(products))
}

