
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="max-w-3xl mx-auto section-content">
          <div className="relative border-l-2 border-portfolio-teal pl-8 pb-8">
            {/* Timeline dot */}
            <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-portfolio-teal"></div>
            
            <div className="card">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-portfolio-lightest-slate">
                  Software Engineering Intern
                </h3>
                <span className="px-3 py-1 bg-portfolio-teal/20 text-portfolio-teal rounded text-sm">
                  Zangoh
                </span>
              </div>
              
              <div className="flex flex-wrap items-center text-portfolio-light-slate mb-6 text-sm">
                <div className="flex items-center mr-4 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2024</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Remote</span>
                </div>
              </div>
              
              <div className="space-y-3 text-portfolio-light-slate">
                <p className="flex items-start">
                  <span className="text-portfolio-teal mr-2">▹</span>
                  Upgraded the company websites: <span className="text-portfolio-lightest-slate">Zangoh.com</span> & <span className="text-portfolio-lightest-slate">Zangoh.studio</span>
                </p>
                <p className="flex items-start">
                  <span className="text-portfolio-teal mr-2">▹</span>
                  Revamped UI/UX for better interaction and performance
                </p>
                <p className="flex items-start">
                  <span className="text-portfolio-teal mr-2">▹</span>
                  Implemented new features to boost user engagement
                </p>
                <p className="flex items-start">
                  <span className="text-portfolio-teal mr-2">▹</span>
                  Worked collaboratively with the design and backend team
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">UI/UX</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center section-content animation-delay-200">
            <p className="text-portfolio-light-slate italic">
              Looking for new opportunities to grow and contribute as a developer
            </p>
            <div className="mt-4">
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
