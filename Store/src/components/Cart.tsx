import { useEffect, useState } from "react"
import Header from "./Header"

export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        setCart(storedCart)
    }, [])

    const handleQuantityChange = (productId, action) => {
        const updatedCart = cart
        .map((product) => {
            if (product.id === productId) {
                const newQuantity = action === "increase" ? product.quantity + 1 : product.quantity - 1;
                return { ...product, quantity: newQuantity };
            }
            return product;
        })
        .filter((product) => product.quantity > 0)

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        window.dispatchEvent(new Event('storage'));
    };

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    return (
        <>
            <Header />
            <div className="w-[300px] mx-auto mt-12 pb-[80px]">
                <h1 className="text-2xl font-bold mb-2 ml-4">Carrito</h1>
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
                                <div className="mt-2 flex justify-between">
                                    <p className="text-lg text-gray-700 font-medium">S/ {product.price}</p>
                                    <div>
                                        <button
                                            onClick={() => handleQuantityChange(product.id, "decrease")}
                                            className="bg-primary text-white py-1 px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="mx-4">{product.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(product.id, "increase")}
                                            className="bg-primary text-white py-1 px-2 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>

                        ))}
                    </ul>
                )}
            </div>
            <div className="fixed bottom-0 text-center w-full bg-primary text-white text-lg p-2 rounded-t-lg">
                <div className="flex justify-between">
                <p>Total:</p>
                <h2>S/ {total.toFixed(2)}</h2>
                </div>
                <button className="w-60 mt-2 p-2 bg-white text-primary rounded-3xl font-bold" >Continuar Compra</button>
            </div>

        </>
    )
}