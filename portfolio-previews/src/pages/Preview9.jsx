import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Grid, Circle, Square } from 'lucide-react';
import PreloadLink from '../components/PreloadLink';

export default function Preview9() {
    return (
        <div className="preview-9 min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            {/* Grid Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 flex justify-between px-6 md:px-12 opacity-10">
                <div className="w-px h-full bg-black"></div>
                <div className="w-px h-full bg-black hidden md:block"></div>
                <div className="w-px h-full bg-black hidden md:block"></div>
                <div className="w-px h-full bg-black"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-black">
                <div className="px-6 md:px-12 h-20 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight">
                        (PORTFOLIO_2024)
                    </div>
                    <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                        <a href="#index" className="hover:underline decoration-2 underline-offset-4">Index</a>
                        <a href="#work" className="hover:underline decoration-2 underline-offset-4">Work</a>
                        <a href="#info" className="hover:underline decoration-2 underline-offset-4">Info</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="index" className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-between border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-7xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-12"
                        >
                            Visual <br />
                            Designer <br />
                            & Dev.
                        </motion.h1>
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl leading-snug max-w-xs"
                        >
                            <p className="mb-8">
                                Creating clarity from chaos. Focusing on typography, grid systems, and minimal interfaces.
                            </p>
                            <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <span className="text-sm font-mono">SCROLL_DOWN</span>
                    <span className="text-9xl font-light opacity-10 hidden md:block">01</span>
                </div>
            </section>

            {/* Selected Work */}
            <section id="work" className="border-b border-black">
                {[
                    { id: "01", title: "Architecture", cat: "Editorial", year: "2023" },
                    { id: "02", title: "Type Foundry", cat: "Branding", year: "2023" },
                    { id: "03", title: "Art Gallery", cat: "Web Design", year: "2024" },
                    { id: "04", title: "Fashion Week", cat: "Identity", year: "2024" }
                ].map((project, i) => (
                    <div key={i} className="group border-t border-black first:border-t-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                        <PreloadLink
                            to="/preview9/case-study"
                            factory={() => import('./Preview9CaseStudy')}
                            className="block py-16 px-6 md:px-12 relative z-10 group-hover:text-white transition-colors duration-500"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                                <div className="md:col-span-1 text-sm font-mono opacity-50">({project.id})</div>
                                <div className="md:col-span-7">
                                    <h3 className="text-5xl md:text-7xl font-medium tracking-tight">{project.title}</h3>
                                </div>
                                <div className="md:col-span-2 text-lg">{project.cat}</div>
                                <div className="md:col-span-2 text-right flex justify-end items-center gap-2">
                                    <span>{project.year}</span>
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </PreloadLink>
                    </div>
                ))}
            </section>

            {/* Info / Services */}
            <section id="info" className="py-32 px-6 md:px-12 border-b border-black bg-[#F5F5F5]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-medium mb-12">(SERVICES)</h2>
                        <ul className="space-y-6 text-2xl md:text-3xl tracking-tight">
                            <li className="flex items-center gap-4">
                                <Square className="w-4 h-4 fill-black" /> Art Direction
                            </li>
                            <li className="flex items-center gap-4">
                                <Circle className="w-4 h-4 fill-black" /> Digital Design
                            </li>
                            <li className="flex items-center gap-4">
                                <Grid className="w-4 h-4" /> Web Development
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-4xl font-medium mb-12">(ABOUT)</h2>
                        <p className="text-xl md:text-2xl leading-relaxed mb-12">
                            I believe in the power of subtraction. By removing the unnecessary, we allow the essential to speak. My work is grounded in the principles of Swiss Design, adapted for the digital age.
                        </p>
                        <a href="mailto:hello@example.com" className="inline-block px-8 py-4 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg uppercase tracking-widest">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 md:px-12 flex justify-between items-end">
                <div>
                    <h4 className="text-sm font-bold uppercase mb-4">Socials</h4>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter/X</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm opacity-50">© 2024</p>
                </div>
            </footer>
        </div>
    );
}
