import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import avatarImg from "@/assets/avatar-resized.png";
import cvPdf from "@/assets/Mohamed Assem Adel CV.pdf";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24 border-b border-border">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-7xl font-extrabold leading-tight mb-2 whitespace-nowrap tracking-tight">
            Mohamed Assem
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-muted-foreground">
            Software Engineer &{" "}
            <span className="glow-text">Creative Technologist</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium mb-10 text-muted-foreground max-w-lg leading-relaxed">
            I don't just write code. I orchestrate digital ecosystems. Bridging complex engineering with creative design to build smart, secure, and visually striking experiences.
          </p>
          <div className="flex flex-wrap gap-4 print:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
            <a
              href={cvPdf}
              download="Mohamed_Assem_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-transparent text-muted-foreground font-semibold hover:text-foreground transition-colors"
            >
              <ArrowDown size={18} />
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Avatar Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-box border-2 border-primary/30">
              <img
                src={avatarImg}
                alt="Mohamed - Software Engineer avatar"
                className="w-full h-full object-cover scale-[1.25] -translate-x-4 sm:-translate-x-6 translate-y-2"
              />
              {/* Inner vignetter (Dark Mode Only) */}
              <div className="absolute inset-0 rounded-full pointer-events-none dark:shadow-[inset_0_0_50px_20px_hsl(var(--background))] print:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
