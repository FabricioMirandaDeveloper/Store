let menuResponsive = document.getElementById("menuResponsive")

menuResponsive.addEventListener("click", () => {
    const navBar = document.querySelector(".nav ul");
    navBar.classList.toggle("active");
})