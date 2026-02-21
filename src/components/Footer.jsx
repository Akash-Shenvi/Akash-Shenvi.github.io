export default function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/5 py-8 mt-12">
            <div className="container mx-auto px-6 text-center text-textMain/60 text-sm">
                <p>&copy; {new Date().getFullYear()} Akash D Shenvi. Designed with <span className="text-red-500">&hearts;</span> & React.</p>
                <p className="mt-2 text-xs opacity-70">Built with Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
}
