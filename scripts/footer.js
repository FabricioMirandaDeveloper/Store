const footerSelector = document.querySelector("#footer-container")
const subtitlesFooter = [
    {titulo: "CATÁLOGO",},
    {titulo: "NOSOTROS",},
    {titulo: "CUENTA",},
    {titulo: "INFORMACIÓN DE LA TIENDA",}
]
const optionsFooter = [
    [
        { title: "Ofertas", linkTo: "#", },
        { title: "Novedades", linkTo: "#" },
        { title: "Los más vendidos", linkTo: "#" },
        { title: "Catálogo", linkTo: "#" },
    ],
    [
        { title: "Envíos", linkTo: "#", },
        { title: "Términos y condiciones de uso", linkTo: "#" },
        { title: "Sobre Nosotros", linkTo: "#" },
        { title: "Libro de reclamaciones", linkTo: "#" },
        { title: "Mapa del sitio", linkTo: "#" },
    ],
    [
        { title: "Información personal", linkTo: "#", },
        { title: "Pedidos", linkTo: "#" },
        { title: "Facturas por abono", linkTo: "#" },
        { title: "Direcciones", linkTo: "#" },
        { title: "Cupones de descuento", linkTo: "#" },
    ],
    [
        { title: "Pasaje Acisclo Villarán 362 - Piso 2 Perú", linkTo: "#" },
        { title: "Central telefónica: 01 508 4040", linkTo: "#" },
        { title: "Whatsapp: 900 900 009", linkTo: "#" },
        { title: "Envíenos un mensaje de correo electrónico: ventas@latienda.pe", linkTo: "#" },
    ]
];
for (let options of optionsFooter) {
    const div = document.createElement("div")
    div.className = "col"
    const span = document.createElement("span")
    span.textContent = subtitlesFooter[optionsFooter.indexOf(options)].titulo;

    const ul = document.createElement("ul")
    for (let option of options) {
        const li = document.createElement("li")
        const anchor = document.createElement("a");
        anchor.textContent = option.title
        anchor.href = option.linkTo
        li.appendChild(anchor)
        ul.appendChild(li)
    }
    div.appendChild(span)
    div.appendChild(ul)
    footerSelector.appendChild(div)
}       

