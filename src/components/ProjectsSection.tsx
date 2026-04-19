import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ZoomIn, MoreVertical } from "lucide-react";
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
  SiFastapi,
  SiHuggingface,
} from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { BrainCircuit, Calculator } from "lucide-react";
import { useHaptics } from "@/hooks/useHaptics";
import { CustomIcon } from "./ui/CustomIcon";
import matlabAsset from "@/assets/matlab.png";

const MatlabIcon = (props: any) => <CustomIcon src={matlabAsset} {...props} />;

// Cover images
import gigacartCover from "@/assets/gigacart-cover.png";
import cerebroscanCover from "@/assets/cerebroscan-cover.png";
import matlabCover from "@/assets/matlabstresscalc-cover.png";
import presentationAlzheimers from "@/assets/presentation-alzheimersstagedetectionai.png";
import presentationPelvis from "@/assets/presentation-pelvisbonedynamicanalysis.png";
import presentationStress from "@/assets/presentation-workstressdetection.png";
import presentationXray from "@/assets/presentation-xrayimagecontrast.png";
import presentationPressmap from "@/assets/presentation-pressmaprehab.png";
import presentationNeuroblate from "@/assets/presentation-neuroblate.png";
import presentationHlm from "@/assets/presentation-hlm.png";
import vibecheckCover from "@/assets/vibecheck-cover.png";
// App screenshots
import vibecheckAnxiety from "@/assets/vibecheck-anxiety.png";
import vibecheckDepression from "@/assets/vibecheck-depression.png";
import vibecheckStress from "@/assets/vibecheck-stress.png";
import vibecheckPhone from "@/assets/vibecheck-phone.png";
import gigacartAddmedia from "@/assets/gigacart-addmedia.png";
import gigacartDashboardlight from "@/assets/gigacart-dashboardlight.png";
import gigacartRequests from "@/assets/gigacart-requests.png";
import gigacartPhone from "@/assets/gigacart-phone.png";
import cerebroscanLight from "@/assets/cerebroscan-light.png";
import cerebroscanResulthealthy from "@/assets/cerebroscan-resulthealthy.png";
import cerebroscanResultunsure from "@/assets/cerebroscan-resultunsure.png";
import cerebroscanIphone from "@/assets/cerebroscan-iphone.png";
import matlabResults1 from "@/assets/matlabstresscalc-results1.png";
import matlabResults2 from "@/assets/matlabstresscalc-results2.png";
import matlabResults3 from "@/assets/matlabstresscalc-results3.png";

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
  images?: string[];
  behanceUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: TechTag[];
  imagePosition?: string;
}

const categoryStyles: Record<ProjectCategory, string> = {
  "Web App": "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
  "Desktop App": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  "Presentation": "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",
};

const projects: Project[] = [
  {
    title: "VibeCheck",
    category: "Web App",
    description: "An NLP-powered mental health sentiment classifier built for students. Users type how they're feeling and the app detects one of 7 emotional states — anxiety, depression, stress, bipolar, personality disorder, suicidal ideation, or normal — with a confidence score. Features two swappable AI models, a reactive UI that physically responds to each classification (e.g. the input shakes on anxiety, a rainbow gradient fires on an easter egg), dark/light mode, and a crisis resource panel for high-risk results.",
    cover: vibecheckCover,
    images: [vibecheckCover, vibecheckAnxiety, vibecheckDepression, vibecheckStress, vibecheckPhone],
    behanceUrl: "https://www.behance.net/gallery/246277609/VibeCheck",
    liveUrl: "https://vibecheck-eosin.vercel.app/",
    tags: [
      { label: "React", Icon: SiReact },
      { label: "Python", Icon: SiPython },
      { label: "FastAPI", Icon: SiFastapi },
      { label: "HuggingFace", Icon: SiHuggingface },
      { label: "Deep Learning", Icon: BrainCircuit },
    ],
    imagePosition: "object-top",
  },
  {
    title: "GigaCart",
    category: "Web App",
    description: "Shipped in under 48 hours and iterated to v1.6 in 3 days, GigaCart solves a real local problem: Egypt's internet limitations make sharing media files painful. The platform integrates TMDB/IGDB APIs for automated metadata and features a dynamic request cart that coordinates in-person physical drive exchanges, eliminating screenshot chat clutter entirely.",
    cover: gigacartCover,
    images: [gigacartCover, gigacartAddmedia, gigacartDashboardlight, gigacartRequests, gigacartPhone],
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
    description: "Deployed overnight before the faculty presentation and well-received by the supervising TA, CerebroScan is an academic image processing tool that classifies Alzheimer's stages from MRI scans. We engineered and evaluated ResNet-50, ResNet-101, and EfficientNet-B2 architectures. All achieved 98% accuracy, with ResNet-101 delivering the most robust clinical results.",
    cover: cerebroscanCover,
    images: [cerebroscanCover, cerebroscanLight, cerebroscanResulthealthy, cerebroscanResultunsure, cerebroscanIphone],
    behanceUrl:
      "https://www.behance.net/gallery/244723563/CerebroScan-AI-Powered-Alzheimers-Detection-Web-App",
    liveUrl: "https://cerebroscan.netlify.app/",
    tags: [
      { label: "React", Icon: SiReact },
      { label: "Python", Icon: SiPython },
      { label: "Flask", Icon: SiFlask },
      { label: "Deep Learning", Icon: BrainCircuit },
    ],
    imagePosition: "object-top",
  },
  {
    title: "Mohr's Circle Calculator",
    category: "Desktop App",
    description: "Built when LLMs weren't yet reliable for coding help. Figured it out through raw research and YouTube deep-dives. This tool automates complex stress analysis calculations for a university course, computing principal and shear stresses and dynamically plotting Mohr's Circle to strict academic guidelines. One of the best submissions that cycle.",
    cover: matlabCover,
    images: [matlabCover, matlabResults1, matlabResults2, matlabResults3],
    behanceUrl:
      "https://www.behance.net/gallery/244679927/Mohrs-Circle-Stresses-Calculator-Engineering-UIUX",
    repoUrl: "https://github.com/mohamedasem318/stresses-calculator-itsLu",
    tags: [
      { label: "MATLAB", Icon: MatlabIcon },
      { label: "Engineering UI", Icon: Calculator },
    ],
  },
  {
    title: "Deep-Learning-Powered System for Detecting Stages of Alzheimer's Disease",
    category: "Presentation",
    description:
      "A comprehensive scientific presentation deck detailing deep learning methodologies for detecting Alzheimer's stages. Features custom data visualizations, clear typographic hierarchy, and professional slide layouts. Delivered to faculty and consistently among the highest-graded submissions in the batch.",
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
    title: "Heart-Lung Machine",
    category: "Presentation",
    description:
      "A research presentation on the Heart-Lung Machine (HLM), the device that takes over cardiac and pulmonary function during open-heart surgery. Covers the machine's overview, components and working principle, engineering design considerations, common malfunctions, and future trends in cardiopulmonary bypass technology.",
    cover: presentationHlm,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
  {
    title: "NeuroBlate System",
    category: "Presentation",
    description:
      "An in-depth research presentation on the NeuroBlate System, the only FDA-approved minimally invasive robotic laser thermotherapy for MRI-guided brain lesion ablation. Covers the full system across 10 sections including LITT technology, applications, workflow, components, safety precautions, common problems, PM, CM, and a market study.",
    cover: presentationNeuroblate,
    tags: [
      { label: "PowerPoint", Icon: PiMicrosoftPowerpointLogo },
      { label: "Photoshop", Icon: SiAdobephotoshop },
      { label: "Illustrator", Icon: SiAdobeillustrator },
    ],
    imagePosition: "object-center",
  },
  {
    title: "Pressure Mapping in Rehabilitation",
    category: "Presentation",
    description:
      "A research presentation on Structure-Gradient Fiber Mats (SGFM) as a flexible pressure-sensing solution for autonomous rehabilitation. Addresses the limitations of traditional rehab (professional dependency, high costs, and poor accessibility) by proposing a wearable, soft-material sensor system enabling independent on-bed exercise guidance.",
    cover: presentationPressmap,
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
  const { vibrate } = useHaptics();

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
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
        <motion.div
          initial={{ backdropFilter: "blur(0px)", backgroundColor: "hsl(var(--background) / 0)" }}
          animate={{ backdropFilter: "blur(20px)", backgroundColor: "hsl(var(--background) / 0.8)" }}
          exit={{ backdropFilter: "blur(0px)", backgroundColor: "hsl(var(--background) / 0)" }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        />

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
            onClick={() => { onClose(); vibrate(50); }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-border text-foreground hover:bg-secondary transition-colors"
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
  );
};

// ── Project Card ──────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  idx: number;
  onLightbox: (project: Project) => void;
}

const ProjectCard = ({ project, idx, onLightbox }: ProjectCardProps) => {
  const { vibrate } = useHaptics();
  const isPresentation = project.category === "Presentation";
  const images = project.images ?? [project.cover];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % images.length), 2500);
    return () => clearInterval(id);
  }, [isHovered, images.length]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
      className="group flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass rounded-xl overflow-hidden glow-box flex flex-col w-full hover:-translate-y-1.5 transition-transform duration-200">
        {/* Cover Image */}
        <div className="h-56 lg:h-72 bg-secondary overflow-hidden relative">
          {project.cover ? (
            images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 700ms ease-in-out",
                }}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Hover Overlay — desktop only */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
            <div className="flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {isPresentation ? (
                <button
                  onClick={() => { onLightbox(project); vibrate(50); }}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                >
                  <ZoomIn size={16} />
                  View Full Slide
                </button>
              ) : (
                <>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => vibrate(50)}
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
                      onClick={() => vibrate(50)}
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
                      onClick={() => vibrate(50)}
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

          {/* Three-dot menu — mobile only */}
          <div ref={menuRef} className="absolute top-2 right-2 md:hidden">
            <button
              onClick={() => { setMenuOpen((v) => !v); vibrate(30); }}
              className="p-2 rounded-full bg-background/70 backdrop-blur-sm border border-border text-foreground shadow"
              aria-label="Project options"
            >
              <MoreVertical size={16} />
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-10 min-w-[160px] glass rounded-xl border border-border shadow-lg overflow-hidden z-10"
                >
                  {isPresentation ? (
                    <button
                      onClick={() => { onLightbox(project); vibrate(50); setMenuOpen(false); }}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      <ZoomIn size={15} className="text-primary" />
                      View Full Slide
                    </button>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => { vibrate(50); setMenuOpen(false); }}
                          className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          <ExternalLink size={15} className="text-primary" />
                          View Live Site
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => { vibrate(50); setMenuOpen(false); }}
                          className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          <SiGithub size={15} className="text-primary" />
                          View Source Code
                        </a>
                      )}
                      {project.behanceUrl && (
                        <a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => { vibrate(50); setMenuOpen(false); }}
                          className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          <SiBehance size={15} className="text-primary" />
                          View Case Study
                        </a>
                      )}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 lg:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-2.5 mb-3 flex-wrap">
            <h3 className="font-bold text-lg lg:text-xl">{project.title}</h3>
            <span
              className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryStyles[project.category]}`}
            >
              {project.category}
            </span>
          </div>

          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1 mb-6">
            {project.description}
          </p>

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
      </div>
    </motion.div>
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
  const { vibrate } = useHaptics();

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
            project={lightboxProject}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>

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
            className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12 lg:mb-16"
          >
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => { setActiveFilter(f); vibrate(50); }}
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
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  idx={idx}
                  onLightbox={setLightboxProject}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
