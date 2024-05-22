import { IProduct } from "../types";

async function obtenerProducts(): Promise<IProduct[]> {
    try {
        const response = await fetch('./data/products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Promise<IProduct[] > = await response.json();
        return data
    } catch (error) {
        console.error('ERROR:', error);
        return []
    }
}
export {obtenerProducts}