import { useEffect, useRef } from 'react';

export default function Particles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: false, alpha: true });
        let particles = [];
        let animationFrameId;

        // Adjust these values to tweak the effect
        const properties = {
            particleColor: 'rgba(59, 130, 246, 0.4)', // Primary color with opacity
            lineColor: 'rgba(59, 130, 246, 0.1)',
            particleRadius: 3,
            particleCount: 60,
            particleMaxVelocity: 0.5,
            lineLength: 150,
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.velocityX = (Math.random() - 0.5) * properties.particleMaxVelocity * 2;
                this.velocityY = (Math.random() - 0.5) * properties.particleMaxVelocity * 2;
                // Optional: slight size variation
                this.radius = Math.random() * properties.particleRadius + 1;
            }

            position() {
                // Bounce off walls
                if (this.x + this.radius > canvas.width && this.velocityX > 0) {
                    this.velocityX *= -1;
                }
                if (this.x - this.radius < 0 && this.velocityX < 0) {
                    this.velocityX *= -1;
                }
                if (this.y + this.radius > canvas.height && this.velocityY > 0) {
                    this.velocityY *= -1;
                }
                if (this.y - this.radius < 0 && this.velocityY < 0) {
                    this.velocityY *= -1;
                }

                this.x += this.velocityX;
                this.y += this.velocityY;
            }

            reDraw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const count = window.innerWidth < 768 ? properties.particleCount / 2 : properties.particleCount;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            let x1, y1, x2, y2, length, opacity;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = particles[j].x;
                    y2 = particles[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

                    if (length < properties.lineLength) {
                        opacity = 1 - length / properties.lineLength;
                        ctx.lineWidth = 1;
                        // Draw line with opacity based on distance
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`; // Match line color but dynamic opacity
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        };

        const reDrawBackground = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        const loop = () => {
            reDrawBackground();
            for (let i = 0; i < particles.length; i++) {
                particles[i].position();
                particles[i].reDraw();
            }
            drawLines();
            animationFrameId = requestAnimationFrame(loop);
        };

        // Initialization
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        resizeCanvas();
        initParticles();
        loop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-transparent">
            {/* Static ambient blobs - no animation, GPU composited */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[80px] transform-gpu" style={{ willChange: 'transform' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[80px] transform-gpu" style={{ willChange: 'transform' }} />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40" style={{ willChange: 'transform' }} />
        </div>
    );
}
