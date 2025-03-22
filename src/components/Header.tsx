import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold">
          Portfolio
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <a href="#about" className="hover:text-primary transition-colors">
        About
      </a>
      <a href="#skills" className="hover:text-primary transition-colors">
        My Expertise
      </a>
      <a href="#projects" className="hover:text-primary transition-colors">
        Projects
      </a>
      <a href="#experience" className="hover:text-primary transition-colors">
        Experience
      </a>
      <a href="#contact" className="hover:text-primary transition-colors">
        Contact
      </a>
    </>
  );
};

export default Header;