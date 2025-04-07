
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="animate-fade-in opacity-0">
          <p className="text-portfolio-teal mb-5 font-mono">Hi, my name is</p>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-portfolio-lightest-slate mb-4 animate-fade-in opacity-0 animation-delay-100">
          Mohit Vishwakarma.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0 animation-delay-200">
          I build things for the web.
        </h2>
        <div className="animate-fade-in opacity-0 animation-delay-300">
          <p className="text-portfolio-slate max-w-xl mb-12 text-lg">
            I'm a <span className="text-portfolio-teal">full stack developer</span> specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, responsive web applications with modern technologies.
          </p>
        </div>
        <div className="animate-fade-in opacity-0 animation-delay-400">
          <Button 
            className="btn-primary group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check out my work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
