import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Sparkles,
  Palette,
  Terminal,
  Heart,
  Rocket,
} from "lucide-react";
import {
  SiPython,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";

const categories = [
  {
    title: "Core Logic",
    icon: Terminal,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: Database },
      { name: "MATLAB", icon: Terminal },
    ],
  },
  {
    title: "AI & Workflow Architecture",
    icon: BrainCircuit,
    skills: [
      { name: "Prompt Engineering", icon: Sparkles },
      { name: "Lovable", icon: Heart },
      { name: "Antigravity", icon: Rocket },
      { name: "Git / GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Design & Creativity",
    icon: Palette,
    skills: [
      { name: "Adobe Photoshop", icon: SiAdobephotoshop },
      { name: "Adobe Illustrator", icon: SiAdobeillustrator },
      { name: "PowerPoint Design", icon: PiMicrosoftPowerpointLogo },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center section-padding bg-secondary/30 dark:bg-transparent border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-16 md:mb-20 text-center"
        >
          Skills & <span className="glow-text">Tech Arsenal</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
              className="glass rounded-xl p-6 lg:p-8 glow-box flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <cat.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg lg:text-xl">{cat.title}</h3>
              </div>
              <div className="space-y-5 flex-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 lg:gap-4 text-sm lg:text-base text-muted-foreground"
                  >
                    <skill.icon size={18} className="text-primary/70 shrink-0" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
