// #region nav
const navSelector = document.getElementById("nav")
const optionsNav = [
    { title: "INICIO", linkTo: "./how.html", },
    { title: "PRODUCTOS", linkTo: "#" },
    { title: "GUÍA PARA COMPRAR", linkTo: "./orders.html" },
    { title: "CATALOGOS", linkTo: "#" },
    { title: "OFERTAS", linkTo: "#" },
    { title: "BLOG", linkTo: "#" },
    { title: "CONTACTENOS", linkTo: "#" },
];
for (let option of optionsNav) {
    const li = document.createElement("li")
    const anchor = document.createElement("a");
    // anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    li.appendChild(anchor)
    navSelector.appendChild(li)
}   
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
