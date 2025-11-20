import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, Cpu, Shield, Zap, Code, Globe, Database, Lock } from 'lucide-react';

const GlitchText = ({ text }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#0ff] opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#f0f] opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">{text}</span>
        </div>
    );
};

export default function Preview7CaseStudy() {
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
        <div className="preview-7-case-study min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-[#0ff] selection:text-black overflow-x-hidden">
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
                    <Link to="/preview7" className="text-xl font-bold text-[#0ff] tracking-widest animate-pulse hover:text-[#f0f] transition-colors">
                        &lt;CYBER_DEV /&gt;
                    </Link>
                    <Link to="/preview7" className="flex items-center gap-2 text-sm font-bold tracking-wider hover:text-[#0ff] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> RETURN_TO_BASE
                    </Link>
                </div>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Hero */}
                    <div className="mb-20 border-l-2 border-[#0ff] pl-8 relative">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#0ff] -translate-x-[5px]"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0ff] -translate-x-[5px]"></div>

                        <div className="inline-block mb-4 px-2 py-1 bg-[#0ff]/10 border border-[#0ff] text-[#0ff] text-xs tracking-[0.2em]">
                            CASE_FILE_007
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                            NEURAL_NET <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">INTERFACE</span>
                        </h1>
                        <p className="text-lg text-[#a0a0a0] max-w-2xl font-light leading-relaxed">
                            A next-generation AI dashboard designed for real-time data processing and neural network visualization.
                        </p>
                    </div>

                    {/* Main Visual */}
                    <div className="mb-20 relative group">
                        <div className="absolute inset-0 bg-[#0ff] blur-[20px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative border border-[#333] bg-[#0a0a0a] aspect-video flex items-center justify-center overflow-hidden">
                            {/* Scanline */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-30 opacity-50"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0ff] opacity-50 animate-[scan_2s_linear_infinite]"></div>

                            <div className="text-center">
                                <Database className="w-24 h-24 text-[#333] mx-auto mb-4 group-hover:text-[#0ff] transition-colors duration-500" />
                                <div className="text-[#666] font-bold tracking-widest text-sm">SYSTEM_PREVIEW_UNAVAILABLE</div>
                                <div className="text-[#333] text-xs mt-2">ENCRYPTED_DATA_STREAM</div>
                            </div>
                        </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="p-6 border border-[#333] bg-[#050505] hover:border-[#0ff] transition-colors duration-300">
                            <Code className="w-6 h-6 text-[#0ff] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-1">STACK</h3>
                            <p className="text-[#666] text-sm tracking-widest">REACT / TENSORFLOW / WEBGL</p>
                        </div>
                        <div className="p-6 border border-[#333] bg-[#050505] hover:border-[#f0f] transition-colors duration-300">
                            <Lock className="w-6 h-6 text-[#f0f] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-1">SECURITY</h3>
                            <p className="text-[#666] text-sm tracking-widest">AES-256 ENCRYPTION</p>
                        </div>
                        <div className="p-6 border border-[#333] bg-[#050505] hover:border-[#0f0] transition-colors duration-300">
                            <Zap className="w-6 h-6 text-[#0f0] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-1">LATENCY</h3>
                            <p className="text-[#666] text-sm tracking-widest">&lt; 12MS RESPONSE</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold text-[#0ff] sticky top-32 flex items-center gap-2">
                                <span className="animate-pulse">&gt;</span> MISSION_OBJECTIVE
                            </h2>
                        </div>
                        <div className="md:col-span-8 text-[#a0a0a0] leading-relaxed space-y-6 font-light">
                            <p>
                                The client required a high-performance interface to visualize complex neural network training data in real-time. Standard charting libraries were insufficient for the volume of data being processed.
                            </p>
                            <p>
                                We engineered a custom WebGL rendering engine capable of displaying millions of data points without dropping frames, wrapped in a cyber-security themed UI to match the client's branding.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold text-[#f0f] sticky top-32 flex items-center gap-2">
                                <span className="animate-pulse">&gt;</span> EXECUTION_LOG
                            </h2>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            {[
                                "Optimized WebGL shaders for 60fps rendering",
                                "Implemented WebSocket connection for real-time streams",
                                "Designed modular component architecture",
                                "Integrated hardware acceleration support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 border border-[#333] bg-[#0a0a0a] hover:border-[#f0f] transition-colors">
                                    <div className="w-2 h-2 bg-[#f0f]"></div>
                                    <span className="text-[#e0e0e0] tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#333] pt-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
                            END_OF_FILE
                        </h2>
                        <div className="flex justify-center gap-6">
                            <Link to="/preview7" className="px-8 py-4 bg-[#0ff] text-black font-bold tracking-widest hover:bg-[#fff] hover:shadow-[0_0_20px_#fff] transition-all duration-300">
                                TERMINATE_SESSION
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
