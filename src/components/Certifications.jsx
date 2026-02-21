import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Cloud } from 'lucide-react';

const metaCerts = [
    {
        badgeId: "b2e4c743-aa00-41c7-864a-f82d2320caec",
        link: "https://coursera.org/share/b73d4c288eeef46e40685335ee1ed40c"
    },
    {
        badgeId: "f88757f4-6363-495b-b7f9-27514e3d6b95",
        link: "https://coursera.org/share/deb8dca5aa2512cad8e70492eb1f03ab"
    },
    {
        badgeId: "1ece263d-f72e-40e6-a33d-c60ce129a769",
        link: "https://www.credly.com/badges/1ece263d-f72e-40e6-a33d-c60ce129a769/public"
    }
];

const gcpCerts = [
    {
        badgeId: "3d7895ed-94bd-49b8-a551-3af2df8ae768",
        link: "https://www.credly.com/badges/3d7895ed-94bd-49b8-a551-3af2df8ae768/public"
    },
    {
        badgeId: "1d4327b6-2ca4-44f7-9182-d63b22634317",
        link: "https://www.credly.com/badges/1d4327b6-2ca4-44f7-9182-d63b22634317/public"
    }
];

function CredlyBadge({ badgeId }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Remove any old iframes so credly re-embeds at the new size
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            const badgeDiv = document.createElement('div');
            badgeDiv.setAttribute('data-iframe-width', '300');
            badgeDiv.setAttribute('data-iframe-height', '270');
            badgeDiv.setAttribute('data-share-badge-id', badgeId);
            badgeDiv.setAttribute('data-share-badge-host', 'https://www.credly.com');
            containerRef.current.appendChild(badgeDiv);

            // Re-trigger the Credly embed script
            const oldScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
            if (oldScript) oldScript.remove();

            const script = document.createElement('script');
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [badgeId]);

    return <div ref={containerRef} className="w-full flex items-center justify-center" />;
}

export default function Certifications() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
    };

    const renderCertGrid = (certs) => (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-8"
        >
            {certs.map((cert, index) => (
                <motion.div
                    key={cert.badgeId}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="relative group"
                >
                    {/* Glowing Backdrop on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-primary/40 via-secondary/40 to-primary/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500 transform-gpu" />

                    {/* Card - dark surface to match site theme */}
                    <div className="relative w-[360px] bg-surface rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/10 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                        {/* Credly Badge - white inner bg so iframe text is readable */}
                        <div className="w-full min-h-[270px] flex items-center justify-center bg-white rounded-xl p-2">
                            <CredlyBadge badgeId={cert.badgeId} />
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full text-center py-3 bg-primary/10 hover:bg-primary text-textMain hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-primary/20 hover:border-primary"
                        >
                            Verify Certificate <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <section id="certifications" className="relative py-24 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 transform-gpu pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 transform-gpu pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Verified <span className="text-gradient">Credentials</span>
                    </motion.h2>
                    <p className="text-textMain/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        Industry-recognized certifications showcasing my expertise across Front-End, Back-End, and Cloud technologies.
                    </p>
                </div>

                {/* Meta Certifications */}
                <div className="mb-24">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <ShieldCheck className="w-7 h-7 text-blue-500" />
                        <h3 className="text-2xl md:text-3xl font-bold text-textMain">Meta Specializations</h3>
                    </div>
                    {renderCertGrid(metaCerts)}
                </div>

                {/* Google Cloud Certifications */}
                <div>
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Cloud className="w-7 h-7 text-yellow-500" />
                        <h3 className="text-2xl md:text-3xl font-bold text-textMain">Google Cloud Skill Badges</h3>
                    </div>
                    {renderCertGrid(gcpCerts)}
                </div>
            </div>
        </section>
    );
}
