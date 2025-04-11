import React, { useState } from "react";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = [
    {
      title: "Event Finder Platform",
      description:
        "MERN-based platform where event organizers list services and users can book them with UPI QR-based payments",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/mohitvishwa813/Major_Project",
      demo: "#",
    },
    {
      title: "Blog App with Firebase Auth",
      description:
        "A responsive blog application with user authentication, data persistence and content management system",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/mohitvishwa813/MSpace",
      demo: "#",
    },
    {
      title: "Real-Time Chat with Socket.io",
      description:
        "Interactive chat application with real-time messaging, user status, and notifications",
      technologies: ["Socket.io", "Node.js", "Express.js", "React.js"],
      github: "https://github.com/mohitvishwa813?tab=repositories",
      demo: "#",
    },
    {
      title: "Rest-countries-Api-project",
      description: "Rest-countries-Api-project",
      technologies: ["Javascript", "Css", "Html"],
      github: "https://github.com/mohitvishwa813/Rest-countries-Api-project",
      demo: "#",
    },
  ];

  const otherProjects = [
    {
      title: "Competition Platform ",
      description:
        "Platform for hosting and participating in React and CSS challenges with leaderboard functionality",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "React.js"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-portfolio-light-navy/30 px-6 py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-portfolio-lightest-navy/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-portfolio-teal/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Projects</h2>

        {/* Featured Projects Carousel */}
        <div className="mb-16 section-content">
          <h3 className="text-2xl font-semibold mb-8 text-portfolio-lightest-slate flex items-center">
            <Star className="mr-2 h-5 w-5 text-portfolio-teal" />
            Featured Projects
          </h3>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div
                    className="card m-2 h-[340px] bg-portfolio-light-navy border border-transparent hover:border-portfolio-teal/50 group flex flex-col p-6 backdrop-blur-sm bg-portfolio-navy/50"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Folder
                        className={`h-8 w-8 transition-all duration-300 ${
                          hoveredProject === index
                            ? "text-portfolio-teal"
                            : "text-portfolio-teal/70"
                        }`}
                      />
                      <div className="flex space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-portfolio-lightest-slate group-hover:text-portfolio-teal transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-portfolio-slate mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag text-xs bg-portfolio-navy/50 border border-portfolio-lightest-navy/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2 bg-portfolio-lightest-navy hover:bg-portfolio-teal/20 border-portfolio-teal/20" />
              <CarouselNext className="bg-portfolio-lightest-navy hover:bg-portfolio-teal/20 border-portfolio-teal/20" />
            </div>
          </Carousel>
        </div>

        {/* Other Projects Grid */}
        <div className="section-content animation-delay-200">
          <h3 className="text-2xl font-semibold mb-8 text-portfolio-lightest-slate flex items-center">
            <Folder className="mr-2 h-5 w-5 text-portfolio-teal" />
            Other Noteworthy Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="card flex flex-col h-full border border-transparent hover:border-portfolio-teal/30 bg-portfolio-light-navy/50 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-portfolio-teal h-6 w-6" />
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-portfolio-lightest-slate group-hover:text-portfolio-teal transition-colors">
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
        </div>

        <div className="mt-12 text-center section-content animation-delay-300">
          <p className="text-portfolio-light-slate mb-4">
            Interested in more projects? Check out my GitHub repository
          </p>
          <a
            href="https://github.com/mohitvishwa813?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
            </span>
            <span className="absolute inset-0 bg-portfolio-teal/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
