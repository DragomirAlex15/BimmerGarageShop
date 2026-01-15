import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Acasă</Link>
      <Link to="/products">Produse</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Cos</Link>
    </nav>
  );
}

export default Navbar;
