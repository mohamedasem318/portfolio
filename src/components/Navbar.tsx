import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Vibrate, VibrateOff } from "lucide-react";
import { useHaptics } from "@/hooks/useHaptics";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { hapticsEnabled, toggleHaptics, vibrate, isSupported } = useHaptics();

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // 1. Immediately close the menu in React state
    setMobileOpen(false);

    // 2. Wait for the menu's AnimatePresence exit animation to finish unmounting (it takes 300ms default)
    // BEFORE telling the browser to start scrolling. This guarantees the scroll isn't aborted mid-way
    // by the element disappearing from the DOM.
    setTimeout(() => {
      const targetId = href.replace('#', '');
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        // Calculate absolute position relative to document
        const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: topPos,
          behavior: "smooth"
        });
      }
    }, 400); // Wait 400ms to ensure the menu is visually gone before scrolling
  };

  // Trigger haptic feedback when scrolling into a new section
  useEffect(() => {
    if (activeSection) {
      vibrate(30); // Very subtle tick
    }
  }, [activeSection, vibrate]);

  useEffect(() => {
    const handleScroll = () => {
      // Find all sections on the page
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      // Check which section is currently in view
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topPos = rect.top + window.scrollY;
          const offsetHeight = rect.height;

          if (scrollPosition >= topPos && scrollPosition < topPos + offsetHeight) {
            currentSection = `#${section}`;
            break;
          }
        }
      }

      // If we're at the very top, maybe clear the active state (or map to Hero if it had an ID)
      if (window.scrollY < 50) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold glow-text">
          Mohamed Assem
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${activeSection === link.href
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-primary"
                }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {isSupported && (
            <button
              onClick={toggleHaptics}
              className={`p-2 rounded-lg transition-colors ${hapticsEnabled ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-secondary"}`}
              aria-label="Toggle haptics"
            >
              {hapticsEnabled ? <Vibrate size={18} /> : <VibrateOff size={18} />}
            </button>
          )}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors py-2 ${activeSection === link.href
                    ? "text-primary font-bold bg-primary/10 rounded-md px-3 border border-primary/20"
                    : "text-muted-foreground hover:text-primary px-3"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
