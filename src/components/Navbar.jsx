import { useState } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-textMain relative group">
                    <span className="text-secondary group-hover:text-primary transition-colors duration-300">Akash</span>
                    <span className="group-hover:text-primary transition-colors duration-300">Shenvi</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-300" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors duration-300 relative group py-2">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1xXNTvQT4-qW4eL-I861XY0f4oW7tgx3-/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Resume <Download className="w-4 h-4" />
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-slate-700" />}
                    </button>
                </div>

                {/* Mobile Menu Button  */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-slate-700" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-textMain hover:text-primary focus:outline-none transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/1xXNTvQT4-qW4eL-I861XY0f4oW7tgx3-/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full transition-colors shadow-lg"
                            >
                                Resume <Download className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
