async function obtenerProducts() {
    try {
        const response = await fetch('./data/products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products
    } catch (error) {
        console.error('ERROR:', error);
        return []
    }
}
export {obtenerProducts}