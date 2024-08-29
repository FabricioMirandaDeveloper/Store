import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Products";
import Header from "./Header";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const apiUrl = import.meta.env.VITE_API_URL;


    useEffect(() => {
        try {
            const fetchProductDetails = async () => {
                const response = await fetch(`${apiUrl}/products/${id}`)
                const data = await response.json()
                setProduct(data)
            }
            if (id) {
                fetchProductDetails();
            }
        } catch (e) {
            console.log(e);

        }

    }, [id])

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <>
        <Header/>
        <main className="w-11/12 mx-auto mt-24">
            <div className="flex flex-col items-center text-center">
                <img src={product.img} alt={product.title} className="w-48" />
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{product.title}</h1>
                    <p className="mt-4">{product.description}</p>
                    <p className="text-xl font-bold mt-2 text-primary">S/ {product.price}</p>
                </div>
            </div>
        </main>
        </>
    )
}