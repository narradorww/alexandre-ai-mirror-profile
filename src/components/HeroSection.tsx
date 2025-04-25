
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute hidden md:block top-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute hidden md:block bottom-1/3 -right-32 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      {/* Content */}
      <div className="container mx-auto z-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-primary font-medium">Mobile Developer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-space-grotesk">
            Building <span className="highlight neon-glow">innovative</span> mobile experiences for over 20 years
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
            I'm Rodrigo Alexandre, a Brazilian Mobile Developer with 20+ years in technology, specializing in 
            JavaScript/TypeScript, React Native, and AI-powered solutions that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              View My Projects
            </Button>
            <Button variant="outline" className="px-8 py-6 text-base border border-white/20 hover:bg-white/5">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#profile" className="text-foreground/60 hover:text-primary">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
