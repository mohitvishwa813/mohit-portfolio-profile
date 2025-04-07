
import React from 'react';
import { Mail, Phone, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-portfolio-light-navy/30 to-transparent"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-portfolio-lightest-navy/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12 section-content">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-portfolio-teal/10 blur-xl rounded-full"></div>
            <p className="relative z-10 text-portfolio-light-slate text-lg px-6 py-3 bg-portfolio-light-navy/30 backdrop-blur-sm border border-portfolio-lightest-navy/30 rounded-lg">
              I'm currently looking for opportunities to apply my skills and knowledge. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center justify-center space-x-2 p-3 rounded-md bg-portfolio-light-navy hover:bg-portfolio-lightest-navy transition-colors border border-transparent hover:border-portfolio-teal/30 group transform hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="text-portfolio-teal h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-portfolio-light-slate">Send Email</span>
            </a>
            
            <a 
              href="tel:9144528808" 
              className="flex items-center justify-center space-x-2 p-3 rounded-md bg-portfolio-light-navy hover:bg-portfolio-lightest-navy transition-colors border border-transparent hover:border-portfolio-teal/30 group transform hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="text-portfolio-teal h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-portfolio-light-slate">9144528808</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto bg-portfolio-light-navy/70 backdrop-blur-md rounded-lg p-8 border border-portfolio-lightest-navy hover:border-portfolio-teal/20 transition-all duration-500 shadow-lg section-content animation-delay-200 transform hover:translate-y-[-5px]">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-lightest-slate text-center relative">
            <span className="relative">
              Send Me a Message
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-teal to-transparent"></span>
            </span>
          </h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label htmlFor="name" className="block text-portfolio-light-slate mb-1 group-focus-within:text-portfolio-teal transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-portfolio-light-slate mb-1 group-focus-within:text-portfolio-teal transition-colors">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="subject" className="block text-portfolio-light-slate mb-1 group-focus-within:text-portfolio-teal transition-colors">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50 focus:border-transparent transition-all duration-300"
                placeholder="Subject"
              />
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-portfolio-light-slate mb-1 group-focus-within:text-portfolio-teal transition-colors">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50 focus:border-transparent resize-none transition-all duration-300"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="btn-primary w-full flex items-center justify-center relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </span>
              <span className="absolute inset-0 bg-portfolio-teal/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </form>
        </div>
        
        <div className="flex justify-center mt-12 space-x-6 section-content animation-delay-300">
          {[
            { icon: <Linkedin className="h-6 w-6" />, link: "https://www.linkedin.com/in/mohit-vishwakarma-b54a5b233/" },
            { icon: <Github className="h-6 w-6" />, link: "https://github.com/mohitvishwa813" },
            { icon: <Mail className="h-6 w-6" />, link: "mohitvishwa813@gmail.com" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors transform hover:scale-110 transition-all duration-300 relative group"
            >
              {social.icon}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-portfolio-teal group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
