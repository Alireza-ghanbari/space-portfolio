import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-4 opacity-0 animate-fade-in-delay-1">
              Alireza
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              Ghanbari
            </span>
          </h1>

          <p className="text-lg md:text-xl text-forground mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            sunt ipsum deleniti iste repellendus culpa quae, fugiat quaerat a
            itaque inventore nam officiis minus cum? Sed iusto suscipit dolore
            ipsam?
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-forground mb-2">Scroll</span>
        <FaArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
