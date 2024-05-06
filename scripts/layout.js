// #region CREACION DINAMICA DE MI HEADER
// inyecto dinamicamente el header
const headerSelector = document.getElementById("header")
headerSelector.innerHTML = `
    <div class="container">
        <div class="search">
            <div class="logo">
                <a href="index.html"><img src="assets/logo.jpg"" alt="logo"/></a>
            </div>
            <div class="form">
                <form id="formulario">
                    <input type="text" placeholder="Search" id="search"/>
                </form>
            </div>
            <div class="bars">
                <label for="check" "class="checkbtn" id="menuResponsive">
                    <i class="fa-solid fa-bars"></i>
                </label>
            </div>
            <div class="social">
                <ul class="social-icons">
                    <li>
                        <a href="#"><i class="fa-brands fa-tiktok icons"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-facebook icons"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-instagram icons"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav" id="nav">
        </div>
    </div>
`
// inyecto dinamicamente la lista que se encuentra dentro de mi header
const navSelector = document.getElementById("nav")
const optionsNav = [
    { title: "INICIO", linkTo: "./index.html", },
    { title: "PRODUCTOS", linkTo: "#" },
    { title: "GUÍA PARA COMPRAR", linkTo: "./orders.html" },
    { title: "CATALOGOS", linkTo: "#" },
    { title: "OFERTAS", linkTo: "#" },
    { title: "BLOG", linkTo: "#" },
    { title: "CONTACTENOS", linkTo: "#" },
];
const navHtml = optionsNav.reduce((html, option) => {
    return `${html}
        <li>
            <a class="nav-button" href="${option.linkTo}">
                ${option.title}
            </a>
        </li>
    `
}, "")
navSelector.innerHTML = `<ul>${navHtml}</ul>`

// tambien se puede inyectar de esta manera
/* for (let option of optionsNav) {
    const li = document.createElement("li")
    const anchor = document.createElement("a");
    // anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    li.appendChild(anchor)
    navSelector.appendChild(li)
}  */  
// #endregion
//#region footer
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
//#endregion 
