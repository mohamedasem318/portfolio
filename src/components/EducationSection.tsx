import { motion } from "framer-motion";
import { GraduationCap, Shield } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

const EducationSection = () => {
    const educationData = [
        {
            title: "Vulnerability Assessment & Penetration Testing Trainee",
            subtitle: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
            date: "Dec 2025 – Present",
            icon: <Shield className="text-primary" size={24} />,
        },
        {
            title: "Bachelor's Degree, Biomedical Engineering",
            subtitle: "Capital (Helwan) University",
            date: "Oct 2021 – Present",
            icon: <GraduationCap className="text-primary" size={24} />,
        }
    ];

    return (
        <section id="education" className="min-h-screen flex flex-col justify-center section-padding border-b border-border">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-16 md:mb-20 text-center"
                >
                    Education & <span className="glow-text">Training</span>
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="max-w-4xl mx-auto pl-4 sm:pl-0"
                >
                    <div className="relative border-l-2 border-primary/20 sm:ml-6">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="relative mb-16 sm:mb-20 pl-8 sm:pl-12 last:mb-0"
                            >
                                {/* Timeline node */}
                                <div className="absolute -left-[11px] top-6 h-5 w-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                                    <div className="h-2 w-2 rounded-full bg-background" />
                                </div>

                                <div className="glass rounded-xl p-6 lg:p-8 glow-box hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex items-start gap-5">
                                            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg lg:text-xl leading-tight mb-2">{item.title}</h3>
                                                <p className="text-primary font-medium text-sm sm:text-base">{item.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="shrink-0 flex items-center text-sm lg:text-base font-semibold text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border mt-4 md:mt-0">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
