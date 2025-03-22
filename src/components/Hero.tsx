
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-70"></div>
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div 
        className={`container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="order-2 lg:order-1">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-primary/10 text-primary rounded-full font-medium">
            SSIT'27
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Creating elegant digital experiences
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
           I aspire to continue growing as a professional engineer, contributing to technological advancements that redefine possibilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-lg transition-transform hover:translate-y-[-2px]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-lg transition-transform hover:translate-y-[-2px]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-6 transform-gpu"></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/uploads/profile.jpg"
                alt="Profile"
                className="w-full h-auto object-cover aspect-[4/5] max-w-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
