
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import ProjectsSection from '@/components/ProjectsSection';
import MagicMirrorSection from '@/components/MagicMirrorSection';
import AchievementsSection from '@/components/AchievementsSection';
import VisitorStats from '@/components/VisitorStats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <MagicMirrorSection />
      <AchievementsSection />
      <VisitorStats />
      <Footer />
    </div>
  );
};

export default Index;
