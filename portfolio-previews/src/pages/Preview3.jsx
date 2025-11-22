import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowUpRight, Command, Sparkles, Zap, Box, Layout, User, Palette, MousePointer2 } from 'lucide-react';

// Import Images
import fintechImg from '../assets/fintech.png';
import bankingImg from '../assets/banking.png';
import ecommerceImg from '../assets/ecommerce.png';
import healthImg from '../assets/health.png';

// Text Reveal Component
const TextReveal = ({ text, delay = 0, className = "" }) => {
    const words = text.split(" ");
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                className="flex flex-wrap gap-x-3"
            >
                {words.map((word, i) => (
                    <span key={i} className="inline-block">{word}</span>
                ))}
            </motion.div>
        </div>
    );
};

// Dynamic Island Navigation
const DynamicNav = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'home', icon: <Command size={16} />, label: 'Home' },
        { id: 'work', icon: <Layout size={16} />, label: 'Gallery' },
        { id: 'skills', icon: <Zap size={16} />, label: 'Archive' },
        { id: 'about', icon: <User size={16} />, label: 'Artist' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-1 p-1.5 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/20"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                            }`}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-zinc-800 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            {item.icon}
                            {item.label}
                        </span>
                    </button>
                ))}
            </motion.div>
        </div>
    );
};

// Gallery Item Component
const GalleryItem = ({ i, title, category, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative"
        >
            {/* Frame */}
            <div className="p-4 bg-white shadow-sm border border-zinc-200 transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative">
                    {/* Image with Grayscale Effect */}
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            </div>

            {/* Placard */}
            <div className="mt-6 flex justify-between items-end border-l-2 border-orange-500 pl-4 ml-4">
                <div>
                    <h3 className="text-2xl font-serif font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">
                        {category} • 2024
                    </p>
                </div>
                <Link to="/preview3/case-study" className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
                        <ArrowUpRight size={18} />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default function Preview3() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[#F2F2F2] text-zinc-900 font-sans selection:bg-orange-500/30">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
                style={{ scaleX }}
            />

            <DynamicNav />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex flex-col justify-center container mx-auto px-6 max-w-6xl pt-20">
                <header className="mb-24">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="h-8 w-8 bg-orange-500 flex items-center justify-center text-white font-serif font-bold italic">
                            L
                        </div>
                        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">
                            Curated Portfolio
                        </span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12 text-zinc-900 mix-blend-darken">
                        <TextReveal text="Digital" />
                        <TextReveal text="Artistry" delay={0.1} />
                        <TextReveal text="& Code." delay={0.2} />
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 md:items-end max-w-3xl border-l border-zinc-300 pl-8"
                    >
                        <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-serif italic">
                            "I build interfaces that feel like magic. Focusing on micro-interactions,
                            fluid motion, and clean typography."
                        </p>
                        <div className="flex gap-4">
                            <Button className="rounded-full bg-zinc-900 text-white hover:bg-orange-500 border-none px-8 h-12">
                                View Collection
                            </Button>
                        </div>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-6 animate-bounce text-zinc-400"
                >
                    <MousePointer2 size={24} />
                </motion.div>
            </section>

            {/* Work Section - "The Gallery" */}
            <section id="work" className="py-32 container mx-auto px-6 max-w-6xl">
                <div className="flex items-end justify-between mb-20 border-b border-zinc-300 pb-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">Selected Works</h2>
                        <p className="font-serif italic text-zinc-500 text-xl">Exhibit A — 2023-2024</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 hidden md:block">
                        Scroll to explore
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    <GalleryItem i={1} title="FinTech Dashboard" category="Product Design" image={fintechImg} />
                    <div className="md:pt-32">
                        <GalleryItem i={2} title="Mobile Banking" category="UX Research" image={bankingImg} />
                    </div>
                    <GalleryItem i={3} title="E-commerce Platform" category="Web Development" image={ecommerceImg} />
                    <div className="md:pt-32">
                        <GalleryItem i={4} title="Health & Wellness" category="Mobile App" image={healthImg} />
                    </div>
                </div>
            </section>

            {/* Skills Section - "The Archive" */}
            <section id="skills" className="py-32 bg-zinc-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">The Archive</h2>
                        <p className="font-serif italic text-zinc-500 text-xl">Technical Capabilities & Tools</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-300 border border-zinc-300">
                        {['Figma', 'React', 'Motion', 'Tailwind', 'Next.js', 'TypeScript', 'Node.js', 'Three.js'].map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-[#F2F2F2] p-8 hover:bg-white transition-colors group aspect-square flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
                                    <Zap size={20} className="text-zinc-300 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">{skill}</h3>
                                    <div className="h-0.5 w-0 bg-orange-500 mt-2 group-hover:w-full transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section - "The Artist" */}
            <section id="about" className="py-32 container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] bg-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 ease-out relative overflow-hidden">
                            {/* Placeholder for Artist Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-600">
                                <User size={120} strokeWidth={0.5} />
                            </div>
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -top-4 -left-4 w-full h-full border border-zinc-900 -z-10" />
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">The Artist</h2>
                            <p className="text-xl text-zinc-600 leading-relaxed mb-8 font-serif">
                                "Design is not just about how it looks, but how it feels. I strive to create digital experiences that evoke emotion and spark curiosity."
                            </p>
                            <p className="text-zinc-500 leading-relaxed mb-12">
                                With over 5 years of experience in digital product design and development, I've had the privilege of working with forward-thinking companies to build products that scale. My approach combines technical precision with artistic intuition.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h4 className="font-bold mb-2">Experience</h4>
                                    <ul className="text-zinc-500 space-y-1 text-sm">
                                        <li>Senior Designer @ Tech Co</li>
                                        <li>Frontend Dev @ Startup</li>
                                        <li>Freelance Art Director</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Recognition</h4>
                                    <ul className="text-zinc-500 space-y-1 text-sm">
                                        <li>Awwwards SOTD</li>
                                        <li>CSS Design Awards</li>
                                        <li>Behance Featured</li>
                                    </ul>
                                </div>
                            </div>

                            <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 h-12">
                                Get in Touch
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-zinc-200 text-center text-zinc-400 text-sm font-mono uppercase tracking-widest">
                <p>© 2024 Luis Cabrera • Curated Collection</p>
            </footer>
        </div>
    );
}
