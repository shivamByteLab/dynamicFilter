import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { addToCart } from '../addToCart'

function getProduct(id) {
  return products.find(product => String(product.id) === String(id))
}

export default function ProductPage() {
  const { id } = useParams()
  const product = getProduct(id)

  if (!product) return <p>No product found</p>

  return (
  <div id='productPage'>
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={300} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>

    <div className='action'>
      <button id="buy">Buy</button>
      <button onClick={()=>addToCart(product)} id="addToCart">Add to cart</button>
    </div>
  </div>
  )
}
