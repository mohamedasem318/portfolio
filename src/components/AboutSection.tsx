import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGlobe, FaBriefcase } from "react-icons/fa";
import aboutMeImg from "@/assets/aboutmeavatar.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding overflow-hidden bg-secondary/30 dark:bg-transparent border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Mobile-only Heading (Shows above image on small screens) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:hidden flex justify-center mb-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              About <span className="glow-text">Me</span>
            </h2>
          </motion.div>

          {/* The Glowing Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="animate-float">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.25)] dark:border-cyan-500/30 dark:shadow-[0_0_30px_rgba(6,182,212,0.25)] glow-box">
                <img
                  src={aboutMeImg}
                  alt="Mohamed Assem - Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text & Metadata */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="flex flex-col"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold hidden lg:block"
            >
              About <span className="glow-text">Me</span>
            </motion.h2>

            {/* Quick Facts */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mt-4 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium hover:glow-box transition-all">
                <FaMapMarkerAlt className="text-primary" />
                <span>Giza, Egypt</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium hover:glow-box transition-all">
                <FaBriefcase className="text-primary" />
                <span>Available for Freelance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium hover:glow-box transition-all">
                <FaGlobe className="text-primary" />
                <span>Arabic & English</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                I am Mohamed Assem, a multifaceted technologist thriving at the intersection of analytical engineering and digital design. My journey began in Biomedical Engineering at Helwan University, where I developed a deep appreciation for complex systems and computational logic.
              </p>
              <p>
                Currently advancing my expertise in the Cybersecurity track under the Digital Egypt Pioneers Initiative (DEPI), I bring a security-first mindset to every project.
              </p>
              <p>
                Whether I am engineering secure backend architectures, building full-stack platforms, or designing pixel-perfect user interfaces, my goal is to solve hard problems and deliver flawless digital experiences.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
