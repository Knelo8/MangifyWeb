// src/components/Navbar.tsx
import { Link } from "react-router-dom";
interface NavbarProps {
  visible: boolean;
  isStatic?: boolean;
}

const Navbar = ({ visible, isStatic = false }: NavbarProps) => {
  return (
    <nav className={`navbar ${visible ? "visible" : ""} ${isStatic ? "static-navbar" : ""}`}>
      <div className="navbar-content">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Demo">DEMO</Link></li>
          <li className="logo-link">LOGO</li>
          <Link to="/documentacion">Documentación</Link>         
          <li>FAQ</li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
