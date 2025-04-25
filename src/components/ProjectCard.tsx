
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  image: string;
  technologies: string[];
  isReversed?: boolean;
}

const ProjectCard = ({
  title,
  description,
  challenge,
  outcome,
  image,
  technologies,
  isReversed = false
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-none bg-card">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Image section */}
        <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
        
        {/* Content section */}
        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-foreground/70 mt-2">{description}</CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary mb-1">The Challenge</h4>
              <p className="text-sm text-foreground/80">{challenge}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary mb-1">The Outcome</h4>
              <p className="text-sm text-foreground/80">{outcome}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map(tech => (
                <Badge key={tech} variant="outline" className="bg-muted border-primary/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="p-0 mt-6">
            <Button variant="outline" className="text-primary border-primary/50 hover:bg-primary/10">
              View Project
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
