
import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12 section-content">
          <p className="text-portfolio-light-slate text-lg mb-6">
            I'm currently looking for opportunities to apply my skills and knowledge. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center justify-center space-x-2 p-3 rounded-md bg-portfolio-light-navy hover:bg-portfolio-lightest-navy transition-colors"
            >
              <Mail className="text-portfolio-teal h-5 w-5" />
              <span className="text-portfolio-light-slate">Send Email</span>
            </a>
            
            <a 
              href="tel:9144528808" 
              className="flex items-center justify-center space-x-2 p-3 rounded-md bg-portfolio-light-navy hover:bg-portfolio-lightest-navy transition-colors"
            >
              <Phone className="text-portfolio-teal h-5 w-5" />
              <span className="text-portfolio-light-slate">9144528808</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto bg-portfolio-light-navy rounded-lg p-8 border border-portfolio-lightest-navy section-content animation-delay-200">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-lightest-slate text-center">
            Send Me a Message
          </h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-portfolio-light-slate mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-portfolio-light-slate mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-portfolio-light-slate mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-portfolio-light-slate mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-2 rounded-md bg-portfolio-lightest-navy border border-portfolio-lightest-navy text-portfolio-lightest-slate focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="btn-primary w-full flex items-center justify-center">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="flex justify-center mt-12 space-x-6 section-content animation-delay-300">
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
