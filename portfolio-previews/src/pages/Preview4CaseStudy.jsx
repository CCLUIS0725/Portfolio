import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Zap, Layout, Star, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComicPanel = ({ children, className = "" }) => (
    <div className={`bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative ${className}`}>
        {children}
    </div>
);

const CaptionBox = ({ children, className = "" }) => (
    <div className={`bg-yellow-300 border-4 border-black px-4 py-2 font-black uppercase tracking-wider inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
        {children}
    </div>
);

export default function Preview4CaseStudy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cyan-400 font-['Comic_Neue'] selection:bg-yellow-400 selection:text-black relative overflow-x-hidden">

            {/* Halftone Background */}
            <div className="fixed inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
                backgroundSize: '20px 20px'
            }}></div>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/preview4" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
                        <ArrowLeft size={24} strokeWidth={3} />
                    </Link>
                    <div className="px-6 py-2 bg-white border-4 border-black font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Case File: #001
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Hero */}
                    <header className="mb-24 text-center relative">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <CaptionBox className="mb-8 bg-pink-400 text-white">
                                TOP SECRET PROJECT
                            </CaptionBox>

                            <h1 className="font-['Bangers'] text-7xl md:text-9xl text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] stroke-black" style={{ WebkitTextStroke: '3px black' }}>
                                THE NEON<br />DASHBOARD
                            </h1>

                            <ComicPanel className="max-w-3xl mx-auto transform rotate-1">
                                <p className="text-2xl font-bold text-slate-800 leading-relaxed">
                                    "A revolutionary interface designed to bring order to the chaos of data!"
                                </p>
                            </ComicPanel>
                        </motion.div>
                    </header>

                    {/* Main Visual */}
                    <div className="relative aspect-video bg-white border-4 border-black mb-24 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden group">
                        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                            <span className="font-['Bangers'] text-4xl text-slate-300">HERO IMAGE PLACEHOLDER</span>
                        </div>

                        {/* Comic Overlay Elements */}
                        <div className="absolute top-8 left-8 bg-red-500 text-white px-4 py-2 font-black border-4 border-black transform -rotate-3">
                            ACTION SHOT!
                        </div>

                        <div className="absolute bottom-8 right-8 w-32 h-32 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center transform rotate-12">
                            <span className="font-['Bangers'] text-3xl text-center leading-none">WOW!<br />FACTOR</span>
                        </div>
                    </div>

                    {/* Project Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: Layers, label: "ROLE", value: "LEAD HERO" },
                            { icon: Zap, label: "POWERS", value: "REACT + D3" },
                            { icon: Layout, label: "TIME", value: "4 WEEKS" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                                <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center text-yellow-400 mb-4">
                                    <item.icon size={32} strokeWidth={3} />
                                </div>
                                <h3 className="font-black text-xl mb-2 uppercase">{item.label}</h3>
                                <p className="font-bold text-slate-600">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                        <div className="md:col-span-4">
                            <div className="sticky top-32">
                                <CaptionBox className="text-2xl bg-green-400 mb-4">
                                    THE MISSION
                                </CaptionBox>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <ComicPanel>
                                <p className="text-xl font-bold leading-relaxed mb-6">
                                    The client was drowning in a sea of unorganized data. They needed a hero to swoop in and create a dashboard that wasn't just functional, but <span className="text-red-600 font-black">POWERFUL</span>.
                                </p>
                                <p className="text-xl font-bold leading-relaxed">
                                    Our mission: Transform complex analytics into a visual masterpiece that anyone could understand in a single glance!
                                </p>
                            </ComicPanel>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                        <div className="md:col-span-4">
                            <div className="sticky top-32">
                                <CaptionBox className="text-2xl bg-purple-400 mb-4">
                                    THE STRATEGY
                                </CaptionBox>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="aspect-square bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-white text-xl text-center p-4">
                                    BOLD<br />COLORS
                                </div>
                                <div className="aspect-square bg-blue-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-white text-xl text-center p-4">
                                    STRONG<br />LINES
                                </div>
                            </div>
                            <ComicPanel>
                                <p className="text-xl font-bold leading-relaxed">
                                    We utilized a high-contrast design system with bold outlines to ensure maximum readability. Every chart and graph was treated like a panel in a comic book—telling a specific part of the data story.
                                </p>
                            </ComicPanel>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center border-t-4 border-black pt-20 bg-white -mx-6 px-6 pb-20">
                        <h2 className="font-['Bangers'] text-6xl mb-12">READY FOR THE NEXT ISSUE?</h2>
                        <div className="flex justify-center gap-6">
                            <Link to="/preview4" className="inline-block px-8 py-4 bg-black text-white font-black text-xl border-4 border-transparent hover:bg-yellow-400 hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                BACK TO HQ
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
