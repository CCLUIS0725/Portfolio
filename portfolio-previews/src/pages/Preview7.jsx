import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, Shield, Zap, Code, Globe } from 'lucide-react';

const GlitchText = ({ text }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#0ff] opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#f0f] opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">{text}</span>
        </div>
    );
};

export default function Preview7() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="preview-7 min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-[#0ff] selection:text-black overflow-x-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: `perspective(500px) rotateX(60deg) translateY(${mousePosition.y * 20}px) translateX(${mousePosition.x * 20}px)`
                }}>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-sm border-b border-[#0ff]/20">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold text-[#0ff] tracking-widest animate-pulse">
                        &lt;CYBER_DEV /&gt;
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider">
                        <a href="#projects" className="hover:text-[#0ff] hover:shadow-[0_0_10px_#0ff] transition-all duration-300">PROJECTS</a>
                        <a href="#skills" className="hover:text-[#f0f] hover:shadow-[0_0_10px_#f0f] transition-all duration-300">SKILLS</a>
                        <a href="#contact" className="px-4 py-1 border border-[#0ff] text-[#0ff] hover:bg-[#0ff] hover:text-black transition-all duration-300 clip-path-polygon">
                            INITIATE_CONTACT
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-3 py-1 border border-[#f0f] text-[#f0f] text-xs tracking-[0.2em]"
                    >
                        SYSTEM_ONLINE
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                        <GlitchText text="FUTURE" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">IS_NOW</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-10 font-light">
                        Architecting digital realities. Full-stack engineer specializing in high-performance interfaces and immersive web experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#projects" className="relative px-8 py-4 bg-[#0ff]/10 border border-[#0ff] text-[#0ff] font-bold tracking-widest hover:bg-[#0ff] hover:text-black transition-all duration-300 group overflow-hidden">
                            <span className="absolute inset-0 bg-[#0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative z-10">VIEW_LOGS</span>
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-[#333] text-[#888] font-bold tracking-widest hover:border-[#f0f] hover:text-[#f0f] transition-all duration-300">
                            ACCESS_TERMINAL
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats/Skills */}
            <section id="skills" className="relative z-10 py-20 px-6 bg-[#0a0a0a] border-y border-[#333]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Terminal className="w-8 h-8" />, label: "Backend", val: "98%" },
                            { icon: <Cpu className="w-8 h-8" />, label: "Processing", val: "100%" },
                            { icon: <Shield className="w-8 h-8" />, label: "Security", val: "95%" },
                            { icon: <Zap className="w-8 h-8" />, label: "Speed", val: "99%" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 border border-[#333] bg-[#050505] hover:border-[#0ff] transition-colors duration-300 group">
                                <div className="text-[#0ff] mb-4 group-hover:animate-bounce">{stat.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-1">{stat.val}</h3>
                                <p className="text-[#666] text-sm tracking-widest uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="relative z-10 py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
                        <span className="text-[#f0f]">&gt;</span> PROJECT_DATABASE
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Neural Net Interface", type: "AI Dashboard", color: "border-[#0ff] shadow-[0_0_20px_rgba(0,255,255,0.2)]" },
                            { title: "Crypto Exchange", type: "DeFi Platform", color: "border-[#f0f] shadow-[0_0_20px_rgba(255,0,255,0.2)]" },
                            { title: "Cyber Security Tool", type: "Penetration Testing", color: "border-[#0f0] shadow-[0_0_20px_rgba(0,255,0,0.2)]" },
                            { title: "Metaverse Portal", type: "WebGL Experience", color: "border-[#ff0] shadow-[0_0_20px_rgba(255,255,0,0.2)]" }
                        ].map((project, i) => (
                            <Link to="/preview7/case-study" key={i} className={`relative p-1 bg-[#050505] border ${project.color} group overflow-hidden block`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                                <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
                                    <div className="absolute top-4 right-4 p-2 border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest text-white/60 mb-2">{project.type}</span>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#0ff] transition-colors">{project.title}</h3>
                                    <div className="w-full h-1 bg-[#333] mt-4 overflow-hidden">
                                        <div className="h-full bg-[#0ff] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                                    </div>
                                </div>
                                {/* Scanline effect */}
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-30 opacity-20"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="relative z-10 py-24 px-6 border-t border-[#333]">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-block p-1 border border-[#f0f] mb-8">
                        <div className="px-6 py-2 bg-[#f0f]/10 text-[#f0f] font-bold tracking-widest uppercase">
                            Transmission_Open
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">READY_TO_DEPLOY?</h2>
                    <p className="text-[#888] mb-12 text-lg">
                        Initiate protocol for collaboration. Secure channel available.
                    </p>
                    <form className="space-y-6 text-left max-w-lg mx-auto">
                        <div>
                            <label className="block text-[#0ff] text-xs font-bold tracking-widest mb-2">USER_ID</label>
                            <input type="text" className="w-full bg-[#0a0a0a] border border-[#333] p-4 text-white focus:border-[#0ff] focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all" />
                        </div>
                        <div>
                            <label className="block text-[#0ff] text-xs font-bold tracking-widest mb-2">DATA_PACKET</label>
                            <textarea rows="4" className="w-full bg-[#0a0a0a] border border-[#333] p-4 text-white focus:border-[#0ff] focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"></textarea>
                        </div>
                        <button className="w-full py-4 bg-[#0ff] text-black font-bold tracking-widest hover:bg-[#fff] hover:shadow-[0_0_20px_#fff] transition-all duration-300">
                            SEND_TRANSMISSION
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
