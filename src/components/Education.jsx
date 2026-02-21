import { motion } from 'framer-motion';

const education = [
    {
        degree: "Bachelor of Engineering, CSE",
        school: "Canara Engineering College",
        period: "2022 - PRESENT",
        score: "CGPA: 8.11 / 10.0"
    },
    {
        degree: "Class XII (Science)",
        school: "Gokhale Centenary College",
        period: "2020 - 2022",
        score: "Percentage: 78.33%"
    },
    {
        degree: "Class X",
        school: "Nirmala Hridaya High School",
        period: "2019 - 2020",
        score: "Percentage: 92.96%"
    }
];

export default function Education() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 60 } },
    };

    return (
        <section id="education" className="max-w-4xl mx-auto relative z-10 py-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
                <p className="text-textMain/70 text-lg">My educational journey and qualifications.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-primary/20 dark:border-white/10 ml-4 md:ml-12 space-y-12 py-6"
            >
                {education.map((edu, index) => (
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
                            {edu.period}
                        </div>

                        {/* Education Card */}
                        <div className="premium-card p-6 md:p-8 bg-surface flex flex-col justify-center">
                            <h3 className="text-xl md:text-2xl font-bold text-textMain mb-2">{edu.degree}</h3>
                            <p className="text-textMain/70 text-lg mb-6">{edu.school}</p>
                            <p className="font-bold text-primary text-lg">{edu.score}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
