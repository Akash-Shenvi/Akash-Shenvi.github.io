import { motion } from 'framer-motion';

const experience = [
    {
        role: "Software Product Developer Intern",
        company: "Sclera VDMS",
        period: "Dec 2025 - Present",
        description: "Currently working as an intern contributing to software product development, focusing on building and enhancing core features.",
        links: [
            { label: "Offer Letter", url: "https://drive.google.com/file/d/13LOYxRg4EXhHXEe_bF_nafYYrtktNYF0/view?usp=drive_link" }
        ]
    },
    {
        role: "Intern - IOT Data Ingestion",
        company: "Sumana Embedded Technologies, Bangalore",
        period: "May 2025 - Nov 2025",
        description: "Successfully executed the 'IOT Data Ingestion Demonstration' project involving Front End Web (HTML/CSS/JS), Backend Google Cloud Functions, Log Monitoring, Data Warehouse (Big Query), and SQL.",
        links: [
            { label: "Offer Letter", url: "https://drive.google.com/file/d/1Yr5B_bWHe1oRwQn8qD9hUvD6Gt-XY_xD/view?usp=drive_link" },
            { label: "Completion Certificate", url: "https://drive.google.com/file/d/1WosfsAolGVkBC0ERNahf_PgRdVKcTl68/view" },
            { label: "Live Demo", url: "https://iot-data-ingestion.vercel.app/" }
        ]
    }
];

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="experience" className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-primary/20 dark:border-white/10 ml-4 md:ml-12 space-y-12 py-6"
            >
                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Timeline Node Dot */}
                        <div className="absolute w-5 h-5 rounded-full border-4 border-secondary bg-surface -left-[11px] top-1 group-hover:scale-125 group-hover:border-primary transition-all duration-300 shadow-lg z-10"></div>

                        {/* Connecting subtle line to the card (optional highlight effect) */}
                        <div className="absolute left-0 top-3 w-8 h-px bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>

                        {/* Date / Period */}
                        <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4 flex items-center">
                            {exp.period}
                        </div>

                        {/* Experience Card */}
                        <div className="premium-card p-6 md:p-8 flex flex-col md:flex-row gap-6 bg-surface">
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-textMain">{exp.role}</h3>
                                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                                    </div>
                                </div>

                                <p className="text-textMain/70 leading-relaxed max-w-2xl">{exp.description}</p>

                                {exp.links && exp.links.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        {exp.links.map((linkItem, lIndex) => (
                                            <a key={lIndex} href={linkItem.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors group bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 hover:border-secondary/30">
                                                {linkItem.label}
                                                <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
