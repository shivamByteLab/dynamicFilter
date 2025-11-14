import React from 'react'
import { addToCart } from '../addToCart'

const Card = ({productDetails}) => {
  return (
    <div className="card">
      <a href={`/product/${productDetails.id}`}>
       <img src={productDetails.image} alt="product" />
      <aside>
        <h4>{productDetails.name}</h4>
         <span>Price: </span><span>₨{productDetails.price}</span>
         <p style={{color:"slategray"}}>category: <span style={{color:"slateblue"}}>{productDetails.category}</span></p>
      </aside>
      
      </a>
       <button onClick={()=>addToCart(productDetails)}>Add to cart  </button>
    </div>
  )
}

export default Card