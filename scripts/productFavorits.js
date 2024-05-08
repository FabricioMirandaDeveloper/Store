const favorits = JSON.parse(localStorage.getItem("favorits"))
const productFavorits = document.getElementById("productFavorits")

for (const favorit of favorits) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    img.src = favorit.image
    const div2 = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.textContent = favorit.title
    const p = document.createElement("p")
    p.textContent = favorit.description
    const span = document.createElement("span")
    span.textContent = `S/ ${favorit.price}`
    div.appendChild(img)
    div.appendChild(div2)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(span)
    productFavorits.appendChild(div)
}


