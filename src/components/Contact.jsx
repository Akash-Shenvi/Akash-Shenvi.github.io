import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section id="contact" className="relative pb-24 overflow-hidden">
            {/* Static ambient blobs - GPU composited, no layout jank */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -z-10 transform-gpu" style={{ willChange: 'transform' }} />
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] -z-10 transform-gpu" style={{ willChange: 'transform' }} />

            <div className="text-center mb-16 pt-12">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Let's <span className="text-gradient">Connect</span>
                </motion.h2>
                <p className="text-textMain/70 max-w-xl mx-auto text-lg md:text-xl">I'm currently looking for new opportunities and collaborations.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8"
            >
                {/* Contact Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <motion.a
                        variants={itemVariants}
                        href="mailto:akashshenvi93@gmail.com"
                        className="premium-card p-8 flex flex-col items-center justify-center text-center space-y-4 group"
                    >
                        <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-textMain mb-2">Email</h3>
                            <span className="text-textMain/70 text-sm md:text-base break-words">akashshenvi93@gmail.com</span>
                        </div>
                    </motion.a>

                    <motion.div variants={itemVariants} className="premium-card p-8 flex flex-col items-center justify-center text-center space-y-4 group">
                        <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                            <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-textMain mb-2">Phone</h3>
                            <span className="text-textMain/70 text-sm md:text-base">+91 9632611390</span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="premium-card p-8 flex flex-col items-center justify-center text-center space-y-4 group">
                        <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                            <MapPin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-textMain mb-2">Location</h3>
                            <span className="text-textMain/70 text-sm md:text-base">Mangalore, Karnataka, India</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-8 pt-8">
                    <a href="https://drive.google.com/file/d/1xXNTvQT4-qW4eL-I861XY0f4oW7tgx3-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-primary font-bold rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary glow-primary hover:scale-110">
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        <span className="relative text-lg">Download Resume</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
