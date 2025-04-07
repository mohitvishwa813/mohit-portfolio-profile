
import React from 'react';
import { 
  Code, 
  Database, 
  Terminal, 
  Layers, 
  Smartphone, 
  PenTool,
  Server,
  LayoutGrid
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["C++", "JavaScript", "TypeScript"],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Git & GitHub", "VS Code", "Firebase", "Responsive Design", "Vercel/Netlify Deployment"],
    },
  ];

  return (
    <section id="skills" className="bg-portfolio-light-navy/30 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 section-content">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card hover:border-portfolio-teal/30 border border-transparent"
            >
              <div className="flex items-center mb-4 text-portfolio-teal">
                {category.icon}
                <h3 className="ml-2 text-xl font-semibold text-portfolio-lightest-slate">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 section-content animation-delay-200">
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-lightest-slate">
            Current Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Placement Prep",
                description: "Preparing for job placements & TCS exam",
                icon: <Terminal className="h-5 w-5" />
              },
              {
                title: "Portfolio Projects",
                description: "Building projects using Next.js & MongoDB",
                icon: <Layers className="h-5 w-5" />
              },
              {
                title: "Skill Enhancement",
                description: "Improving English fluency & AI integration",
                icon: <PenTool className="h-5 w-5" />
              }
            ].map((focus, index) => (
              <div key={index} className="p-5 rounded-lg bg-portfolio-light-navy border border-portfolio-lightest-navy">
                <div className="text-portfolio-teal mb-3">
                  {focus.icon}
                </div>
                <h4 className="text-lg font-medium text-portfolio-lightest-slate mb-2">
                  {focus.title}
                </h4>
                <p className="text-portfolio-slate">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
