
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card/50 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold font-space-grotesk mb-4">Rodrigo Alexandre</h3>
            <p className="text-foreground/70 mb-4">
              Mobile Developer with 20+ years of experience in technology and a passion for innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-foreground/70 hover:text-primary">GitHub</a>
              <a href="#" className="text-foreground/70 hover:text-primary">Twitter</a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#profile" className="text-foreground/70 hover:text-primary">Profile</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary">Projects</a></li>
              <li><a href="#magic-mirror" className="text-foreground/70 hover:text-primary">Magic Mirror</a></li>
              <li><a href="#achievements" className="text-foreground/70 hover:text-primary">Achievements</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-foreground/70 mb-2">
              Interested in working together? Get in touch!
            </p>
            <a href="mailto:contact@rodrigoalexandre.dev" className="text-primary hover:underline">
              contact@rodrigoalexandre.dev
            </a>
            <p className="text-foreground/70 mt-4 text-sm">
              Based in Brazil • Available Worldwide
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Rodrigo Alexandre. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-2 md:mt-0">
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
