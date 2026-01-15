import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Starea pentru coș
  const [cart, setCart] = useState([]);

  // Funcție pentru a adăuga produse în coș
  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // dacă produsul există deja, crește cantitatea
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // dacă nu există, adaugă produsul cu qty = 1
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  }

  // Funcție pentru a actualiza cantitatea din Cart
  function updateQty(id, newQty) {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, qty: newQty } : item))
        .filter((item) => item.qty > 0) // elimină produsele cu qty 0
    );
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar cart={cart} /> {/* optional: poți arăta nr. produse în navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateQty={updateQty} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
