
import React from 'react';
import { Heart, Coffee, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-navy border-t border-portfolio-lightest-navy/50 relative">
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-portfolio-navy"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center relative">
          {/* Animated social icons */}
          <div className="mb-6 flex justify-center items-center space-x-5">
            {[
              { icon: <Github className="h-5 w-5" />, url: "https://github.com/mohitvishwa813", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/mohit-vishwakarma-b54a5b233/", label: "LinkedIn" },
              { icon: <Mail className="h-5 w-5" />, url: "mohitvishwa813@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                aria-label={social.label}
                className="text-portfolio-slate hover:text-portfolio-teal transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 p-2 relative group"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 rounded-full bg-portfolio-teal/0 group-hover:bg-portfolio-teal/10 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">{social.icon}</span>
              </a>
            ))}
          </div>
          
          <div className="mb-4 flex justify-center items-center space-x-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-portfolio-teal/70"></div>
            <Code className="h-5 w-5 text-portfolio-teal animate-spin-slow" />
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
          
          <div className="mt-4 text-xs text-portfolio-slate/60 hover:text-portfolio-slate/90 transition-colors duration-300">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-slate/70 to-portfolio-teal/70 cursor-default">Frontend Developer • Full Stack Enthusiast • UI/UX Designer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
