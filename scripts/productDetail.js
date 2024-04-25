const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    const product = card.find((product) => product.id === id);
	console.log(product);
    const detailsTemplate = `
    <div class="product-images">
		<div class="images-small">
			${product.imagesSmall.map(each => `<img src="${each}" alt="mini" />`).join("")}
		</div>
		<div class="image-big">
		<img src="${product.img}" alt="">
		</div>
	</div>
		<div class="product-description">
			<h1>${product.title}</h1>
			<form class="selector">
				<fieldset>
					<label class="label" for="color">Color</label>
					<select type="text" placeholder="Selecciona un color">
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
			<span class="price">${product.price}</span>
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
					<input class="cantidad" type="number" name="" id="" value="1">
				</label>							
				<button type="button">Añadir al carrito</button>
			</div>
		</div>
	</div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
    printDetails(id)
  