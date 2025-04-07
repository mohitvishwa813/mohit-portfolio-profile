
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-10 section-content">
          <div className="md:col-span-2">
            <p className="mb-4 text-portfolio-light-slate">
              Hi, I'm Mohit Vishwakarma — a passionate and dedicated <span className="highlight">Full Stack Developer</span> with 
              hands-on experience in building modern, scalable, and responsive web applications.
            </p>
            
            <p className="mb-4 text-portfolio-light-slate">
              I'm currently in my final year of <span className="highlight">B.Tech in Computer Science Engineering</span> at 
              Prestige Institute of Engineering Management and Research, Indore. I've already worked as a 
              <span className="highlight"> Software Engineering Intern at Zangoh</span>, where I contributed to upgrading 
              the official websites and enhancing UI/UX to drive engagement.
            </p>
            
            <p className="mb-4 text-portfolio-light-slate">
              I come from a small town, <span className="highlight">Shujalpur (MP)</span>. My father is a carpenter, and I belong 
              to a middle-class family. I've worked hard to reach where I am, and I aim to break into the tech 
              industry with dedication and consistency.
            </p>
            
            <p className="mb-4 text-portfolio-light-slate">
              My development style focuses on clean code, intuitive design, and a performance-first approach. 
              I'm a quick learner, team player, and always ready to explore new technologies.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-lightest-slate">
                Education
              </h3>
              <div className="border-l-2 border-portfolio-teal pl-4">
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
          
          <div className="relative">
            <div className="relative z-10 rounded-md overflow-hidden border-2 border-portfolio-teal w-full max-w-[300px] mx-auto">
              {/* Replace with your actual profile photo */}
              <div className="aspect-square bg-portfolio-light-navy flex items-center justify-center text-portfolio-teal">
                {/* Placeholder until you add your own image */}
                <span className="text-6xl font-bold">MV</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-portfolio-teal rounded-md -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
