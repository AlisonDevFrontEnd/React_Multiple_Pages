// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./App.css"; // Arquivo CSS para estilização

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}

export default Navbar;