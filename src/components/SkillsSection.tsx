
import React from 'react';
import { 
  Code, 
  Database, 
  Terminal, 
  Layers, 
  Smartphone, 
  PenTool,
  Server,
  LayoutGrid,
  Cpu,
  Globe
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Next.js", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      color: "from-emerald-500/20 to-green-500/20",
      iconColor: "text-emerald-400"
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["C++", "JavaScript", "TypeScript"],
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Git & GitHub", "VS Code", "Firebase", "Responsive Design", "Vercel/Netlify Deployment"],
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400"
    },
  ];

  return (
    <section id="skills" className="bg-portfolio-light-navy/30 px-6 py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-portfolio-navy to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-portfolio-navy to-transparent"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 section-content">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`card hover:border-portfolio-teal/30 border border-transparent backdrop-blur-sm relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`flex items-center mb-4 ${category.iconColor}`}>
                  {category.icon}
                  <h3 className="ml-2 text-xl font-semibold text-portfolio-lightest-slate">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="tech-tag bg-portfolio-navy/50 backdrop-blur-sm border border-portfolio-light-navy hover:border-portfolio-teal/30 transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 50 + 200}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       <div className="mt-16 section-content animation-delay-200">
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-lightest-slate flex items-center">
            <Globe className="mr-2 h-5 w-5 text-portfolio-teal" />
            Current Focus
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Placement Prep",
                description: "Preparing for job placements & TCS exam",
                icon: <Terminal className="h-5 w-5" />,
                color: "to-blue-500/20"
              },
              {
                title: "Portfolio Projects",
                description: "Building projects using Next.js & MongoDB",
                icon: <Layers className="h-5 w-5" />,
                color: "to-emerald-500/20"
              },
              {
                title: "Skill Enhancement",
                description: "Improving English fluency & AI integration",
                icon: <PenTool className="h-5 w-5" />,
                color: "to-purple-500/20"
              }
            ].map((focus, index) => (
              <div 
                key={index} 
                className="p-5 rounded-lg bg-portfolio-light-navy border border-portfolio-lightest-navy hover:border-portfolio-teal/30 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-portfolio-teal/10 ${focus.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-portfolio-teal mb-3">
                    {focus.icon}
                  </div>
                  <h4 className="text-lg font-medium text-portfolio-lightest-slate mb-2 group-hover:text-portfolio-teal transition-colors">
                    {focus.title}
                  </h4>
                  <p className="text-portfolio-slate">
                    {focus.description}
                  </p>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
