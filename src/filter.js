const applyFilter = (products, category) => {
  if (category === "all") return products;

  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
};

export default applyFilter;
