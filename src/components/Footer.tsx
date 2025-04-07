
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-navy border-t border-portfolio-lightest-navy">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-portfolio-slate text-sm">
            &copy; {currentYear} Mohit Vishwakarma. All Rights Reserved.
          </p>
          <p className="text-portfolio-slate text-xs mt-2 flex items-center justify-center">
            Designed & Built with 
            <Heart className="h-3 w-3 text-portfolio-teal mx-1 animate-pulse" /> 
            by Mohit Vishwakarma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
