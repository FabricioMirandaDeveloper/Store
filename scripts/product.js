class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this._supplier = supplier;
        this.colors = colors
        this.description = description
    } 
    get getSupplier() {
        return this._supplier;
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }
    sellUnits(units) {
        if(this.stock < units) {
            console.log("No hay la cantidad de productos suficientes")
        }else {
            this.stock = this.stock - units
        }
    }     
}
const prod1 = new Product("001","Arroz",4,15,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],false,"Costeño","Blanco","Rico arroz costeño")
const prod2 = new Product("002","Leche", 2.5,15,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],false,"Gloria","Azul","Leche descremada")
const prod3 = new Product("003", "Toallitas Humedas", 7, 20,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], true, "BabySec","Celeste","Toallita humedas con alcohol")
const prod4 = new Product("004","Cuates",1,40,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], false, "Frito Lays")
const prod5 = new Product("005","Doritos",2,12,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], false, "Frito Lays", "naranja", "Doritos Flamin Hot")

const products = [prod1,prod2,prod3,prod4,prod5]
console.log(products);
console.log(products[1]);
console.log(products[products.length-1]);

const prod6 = new Product("006","Chizito",1,12,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],true,"Chips","amarillo","Chizitos de quezo") 
const prod7 = new Product("007","Chettos",2,15,["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"],false,"Riverse", "naranja", "chettos flamin hot")

products.unshift(prod6)
console.log(products);

products.push(prod7)
console.log(products);

products.shift()
console.log(products);

products.pop()
console.log(products);