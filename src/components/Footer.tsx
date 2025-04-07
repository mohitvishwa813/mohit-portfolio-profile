
import React from 'react';
import { Heart, Coffee, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-navy border-t border-portfolio-lightest-navy/50 relative">
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-portfolio-navy"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center relative">
          <div className="mb-4 flex justify-center items-center space-x-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-portfolio-teal/70"></div>
            <Code className="h-5 w-5 text-portfolio-teal" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-portfolio-teal/70"></div>
          </div>
          
          <p className="text-portfolio-slate text-sm mb-3">
            &copy; {currentYear} Mohit Vishwakarma. All Rights Reserved.
          </p>
          
          <p className="text-portfolio-slate text-xs flex items-center justify-center">
            Designed & Built with 
            <Heart className="h-3 w-3 text-portfolio-teal mx-1 animate-pulse" /> 
            and
            <Coffee className="h-3 w-3 text-portfolio-teal mx-1" />
            by Mohit Vishwakarma
          </p>
          
          <div className="mt-4 text-xs text-portfolio-slate/60">
            <p>Frontend Developer • Full Stack Enthusiast • UI/UX Designer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
