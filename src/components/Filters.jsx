import applyFilter from "../filter";
import { products as paroductSaved } from "../data/products";
import { useState } from "react";

const Filters = ({ allProducts, setProducts }) => {
  const categories = Array.from(new Set(paroductSaved.map(p => p.category)));
  categories.unshift("All")
  const [appliedCategory,setCategory] = useState('all')

  const handleFilter = (e) => {
    const category = e.target.title;
    setCategory(category)
    const filtered = applyFilter(allProducts, category);
    setProducts(filtered);
  };

  return (
    <ul>
      {categories.map((category, idx) => (
        <li
        className={`${appliedCategory===category.toLowerCase()?"active":""}`}
          onClick={handleFilter}
          title={category.toLowerCase()}
          key={category + idx}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
