import { useEffect, useState } from "react";
import { getProducts } from "../Data";
import ProductCard from "../components/ProductCard";

export default function Brands(){
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => { getProducts().then(setProducts); }, []);

  const brands = ["All", "GSK", "Puritan's", "Now Foods", "CeraVe", "Pampers", "La Roche"];
  const filtered = active === "All" ? products : products.filter(p => p.brand === active);

  return (
    <div>
      <h1 style={{padding:'20px 40px 0', fontSize:'28px', fontWeight:'900'}}>Brands</h1>
      
      <div className="brands-filters">
        {brands.map(b => (
          <button key={b} onClick={()=>setActive(b)} className={`brand-btn ${active===b?'active':''}`}>
            {b}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}