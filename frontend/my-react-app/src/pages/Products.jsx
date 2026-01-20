import "./Products.css";

function Products({addToCart}) {
  // Lista ta de produse
  const products = [
    {
      id: 1,
      name: "Smartdisplay Boost/Temp Gauged",
      price: 1500,
      image: "/sd.jpeg",
    },
    {
      id: 2,
      name: "Prosop microfibre",
      price: 80,
      image: "/prosop.jpeg",
    },
    {
      id: 3,
      name: "Sticker BimGarage",
      price: 10,
      image: "sticker.jpeg",
    },
  ];

  return (
    <div className="products-container">
      <h1>Produsele Noastre</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} RON</p>
            <button onClick={() => addToCart(product)}>Adaugă în coș</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
