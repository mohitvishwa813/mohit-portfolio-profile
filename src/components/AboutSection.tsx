
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-light-navy/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-10 section-content">
          <div className="md:col-span-2">
            <div className="space-y-4 transform transition-all duration-500 hover:translate-x-1">
              <p className="mb-4 text-portfolio-light-slate leading-relaxed">
                Hi, I'm Mohit Vishwakarma — a passionate and dedicated <span className="highlight">Full Stack Developer</span> with 
                hands-on experience in building modern, scalable, and responsive web applications.
              </p>
              
              <p className="mb-4 text-portfolio-light-slate leading-relaxed">
                I'm currently in my final year of <span className="highlight">B.Tech in Computer Science Engineering</span> at 
                Prestige Institute of Engineering Management and Research, Indore. I've already worked as a 
                <span className="highlight"> Software Engineering Intern at Zangoh</span>, where I contributed to upgrading 
                the official websites and enhancing UI/UX to drive engagement.
              </p>
              
              <p className="mb-4 text-portfolio-light-slate leading-relaxed">
                I come from a small town, <span className="highlight">Shujalpur (MP)</span>. My father is a carpenter, and I belong 
                to a middle-class family. I've worked hard to reach where I am, and I aim to break into the tech 
                industry with dedication and consistency.
              </p>
              
              <p className="mb-4 text-portfolio-light-slate leading-relaxed">
                My development style focuses on clean code, intuitive design, and a performance-first approach. 
                I'm a quick learner, team player, and always ready to explore new technologies.
              </p>
            </div>
            
            <div className="mt-10 transform hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-lightest-slate flex items-center">
                <span className="bg-portfolio-teal w-1 h-5 mr-2 rounded-sm"></span>
                Education
              </h3>
              <div className="border-l-2 border-portfolio-teal pl-4 ml-[3px] relative">
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-portfolio-teal"></div>
                <p className="text-portfolio-lightest-slate font-medium">
                  B.Tech in Computer Science Engineering
                </p>
                <p className="text-portfolio-light-slate">
                  Prestige Institute of Engineering Management and Research, Indore
                </p>
                <p className="text-portfolio-slate text-sm">
                  Final Year • Roll No: 0863CS211100
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 rounded-md overflow-hidden border-2 border-portfolio-teal w-full max-w-[300px] mx-auto transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-[0_10px_20px_-10px_rgba(100,255,218,0.3)]">
              {/* Replace with your actual profile photo */}
              <div className="aspect-square bg-portfolio-light-navy flex items-center justify-center text-portfolio-teal relative overflow-hidden">
                {/* Placeholder until you add your own image */}
                <span className="text-6xl font-bold relative z-10">MV</span>
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-portfolio-teal rounded-md -z-0 transition-all duration-500 group-hover:translate-x-[-3px] group-hover:translate-y-[-3px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
