import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-forground">&copy; {new Date().getFullYear()} Alireza Ghanbari, All right reserved.</p>

        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <FaArrowUp size={20}  />
        </a>
    </footer>
  )
}
