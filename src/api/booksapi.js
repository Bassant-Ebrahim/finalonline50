export const getProducts = async () => {
  // نجيب صور شغالة 100% من dummyjson
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();

  // اسماء ادوية حقيقية هنلزقها على الصور اللي شغالة
  const medicineNames = [
    "Panadol Extra", "Vitamin C 1000mg", "Omega 3 Fish Oil", "CeraVe Cleanser",
    "Augmentin 1g", "Brufen 400mg", "Folic Acid 500", "Panthenol Cream",
    "Baby Diapers Pampers", "Sunscreen SPF 50+", "Paracetamol", "Zinc Tablets",
    "Iron Supplements", "Cetaphil Lotion", "Baby Shampoo", "Hand Sanitizer"
  ];
  const brands = ["GSK", "Puritan's", "Now Foods", "CeraVe", "Pampers", "La Roche", "PharmaCare"];
  const cats = ["Medicine", "Vitamins", "Skincare", "Baby Care"];

  const products = data.products.map((p, i) => ({
    id: p.id,
    title: medicineNames[i % medicineNames.length],
    brand: brands[i % brands.length],
    price: 25 + (i * 7) % 500,
    thumbnail: p.thumbnail, // ده اللي كان شغال عندك وظهر الخيار
    category: cats[i % cats.length],
    description: `Original ${medicineNames[i % medicineNames.length]} - Safe & Effective`,
    rating: (4 + Math.random()).toFixed(1)
  }));

  localStorage.setItem("products", JSON.stringify(products));
  return products;
};