import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { cn } from "../lib/utils";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn("transition-colors duration-300", "focus:outline-hidden")}
    >
      {darkMode ? (
        <IoMdSunny className="h-6 w-6 text-yellow-300" />
      ) : (
        <IoMoonSharp className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
