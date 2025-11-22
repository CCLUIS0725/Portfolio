import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, RotateCcw, Trophy, Grid, User, Briefcase, Code, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

// Tetris Colors
const COLORS = {
    I: '#00FFFF', // Cyan
    J: '#0000FF', // Blue
    L: '#FFA500', // Orange
    O: '#FFFF00', // Yellow
    S: '#00FF00', // Green
    T: '#800080', // Purple
    Z: '#FF0000', // Red
    BG: '#111111',
    GRID: '#222222'
};

// Tetromino Shapes (Simplified for UI)
const SHAPES = {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    Z: [[1, 1, 0], [0, 1, 1]]
};

const PixelText = ({ children, size = 'md', color = 'white', className = '' }) => {
    const sizes = {
        sm: 'text-xs md:text-sm',
        md: 'text-base md:text-lg',
        lg: 'text-2xl md:text-4xl',
        xl: 'text-4xl md:text-6xl'
    };

    return (
        <div className={`font-mono uppercase tracking-widest ${sizes[size]} text-${color} ${className}`} style={{ textShadow: '2px 2px 0px #000' }}>
            {children}
        </div>
    );
};

const TetrisBlock = ({ color, delay = 0 }) => (
    <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay }}
        className="w-full h-full border-4 border-black relative"
        style={{ backgroundColor: color }}
    >
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-white/30"></div>
        <div className="absolute bottom-0 right-0 w-full h-full border-b-4 border-r-4 border-black/20"></div>
    </motion.div>
);

const StatBox = ({ label, value, color }) => (
    <div className="bg-black border-4 border-zinc-800 p-4 flex flex-col items-center justify-center gap-2 w-full">
        <span className="text-zinc-500 font-mono text-xs">{label}</span>
        <span className="font-mono text-xl md:text-2xl" style={{ color }}>{value}</span>
    </div>
);

const ProjectCard = ({ title, role, tech, color, delay }) => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group relative bg-black border-4 hover:translate-y-1 transition-transform"
            style={{ borderColor: color }}
        >
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-black border-4 flex items-center justify-center z-10" style={{ borderColor: color }}>
                <div className="w-2 h-2 bg-white animate-pulse"></div>
            </div>

            <div className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Grid size={48} color={color} />
                </div>

                <h3 className="font-mono text-xl mb-2 text-white">{title}</h3>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
                    <span className="font-mono text-xs text-zinc-400">{role}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map(t => (
                        <span key={t} className="px-2 py-1 text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                            {t}
                        </span>
                    ))}
                </div>

                <Link to="/preview4/case-study" className="inline-flex items-center gap-2 font-mono text-sm hover:underline" style={{ color }}>
                    <span>PRESS START</span>
                    <ArrowRight size={14} />
                </Link>
            </div>
        </motion.div>
    );
};

export default function Preview4() {
    const [score, setScore] = useState(0);
    const [lines, setLines] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore(prev => prev + 10);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#111] text-white font-mono selection:bg-green-500 selection:text-black overflow-x-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* HUD / Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b-4 border-zinc-800 p-4">
                <div className="container mx-auto max-w-6xl flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-red-500 border-2 border-white animate-pulse"></div>
                        <span className="font-bold tracking-widest text-xl">PLAYER 1</span>
                    </div>

                    <div className="hidden md:flex gap-8">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-zinc-500">SCORE</span>
                            <span className="text-xl text-yellow-400">{score.toString().padStart(6, '0')}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-zinc-500">LINES</span>
                            <span className="text-xl text-green-400">{lines.toString().padStart(3, '0')}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-zinc-500">LEVEL</span>
                            <span className="text-xl text-cyan-400">05</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-zinc-800 border-2 border-transparent hover:border-zinc-700 transition-colors">
                            <Pause size={20} />
                        </button>
                        <button className="p-2 hover:bg-zinc-800 border-2 border-transparent hover:border-zinc-700 transition-colors">
                            <RotateCcw size={20} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 container mx-auto px-6 max-w-5xl relative z-10">

                {/* Hero Section */}
                <section className="min-h-[80vh] flex flex-col justify-center mb-32">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="border-8 border-double border-zinc-700 p-8 md:p-16 bg-black/80 backdrop-blur-sm max-w-4xl mx-auto text-center relative"
                    >
                        {/* Decorative Tetrominoes */}
                        <div className="absolute -top-12 -left-12 w-24 h-24 grid grid-cols-2 gap-0 animate-bounce">
                            <TetrisBlock color={COLORS.O} />
                            <TetrisBlock color={COLORS.O} />
                            <TetrisBlock color={COLORS.O} />
                            <TetrisBlock color={COLORS.O} />
                        </div>

                        <PixelText size="sm" color="zinc-400" className="mb-4">INSERT COIN TO START</PixelText>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-red-500">G</span>
                            <span className="text-orange-500">A</span>
                            <span className="text-yellow-500">M</span>
                            <span className="text-green-500">E</span>
                            <br />
                            <span className="text-cyan-500">D</span>
                            <span className="text-blue-500">E</span>
                            <span className="text-purple-500">V</span>
                        </h1>
                        <p className="font-mono text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Building interactive digital experiences one block at a time.
                            Full-stack developer with a high score in React & UI Design.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-4 border-green-500 text-green-500 px-8 py-4 font-bold text-xl hover:bg-green-500 hover:text-black transition-all animate-pulse"
                        >
                            PRESS START
                        </motion.button>
                    </motion.div>
                </section>

                {/* Stats / Skills */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <Trophy className="text-yellow-500" size={32} />
                        <h2 className="text-3xl font-bold">HIGH SCORES</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatBox label="REACT.JS" value="98%" color={COLORS.I} />
                        <StatBox label="TYPESCRIPT" value="92%" color={COLORS.J} />
                        <StatBox label="UI DESIGN" value="95%" color={COLORS.T} />
                        <StatBox label="NODE.JS" value="88%" color={COLORS.S} />
                    </div>
                </section>

                {/* Work / Levels */}
                <section id="work" className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <Grid className="text-cyan-500" size={32} />
                        <h2 className="text-3xl font-bold">LEVEL SELECT</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="NEON DASHBOARD"
                            role="Frontend Lead"
                            tech={['React', 'D3.js', 'Tailwind']}
                            color={COLORS.I}
                            delay={0.1}
                        />
                        <ProjectCard
                            title="CRYPTO WALLET"
                            role="UI Designer"
                            tech={['Figma', 'Motion', 'Web3']}
                            color={COLORS.L}
                            delay={0.2}
                        />
                        <ProjectCard
                            title="RETRO COMMERCE"
                            role="Full Stack"
                            tech={['Next.js', 'Stripe', 'Prisma']}
                            color={COLORS.Z}
                            delay={0.3}
                        />
                        <ProjectCard
                            title="HEALTH TRACKER"
                            role="Mobile Dev"
                            tech={['React Native', 'Firebase']}
                            color={COLORS.S}
                            delay={0.4}
                        />
                    </div>
                </section>

                {/* About / Credits */}
                <section className="mb-20 border-t-4 border-zinc-800 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <User className="text-purple-500" size={32} />
                                <h2 className="text-3xl font-bold">PLAYER PROFILE</h2>
                            </div>
                            <p className="text-zinc-400 leading-loose mb-8 text-lg">
                                &gt; INITIALIZING BIO...<br />
                                &gt; LOADED.<br /><br />
                                I'm a creative developer who treats every project like a new level to conquer.
                                With a background in both design and engineering, I fit the pieces together
                                to create seamless user experiences.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 border-2 border-zinc-700 hover:border-white hover:bg-white hover:text-black transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="#" className="p-3 border-2 border-zinc-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="p-3 border-2 border-zinc-700 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Avatar / Character */}
                        <div className="relative aspect-square max-w-sm mx-auto border-4 border-zinc-800 bg-zinc-900 p-8 flex items-center justify-center">
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-1 opacity-20">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="bg-zinc-700"></div>
                                ))}
                            </div>
                            <div className="relative z-10 text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-4 border-4 border-white"></div>
                                <div className="bg-black px-4 py-1 border border-zinc-700 inline-block">
                                    LVL. 24
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="text-center text-zinc-600 text-xs py-8">
                    GAME OVER • INSERT COIN TO CONTINUE
                </footer>
            </main>
        </div>
    );
}
