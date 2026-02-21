import { motion } from 'framer-motion';

const techStackTopRow = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MERN Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const techStackBottomRow = [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", invertInDark: true },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "VPS Hosting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const MarqueeRow = ({ items, direction = "left" }) => {
    return (
        <div className="flex w-full overflow-hidden shrink-0 group py-4">
            <motion.div
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="flex space-x-6 w-max shrink-0 pr-6"
            >
                {/* Render twice for infinite scrolling loop */}
                {[...items, ...items].map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 bg-surface border border-black/5 dark:border-white/5 shadow-md rounded-2xl px-6 py-4 hover:scale-105 hover:shadow-glow-primary transition-all duration-300"
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className={`w-8 h-8 object-contain ${tech.invertInDark ? 'dark:invert' : ''}`}
                        />
                        <span className="font-bold text-lg text-textMain/80 tracking-wide">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 overflow-hidden">
            {/* Heavy animated background elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] -z-10"
            />

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Tech <span className="text-gradient hover:animate-pulse">Stack</span>
                </motion.h2>
                <p className="text-textMain/70 max-w-2xl mx-auto text-lg">Technologies and tools that power my development process.</p>
            </div>

            <div className="relative w-full mx-auto z-10 space-y-4 filter drop-shadow-sm">
                <MarqueeRow items={techStackTopRow} direction="left" />
                <MarqueeRow items={techStackBottomRow} direction="right" />
            </div>
        </section>
    );
}
