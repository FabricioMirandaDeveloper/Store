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
    new Product("assets/imgs/001-xiaomi-mijia-foco-bombilla-led-e27.jpg", "XIAOMI MIJIA FOCO BOMBILLA LED E27","Ilumina tu casa con la bella luz blanca que te dará el bello foco bombilla. Su tamaño compacto lo hace adaptable a distintos dispositivos de iluminación.",19.00, "50% Off", "IGV incluido", "001",["Blanco","Negro", "Gris"],["assets/imgs/001--xiaomi-mijia-foco-bombilla-led-e27.jpg","assets/armas/arma3.webp"]),
    new Product("assets/imgs/002-mascarilla-desechable-50-unidades.jpg", "MASCARILLA DESECHABLE - 50 UNIDADES","Fácil respiración y eficiencia en filtración bacteriana, protege la nariz y boca para minimizar las partículas infecciosas.",4.00, "50% Off", "IGV incluido", "002",["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/003-xiaomi-mi-mochila-casual.jpg", "XIAOMI MI MOCHILA CASUAL","Xiaomi Mi Mochila Casual es muy ligera, ya que pesa sólo 165 gramos y es lo suficientemente grande para contener todo lo esencial para cuando quieras ir de compras, viajar, ir a la escuela.",39.00, "50% Off", "IGV incluido", "003", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/004-redmi-power-bank-cargador-portatil-xiaomi-20000mah.jpg", "REDMI POWER BANK - CARGADOR PORTÁTIL XIAOMI 20000MAH","El Redmi Power Bank 20000 MAh (cargador portátil) de color Negro tiene carga rápida de 18W y capacidad para cargar 2 celulares a la vez. Ideal para viajes y para personas que suelen estar fuera de casa todo el día. Nunca más te quedes sin batería en el celular.  Es el cargador de viajes perfecto para ti.",99.00, "50% Off", "IGV incluido", "004", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/005-deerma-freidora-de-aire-nathome-4l.jpg", "DEERMA FREIDORA DE AIRE NATHOME 4L", "Utiliza aire caliente para cocinar sus alimentos favoritos con poco o nada de aceite agregado. La nueva tecnología de eliminación de grasa está diseñada para extraer y recoger la grasa de los alimentos, por lo que es la forma más saludable de freír para usted y su familia.",177.00, "50% Off", "IGV incluido", "005",["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/006-audifonos-bluetooth-lenovo-heo5.jpg", "AUDÍFONOS BLUETOOTH LENOVO HEO5", "Los nuevos Neckband Earphone HE05 de Lenovo son compatibles con todos los dispositivos Bluetooth, además tiene una transmisión hasta de 20 metros manteniendo su calidad de sonido nítido gracias a sus auriculares estéreo mágneticos que se unen perefectamente para evitar enredos. La banda para el cuello de silicona se puede girar o doblar adaptándose a tu cuello sin deslizarse.",39.00, "50% Off", "IGV incluido", "006", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/007-bolsa-de-agua-terapeutica-.jpg", "BOLSA DE AGUA TERAPÉUTICA","Con la bolsa de agua caliente podrás relajar los músculos y los hombros tensados causados por demasiado estrés y entrenamiento intenso.",9.00, "50% Off", "IGV incluido", "007", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
    new Product("assets/imgs/008-desodorante-roll-on-by-esika.jpg", "DESODORANTE ROLL ON BY ÉSIKA","Desodorante roll on sin alcohol.", 5.00, "50% Off", "IGV incluido", "008", ["Blanco","Negro", "Gris"],["assets/armas/arma2.webp","assets/armas/arma2.webp"]),
]