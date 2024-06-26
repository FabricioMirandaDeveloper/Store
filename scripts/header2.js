// inyecto dinamicamente el header
const headerSelector2 = document.getElementById("headerWithoutInput");
headerSelector2.innerHTML = `
    <div class="container">
        <div class="search">
            <div class="logo">
                <a href="index.html"><img src="assets/logo.jpg"" alt="logo"/></a>
            </div>
            <div class="form">
            </div>
            <div class="bars">
                <label for="check" "class="checkbtn" id="menuResponsive">
                    <i class="fa-solid fa-bars" id="menuIcon"></i>
                </label>
            </div>
            <div class="social">
                <ul class="social-icons">
                    <li>
                        <a id="iconoCarrito" href="cart.html"><i class="fa-solid fa-cart-shopping icons"></i></a>
                    </li>
                    <li>
                        <a id="iconoCorazon" href="favorite.html"><i class="fa-solid fa-heart icons"></i></a>
                    </li>
                    <li>
                        <a id="iconoUsuario" href="#"><i class="fa-solid fa-user icons"></i></a>
                    </li>
                    <li>
                        <a id="iconoPerfil" href="#"><i class="fa-solid fa-user-check icons"></i></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav" id="nav">
        </div>
    </div>
`
// Dando interactivad al menu bar para desplegar opciones
let menuResponsive = document.getElementById("menuResponsive")
menuResponsive.addEventListener("click", () => {
    const navBar = document.querySelector(".nav ul");
    navBar.classList.toggle("active");
})
// Creando el menu bar responsive
document.getElementById("menuResponsive").addEventListener("click", () => {
    let menuIcon = document.getElementById("menuIcon")
    console.log(menuIcon);
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
    } else {
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.add("fa-bars");
    }

}) 
// inyecto dinamicamente la lista que se encuentra dentro de mi header
const navSelector = document.getElementById("nav")
const optionsNav = [
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

if (localStorage.getItem('isOnline') === null) {
    localStorage.setItem('isOnline', 'false');
}

function renderIcons(
) {
    const isOnline = localStorage.getItem('isOnline') === 'true';
    const iconoCarrito = document.getElementById('iconoCarrito');
    const iconoCorazon = document.getElementById('iconoCorazon');
    const iconoUsuario = document.getElementById('iconoUsuario');
    const iconoPerfil = document.getElementById('iconoPerfil');

    if (isOnline) {
        iconoUsuario.classList.add('hidden');
        iconoCarrito.classList.remove('hidden');
        iconoPerfil.classList.remove('hidden');
        iconoCorazon.classList.remove('hidden')
    } else {
        iconoUsuario.classList.remove('hidden');
        iconoCarrito.classList.add('hidden');
        iconoPerfil.classList.add('hidden');
        iconoCorazon.classList.add('hidden')
    }
}

document.getElementById('iconoUsuario').addEventListener('click', function(
) {
    localStorage.setItem('isOnline', 'true');
    renderIcons();
});

document.getElementById('iconoPerfil').addEventListener('click', function(
) {
    localStorage.setItem('isOnline', 'false');
    renderIcons();
});

document.addEventListener('DOMContentLoaded', renderIcons);