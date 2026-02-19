import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkExperience from '@/components/WorkExperience';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      {/* <TeamSection /> */}
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
