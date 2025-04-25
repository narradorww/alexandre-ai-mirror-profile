
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-space-grotesk font-bold">
          <span className="text-foreground">Rodrigo</span>
          <span className="text-primary">Alexandre</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#profile" className="text-foreground/80 hover:text-primary transition-colors">Profile</a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
          <a href="#magic-mirror" className="text-foreground/80 hover:text-primary transition-colors">Magic Mirror</a>
          <a href="#achievements" className="text-foreground/80 hover:text-primary transition-colors">Achievements</a>
        </nav>
        
        <Button variant="outline" className="hidden md:inline-flex items-center border-primary text-primary hover:bg-primary/10">
          Contact Me
        </Button>
        
        <Button variant="ghost" className="md:hidden text-foreground">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
