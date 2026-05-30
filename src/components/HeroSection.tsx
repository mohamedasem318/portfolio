import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import portraitImg from "@/assets/portrait.jpg";
import cvPdf from "@/assets/Mohamed Assem Adel CV.pdf";
import { useHaptics } from "@/hooks/useHaptics";

const HeroSection = () => {
  const { vibrate } = useHaptics();

  return (
    <section className="min-h-screen flex items-center section-padding pt-20 sm:pt-24 border-b border-border">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 md:order-1 md:col-span-2"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left">
            Mohamed Assem
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-8 text-muted-foreground text-left">
            Software Engineer &{" "}
            <span className="glow-text">Creative Technologist</span>
          </h2>
          <p className="text-base sm:text-xl font-medium mb-8 sm:mb-10 text-muted-foreground leading-relaxed text-left">
            I ship web products fast with AI-assisted workflows, without cutting corners on security. I craft presentations the hard way. And it shows.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={() => vibrate(50)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_10px_28px_-12px_hsl(var(--shadow-color)/0.65)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_hsl(var(--shadow-color)/0.7)] transition-all"
            >
              Get in Touch
            </a>
            <a
              href={cvPdf}
              download="Mohamed_Assem_CV.pdf"
              onClick={() => vibrate(50)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#projects"
              onClick={() => vibrate(50)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-transparent text-muted-foreground font-semibold hover:text-foreground transition-colors"
            >
              <ArrowDown size={18} />
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Avatar Side — morph anchor (the traveling portrait docks here) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div
            id="hero-portrait-anchor"
            className="portrait-anchor rounded-full w-64 h-64 sm:w-80 sm:h-80"
          >
            <img
              src={portraitImg}
              alt="Mohamed Assem"
              className="portrait-static"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
