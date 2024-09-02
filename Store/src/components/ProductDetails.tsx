import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Products";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

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

    const handleAddToFavorites = () => {
        if (product) {
            // Obtener productos favoritos actuales del localStorage
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

            // Agregar el nuevo producto a la lista de favoritos
            favorites.push(product);

            // Guardar la lista actualizada en el localStorage
            localStorage.setItem("favorites", JSON.stringify(favorites));

            console.log(`${product.title} agregado a favoritos!`);
        }
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Header />
            <main className="w-11/12 mx-auto mt-24">
                <div className="flex flex-col items-center text-center">
                    <img src={product.img} alt={product.title} className="w-48" />
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold">{product.title}</h1>
                        <p className="mt-4">{product.description}</p>
                        <div className="flex justify-evenly items-center">
                            <p className="text-2xl font-bold mt-2 text-primary">S/ {product.price}</p>
                            <i className="text-xl" onClick={handleAddToFavorites}><FontAwesomeIcon icon={faHeartCirclePlus} /></i>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}