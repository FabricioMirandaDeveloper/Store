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
                <label for="check" class="checkbtn">
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
const optionsFooter = [
    [
        { title: "Iniciar Sesión", linkTo: "./how.html", },
        { title: "Mi Cuenta", linkTo: "#" },
        { title: "Mi Carrito", linkTo: "./orders.html" },
        { title: "Términos y Condiciones", linkTo: "#" },
    ],
    [
        { title: "Servicio Técnico", linkTo: "./how.html", },
        { title: "Políticas de Venta", linkTo: "#" },
        { title: "Forma de Pagos", linkTo: "./orders.html" },
        { title: "Consultar Comprobante Electrónico", linkTo: "#" },
    ]
];
for (let options of optionsFooter) {
    const div = document.createElement("div")
    div.className = "col"
    const ul = document.createElement("ul")
    for (let option of options) {
        const li = document.createElement("li")
        const anchor = document.createElement("a");
        anchor.textContent = option.title
        anchor.href = option.linkTo
        li.appendChild(anchor)
        ul.appendChild(li)
    }
    div.appendChild(ul)
    footerSelector.appendChild(div)
}       
//#endregion 
