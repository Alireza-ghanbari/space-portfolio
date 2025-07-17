import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center items-center">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span>
              <span className="text-primary ml-4 opacity-0 animate-fade-in-delay-1">
                Alireza
              </span>
              <span className="ml-2 opacity-0 animate-fade-in-delay-2">
                Ghanbari
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-forground mx-auto opacity-0 animate-fade-in-delay-3">
            <span className="text-primary font-semibold">
              MERN Stack Developer.{" "}
            </span>
            I specialize in building modern, scalable, and high-performance web
            applications using <span className="font-semibold">MongoDB</span>,{" "}
            <span className="font-semibold">Express.js</span>,{" "}
            <span className="font-semibold">Node.js</span>, and{" "}
            <span className="font-semibold">React</span>. With a passion for
            clean code, intuitive user experiences, and end-to-end development,
            I turn complex ideas into fast, reliable digital solutions.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-500 ${
          isScrolling ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-sm text-forground mb-2">Scroll</span>
        <FaArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
