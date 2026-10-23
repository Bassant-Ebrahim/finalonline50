import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductDetails(){
  const { id } = useParams();
  const [product,setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    const all = JSON.parse(localStorage.getItem("products") || "[]");
    setProduct(all.find(p => p.id == id));
  },[id]);

  if(!product) return <div className="p-10">Loading...</div>;

  const addFav = () => {
    const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    if(!fav.find(p => p.id === product.id)){
      localStorage.setItem("favorites", JSON.stringify([...fav, product]));
      alert("Added to Favorites ❤️");
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img src={product.thumbnail} className="w-full rounded-2xl" />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500">{product.brand} - {product.category}</p>
        <p className="text-yellow-500 mt-2">★ {product.rating}</p>
        <p className="text-2xl font-bold text-green-700 mt-4">{product.price} EGP</p>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <div className="flex gap-3 mt-6">
          <button onClick={()=>dispatch(addToCart(product))} className="flex-1 bg-green-600 text-white py-3 rounded-lg">Add to Cart</button>
          <button onClick={addFav} className="border px-6 py-3 rounded-lg">❤️</button>
        </div>
      </div>
    </div>
  )
}