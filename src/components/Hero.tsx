import { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <img
        src="/logo2.png"
        alt="Mangify Logo"
        className={`hero-logo ${scrolled ? "scrolled" : ""}`}
      />
    </section>
    
  );
};


export default Hero;
