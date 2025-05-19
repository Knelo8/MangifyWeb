// src/components/Navbar.tsx
interface NavbarProps {
  visible: boolean;
}

const Navbar = ({ visible }: NavbarProps) => {
  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      <div className="navbar-content">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li className="logo-link">LOGO</li>
          <li>Documentación</li>          
          <li>FAQ</li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
