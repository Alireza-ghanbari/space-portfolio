import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectSection from "../Components/ProjectSection";
import SkillsSection from "../Components/SkillsSection";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
