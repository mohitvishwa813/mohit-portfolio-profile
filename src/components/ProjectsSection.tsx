
import React from 'react';
import { ExternalLink, Github, AlignLeft } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Event Finder Platform",
      description: "MERN-based platform where event organizers list services and users can book them with UPI QR-based payments",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blog App with Firebase Auth",
      description: "A responsive blog application with user authentication, data persistence and content management system",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Chat with Socket.io",
      description: "Interactive chat application with real-time messaging, user status, and notifications",
      technologies: ["Socket.io", "Node.js", "Express.js", "React.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Competition Platform Prototype",
      description: "Platform for hosting and participating in React and CSS challenges with leaderboard functionality",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "React.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Flight Booking Platform",
      description: "Full-stack flight search and booking application with user profiles and booking management",
      technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="bg-portfolio-light-navy/30 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-content">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card flex flex-col h-full border border-transparent hover:border-portfolio-teal/30"
            >
              <div className="flex items-start justify-between mb-4">
                <AlignLeft className="text-portfolio-teal h-6 w-6" />
                <div className="flex space-x-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolio-light-slate hover:text-portfolio-teal">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-portfolio-light-slate hover:text-portfolio-teal">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-portfolio-lightest-slate">
                {project.title}
              </h3>
              
              <p className="text-portfolio-slate mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center section-content animation-delay-200">
          <p className="text-portfolio-light-slate mb-4">
            Interested in more projects? Check out my GitHub repository
          </p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Github className="mr-2 h-4 w-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
