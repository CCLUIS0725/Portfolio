import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, Shield, Zap, Globe, Wifi, Battery, Radio, Crosshair } from 'lucide-react';

// Cyberpunk Colors
const CYBER = {
    YELLOW: '#FCEE0A',
    CYAN: '#00F0FF',
    MAGENTA: '#FF003C',
    BLACK: '#000000',
    DARK: '#0a0a0a'
};

const GlitchText = ({ text, as: Component = 'span', className = '' }) => {
    return (
        <Component className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#00F0FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-100 select-none mix-blend-screen">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#FF003C] opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-100 select-none mix-blend-screen">{text}</span>
        </Component>
    );
};

const CyberButton = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "relative px-8 py-4 font-bold tracking-widest uppercase transition-all duration-200 clip-path-polygon group overflow-hidden";
    const variants = {
        primary: `bg-[${CYBER.YELLOW}] text-black hover:bg-[#fff] hover:shadow-[0_0_20px_${CYBER.YELLOW}]`,
        secondary: `border border-[${CYBER.CYAN}] text-[${CYBER.CYAN}] hover:bg-[${CYBER.CYAN}] hover:text-black`
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
        >
            <span className="relative z-10">{children}</span>
        </button>
    );
};

const ProjectCard = ({ title, type, stats, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-black border border-zinc-800 hover:border-[#FCEE0A] transition-colors duration-300"
        >
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#FCEE0A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#FCEE0A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FCEE0A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FCEE0A] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-8 relative overflow-hidden">
                {/* Scanning Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCEE0A]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                    <span className="text-[#00F0FF] font-mono text-xs tracking-widest">NO. 0{index + 1}</span>
                    <Globe className="text-zinc-600 group-hover:text-[#FCEE0A] transition-colors" size={20} />
                </div>

                <h3 className="text-3xl font-black text-white mb-2 uppercase italic transform group-hover:translate-x-2 transition-transform duration-300">
                    {title}
                </h3>
                <p className="text-zinc-500 font-mono text-sm mb-6">{type}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div className="text-zinc-600 text-[10px] uppercase tracking-wider">{stat.label}</div>
                            <div className="text-[#FCEE0A] font-mono text-sm">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <Link to="/preview7/case-study" className="inline-flex items-center gap-2 text-[#00F0FF] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                    Initialize_Link <span className="animate-pulse">_</span>
                </Link>
            </div>
        </motion.div>
    );
};

export default function Preview7() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="preview-7 min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#FCEE0A] selection:text-black overflow-x-hidden">
            {/* Background Grid & Noise */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#000_2px)] bg-[length:100%_4px] opacity-20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-20%,#222,transparent)]"></div>
            </div>

            {/* HUD Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 border-b border-zinc-800 backdrop-blur-sm">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#FCEE0A] flex items-center justify-center text-black font-black text-xl clip-path-polygon" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 80% 100%, 0 100%, 0 0)' }}>
                            C
                        </div>
                        <div className="hidden md:block">
                            <div className="text-xs text-[#FCEE0A] tracking-widest">NIGHT_CITY_OS</div>
                            <div className="text-[10px] text-zinc-500 font-mono">V.2.0.77</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 font-mono text-xs tracking-widest">
                        <div className="hidden md:flex items-center gap-2 text-[#00F0FF]">
                            <Wifi size={14} />
                            <span>NET_CONNECTED</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-[#FF003C]">
                            <Battery size={14} />
                            <span>98%</span>
                        </div>
                        <div className="text-white">
                            {time.toLocaleTimeString()}
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-10 pt-32 pb-20 px-6">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex items-center justify-center mb-32">
                    <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1 bg-[#FF003C]/10 border border-[#FF003C] text-[#FF003C] font-mono text-xs tracking-widest mb-6"
                            >
                                STATUS: AVAILABLE_FOR_HIRE
                            </motion.div>
                            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase italic">
                                <GlitchText text="Wake_Up" /> <br />
                                <span className="text-[#FCEE0A]">Samurai</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12 border-l-4 border-[#00F0FF] pl-6">
                                I build digital experiences that burn chrome. Full-stack developer architecting the future of the web.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-[#FCEE0A] text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_#FCEE0A] transition-all clip-path-polygon" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}>
                                    View_Projects
                                </button>
                                <button className="border border-[#00F0FF] text-[#00F0FF] px-8 py-4 font-bold tracking-widest uppercase hover:bg-[#00F0FF] hover:text-black transition-all clip-path-polygon" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}>
                                    Contact_Net
                                </button>
                            </div>
                        </div>

                        {/* Decorative Graphic */}
                        <div className="md:col-span-4 hidden md:block relative">
                            <div className="w-full aspect-square border-2 border-zinc-800 relative">
                                <div className="absolute inset-0 border border-[#FCEE0A] opacity-20 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Crosshair size={120} className="text-[#FF003C] opacity-50 animate-spin-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills / Stats */}
                <section className="mb-32">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-2 h-8 bg-[#00F0FF]"></div>
                            <h2 className="text-3xl font-black text-white uppercase tracking-widest">System_Stats</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: "React Core", val: "99%", color: "#FCEE0A" },
                                { label: "Neural Link", val: "CONNECTED", color: "#00F0FF" },
                                { label: "Cyber Security", val: "MAXIMUM", color: "#FF003C" },
                                { label: "Uptime", val: "99.9%", color: "#FFFFFF" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#0a0a0a] border border-zinc-800 p-6 hover:border-white transition-colors group">
                                    <div className="text-zinc-500 font-mono text-xs tracking-widest mb-2">{stat.label}</div>
                                    <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.val}</div>
                                    <div className="w-full h-1 bg-zinc-800 mt-4">
                                        <div className="h-full w-[80%] group-hover:w-full transition-all duration-500" style={{ backgroundColor: stat.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="mb-32">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center justify-between mb-16">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-8 bg-[#FF003C]"></div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-widest">Active_Gigs</h2>
                            </div>
                            <div className="text-[#FCEE0A] font-mono text-xs tracking-widest animate-pulse">
                                &gt; DATABASE_ACCESS_GRANTED
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard
                                index={0}
                                title="Arasaka Interface"
                                type="Corporate Dashboard"
                                stats={[
                                    { label: "Security", value: "Level 5" },
                                    { label: "Users", value: "2.4M" }
                                ]}
                            />
                            <ProjectCard
                                index={1}
                                title="Night Market"
                                type="E-Commerce Platform"
                                stats={[
                                    { label: "Transactions", value: "10k/sec" },
                                    { label: "Encryption", value: "AES-256" }
                                ]}
                            />
                            <ProjectCard
                                index={2}
                                title="Netrunner Tool"
                                type="Hacking Utility"
                                stats={[
                                    { label: "Speed", value: "50TB/s" },
                                    { label: "Stealth", value: "100%" }
                                ]}
                            />
                            <ProjectCard
                                index={3}
                                title="Braindance Viewer"
                                type="Media Player"
                                stats={[
                                    { label: "Resolution", value: "16K" },
                                    { label: "Latency", value: "0ms" }
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="py-20 border-t border-zinc-800">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic tracking-tighter">
                            Jack_In
                        </h2>
                        <p className="text-zinc-400 text-xl mb-12 font-light max-w-xl mx-auto">
                            Ready to burn the city? Send me a transmission and let's build something preem.
                        </p>

                        <form className="max-w-md mx-auto space-y-6 text-left">
                            <div>
                                <label className="text-[#FCEE0A] font-mono text-xs tracking-widest mb-2 block">HANDLE</label>
                                <input type="text" className="w-full bg-[#0a0a0a] border border-zinc-700 p-4 text-white focus:border-[#FCEE0A] focus:outline-none transition-colors" placeholder="Enter your alias..." />
                            </div>
                            <button className="w-full bg-[#00F0FF] text-black font-bold py-4 tracking-widest uppercase hover:bg-white transition-colors clip-path-polygon" style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0 20%)' }}>
                                Send_Data
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
