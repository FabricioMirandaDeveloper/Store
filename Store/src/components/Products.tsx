import { useEffect, useState } from "react";

export default function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://store-fcdd.onrender.com/products")
                const data = await response.json()
                setData(data)
            } catch (e) {
                console.log(e);
            }
        }

        fetchProducts()
    }, [])
    return (
        <main className="w-11/12 flex flex-col justify-center items-center gap-y-6 mt-24">
            {data.map((product, index) => (
                <a key={index} className="flex flex-col justify-center items-center w-48 border-solid border-2 border-primary text-center text-primary font-bold p-2" href="details.html?id=${product.id}">
                    <img className="w-48" src={product.img}/>
                    <div className="flex flex-col">
                        <span>{product.title}</span>
                        <span>S/ {product.price}</span>
                    </div>
                </a>
            ))}
        </main>
    )
}