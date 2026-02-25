import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";
import mostaqlIcon from "@/assets/mostaql.png";
import khamsatIcon from "@/assets/khamsat.svg";

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (res.ok) {
                setIsSuccess(true);
                // Optional: reset form after a few seconds
                // setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Form submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center section-padding bg-background border-b border-border relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Let's Build Something <span className="glow-text">Together</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to orchestrate your next digital ecosystem? Reach out via the form below or connect through any of my professional channels.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-2xl p-8 glow-box flex flex-col justify-center"
                    >
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-8 px-6 py-2 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Replace with your actual Web3Forms Access Key */}
                                <input type="hidden" name="access_key" value="e0611341-5b78-4f7f-8e2a-c7c230829688" />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-secondary/50 border border-border rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-secondary/50 border border-border rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                    <div className="relative">
                                        <MessageSquare size={18} className="absolute left-4 top-4 text-muted-foreground" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-secondary/50 border border-border rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-[0_0_20px_hsl(var(--primary)/0.3)] disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Socials & Direct Email */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col justify-center gap-8"
                    >
                        <div className="glass rounded-2xl p-8 hover:glow-box transition-all">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <Mail className="text-primary" /> Direct Email
                            </h3>
                            <p className="text-muted-foreground mb-6">Prefer sending an email directly? No problem.</p>
                            <a
                                href="mailto:mohamedasem318@gmail.com"
                                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-colors"
                            >
                                mohamedasem318@gmail.com
                            </a>
                        </div>

                        <div className="glass rounded-2xl p-8 hover:glow-box transition-all">
                            <h3 className="text-xl font-bold mb-6">Connect Professionally</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <a
                                    href="https://www.linkedin.com/in/mohamedasem318/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all group"
                                    aria-label="LinkedIn"
                                >
                                    <SiLinkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/mohamedasem318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all group"
                                    aria-label="GitHub"
                                >
                                    <SiGithub className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">GitHub</span>
                                </a>
                                <a
                                    href="https://www.behance.net/mohamedasem318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all group"
                                    aria-label="Behance"
                                >
                                    <SiBehance className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">Behance</span>
                                </a>
                                <a
                                    href="https://mostaql.com/u/mohamedasem318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all group"
                                    aria-label="Mostaql"
                                >
                                    <div
                                        className="w-8 h-8 bg-current group-hover:scale-110 transition-transform"
                                        style={{
                                            WebkitMaskImage: `url(${mostaqlIcon})`,
                                            WebkitMaskSize: 'contain',
                                            WebkitMaskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskImage: `url(${mostaqlIcon})`,
                                            maskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                        }}
                                    />
                                    <span className="text-xs font-semibold">Mostaql</span>
                                </a>
                                <a
                                    href="https://khamsat.com/user/mohamedasem318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all group"
                                    aria-label="Khamsat"
                                >
                                    <div
                                        className="w-8 h-8 scale-125 bg-current group-hover:scale-110 transition-transform"
                                        style={{
                                            WebkitMaskImage: `url(${khamsatIcon})`,
                                            WebkitMaskSize: 'contain',
                                            WebkitMaskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskImage: `url(${khamsatIcon})`,
                                            maskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                        }}
                                    />
                                    <span className="text-xs font-semibold mt-1">Khamsat</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
