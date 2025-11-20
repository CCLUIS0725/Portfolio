import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, Hexagon, Box, Circle } from 'lucide-react';

export default function Preview6() {
    return (
        <div className="preview-6 min-h-screen bg-[#FFFDF5] text-black font-mono selection:bg-[#FF6B6B] selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-[#FFFDF5]">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-3xl font-black uppercase tracking-tighter hover:skew-x-12 transition-transform cursor-pointer">
                        Brutal.
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
                        <a href="#work" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">Work</a>
                        <a href="#about" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">About</a>
                        <a href="#contact" className="px-6 py-3 bg-[#FF6B6B] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            Hire Me
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b-4 border-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-block px-4 py-2 bg-[#4DE1C1] border-2 border-black font-bold uppercase tracking-wider mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            >
                                Full Stack Developer
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
                                Code <br />
                                <span className="text-transparent bg-clip-text bg-[#FF6B6B] stroke-black" style={{ WebkitTextStroke: '2px black' }}>Create</span> <br />
                                Conquer
                            </h1>
                            <p className="text-xl md:text-2xl font-bold max-w-2xl mb-10 leading-relaxed">
                                I build loud, fast, and accessible web experiences that refuse to be ignored.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="#work" className="px-8 py-4 bg-black text-white text-xl font-bold uppercase border-2 border-black shadow-[8px_8px_0px_0px_#4DE1C1] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#4DE1C1] transition-all">
                                    View Projects
                                </a>
                                <a href="#contact" className="px-8 py-4 bg-white text-black text-xl font-bold uppercase border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-4 relative hidden lg:block">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-[#FFD93D] rounded-full border-4 border-black flex items-center justify-center"
                            >
                                <Star className="w-32 h-32" strokeWidth={1.5} />
                            </motion.div>
                            <div className="relative z-10 w-full aspect-square bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="border-b-4 border-black bg-[#FFD93D] overflow-hidden py-4">
                <div className="whitespace-nowrap animate-marquee inline-block">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-2xl font-black uppercase mx-8">
                            React • TypeScript • Node.js • WebGL • Design •
                        </span>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <section id="work" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 flex items-center gap-4">
                        <Hexagon className="w-12 h-12 fill-black" /> Selected Work
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Retro Store", tag: "E-Commerce", color: "bg-[#FF6B6B]" },
                            { title: "Cyber Dashboard", tag: "SaaS", color: "bg-[#4DE1C1]" },
                            { title: "Brutal Blog", tag: "Content", color: "bg-[#FFD93D]" },
                            { title: "Neon Portfolio", tag: "Personal", color: "bg-[#A78BFA]" }
                        ].map((project, i) => (
                            <Link to="/preview6/case-study" key={i} className="group relative block">
                                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                                <div className={`relative border-4 border-black ${project.color} p-8 h-full flex flex-col justify-between transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`}>
                                    <div className="mb-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 bg-white border-2 border-black font-bold uppercase text-sm">
                                                {project.tag}
                                            </span>
                                            <ArrowUpRight className="w-8 h-8 border-2 border-black bg-white rounded-full p-1 transition-transform group-hover:rotate-45" />
                                        </div>
                                        <h3 className="text-4xl font-black uppercase leading-none mb-2">{project.title}</h3>
                                        <p className="font-bold opacity-75">A radical approach to modern web design.</p>
                                    </div>
                                    <div className="w-full aspect-video bg-white border-2 border-black flex items-center justify-center overflow-hidden">
                                        <Box className="w-16 h-16" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-6 border-t-4 border-black bg-black text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Strategy", desc: "I don't just code. I plan, strategize, and execute digital dominance." },
                            { title: "Design", desc: "Bold, unapologetic, and functional designs that stick in your brain." },
                            { title: "Development", desc: "Clean code, fast performance, and zero compromises." }
                        ].map((service, i) => (
                            <div key={i} className="border-2 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300">
                                <Circle className="w-12 h-12 mb-6" />
                                <h3 className="text-3xl font-black uppercase mb-4">{service.title}</h3>
                                <p className="text-lg font-bold leading-relaxed opacity-80">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-[#4DE1C1] border-t-4 border-black">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.9]">
                        Let's Make <br /> Some Noise
                    </h2>
                    <p className="text-2xl font-bold mb-12 max-w-2xl mx-auto">
                        Got a crazy idea? I'm ready to build it. No boring projects allowed.
                    </p>
                    <a href="mailto:hello@example.com" className="inline-block px-12 py-6 bg-white text-black text-2xl font-black uppercase border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                        Start Project
                    </a>
                </div>
            </section>

            <footer className="py-12 border-t-4 border-black bg-white text-center font-bold uppercase">
                <p>© 2024 Neo-Brutalism Preview. All rights reserved.</p>
            </footer>
        </div>
    );
}
