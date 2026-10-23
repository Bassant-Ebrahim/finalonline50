import { useEffect, useState } from "react";
import { getProducts } from "../Data";
import ProductCard from "../components/ProductCard";
import Offer from "../components/Offer";

export default function Home(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const best = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div>
      <Offer />

      <h2 className="section-title">🔥 Best Sellers - عشوائي</h2>
      <div className="products-grid">
        {best.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <h2 className="section-title">All Products</h2>
      <div className="products-grid">
        {products.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}