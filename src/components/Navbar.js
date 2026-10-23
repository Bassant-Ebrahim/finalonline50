import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){
  const cart = useSelector(s => s.cart.items);
  return (
    <div className="navbar">
      <Link to="/" className="logo" style={{textDecoration:'none'}}>💊 PharmaCare</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/cart" className="cart-btn">Cart ({cart.length})</Link>
      </div>
    </div>
  )
}