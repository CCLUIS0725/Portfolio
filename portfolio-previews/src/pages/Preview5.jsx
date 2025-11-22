import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Aperture, Camera, Image as ImageIcon, Instagram, Twitter, Mail } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Preview5() {
    return (
        <div className="preview-5 min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white">
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter uppercase">
                        LENS<span className="text-zinc-500">.</span>
                    </div>
                    <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase">
                        <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
                        <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
                        <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section with See-Through Text */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background Image for Text Mask */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.p variants={fadeInUp} className="text-sm md:text-base font-mono text-zinc-500 mb-8 tracking-[0.2em] uppercase">
                            Visual Storyteller
                        </motion.p>

                        {/* See-Through Text Effect */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-cover bg-center select-none"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop')",
                                WebkitTextStroke: "1px rgba(255,255,255,0.1)"
                            }}
                        >
                            Capture
                            <br />
                            The Moment
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="mt-12 flex flex-col items-center gap-4">
                            <p className="max-w-md mx-auto text-zinc-400 text-lg font-light leading-relaxed">
                                Specializing in editorial, portrait, and commercial photography.
                                Creating images that speak louder than words.
                            </p>
                            <div className="h-16 w-[1px] bg-gradient-to-b from-zinc-800 to-zinc-200 mt-8"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Selected Work - Film Strip Style */}
            <section id="work" className="py-32 px-6 bg-zinc-950">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-end justify-between mb-24 border-b border-zinc-800 pb-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Selected Work</h2>
                        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">2023 — 2024</span>
                    </div>

                    <div className="grid grid-cols-1 gap-32">
                        {[
                            { title: "Urban Solitude", category: "Street Photography", img: "https://images.unsplash.com/photo-1449824913929-4b63a8278b40?q=80&w=2940&auto=format&fit=crop" },
                            { title: "Neon Nights", category: "Editorial", img: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2787&auto=format&fit=crop" },
                            { title: "Natural Light", category: "Portrait", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop" }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-10%" }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                    {/* Image */}
                                    <div className={`md:col-span-8 relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <div className="aspect-[3/2] bg-zinc-900 overflow-hidden">
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Film Strip Decorations */}
                                        <div className="absolute top-0 left-0 bottom-0 w-8 bg-black flex flex-col justify-between py-2 z-10 opacity-50">
                                            {[...Array(8)].map((_, j) => (
                                                <div key={j} className="w-4 h-3 bg-white/20 mx-auto rounded-[1px]"></div>
                                            ))}
                                        </div>
                                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-black flex flex-col justify-between py-2 z-10 opacity-50">
                                            {[...Array(8)].map((_, j) => (
                                                <div key={j} className="w-4 h-3 bg-white/20 mx-auto rounded-[1px]"></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`md:col-span-4 ${i % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 block">
                                            0{i + 1} / {project.category}
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-zinc-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                                            Capturing the essence of the moment through light and shadow.
                                            A study in contrast and composition.
                                        </p>
                                        <Link to="/preview5/case-study" className={`inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                            View Series <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services / Expertise */}
            <section className="py-32 px-6 bg-black border-t border-zinc-900">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
                        {[
                            { icon: <Camera size={32} />, title: "Photography", desc: "Editorial, Commercial, Portrait" },
                            { icon: <Aperture size={32} />, title: "Art Direction", desc: "Concept, Styling, Set Design" },
                            { icon: <ImageIcon size={32} />, title: "Retouching", desc: "High-end Post Production" }
                        ].map((service, i) => (
                            <div key={i} className="bg-black p-12 hover:bg-zinc-950 transition-colors group">
                                <div className="text-zinc-500 group-hover:text-white transition-colors mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-zinc-500">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-zinc-950">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Let's Create
                    </h2>
                    <p className="text-zinc-400 text-xl mb-12 font-light">
                        Available for commissions worldwide.
                    </p>
                    <a href="mailto:hello@example.com" className="inline-block px-12 py-4 bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors tracking-widest uppercase">
                        Get in Touch
                    </a>

                    <div className="flex justify-center gap-8 mt-20">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail /></a>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest border-t border-zinc-900 bg-black">
                <p>© 2024 Lens Portfolio • All Rights Reserved</p>
            </footer>
        </div>
    );
}
