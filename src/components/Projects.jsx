import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Maximize2 } from 'lucide-react';

const projects = [
    {
        title: "SoVir Technologies Corporate",
        description: "Official corporate website for SoVir Technologies, delivering cutting-edge solutions in industrial automation. Features comprehensive service listings, industry expertise showcases, and an end-to-end support portfolio for manufacturing processes.",
        tech: ["React", "Express", "MongoDB", "JavaScript", "Node.js", "MERN Stack", "Tailwind CSS", "Full-Stack"],
        github: "#",
        live: "https://sovirtechnologies.in/",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        badge: "Client Project"
    },
    {
        title: "SoVir Skilling & Training Portal",
        description: "A professional training academy platform empowering individuals with industry-ready skills. Includes features for student enrollment, mentor assignments, class scheduling, and material distribution for Industrial Automation and Global Languages.",
        tech: ["React", "Express", "MongoDB", "JavaScript", "Node.js", "MERN Stack", "Tailwind CSS", "Full-Stack"],
        github: "#",
        live: "http://training.sovirtechnologies.in/",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        badge: "Client Project"
    },
    {
        title: "SkillBridge",
        description: "An AI-powered job recommendation and professional networking platform. Uses Sentence Transformers and Machine Learning to semantically match search queries with job descriptions and automatically extract skills from resumes.",
        tech: ["Python", "Flask", "Scikit-learn", "html", "Tailwind CSS", "Semantic Search", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/skillbridge",
        live: "#",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },
    {
        title: "Study Material Distribution Platform",
        description: "A full-stack web app to distribute academic resources semester-wise. Features Google Drive API integration, a secure admin dashboard, and role-based access control.",
        tech: ["React.js", "JavaScript", "Flask", "MySQL", "Tailwind CSS", "Google Drive API", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/andhub-canara",
        live: "https://andhub-canara.web.app",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },
    {
        title: "Find My Recipe",
        description: "A full-stack recipe platform with an AI recipe creator and a 4000+ recipe dataset. Implemented JWT-based authentication, OAuth login, and features to create, upload, and view recipes.",
        tech: ["React", "JavaScript", "MySQL", "Tailwind CSS", "OAuth", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/FindMyRecipe",
        live: "https://find-my-recipe-6bf86.web.app",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },
    {
        title: "Resume Relevance AI",
        description: "A hackathon project that uses the Gemini API to parse and score resumes against job descriptions. Recruiters can use this tool to automatically shortlist candidates based on resume scores.",
        tech: ["React", "JavaScript", "Python", "Flask", "Gemini API", "MySQL", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/Hackthon",
        live: "https://automated-resume-checker.web.app",
        image: "https://images.unsplash.com/photo-1586281380349-632531a56e51?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },
    {
        title: "IOT Data Ingestion Pipeline",
        description: "An IoT telemetry data ingestion pipeline built during my internship at Sumana Embedded Technologies. Features a frontend web interface, backend Google Cloud Functions, log monitoring, and data warehousing using BigQuery and SQL.",
        tech: ["HTML/CSS/JS", "Google Cloud", "BigQuery", "SQL", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/iot_data_ingestion_techstack",
        live: "https://iot-data-ingestion.vercel.app/",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        badge: "Internship Project"
    },
    {
        title: "YouTube Video Downloader Extension",
        description: "A client-side Chrome extension that enables users to download high-resolution YouTube videos (including 4K) by seamlessly merging separate video and audio streams using FFmpeg WebAssembly.",
        tech: ["Python", "Flask", "JavaScript", "Chrome Extensions API", "FFmpeg.wasm", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/Youtube-Video-Download",
        live: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },


    {
        title: "AI Travel Planner App",
        description: "A full-stack mobile app for managing travel itineraries. Features user authentication, AI-powered itinerary generation, trip planning, and profile management.",
        tech: ["React Native", "JavaScript", "Python", "Flask", "Full-Stack"],
        github: "https://github.com/Akash-Shenvi/Travel_Planner_App",
        live: "#",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
        badge: "Personal Project"
    },

];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const clientProjects = projects.filter(p => p.badge === 'Client Project');
    const personalProjects = projects.filter(p => p.badge !== 'Client Project');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 60 } },
    };

    const renderProjectCard = (project) => {
        const badgeClass = project.badge === 'Client Project'
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            : project.badge === 'Internship Project' || project.badge === 'Hackathon Project'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                : 'bg-primary/20 text-primary border-primary/30';

        return (
            <motion.div
                key={project.title}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="group premium-card flex flex-col cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Image area */}
                <div className="relative w-full h-48 sm:h-56 md:h-[400px] overflow-hidden bg-surface flex-shrink-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    {/* Desktop hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent hidden md:flex flex-col justify-end p-8">
                        {project.badge && (
                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-md border ${badgeClass}`}>
                                    {project.badge}
                                </span>
                            </div>
                        )}
                        <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors translate-y-4 group-hover:translate-y-0 duration-300">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white/90 text-xs font-semibold rounded-full border border-white/20 shadow-lg">{t}</span>
                            ))}
                        </div>
                    </div>
                    {/* Maximize icon (desktop) */}
                    <div className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                        <Maximize2 className="w-5 h-5" />
                    </div>
                    {/* Mobile tap hint */}
                    <div className="absolute top-3 right-3 p-2 bg-black/40 rounded-full text-white md:hidden">
                        <Maximize2 className="w-4 h-4" />
                    </div>
                </div>

                {/* Mobile content — ALWAYS visible, hidden on md+ */}
                <div className="md:hidden p-4 flex flex-col gap-2.5">
                    {project.badge && (
                        <span className={`self-start px-3 py-1 text-xs font-bold rounded-full border ${badgeClass}`}>
                            {project.badge}
                        </span>
                    )}
                    <h3 className="text-lg font-bold text-textMain leading-snug">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map(t => (
                            <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-textMain/70 text-[11px] font-medium rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="projects" className="relative py-12">
            {/* Background Blob (Optimized for performance) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-primary/5 rounded-[40%] blur-[120px] -z-10 transform-gpu" style={{ willChange: 'transform' }} />

            {/* Client Projects Section */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Client <span className="text-gradient">Work</span>
                </motion.h2>
                <p className="text-textMain/70 max-w-2xl mx-auto text-lg">Professional projects built for clients to solve real-world industry challenges.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-24"
            >
                {clientProjects.map(renderProjectCard)}
            </motion.div>

            {/* Hobby & Personal Projects Section */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Personal <span className="text-gradient">Projects</span>
                </motion.h2>
                <p className="text-textMain/70 max-w-2xl mx-auto text-lg">Hackathons, internships, and tools I built to learn and explore new technologies.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
                {personalProjects.map(renderProjectCard)}
            </motion.div>

            {/* Expanded Project Modal - scale+opacity only (no layoutId FLIP) */}
            <AnimatePresence mode="wait">
                {selectedProject !== null && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
                            onClick={() => setSelectedProject(null)}
                        />
                        {/* Modal */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] bg-surface rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-20 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Scrollable Container */}
                                <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto">
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2 h-64 lg:h-auto flex-shrink-0 relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        {selectedProject.badge && (
                                            <div className="mb-4">
                                                <span className={`inline-block px-4 py-1 text-sm font-bold rounded-full ${selectedProject.badge === 'Client Project'
                                                    ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30'
                                                    : selectedProject.badge === 'Internship Project' || selectedProject.badge === 'Hackathon Project'
                                                        ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                                                        : 'bg-primary/10 text-primary border border-primary/20'
                                                    }`}>
                                                    {selectedProject.badge}
                                                </span>
                                            </div>
                                        )}
                                        <h3 className="text-4xl font-extrabold mb-6 text-textMain">{selectedProject.title}</h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.12 }}
                                            className="text-textMain/70 text-lg leading-relaxed mb-8"
                                        >
                                            {selectedProject.description}
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.18 }}
                                            className="flex flex-wrap gap-3 mb-10"
                                        >
                                            {selectedProject.tech.map(t => (
                                                <span key={t} className="px-4 py-2 bg-primary/10 text-primary dark:bg-white/10 dark:text-white text-sm font-semibold rounded-xl">
                                                    {t}
                                                </span>
                                            ))}
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.24 }}
                                            className="flex items-center gap-6"
                                        >
                                            {selectedProject.github !== "#" && (
                                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-textMain text-background rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                                                    <Github className="w-5 h-5" /> Source Code
                                                </a>
                                            )}
                                            {selectedProject.live !== "#" && (
                                                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform glow-primary">
                                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
