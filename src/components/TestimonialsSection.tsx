import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah A.",
    role: "Startup Founder",
    text: "Mohamed delivered an exceptional presentation that perfectly captured our brand identity. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    role: "Engineering Manager",
    text: "Incredible attention to detail and a deep understanding of both technical requirements and visual aesthetics.",
    rating: 5,
  },
  {
    name: "Layla M.",
    role: "Marketing Director",
    text: "The AI-powered solutions Mohamed built for us saved our team countless hours. A true creative technologist.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Client <span className="glow-text">Reviews</span>
        </h2>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-xl p-8 glow-box"
        >
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
