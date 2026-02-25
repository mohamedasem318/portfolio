import { motion } from "framer-motion";
import { BrainCircuit, Palette } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Assisted Software Solutions",
    description:
      "Rapid prototyping and logic implementation powered by modern AI workflows. From concept to functional product in record time.",
  },
  {
    icon: Palette,
    title: "Professional Presentation & Graphic Design",
    description:
      "Visual storytelling and brand identity through polished, high-end presentation decks and graphic assets.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center section-padding bg-secondary/30 dark:bg-transparent border-b border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-16 md:mb-20 text-center"
        >
          Offered <span className="glow-text">Services</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass rounded-2xl p-6 lg:p-10 glow-box flex flex-col items-center text-center hover:bg-secondary/10 transition-colors duration-300"
            >
              <div className="p-4 lg:p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-6 lg:mb-8 inline-flex">
                <service.icon className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
