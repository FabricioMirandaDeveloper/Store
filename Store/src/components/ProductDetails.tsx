import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Products";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import toast, {Toaster} from "react-hot-toast";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isFavorite, setIsFavorite] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const apiUrl = import.meta.env.VITE_API_URL;


    useEffect(() => {
        try {
            const fetchProductDetails = async () => {
                const response = await fetch(`${apiUrl}/products/${id}`)
                const data = await response.json()
                setProduct(data)

                const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
                const productIsFavorite = favorites.some((fav: Product) => fav.id === data.id);
                setIsFavorite(productIsFavorite);
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
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

            const isFavorite = favorites.some((fav: Product) => fav.id === product.id);

            if (!isFavorite) {
                favorites.push(product);
                localStorage.setItem("favorites", JSON.stringify(favorites))
                setIsFavorite(true)
            } else {
                const updatedFavorites = favorites.filter((fav: Product) => fav.id !== product.id);
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                setIsFavorite(false);
            }
        }
    }

    const handleAddToCart = () => {
        if (product) {
            const cart = JSON.parse(localStorage.getItem('cart') || '{}');
            cart[product.id] = { ...product, quantity};
            localStorage.setItem('cart', JSON.stringify(cart));
            toast.success("Producto Agregado")
        }
    }

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
                            <i className="text-xl" onClick={handleAddToFavorites}><FontAwesomeIcon className="text-primary" icon={isFavorite ? faHeart : faHeartCirclePlus} /></i>
                        </div>
                        <div className="flex justify-around items-center mt-2">
                            <div>
                                <button
                                    onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                                    className="bg-primary text-white py-1 px-2 rounded"
                                >
                                    -
                                </button>
                                <span className="mx-4">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="bg-primary text-white py-1 px-2 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <button onClick={handleAddToCart} className="bg-primary text-white py-1 px-2 rounded">Añadir al carrito</button>
                            <Toaster/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}