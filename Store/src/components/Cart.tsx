import { useEffect, useState } from "react"
import Header from "./Header"

export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        const cartArray = Object.values(storedCart);
        setCart(cartArray)
        console.log(cartArray);
        
    }, [])
    return (
        <>
            <Header/>
            <div className="w-[300px] mx-auto mt-12">
                <h1 className="text-2xl font-bold mb-2 text-center">Carrito</h1>
                {cart.length === 0 ? (
                    <p>No tienes productos agregados al carrito.</p>
                ) : (
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id} className="p-4 mb-2">
                                <div className="flex justify-evenly items-center">
                                <img src={product.img} alt={product.title} className="w-16 h-16" />
                                <h2 className="font-semibold ml-2">{product.title}</h2>
                                </div>
                                <div className="mt-2">
                                <p className="text-lg text-gray-700 font-medium">S/ {product.price}</p>
                                </div>
                                {/* Si tienes más propiedades puedes mostrarlas aquí */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}