import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Grid, Circle, Square, Type, Image as ImageIcon, Layers } from 'lucide-react';

export default function Preview9CaseStudy() {
    return (
        <div className="preview-9-case-study min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
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
                    <Link to="/preview9" className="text-xl font-bold tracking-tight hover:opacity-50 transition-opacity">
                        (PORTFOLIO_2024)
                    </Link>
                    <Link to="/preview9" className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Index
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Hero */}
                    <div className="md:col-span-12 mb-24">
                        <div className="flex justify-between items-start border-b border-black pb-8 mb-12">
                            <span className="text-sm font-mono">(CASE_STUDY_01)</span>
                            <span className="text-sm font-mono text-right">EDITORIAL / 2023</span>
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-12"
                        >
                            Modern <br />
                            Architecture <br />
                            Digest.
                        </motion.h1>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-8 md:col-start-5">
                                <p className="text-xl md:text-3xl leading-tight font-light">
                                    Redefining the digital reading experience for a leading architectural publication. Focusing on readability, white space, and structural integrity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Visual */}
                    <div className="md:col-span-12 mb-32">
                        <div className="aspect-video bg-[#F5F5F5] border border-black flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-9xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500">A.</span>
                            </div>
                            <ImageIcon className="w-24 h-24 opacity-20" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border border-black mt-8">
                            <div className="bg-white p-6 aspect-square flex flex-col justify-between">
                                <Type className="w-8 h-8" />
                                <span className="text-sm font-mono uppercase">Typography</span>
                            </div>
                            <div className="bg-white p-6 aspect-square flex flex-col justify-between">
                                <Grid className="w-8 h-8" />
                                <span className="text-sm font-mono uppercase">Grid System</span>
                            </div>
                            <div className="bg-white p-6 aspect-square flex flex-col justify-between">
                                <Layers className="w-8 h-8" />
                                <span className="text-sm font-mono uppercase">Layouts</span>
                            </div>
                            <div className="bg-white p-6 aspect-square flex flex-col justify-between">
                                <Square className="w-8 h-8" />
                                <span className="text-sm font-mono uppercase">Components</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="md:col-span-12 mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-medium mb-8 sticky top-32">(THE_BRIEF)</h2>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-lg md:text-xl leading-relaxed mb-8">
                                    The client needed a complete overhaul of their digital presence. The previous site was cluttered, slow, and didn't reflect the high quality of their print publication.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Our goal was to translate the tactile experience of reading a high-end magazine into a digital format, without resorting to skeuomorphism. We relied on scale, rhythm, and negative space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-12 mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-medium mb-8 sticky top-32">(EXECUTION)</h2>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <div className="border-t border-black pt-8">
                                    <h3 className="text-2xl font-medium mb-4">01. Typography</h3>
                                    <p className="text-lg text-gray-600">
                                        We selected a grotesque sans-serif for headlines to provide impact and a highly legible serif for body text to ensure comfort during long reading sessions.
                                    </p>
                                </div>
                                <div className="border-t border-black pt-8">
                                    <h3 className="text-2xl font-medium mb-4">02. The Grid</h3>
                                    <p className="text-lg text-gray-600">
                                        A flexible 12-column grid allows for dynamic layouts that can adapt to different content types, from long-form essays to photo essays.
                                    </p>
                                </div>
                                <div className="border-t border-black pt-8">
                                    <h3 className="text-2xl font-medium mb-4">03. Navigation</h3>
                                    <p className="text-lg text-gray-600">
                                        Navigation was stripped back to the essentials, hidden behind a menu to maximize screen real estate for content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="md:col-span-12 mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#F5F5F5] aspect-[3/4] border border-black p-8 flex items-end">
                                <span className="text-sm font-mono uppercase">(MOBILE_VIEW)</span>
                            </div>
                            <div className="bg-[#F5F5F5] aspect-[3/4] border border-black p-8 flex items-end">
                                <span className="text-sm font-mono uppercase">(TABLET_VIEW)</span>
                            </div>
                        </div>
                    </div>

                    {/* Next Project */}
                    <div className="md:col-span-12 border-t border-black pt-20">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                            <div>
                                <span className="text-sm font-mono block mb-4">(NEXT_PROJECT)</span>
                                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter hover:underline decoration-4 underline-offset-8 cursor-pointer">
                                    Type Foundry
                                </h2>
                            </div>
                            <Link to="/preview9" className="px-8 py-4 bg-black text-white text-lg font-medium uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors">
                                Back to Index
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 px-6 md:px-12 flex justify-between items-end">
                <div>
                    <h4 className="text-sm font-bold uppercase mb-4">(SOCIALS)</h4>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter/X</a>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm opacity-50">© 2024</p>
                </div>
            </footer>
        </div>
    );
}
