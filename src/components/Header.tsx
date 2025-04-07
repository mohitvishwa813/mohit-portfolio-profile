
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-portfolio-navy/90 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Updated with animation */}
          <a href="#" className="text-portfolio-teal font-heading text-2xl font-bold transition-all duration-300 hover:scale-110">
            <span className="text-portfolio-teal animate-pulse">M</span>
            <span className="text-portfolio-lightest-slate">V</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavLinkClick('about')} className="nav-link hover:text-portfolio-teal transition-colors duration-300">
              <span className="text-portfolio-teal">01.</span> About
            </button>
            <button onClick={() => handleNavLinkClick('skills')} className="nav-link hover:text-portfolio-teal transition-colors duration-300">
              <span className="text-portfolio-teal">02.</span> Skills
            </button>
            <button onClick={() => handleNavLinkClick('experience')} className="nav-link hover:text-portfolio-teal transition-colors duration-300">
              <span className="text-portfolio-teal">03.</span> Experience
            </button>
            <button onClick={() => handleNavLinkClick('projects')} className="nav-link hover:text-portfolio-teal transition-colors duration-300">
              <span className="text-portfolio-teal">04.</span> Projects
            </button>
            <button onClick={() => handleNavLinkClick('contact')} className="nav-link hover:text-portfolio-teal transition-colors duration-300">
              <span className="text-portfolio-teal">05.</span> Contact
            </button>
            <a href="https://drive.google.com/file/d/169nphvio28UrdOQvXtcVKQY6joge_J3B/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-primary transition-transform duration-300 hover:scale-105">
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden text-portfolio-lightest-slate hover:text-portfolio-teal hover:bg-transparent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="animate-spin-slow" /> : <Menu size={24} className="hover:rotate-12 transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation - Updated with animations */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-portfolio-light-navy/95 backdrop-blur-sm z-50 flex flex-col justify-center items-center md:hidden animate-fadeIn">
            <nav className="flex flex-col space-y-6 text-center">
              <button onClick={() => handleNavLinkClick('about')} className="nav-link text-xl hover:text-portfolio-teal transition-all duration-300 hover:translate-x-2">
                <span className="text-portfolio-teal">01.</span> About
              </button>
              <button onClick={() => handleNavLinkClick('skills')} className="nav-link text-xl hover:text-portfolio-teal transition-all duration-300 hover:translate-x-2">
                <span className="text-portfolio-teal">02.</span> Skills
              </button>
              <button onClick={() => handleNavLinkClick('experience')} className="nav-link text-xl hover:text-portfolio-teal transition-all duration-300 hover:translate-x-2">
                <span className="text-portfolio-teal">03.</span> Experience
              </button>
              <button onClick={() => handleNavLinkClick('projects')} className="nav-link text-xl hover:text-portfolio-teal transition-all duration-300 hover:translate-x-2">
                <span className="text-portfolio-teal">04.</span> Projects
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="nav-link text-xl hover:text-portfolio-teal transition-all duration-300 hover:translate-x-2">
                <span className="text-portfolio-teal">05.</span> Contact
              </button>
              <a href="https://drive.google.com/file/d/169nphvio28UrdOQvXtcVKQY6joge_J3B/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-primary transition-all duration-300 hover:scale-105 hover:shadow-glow">
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
