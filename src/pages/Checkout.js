import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart } from "../store/cartSlice";

export default function Checkout(){
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price, 0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({name:"", phone:"", address:""});

  const handleOrder = (e) => {
    e.preventDefault();
    if(!form.name || !form.phone) return alert("املي البيانات");
    setDone(true);
    dispatch(clearCart());
  }

  if(done){
    return (
      <div className="invoice-container">
        <div className="invoice-card success-box">
          <div className="success-icon">✅</div>
          <h2 style={{color:'#0a7a42', margin:'15px 0'}}>تم تأكيد طلبك!</h2>
          <p>فاتورة #{Math.floor(Math.random()*9000)+1000}</p>
          <p style={{fontSize:'14px', color:'#777', marginTop:'10px'}}>سيتم التواصل معك على {form.phone} خلال 30 دقيقة<br/>توصيل لحد البيت - 19011</p>
          <a href="/" className="btn-pay" style={{display:'block', marginTop:'20px', textDecoration:'none', textAlign:'center'}}>ارجعي للرئيسية</a>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h2>Checkout - {total} EGP</h2>
        <p style={{textAlign:'center', fontSize:'12px', color:'#888', marginBottom:'20px'}}>{items.length} منتجات في الفاتورة</p>
        
        <form onSubmit={handleOrder}>
          <div className="form-group">
            <label>Full Name *</label>
            <input placeholder="مثال: سارة أحمد" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input placeholder="01xxxxxxxxx" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          </div>
          <div className="form-group">
            <label>Address *</label>
            <input placeholder="العنوان بالتفصيل" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
          </div>
          <button type="submit" className="btn-pay" style={{width:'100%', marginTop:'10px'}}>Confirm Order - {total} EGP</button>
        </form>
      </div>
    </div>
  )
}