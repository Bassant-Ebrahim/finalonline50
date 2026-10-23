import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function Cart(){
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if(items.length === 0){
    return (
      <div className="empty-cart">
        <h2>🛒 الكارت فاضي</h2>
        <Link to="/products"><button className="checkout-btn">روح للمنتجات</button></Link>
      </div>
    )
  }

  return (
    <div style={{maxWidth:"700px", margin:"20px auto", padding:"20px"}}>
      <div style={{
        background:"white", borderRadius:"20px", padding:"25px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.08)", border:"1px solid #eee"
      }}>
        
        <h1 style={{color:"#0a7a42", fontWeight:"900"}}>💊 PHARMACARE</h1>
        <p style={{fontSize:"14px", margin:"5px 0"}}>فاتورة شراء</p>
        <p style={{fontSize:"11px", color:"#888"}}>التاريخ: {new Date().toLocaleDateString('ar-EG')} | رقم الفاتورة: #{Math.floor(Math.random()*9000)+1000}</p>
        
        <hr style={{margin:"15px 0", border:"none", borderTop:"1px solid #eee"}}/>

        {items.map(item => (
          <div key={item.id} style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"15px"}}>
            
            <div style={{flex:1}}>
              <h4 style={{fontSize:"14px", margin:0}}>{item.title}</h4>
              <span style={{fontSize:"11px", color:"#888"}}>{item.brand}</span>
              <div style={{display:"flex", alignItems:"center", gap:"8px", marginTop:"8px"}}>
                <button onClick={()=>dispatch(decreaseQty(item.id))} style={{width:"28px", height:"28px", borderRadius:"50%", border:"1px solid #ddd", background:"white", cursor:"pointer"}}>-</button>
                <span style={{fontWeight:"bold", minWidth:"20px", textAlign:"center"}}>{item.qty}</span>
                <button onClick={()=>dispatch(increaseQty(item.id))} style={{width:"28px", height:"28px", borderRadius:"50%", border:"none", background:"#0a7a42", color:"white", cursor:"pointer"}}>+</button>
              </div>
            </div>

            <div style={{textAlign:"right", display:"flex", alignItems:"center", gap:"12px"}}>
              <span style={{fontWeight:"bold"}}>{item.price * item.qty} EGP</span>
              <button onClick={()=>dispatch(removeFromCart(item.id))} style={{width:"24px", height:"24px", borderRadius:"50%", border:"none", background:"#ffe0e0", color:"red", cursor:"pointer"}}>x</button>
            </div>

          </div>
        ))}

        <hr style={{margin:"15px 0", border:"none", borderTop:"2px solid #0a7a42"}}/>
        
        <div style={{display:"flex", justifyContent:"space-between", fontWeight:"900", fontSize:"18px"}}>
          <span>الإجمالي:</span>
          <span style={{color:"#0a7a42"}}>{total} EGP</span>
        </div>
        <p style={{fontSize:"10px", color:"#999", marginTop:"5px"}}>شامل الضريبة - توصيل مجاني فوق 500 جنيه<br/>للاستفسار 19011</p>

        <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
          <Link to="/checkout" style={{flex:1}}>
            <button style={{width:"100%", background:"#0a7a42", color:"white", border:"none", padding:"12px", borderRadius:"12px", fontWeight:"bold", cursor:"pointer"}}>💳 ادفع الآن</button>
          </Link>
          <button onClick={()=>dispatch(clearCart())} style={{background:"#f5f5f5", border:"none", padding:"12px 15px", borderRadius:"12px", cursor:"pointer", fontSize:"12px"}}>امسح الكل</button>
        </div>

      </div>
    </div>
  )
}