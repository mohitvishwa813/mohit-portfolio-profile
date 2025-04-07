
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-portfolio-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Additional animated particles */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full blur-xl bg-portfolio-teal/10 animate-float"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 3 + 6}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto">
        <div className="animate-enhanced-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <p className="text-portfolio-teal mb-5 font-mono tracking-wider group flex items-center">
            <span className="mr-2 h-[1px] w-5 bg-portfolio-teal transition-all duration-300 group-hover:w-10"></span>
            Hi, my name is
          </p>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-portfolio-lightest-slate mb-4 animate-enhanced-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-lightest-slate to-portfolio-light-slate relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-portfolio-teal after:to-transparent after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-700">
            Mohit Vishwakarma.
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-portfolio-slate mb-6 animate-enhanced-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          I build things for the web.
        </h2>
        
        <div className="animate-enhanced-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
          <p className="text-portfolio-slate max-w-xl mb-12 text-lg relative">
            I'm a <HoverCard>
              <HoverCardTrigger>
                <span className="text-portfolio-teal cursor-pointer relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-portfolio-teal/50 after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">full stack developer</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-portfolio-light-navy/80 text-portfolio-slate border border-portfolio-teal/30 backdrop-blur-lg">
                <div className="flex flex-col space-y-2">
                  <span className="text-portfolio-teal font-medium">Tech Stack:</span>
                  <div className="grid grid-cols-2 gap-1">
                    <span className="text-xs">• React/Next.js</span>
                    <span className="text-xs">• Node.js</span>
                    <span className="text-xs">• MongoDB</span>
                    <span className="text-xs">• Tailwind CSS</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard> specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, responsive web applications with modern technologies.
          </p>
        </div>
        
        <div className="animate-enhanced-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
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

      {/* Modernized animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover:translate-y-1 transition-transform duration-300"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="flex flex-col items-center gap-2">
          <p className="text-portfolio-teal text-xs font-mono tracking-wider animate-pulse">scroll down</p>
          <ChevronDown className="h-5 w-5 text-portfolio-teal animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
