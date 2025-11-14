import { useEffect, useState } from "react";

const Cart = ({setIsOpen}) => {
  const [products, setProducts] = useState([]);


 
  const saveCart = (cart) => {
    localStorage.setItem("cartProduct", JSON.stringify(cart));
    setProducts(cart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  useEffect(() => {
    setProducts(loadCart());

    const handleCartUpdated = () => {
      setProducts(loadCart());
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

 
  const increaseQuantity = (index) => {
    const updatedCart = [...products];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    saveCart(updatedCart);
  };


  const decreaseQuantity = (index) => {
    const updatedCart = [...products];
    const currentQty = updatedCart[index].quantity || 1;
    if (currentQty > 1) {
      updatedCart[index].quantity = currentQty - 1;
    } else {
      updatedCart.splice(index, 1);
    }
    saveCart(updatedCart);
  };

  const total = products.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (products.length === 0) {
    return <aside style={{padding:"10px",marginTop:"50px"}}>Your cart is empty.</aside>;
  }

  return (
    <aside>
      <h2 style={{display:"inline-block"}}>Your Cart</h2>
      <span style={{float:"right",fontSize:"1.5rem",color:"red",cursor:"pointer"}} onClick={() => setIsOpen(false)}>Close</span>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> – ₹{product.price?.toFixed(2)}
            <div style={{ margin: "10px", display: "inline-block" }}>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <span style={{ padding: "5px" }}>{product.quantity || 1}</span>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <footer>
        <strong>Total:</strong> ₹{total.toFixed(2)}
      </footer>
      {/* <button>Buy</button> */}
    </aside>
  );
};

export default Cart;


  const loadCart = () => {
    try {
      const raw = localStorage.getItem("cartProduct");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (err) {
      console.error("Failed to load cart from localStorage:", err);
      return [];
    }
  };
