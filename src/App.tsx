import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from './components/Home';


function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNavbar(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar visible={showNavbar} />
      <Hero />
      <Home />
      <div className="footer">
        <p>© 2025 Mangify. Todos los derechos reservados.</p>
      </div>
    </>
  );
}

export default App;
