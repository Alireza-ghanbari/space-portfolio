import AboutSection from "../Components/AboutSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
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
      </main>
    </div>
  );
}
