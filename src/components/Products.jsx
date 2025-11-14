import { useState } from "react"
import { products as paroductSaved } from "../data/products"
import Card from "./Card"
import Filters from "./Filters"
import Sidebar from "./Sidebar"

const Products = () => {
  const [allProducts] = useState(paroductSaved);
  const [products, setProducts] = useState(paroductSaved);

  return (
    <section id="products-container">
      <header>
        <h2>Products</h2>
        <Sidebar />
      </header>

      <div className="products">
        <div className="filters">
          <Filters
            allProducts={allProducts}
            setProducts={setProducts}
          />
        </div>

        <div className="cards">
          {products.map((product) => (
            <div key={product.id}>
              <Card productDetails={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products