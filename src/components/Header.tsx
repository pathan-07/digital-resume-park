import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="">
        <div className="container mx-auto px-4 py-20 bg-slate-50">
          <nav className="flex flex-col gap-8 items-center text-xl">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      </div>
    </header>;
};
const NavLinks = ({
  onClick
}: {
  onClick?: () => void;
}) => {
  return <>
      <a href="#about" className="hover:text-primary transition-colors" onClick={onClick}>
        About
      </a>
      <a href="#skills" className="hover:text-primary transition-colors" onClick={onClick}>
        My Expertise
      </a>
      <a href="#projects" className="hover:text-primary transition-colors" onClick={onClick}>
        Projects
      </a>
      <a href="#experience" className="hover:text-primary transition-colors" onClick={onClick}>
        Experience
      </a>
      <a href="#contact" className="hover:text-primary transition-colors" onClick={onClick}>
        Contact
      </a>
    </>;
};
export default Header;