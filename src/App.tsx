import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import "./App.css";

function AppContent() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";


  useEffect(() => {
    // Solo aplica el scroll de aparición si estás en "/"
    if (location.pathname === "/") {
      const onScroll = () => {
        setShowNavbar(window.scrollY > 10);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      setShowNavbar(true); // Navbar fijo en las otras páginas
    }
  }, [location]);

  return (
    <>
      <Navbar visible={showNavbar} isStatic={!isHome} />


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
              <div className="footer">
                <p>© 2025 Mangify. Todos los derechos reservados.</p>
              </div>
            </>
          }
        />
        <Route path="/documentacion" element={<Documentation />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
