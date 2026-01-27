import { useEffect, useState } from "react";
import "./Products.css";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

return (
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} width={150} />
        <h3>{product.name}</h3>
        <p>Price: {product.price} lei </p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

}

export default Products;
