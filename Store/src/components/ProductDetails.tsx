import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Products";

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
        <div className="w-11/12 mx-auto mt-24">
            <div className="flex flex-col lg:flex-row gap-6">
                <img src={product.img} alt={product.title} className="w-32 lg:w-1/2" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-xl text-primary mt-2">S/ {product.price}</p>
                    <p className="mt-4">{product.description}</p>
                </div>
            </div>
        </div>
    )
}