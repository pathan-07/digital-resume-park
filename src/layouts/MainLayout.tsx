import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({
  children
}: MainLayoutProps) => {
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
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary">Portfolio</Link>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              <Link to="/#projects" className="text-gray-600 hover:text-primary">Projects</Link>
              <Link to="/#skills" className="text-gray-600 hover:text-primary">Skills</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-primary">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow bg-slate-600 pt-20">{children}</main> {/* Added padding top to avoid overlap */}
      <Footer />
    </div>
  );
};
export default MainLayout;