class Product {
    constructor(img, title, description, price, discount, igv, id, colors, imagesSmall){
        this.img = img
        this.title = title
        this.description = description
        this.price = price
        this.discount = discount
        this.igv = igv
        this.id = id
        this.colors = colors
        this.imagesSmall = imagesSmall
    }
}
const card = [
    new Product("assets/armas/arma1.webp", "Pistola TAURUS G2C","(10018432) 9x19mm (9mm PB)",2240.00, "50% Off", "IGV incluido", "001",["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma3.webp"]),
    new Product("assets/armas/arma2.webp", "Pistola TAURUS G3","(10026742) 9x19mm (9mm PB)",2250.00, "50% Off", "IGV incluido", "002",["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma3.webp", "Pistola TAURUS TH9","(Full Size) (10017588)",2295.00, "50% Off", "IGV incluido", "003", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma4.webp", "Pistola TAURUS PT-58HC 380 AUTO","Pavonada-Anodizada",3295.00, "50% Off", "IGV incluido", "004", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma5.webp", "Pistola TAURUS G3","(10026747) 9x19mm (9mm PB)",2250.00, "50% Off", "IGV incluido", "005",["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma6.webp", "Pistola TAURUS PT 92 AFS-D", "(10022690) inoxidable",3565.00, "50% Off", "IGV incluido", "006", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma7.webp", "Pistola RUGER EC9S","(Model N° 3283) 9mm Luger",1995.00, "50% Off", "IGV incluido", "007", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/armas/arma8.webp", "Pistola TAURUS PT 92 AF-D","(10018335) de 17 tiros", 3445.00, "50% Off", "IGV incluido", "008", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
]