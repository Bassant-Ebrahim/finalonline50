import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Favorites(){
  const favs = useSelector(s => s.favorites?.items || s.favorites || []);
  
  if(!favs || favs.length === 0){
    return (
      <div className="empty-cart">
        <div style={{fontSize:'50px'}}>💚</div>
        <h2 style={{marginTop:'10px'}}>No Favorites Yet</h2>
        <p style={{color:'#888', margin:'10px 0 20px', fontSize:'14px'}}>دوسي على قلب أي منتج عشان تحفظيه هنا</p>
        <a href="/" className="btn-pay" style={{textDecoration:'none', display:'inline-block', padding:'12px 30px', borderRadius:'20px', background:'#0a7a42', color:'white'}}>تسوقي الآن</a>
      </div>
    )
  }

  return (
    <div>
      <h2 className="section-title">💚 Favorites ({favs.length})</h2>
      <div className="products-grid">
        {favs.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}