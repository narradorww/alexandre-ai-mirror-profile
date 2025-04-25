
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, Rocket, Users } from 'lucide-react';

const ProfileSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React Native", "React.js", "Next.js", 
    "Node.js", "MongoDB", "AWS", "Generative AI", "Agile", "Scrum"
  ];

  return (
    <section id="profile" className="relative py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Professional <span className="highlight">Profile</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Column 1: Key Expertise */}
          <div className="bg-card p-6 rounded-lg gradient-border">
            <div className="flex items-center mb-4 text-primary">
              <Code size={24} className="mr-3" />
              <h3 className="font-bold text-xl">Technical Expertise</h3>
            </div>
            <p className="mb-4 text-foreground/80">
              Expert in JavaScript/TypeScript with strong focus on mobile development using React Native.
              Full-stack capabilities with experience in React.js, Next.js, Node.js, MongoDB, and AWS.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="tech-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Column 2: Leadership */}
          <div className="bg-card p-6 rounded-lg gradient-border">
            <div className="flex items-center mb-4 text-primary">
              <Users size={24} className="mr-3" />
              <h3 className="font-bold text-xl">Team Leadership</h3>
            </div>
            <p className="mb-4 text-foreground/80">
              Led agile development teams following Scrum methodologies. 
              Strong record of improving developer experience and implementing efficient workflows with Jira.
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>• Agile team management</li>
              <li>• Scrum implementation</li>
              <li>• Workflow optimization</li>
              <li>• Code quality improvement</li>
              <li>• Mentorship and knowledge sharing</li>
            </ul>
          </div>
          
          {/* Column 3: Innovation */}
          <div className="bg-card p-6 rounded-lg gradient-border">
            <div className="flex items-center mb-4 text-primary">
              <Rocket size={24} className="mr-3" />
              <h3 className="font-bold text-xl">Innovation Focus</h3>
            </div>
            <p className="mb-4 text-foreground/80">
              Passionate about applying cutting-edge technologies to solve real-world problems. 
              Special interest in Generative AI applications and their integration into mobile development.
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>• Award-winning AI projects</li>
              <li>• Sustainability solutions</li>
              <li>• Efficiency optimization</li>
              <li>• UX enhancement through AI</li>
              <li>• Continuous learning mindset</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Professional Journey</h3>
          <p className="text-foreground/80">
            With over 20 years in technology and more than 3 years focused on software development,
            I've led impactful projects across various industries. My expertise lies in crafting 
            efficient, user-friendly mobile experiences while implementing best practices that 
            enhance both code quality and team productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
