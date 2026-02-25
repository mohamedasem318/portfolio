import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

// Testimonials section exists but is commented out until ready
// import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Index;
