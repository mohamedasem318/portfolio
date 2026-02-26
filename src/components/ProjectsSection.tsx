import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ZoomIn } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiSupabase,
  SiFlask,
  SiPostgresql,
  SiGithub,
  SiBehance,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { BrainCircuit, Calculator } from "lucide-react";

// Cover images
import gigacartCover from "@/assets/gigacart-cover.png";
import cerebroscanCover from "@/assets/cerebroscan-cover.png";
import matlabCover from "@/assets/matlabstresscalc-cover.png";
import presentationAlzheimers from "@/assets/presentation-alzheimersstagedetectionai.png";
import presentationPelvis from "@/assets/presentation-pelvisbonedynamicanalysis.png";
import presentationStress from "@/assets/presentation-workstressdetection.png";
import presentationXray from "@/assets/presentation-xrayimagecontrast.png";

interface TechTag {
  label: string;
  Icon: React.ElementType;
}

type ProjectCategory = "Web App" | "Desktop App" | "Presentation";

interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  cover: string;
  behanceUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: TechTag[];
  imagePosition?: string;
}

const categoryStyles: Record<ProjectCategory, string> = {
  "Web App": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Desktop App": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Presentation": "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

const projects: Project[] = [
  {
    title: "GigaCart",
    category: "Web App",
    description: "Born from Egypt's internet limitations, this platform solves local media sharing. It integrates TMDB/IGDB APIs for automated metadata and features a dynamic request cart that coordinates in-person physical drive exchanges. The result is a streamlined P2P network that entirely eliminates screenshot chat clutter.",
    cover: gigacartCover,
    behanceUrl:
      "https://www.behance.net/gallery/244729837/GigaCart-P2P-Offline-Coordination-Platform",
    liveUrl: "https://gigacart-rho.vercel.app/",
    tags: [
      { label: "React", Icon: SiReact },
      { label: "Supabase", Icon: SiSupabase },
      { label: "PostgreSQL", Icon: SiPostgresql },
    ],
    imagePosition: "object-top",
  },
  {
    title: "CerebroScan",
    category: "Web App",
    description: "An academic image processing tool designed to classify Alzheimer's stages from MRI scans, featuring an 'unsure' fallback for low-confidence predictions. We engineered and evaluated ResNet-50, ResNet-101, and EfficientNet-B2 architectures. All models achieved 98% accuracy, with ResNet-101 delivering the most robust clinical results.",
    cover: cerebroscanCover,
    behanceUrl:
      "https://www.behance.net/gallery/244723563/CerebroScan-AI-Powered-Alzheimers-Detection-Web-App",
    liveUrl: "https://cerebroscan-app.hf.space/",
    tags: [
      { label: "Python", Icon: SiPython },
      { label: "Flask", Icon: SiFlask },
      { label: "Deep Learning", Icon: BrainCircuit },
    ],
    imagePosition: "object-top",
  },
  {
    title: "Mohr's Circle Calculator",
    category: "Desktop App",
    description: "Developed for a university stress analysis course to automate complex material calculations. The tool computes principal and shear stresses, and dynamically plots Mohr's Circle according to strict academic guidelines. It served as a highly accurate confirmation tool for students to validate their manual problem-solving.",
    cover: matlabCover,
    behanceUrl:
      "https://www.behance.net/gallery/244679927/Mohrs-Circle-Stresses-Calculator-Engineering-UIUX",
    repoUrl: "https://github.com/mohamedasem318/stresses-calculator-itsLu",
    tags: [
      { label: "MATLAB", Icon: Calculator },
      { label: "Engineering UI", Icon: Calculator },
    ],
  },
  {
    title: "Deep-Learning-Powered System for Detecting Stages of Alzheimer's Disease",
    category: "Presentation",
    description:
      "A comprehensive scientific presentation deck detailing deep learning methodologies for detecting Alzheimer's stages. Features custom data visualizations, clear typographic hierarchy, and professional slide layouts.",
    cover: presentationAlzheimers,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
  {
    title: "Dynamic Analysis on Human Pelvic Bone",
    category: "Presentation",
    description:
      "A dynamic analysis study conducted in Ansys to measure equivalent stress and total deformation of the pelvic bone during forced frontal car impacts (5 and 30 m/sec), simulating common accident scenarios.",
    cover: presentationPelvis,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
  {
    title: "Work Stress Detection System",
    category: "Presentation",
    description:
      "A software architecture presentation outlining the development of an automated stress detection system. Focuses on conveying data pipelines and system logic through clean, modern visual design.",
    cover: presentationStress,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
  {
    title: "X-Ray Image Contrast",
    category: "Presentation",
    description:
      "An exploration of factors affecting X-ray image contrast, examining how variables like kVp, filtration, anode heel effect, and receptor exposure influence both digital and analog radiographic contrast scales.",
    cover: presentationXray,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
interface LightboxProps {
  project: Project;
  onClose: () => void;
}

const Lightbox = ({ project, onClose }: LightboxProps) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Frosted backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

        {/* Modal panel */}
        <motion.div
          key="lightbox-panel"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass rounded-2xl overflow-hidden glow-box max-w-4xl w-full shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
          >
            <X size={18} />
          </button>

          {/* Full-size image */}
          <div className="bg-secondary/50">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>

          {/* Caption bar */}
          <div className="p-5 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-2 ${categoryStyles[project.category]}`}
              >
                {project.category}
              </span>
              <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  <tag.Icon size={12} />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
type FilterOption = "All" | ProjectCategory;

const filters: FilterOption[] = ["All", "Web App", "Desktop App", "Presentation"];

const filterStyles: Record<FilterOption, string> = {
  All: "bg-foreground text-background border-foreground",
  "Web App": categoryStyles["Web App"],
  "Desktop App": categoryStyles["Desktop App"],
  Presentation: categoryStyles["Presentation"],
};

const ProjectsSection = () => {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {lightboxProject && (
        <Lightbox
          project={lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      )}

      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center section-padding border-b border-border"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-8 md:mb-10 text-center"
          >
            Featured <span className="glow-text">Projects</span>
          </motion.h2>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
          >
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${isActive
                    ? filterStyles[f]
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => {
                const isPresentation = project.category === "Presentation";

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="glass rounded-xl overflow-hidden glow-box group transition-all duration-300 flex flex-col"
                  >
                    {/* Cover Image */}
                    <div className="h-52 lg:h-60 bg-secondary overflow-hidden relative">
                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={project.title}
                          className={`w-full h-full object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {isPresentation ? (
                            // Presentation → open lightbox
                            <button
                              onClick={() => setLightboxProject(project)}
                              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                            >
                              <ZoomIn size={16} />
                              View Full Slide
                            </button>
                          ) : (
                            // Web / Desktop apps → external links
                            <>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                                >
                                  <ExternalLink size={16} />
                                  View Live Site
                                </a>
                              )}
                              {project.repoUrl && (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-lg"
                                >
                                  <SiGithub size={16} />
                                  View Source Code
                                </a>
                              )}
                              {project.behanceUrl && (
                                <a
                                  href={project.behanceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 bg-background/80 text-foreground px-5 py-2.5 rounded-full text-sm font-semibold border border-border hover:bg-background transition-colors shadow-lg"
                                >
                                  <SiBehance size={16} />
                                  View Case Study
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                      {/* Title + Category Badge */}
                      <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                        <h3 className="font-bold text-lg lg:text-xl">
                          {project.title}
                        </h3>
                        <span
                          className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryStyles[project.category]}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Metadata Labels */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.label}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                          >
                            <tag.Icon size={12} />
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
