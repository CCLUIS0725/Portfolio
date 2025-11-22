import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Anchor, Wind, Navigation, Star, Rocket, CircleDashed, ArrowRight } from 'lucide-react';
import TreasureMapScene from '../components/TreasureMapScene';

// --- Components ---

// Steampunk/Nautical Card
const EtheriumCard = ({ title, category, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="relative group"
        >
            {/* Card Frame */}
            <div
                className="absolute inset-0 bg-[#1a1a2e] border border-[#B8860B]/30 transition-all group-hover:border-[#FFD700]/60 group-hover:shadow-[0_0_20px_rgba(184,134,11,0.2)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
            ></div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#B8860B]/10 rounded-full border border-[#B8860B]/20 text-[#FFD700]">
                        <Icon size={24} />
                    </div>
                    <Compass className="text-[#B8860B]/40 animate-spin-slow" size={20} />
                </div>

                <div>
                    <div className="text-[#00F0FF] text-xs font-mono tracking-widest mb-2 uppercase">{category}</div>
                    <h3 className="text-2xl font-serif text-[#E0E0E0] mb-4 group-hover:text-[#FFD700] transition-colors">{title}</h3>
                    <Link to="/preview10/case-study" className="text-[#B8860B] text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        SET COURSE <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Decorative Corner */}
            <div
                className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#B8860B]/20 to-transparent"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
            ></div>
        </motion.div>
    );
};

export default function Preview10() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="preview-10 min-h-screen bg-[#0B0B15] text-[#E0E0E0] font-sans overflow-x-hidden selection:bg-[#B8860B]/30 relative">

            {/* Background: The Etherium */}
            <div className="fixed inset-0 z-0">
                <TreasureMapScene scrollYProgress={scrollYProgress} />

                {/* Nebula Clouds (Overlay on top of 3D scene for depth) */}
                <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-700/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000 pointer-events-none"></div>
                <div className="absolute top-[40%] left-[60%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

                {/* Stars Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>
            </div>

            {/* Navigation: The Helm */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center border-b border-[#B8860B]/10 bg-[#0B0B15]/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <Anchor className="text-[#FFD700]" size={24} />
                    <span className="text-xl font-serif font-bold tracking-widest text-[#FFD700]">R.L.S. LEGACY</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-[#B8860B]">
                    <a href="#home" className="hover:text-[#FFD700] transition-colors">COORDINATES</a>
                    <a href="#work" className="hover:text-[#FFD700] transition-colors">LOGBOOK</a>
                    <a href="#about" className="hover:text-[#FFD700] transition-colors">CREW</a>
                </div>
                <button className="px-6 py-2 border border-[#B8860B] text-[#FFD700] font-mono text-xs hover:bg-[#B8860B]/10 transition-colors rounded-sm">
                    ENGAGE SOLAR SAILS
                </button>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-20 pointer-events-none">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-2 text-[#00F0FF] font-mono text-xs tracking-[0.3em] mb-6">
                                <Star size={12} />
                                <span>ETHERIUM SECTOR 7</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F4A460] to-[#8B4513]">
                                Charting the <br /> Unknown
                            </h1>
                            <p className="text-lg text-[#B8860B] mb-8 max-w-lg font-serif italic border-l-2 border-[#B8860B]/30 pl-6">
                                "I've got the makings of greatness in me, but you got the helm." <br />
                                Designing interfaces for the next frontier.
                            </p>

                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-[#B8860B] text-[#0B0B15] font-bold font-mono rounded-sm hover:bg-[#FFD700] transition-colors shadow-[0_0_20px_rgba(184,134,11,0.4)]">
                                    VIEW MAP
                                </button>
                                <button className="px-8 py-4 border border-[#B8860B]/50 text-[#B8860B] font-bold font-mono rounded-sm hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
                                    CONTACT
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Spacer for where the map visually sits (but map is now in background) */}
                    <div className="h-[500px] w-full flex justify-center items-center relative pointer-events-none">
                        {/* Floating Data Points - kept as UI overlay */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 p-4 bg-[#0B0B15]/80 border border-[#00F0FF]/30 backdrop-blur-md rounded-lg pointer-events-auto"
                        >
                            <div className="text-[#00F0FF] text-xs font-mono mb-1">TRAJECTORY</div>
                            <div className="text-white font-mono">45.2° N</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 left-10 p-4 bg-[#0B0B15]/80 border border-[#B8860B]/30 backdrop-blur-md rounded-lg pointer-events-auto"
                        >
                            <div className="text-[#B8860B] text-xs font-mono mb-1">WIND SPEED</div>
                            <div className="text-white font-mono">12 KNOTS</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="py-32 px-6 relative z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent"></div>
                        <h2 className="text-3xl font-serif text-[#FFD700] tracking-widest uppercase">Expeditions</h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <EtheriumCard
                            title="Solar Surfer"
                            category="Web Application"
                            icon={Wind}
                            delay={0.2}
                        />
                        <EtheriumCard
                            title="Montressor Spaceport"
                            category="E-Commerce"
                            icon={Rocket}
                            delay={0.4}
                        />
                        <EtheriumCard
                            title="Galactic Compass"
                            category="Mobile App"
                            icon={Navigation}
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center relative z-10 border-t border-[#B8860B]/10 bg-[#0B0B15]">
                <div className="flex justify-center items-center gap-2 mb-4 text-[#B8860B]">
                    <CircleDashed className="animate-spin-slow" />
                </div>
                <p className="text-[#B8860B]/50 text-xs font-mono tracking-[0.2em]">
                    EST. 3024 • MONTRESSOR SECTOR
                </p>
            </footer>
        </div>
    );
}
