import { motion } from "framer-motion";
import { GraduationCap, Shield, ChevronRight } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

const educationData = [
    {
        title: "Vulnerability Assessment & Penetration Testing Trainee",
        subtitle: "Digital Egypt Pioneers Initiative (DEPI) — Ministry of Communications & Information Technology",
        date: "Dec 2025 – Present",
        icon: <Shield className="text-primary" size={22} />,
        bullets: [
            "Conducting hands-on vulnerability assessments within structured security frameworks.",
            "Performing reconnaissance, scanning, and ethical hacking lifecycles across web and network environments.",
            "Producing formal penetration testing reports with actionable remediation strategies.",
            "Simulating real-world security testing workflows through collaborative capstone projects.",
        ],
    },
    {
        title: "Bachelor's Degree, Biomedical Engineering",
        subtitle: "Helwan University — Faculty of Engineering",
        date: "Oct 2021 – Present",
        icon: <GraduationCap className="text-primary" size={22} />,
        bullets: [
            "Building foundations in software engineering, embedded electronics, and database systems.",
            "Applying machine learning and control systems theory to biomedical data.",
            "Studying human anatomy alongside solid/fluid mechanics and stress analysis.",
            "Delivered and designed multiple high-level technical presentations to engineering peers and faculty.",
        ],
        footer: "Grade: 80%"
    },
];

const EducationSection = () => {
    return (
        <section id="education" className="min-h-screen flex flex-col justify-center section-padding border-b border-border">
            <div className="max-w-5xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-16 md:mb-20 text-center"
                >
                    <span className="glow-text">Education</span>
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    className="max-w-4xl mx-auto pl-4 sm:pl-0"
                >
                    <div className="relative border-l-2 border-primary/20 sm:ml-6">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                custom={index}
                                className="relative mb-16 sm:mb-20 pl-8 sm:pl-12 last:mb-0"
                            >
                                {/* Timeline node */}
                                <div className="absolute -left-[11px] top-6 h-5 w-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                                    <div className="h-2 w-2 rounded-full bg-background" />
                                </div>

                                <div className="glass rounded-xl p-6 lg:p-8 glow-box hover:-translate-y-1 transition-transform duration-300">
                                    {/* Header row */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg lg:text-xl leading-tight mb-1">{item.title}</h3>
                                                <span className="text-primary font-medium text-sm sm:text-base block">{item.subtitle}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 shrink-0 md:mt-0">
                                            <span className="flex items-center text-sm font-semibold text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border">
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bullet Points */}
                                    <ul className="space-y-2.5">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
                                                <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Footer */}
                                    {item.footer && (
                                        <div className="mt-6 pt-5 border-t border-primary/10 flex justify-end">
                                            <span className="inline-flex items-center text-sm font-bold text-primary bg-primary/10 px-5 py-2 rounded-full border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.1)]">
                                                {item.footer}
                                            </span>
                                        </div>
                                    )}
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
