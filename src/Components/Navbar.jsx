import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  
  const navItems = [
    { name: t("home"), href: "#hero" },
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const [isNavActive, setIsNavActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavActive(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isNavActive
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-forground">Alireza</span> Ghanbari
          </span>
        </a>

        {/* desktop */}

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-forground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* mobile */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-forground z-50"
        >
          {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 h-screen z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
            isNavActive
              ? "backdrop-blur-3xl bg-background/95"
              : "backdrop-blur-xs bg-background/85"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-forground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <LanguageSelector />
            <a onClick={() => setIsMenuOpen(false)} className="text-center">
              <ThemeToggle />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
