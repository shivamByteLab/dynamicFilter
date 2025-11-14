export function addToCart(product) {
  try {
  
    const existingRaw = localStorage.getItem("cartProduct");
    const existing = existingRaw ? JSON.parse(existingRaw) : [];

   
    const cart = Array.isArray(existing) ? existing : [existing];

  
    const existingIndex = cart.findIndex((p) => p.id === product.id);
    if (existingIndex !== -1) {
      
      cart[existingIndex].quantity =
        (cart[existingIndex].quantity || 1) + (product.quantity || 1);
    } else {
    
      cart.push({ ...product, quantity: product.quantity || 1 });
    }

 
    localStorage.setItem("cartProduct", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    console.log(`${product.name} added to cart.`);
  } catch (err) {
    console.error("Failed to add to cart:", err);
  }
}
