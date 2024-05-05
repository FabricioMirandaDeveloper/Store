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