
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-portfolio-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <p className="text-portfolio-teal mb-5 font-mono tracking-wider">Hi, my name is</p>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-portfolio-lightest-slate mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-lightest-slate to-portfolio-light-slate">
            Mohit Vishwakarma.
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          I build things for the web.
        </h2>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
          <p className="text-portfolio-slate max-w-xl mb-12 text-lg">
            I'm a <span className="text-portfolio-teal">full stack developer</span> specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, responsive web applications with modern technologies.
          </p>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
          <Button 
            className="btn-primary group relative overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center">
              Check out my work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <span className="absolute inset-0 bg-portfolio-teal/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </Button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-portfolio-teal flex justify-center pt-1">
          <div className="w-1 h-2 bg-portfolio-teal rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
