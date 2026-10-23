export default function Footer(){
  return (
    <footer style={{
      background: "#0a3d24",
      color: "white",
      padding: "30px 40px",
      marginTop: "40px",
      borderRadius: "24px 24px 0 0",
      textAlign: "center"
    }}>
      <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"20px", textAlign:"left", maxWidth:"1200px", margin:"0 auto"}}>
        
        <div>
          <h3 style={{fontWeight:"900"}}>💊 PharmaCare</h3>
          <p style={{color:"#a7d6bb", fontSize:"13px", marginTop:"8px", maxWidth:"300px"}}>
            صحتك تهمنا - جميع الأدوية ومنتجات العناية متوفرة 24 ساعة.
            توصيل مجاني فوق 500 جنيه.
          </p>
        </div>

        <div>
          <h4 style={{fontSize:"14px", marginBottom:"10px"}}>روابط سريعة</h4>
          <div style={{display:"flex", flexDirection:"column", gap:"5px", color:"#a7d6bb", fontSize:"13px"}}>
            <span>Home</span>
            <span>Products</span>
            <span>Brands</span>
          </div>
        </div>

        <div>
          <h4 style={{fontSize:"14px", marginBottom:"10px"}}>تواصل معنا</h4>
          <p style={{color:"#a7d6bb", fontSize:"13px"}}>الخط الساخن: 19011<br/>pharmacare@email.com</p>
        </div>
      </div>

      <div style={{borderTop:"1px solid #1a5a36", marginTop:"20px", paddingTop:"15px", fontSize:"12px", color:"#a7d6bb"}}>
        © 2026 PharmaCare - Your health, your way | 19011
      </div>
    </footer>
  )
}