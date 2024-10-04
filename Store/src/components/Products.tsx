import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Product {
    id: number;
    description: string;
    title: string;
    price: number;
    img: string;
}

export default function Products() {
    const [data, setData] = useState<Product[]>([])
    const apiUrl = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
                const data = await response.json()
                setData(data)
            } catch (e) {
                console.log(e);
            }
        }
        
        fetchProducts()
    }, [])
    return (
        <main className="w-11/12 flex flex-col justify-center items-center gap-y-6 mt-24 mx-auto sm:grid sm:grid-cols-2 sm:justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((product) => (
                <Link key={product.id} className="flex flex-col justify-center items-center w-48 border-solid border-2 border-primary text-center text-primary font-bold p-2 rounded-lg" to={`/product/${product.id}`}>
                    <img className="w-48" src={product.img} alt={product.title}/>
                    <div className="flex flex-col">
                        <span>{product.title}</span>
                        <span>S/ {product.price}</span>
                    </div>
                </Link>
            ))}
        </main>
    )
}