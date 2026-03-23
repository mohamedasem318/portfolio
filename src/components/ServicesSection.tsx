import { motion } from "framer-motion";
import {
  BrainCircuit,
  Palette,
  Rocket,
  Monitor,
  UserCircle,
  AppWindow,
  GraduationCap,
  BarChart2,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Assisted Software Solutions",
    subItems: [
      { label: "SaaS Prototypes", icon: Rocket },
      { label: "Landing Pages", icon: Monitor },
      { label: "Personal Portfolios", icon: UserCircle },
      { label: "Web Apps", icon: AppWindow },
    ],
  },
  {
    icon: Palette,
    title: "Professional Presentation & Graphic Design",
    subItems: [
      { label: "Academic & Research Decks", icon: GraduationCap },
      { label: "Data Visualization", icon: BarChart2 },
    ],
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
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ y: { duration: 0.2, ease: "easeOut" }, opacity: { duration: 0.5, ease: "easeOut", delay: idx * 0.15 } }}
              className="glass rounded-2xl p-6 lg:p-10 glow-box flex flex-col items-center text-center"
            >
              <div className="p-4 lg:p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-6 lg:mb-8 inline-flex">
                <service.icon className="text-primary" size={40} />
              </div>
              <h3 className="font-bold text-xl lg:text-2xl mb-6 lg:mb-8">{service.title}</h3>
              <div className="space-y-5 w-full">
                {service.subItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 lg:gap-4 text-sm lg:text-base text-muted-foreground"
                  >
                    <item.icon size={18} className="text-primary/70 shrink-0" />
                    {item.label}
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

export default ServicesSection;
