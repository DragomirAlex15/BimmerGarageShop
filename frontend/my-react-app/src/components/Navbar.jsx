import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/">Acasă</Link>
        <Link to="/products">Produse</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Coș</Link>
      </div>
    </nav>
  );
}

export default Navbar;
