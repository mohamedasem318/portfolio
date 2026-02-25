import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";
import mostaqlIcon from "@/assets/mostaql.png";
import khamsatIcon from "@/assets/khamsat.svg";
// Triggering Vite rebuild

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Assem. Built with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
