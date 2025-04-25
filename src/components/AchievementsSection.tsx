
import React from 'react';
import { Trophy, Star } from 'lucide-react';

interface Achievement {
  title: string;
  event: string;
  project: string;
  description: string;
  year: number;
  icon: 'trophy' | 'star';
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "1st Place",
      event: "Hack for Change 2023 (Alura + FIAP)",
      project: "RecicleLink",
      description: "Created an innovative platform that uses AI to optimize recycling cooperative operations, winning against hundreds of competing teams.",
      year: 2023,
      icon: "trophy"
    },
    {
      title: "6th Place",
      event: "AI Immersion 2023 (Alura + Google)",
      project: "\"Scooby-Doo, Where Are You?\"",
      description: "Developed an AI-powered solution for locating lost pets during natural disasters, standing out among 1200+ projects.",
      year: 2023,
      icon: "star"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto">
        <h2 className="section-title">Awards & <span className="highlight">Achievements</span></h2>
        <p className="text-foreground/80 max-w-2xl mb-12">
          Recognition for innovative solutions and technical excellence in competitive tech challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  {achievement.icon === "trophy" ? (
                    <Trophy className="text-primary h-6 w-6" />
                  ) : (
                    <Star className="text-primary h-6 w-6" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{achievement.title}</h3>
                  <p className="text-primary/80">{achievement.event}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-foreground/60">{achievement.year}</span>
                </div>
              </div>
              
              <h4 className="font-medium mb-2">Project: {achievement.project}</h4>
              <p className="text-foreground/80">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
