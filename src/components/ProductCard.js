import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toggleFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  
  // نجيب كل المفضلات ونشوف المنتج ده موجود ولا لا
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      {/* الصورة والاسم - لما تدوسي يوديكي التفاصيل */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img 
          src={product.thumbnail} 
          alt={product.title}
          onError={(e) => e.target.src = "https://via.placeholder.com/300?text=Medicine"}
        />
        <span className="badge">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.brand}</p>
      </Link>

      {/* السعر والازرار */}
      <div className="price-row">
        <span className="price">{product.price} EGP</span>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          
          {/* زرار القلب ♥ */}
          <button
            onClick={() => dispatch(toggleFavorite(product))}
            style={{
              border: "none",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              background: isFavorite ? "#ff4d6d" : "#f0f0f0",
              color: isFavorite ? "white" : "#999",
              transition: "0.2s"
            }}
          >
            ♥
          </button>

          {/* زرار Add */}
          <button 
            className="add-btn" 
            onClick={() => dispatch(addToCart(product))}
          >
            + Add
          </button>

        </div>
      </div>
    </div>
  );
}