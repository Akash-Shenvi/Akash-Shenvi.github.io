import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
    };

    return (
        <section id="hero" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-8 pb-12 lg:pt-0 lg:pb-0">

            {/* Animated Background Geometry (Optimized) */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                {/* Background rings - CSS animations keep these on compositor thread */}
                <div
                    className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] border-[1px] border-primary/10 rounded-full border-dashed absolute transform-gpu"
                    style={{ animation: 'spin 40s linear infinite', willChange: 'transform' }}
                />
                <div
                    className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border-[1px] border-secondary/10 rounded-full border-dotted absolute transform-gpu"
                    style={{ animation: 'spin 30s linear infinite reverse', willChange: 'transform' }}
                />
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center z-10">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-8 order-2 lg:order-1"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-surface border border-white/10 shadow-sm relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            style={{ animation: 'shimmer 2s linear infinite', willChange: 'transform' }}
                        />
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:animate-spin" />
                        <span className="text-xs sm:text-sm font-bold text-textMain tracking-wide">Available for new opportunities</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight w-full">
                        Hi, I'm <br className="hidden sm:block" />
                        <span className="text-gradient relative inline-block ml-2 sm:ml-0">
                            Akash D Shenvi
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-textMain/80 font-medium max-w-xl w-full">
                        Full-Stack Developer crafting scalable applications and immersive digital experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-bold rounded-xl glow-primary transition-all duration-300 hover:scale-105 hover:bg-blue-600 flex items-center justify-center relative overflow-hidden group"
                        >
                            <span className="relative z-10">View My Work</span>
                            <motion.div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-surface text-textMain font-bold rounded-xl border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:border-secondary/50 flex items-center justify-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex space-x-6 pt-2 lg:pt-4">
                        <a href="https://github.com/Akash-Shenvi" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface rounded-full shadow-lg hover:text-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/akash-d-shenvi-474234259" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface rounded-full shadow-lg hover:text-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:akashshenvi93@gmail.com" className="p-4 bg-surface rounded-full shadow-lg hover:text-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30">
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Photo Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    className="relative w-[75%] sm:w-full max-w-[280px] sm:max-w-xs md:max-w-md mx-auto lg:ml-auto order-1 lg:order-2 mt-6 mb-4 lg:mt-0 lg:mb-0"
                >
                    {/* Animated Blob behind image (Optimized) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-50 dark:opacity-30 rounded-full transform-gpu" />

                    <div className="relative aspect-square rounded-[3rem] overflow-hidden border-4 border-surface shadow-2xl glass p-2 transform transition-transform hover:scale-105 duration-500">
                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-black/5 to-black/20 dark:from-white/5 dark:to-white/20">
                            {/* Profile Photo */}
                            <img
                                src={profileImg}
                                alt="Akash D Shenvi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Floating badges around photo */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold shadow-lg text-primary text-sm sm:text-base z-10"
                    >
                        Full-Stack
                    </motion.div>
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold shadow-lg text-secondary text-sm sm:text-base z-10"
                    >
                        Developer
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
