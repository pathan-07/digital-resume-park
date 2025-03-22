import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">Portfolio</Link>
            <div className="flex gap-6">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </Link>
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow bg-slate-600 pt-20">{children}</main> {/* Added padding top to avoid nav overlap */}
      <Footer />
    </div>
  );
};
export default MainLayout;