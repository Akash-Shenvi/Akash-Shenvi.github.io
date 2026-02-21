import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Maximize2 } from 'lucide-react';

const projects = [
    {
        title: "SoVir Technologies Corporate",
        description: "Official corporate website for SoVir Technologies, delivering cutting-edge solutions in industrial automation. Features comprehensive service listings, industry expertise showcases, and an end-to-end support portfolio for manufacturing processes.",
        tech: ["React", "Tailwind CSS", "UI/UX", "Web Development"],
        github: "#",
        live: "https://sovirtechnologies.in/",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "SoVir Skilling & Training Portal",
        description: "A professional training academy platform empowering individuals with industry-ready skills. Includes features for student enrollment, mentor assignments, class scheduling, and material distribution for Industrial Automation and Global Languages.",
        tech: ["React", "Tailwind CSS", "Node.js", "Full-Stack"],
        github: "#",
        live: "http://training.sovirtechnologies.in/",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "SkillBridge",
        description: "An AI-powered job recommendation and professional networking platform. Uses Sentence Transformers and Machine Learning to semantically match search queries with job descriptions and automatically extract skills from resumes.",
        tech: ["Python (Flask)", "Scikit-learn", "Tailwind CSS", "Semantic Search"],
        github: "https://github.com/Akash-Shenvi/skillbridge",
        live: "#",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Study Material Distribution Platform",
        description: "A full-stack web app to distribute academic resources semester-wise. Features Google Drive API integration, a secure admin dashboard, and role-based access control.",
        tech: ["React.js", "Flask", "MySQL", "Google Drive API"],
        github: "https://github.com/Akash-Shenvi/andhub-canara",
        live: "https://andhub-canara.web.app",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Find My Recipe",
        description: "A full-stack recipe platform with an AI recipe creator and a 4000+ recipe dataset. Implemented JWT-based authentication, OAuth login, and features to create, upload, and view recipes.",
        tech: ["Flask", "React", "MySQL"],
        github: "https://github.com/Akash-Shenvi/FindMyRecipe",
        live: "https://find-my-recipe-6bf86.web.app",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Resume Relevance AI",
        description: "A hackathon project that uses the Gemini API to parse and score resumes against job descriptions. Recruiters can use this tool to automatically shortlist candidates based on resume scores.",
        tech: ["Gemini API", "MySQL", "React", "Flask"],
        github: "https://github.com/Akash-Shenvi/Hackthon",
        live: "https://automated-resume-checker.web.app",
        image: "https://images.unsplash.com/photo-1586281380349-632531a56e51?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "IOT Data Ingestion Pipeline",
        description: "An IoT telemetry data ingestion pipeline built during my internship at Sumana Embedded Technologies. Features a frontend web interface, backend Google Cloud Functions, log monitoring, and data warehousing using BigQuery and SQL.",
        tech: ["HTML/CSS/JS", "Google Cloud", "BigQuery", "SQL"],
        github: "https://github.com/Akash-Shenvi/iot_data_ingestion_techstack",
        live: "https://iot-data-ingestion.vercel.app/",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "YouTube Video Downloader Extension",
        description: "A client-side Chrome extension that enables users to download high-resolution YouTube videos (including 4K) by seamlessly merging separate video and audio streams using FFmpeg WebAssembly.",
        tech: ["JavaScript", "Chrome Extensions API", "FFmpeg.wasm"],
        github: "https://github.com/Akash-Shenvi/Youtube-Video-Download",
        live: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
    },


    {
        title: "AI Travel Planner App",
        description: "A full-stack mobile app for managing travel itineraries. Features user authentication, AI-powered itinerary generation, trip planning, and profile management.",
        tech: ["React Native", "Flask", "RESTful APIs"],
        github: "https://github.com/Akash-Shenvi/Travel_Planner_App",
        live: "#",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
    },

];

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 45 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, type: "spring", stiffness: 50 } },
    };

    return (
        <section id="projects" className="relative py-12">
            {/* Heavy Background Blob */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-primary/5 rounded-[40%] blur-[120px] -z-10"
            />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>
                <p className="text-textMain/70 max-w-2xl mx-auto text-lg">Hover to interact or click a project to view it in full screen detail.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        layoutId={`card-container-${index}`}
                        onClick={() => setSelectedId(index)}
                        className="group premium-card flex flex-col h-[400px] cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Image Preview Area */}
                        <motion.div
                            layoutId={`card-image-container-${index}`}
                            className="relative h-full w-full overflow-hidden bg-surface"
                        >
                            <motion.img
                                layoutId={`card-image-${index}`}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                                <motion.div layoutId={`card-title-container-${index}`}>
                                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors translate-y-4 group-hover:translate-y-0 duration-300">{project.title}</h3>
                                </motion.div>
                                <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white/90 text-xs font-semibold rounded-full border border-white/20 shadow-lg">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Maximize Icon */}
                            <div className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Maximize2 className="w-5 h-5" />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Expanded Project Modal */}
            <AnimatePresence>
                {selectedId !== null && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
                            onClick={() => setSelectedId(null)}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="w-full max-w-5xl bg-surface rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col lg:flex-row relative"
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-10 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <motion.div layoutId={`card-image-container-${selectedId}`} className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                                    <motion.img
                                        layoutId={`card-image-${selectedId}`}
                                        src={projects[selectedId].image}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <motion.div layoutId={`card-title-container-${selectedId}`}>
                                        <h3 className="text-4xl font-extrabold mb-6 text-textMain">{projects[selectedId].title}</h3>
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-textMain/70 text-lg leading-relaxed mb-8"
                                    >
                                        {projects[selectedId].description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-wrap gap-3 mb-10"
                                    >
                                        {projects[selectedId].tech.map(t => (
                                            <span key={t} className="px-4 py-2 bg-primary/10 text-primary dark:bg-white/10 dark:text-white text-sm font-semibold rounded-xl">
                                                {t}
                                            </span>
                                        ))}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center gap-6"
                                    >
                                        {projects[selectedId].github !== "#" && (
                                            <a href={projects[selectedId].github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-textMain text-background rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                                                <Github className="w-5 h-5" /> Source Code
                                            </a>
                                        )}
                                        {projects[selectedId].live !== "#" && (
                                            <a href={projects[selectedId].live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform glow-primary">
                                                <ExternalLink className="w-5 h-5" /> Live Demo
                                            </a>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
