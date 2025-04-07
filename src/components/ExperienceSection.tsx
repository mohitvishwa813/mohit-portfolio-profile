
import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-portfolio-lightest-navy/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Experience</h2>
        
        <div className="max-w-3xl mx-auto section-content">
          <div className="relative border-l-2 border-portfolio-teal pl-8 pb-8 group">
            {/* Animated timeline dot */}
            <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-portfolio-teal glow-effect-teal"></div>
            
            <div className="card backdrop-blur-sm bg-portfolio-light-navy/50 border border-transparent hover:border-portfolio-teal/30 transform transition-all duration-500 group-hover:translate-x-1">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-portfolio-lightest-slate group-hover:text-portfolio-teal transition-colors duration-300">
                  Software Engineering Intern
                </h3>
                <span className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded text-sm border border-portfolio-teal/30 backdrop-blur-sm">
                  Zangoh
                </span>
              </div>
              
              <div className="flex flex-wrap items-center text-portfolio-light-slate mb-6 text-sm">
                <div className="flex items-center mr-4 mb-2 bg-portfolio-navy/50 px-2 py-1 rounded-full">
                  <Calendar className="h-4 w-4 mr-1 text-portfolio-teal" />
                  <span>2024</span>
                </div>
                <div className="flex items-center mb-2 bg-portfolio-navy/50 px-2 py-1 rounded-full">
                  <MapPin className="h-4 w-4 mr-1 text-portfolio-teal" />
                  <span>Remote</span>
                </div>
              </div>
              
              <div className="space-y-3 text-portfolio-light-slate">
                {[
                  "Upgraded the company websites: Zangoh.com & Zangoh.studio",
                  "Revamped UI/UX for better interaction and performance",
                  "Implemented new features to boost user engagement",
                  "Worked collaboratively with the design and backend team"
                ].map((point, index) => (
                  <p key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="text-portfolio-teal mr-2">▹</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: point.replace(
                        /(Zangoh\.com|Zangoh\.studio)/g, 
                        '<span class="text-portfolio-lightest-slate">$1</span>'
                      ) 
                    }} />
                  </p>
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {["React.js", "Next.js", "Tailwind CSS", "Node.js", "UI/UX"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-tag bg-portfolio-navy/50 backdrop-blur-sm border border-portfolio-light-navy hover:border-portfolio-teal/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center section-content animation-delay-200">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-portfolio-teal/5 blur-xl rounded-full"></div>
              <p className="relative z-10 text-portfolio-light-slate italic mb-6 px-4 py-3 rounded-lg border border-portfolio-lightest-navy/30 backdrop-blur-sm bg-portfolio-light-navy/30">
                <Award className="inline-block mr-2 h-4 w-4 text-portfolio-teal animate-pulse" />
                Looking for new opportunities to grow and contribute as a developer
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center relative overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Hire Me
                </span>
                <span className="absolute inset-0 bg-portfolio-teal/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
