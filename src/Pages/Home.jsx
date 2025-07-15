import Navbar from "../Components/Navbar";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
    </div>
  );
}
