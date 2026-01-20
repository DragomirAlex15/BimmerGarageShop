import "./Cart.css";

function Cart({ cart, updateQty }) {
  // Calcul total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h1>Coșul tău</h1>

      {cart.length === 0 && <p>Coșul este gol</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "80px", marginRight: "10px" }}
          />
          <div className="cart-item-info">
            <p>{item.name}</p>
            <p>{item.price} RON</p>

            <div className="qty-controls">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2>Total: {total} RON</h2>
          <a className="btn" href="/checkout">
            Plasează comanda
          </a>
        </>
      )}
    </div>
  );
}

export default Cart;
