import { useEffect, useState } from "react";
import { getProducts } from "../Data";
import ProductCard from "../components/ProductCard";

export default function Products(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2 className="section-title">All Products ({products.length})</h2>
      <div className="products-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}