export const addToFavorites = (product) => {
  const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  if(!fav.find(p => p.id === product.id)){
    fav.push(product);
    localStorage.setItem("favorites", JSON.stringify(fav));
  }
};