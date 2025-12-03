import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Layers, Palette, Code2, Cpu, Grid, Ruler, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Preview2() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        { id: 'P-01', title: 'FINTECH_DASH', type: 'SAAS_PLATFORM', status: 'DEPLOYED', desc: 'Financial analytics system with real-time data visualization.', tech: ['REACT', 'D3.JS', 'NODE'] },
        { id: 'P-02', title: 'MOBILE_BANK', type: 'IOS_APP', status: 'IN_DEV', desc: 'Secure payment processing application for mobile devices.', tech: ['SWIFT', 'FIREBASE'] },
        { id: 'P-03', title: 'ECOMM_CORE', type: 'WEB_STORE', status: 'LIVE', desc: 'High-conversion e-commerce template with headless CMS.', tech: ['NEXT.JS', 'SHOPIFY'] },
        { id: 'P-04', title: 'HEALTH_TRK', type: 'PWA', status: 'BETA', desc: 'Holistic health tracking with biometric integration.', tech: ['VUE', 'WEBRTC'] }
    ];

    const expertise = [
        { id: 'E-01', label: 'PRODUCT_DESIGN', level: 95, unit: 'UI/UX' },
        { id: 'E-02', label: 'FRONTEND_ENG', level: 90, unit: 'REACT' },
        { id: 'E-03', label: 'SYSTEM_ARCH', level: 85, unit: 'SCALE' },
        { id: 'E-04', label: 'PROTOTYPING', level: 88, unit: 'FRAMER' }
    ];

    return (
        <div className="min-h-screen bg-[#1e293b] text-blue-100 font-mono selection:bg-blue-500/30 overflow-x-hidden relative">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Technical Overlay Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 border-[20px] border-transparent">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/50" />

                {/* Rulers */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-px bg-blue-400/30 flex flex-col justify-between items-center">
                    {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-px bg-blue-400/50" />)}
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-px bg-blue-400/30 flex justify-between items-center">
                    {[...Array(5)].map((_, i) => <div key={i} className="h-2 w-px bg-blue-400/50" />)}
                </div>
            </div>

            {/* Header / Title Block */}
            <header className="fixed top-0 w-full z-50 bg-[#1e293b]/90 backdrop-blur-sm border-b border-blue-400/20">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-blue-400/60 tracking-widest">PROJECT_ID</span>
                        <span className="text-xl font-bold tracking-tighter text-blue-200">PORTFOLIO_V2</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12 border-x border-blue-400/20 px-12 h-full">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400/60 tracking-widest">ARCHITECT</span>
                            <span className="text-sm font-bold text-blue-200">LUIS CABRERA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400/60 tracking-widest">DATE</span>
                            <span className="text-sm font-bold text-blue-200">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400/60 tracking-widest">SCALE</span>
                            <span className="text-sm font-bold text-blue-200">1:1</span>
                        </div>
                    </div>

                    <nav className="flex gap-6 text-xs font-bold tracking-widest">
                        <a href="#work" className="hover:text-blue-400 transition-colors">[ WORK ]</a>
                        <a href="#specs" className="hover:text-blue-400 transition-colors">[ SPECS ]</a>
                    </nav>
                </div>
            </header>

            <main className="pt-32 pb-20 container mx-auto px-6 relative z-10">

                {/* Intro Section: Schematic */}
                <section className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 border border-blue-400/30 p-8 relative bg-blue-900/10 backdrop-blur-sm">
                        <div className="absolute top-0 left-0 bg-blue-400/20 px-2 py-1 text-[10px] uppercase tracking-widest text-blue-200">
                            FIG 1.0 - OVERVIEW
                        </div>
                        <div className="mt-8 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-blue-100 leading-tight">
                                CRAFTING <br />
                                <span className="text-blue-400">DIGITAL_SYSTEMS</span>
                            </h1>
                            <p className="text-blue-200/70 max-w-xl text-sm md:text-base leading-relaxed">
                                // INITIALIZING... <br />
                                Specialized in constructing scalable interfaces and robust user experiences.
                                Blending engineering precision with aesthetic functionality.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <button className="border border-blue-400 text-blue-400 px-6 py-3 text-xs font-bold tracking-widest hover:bg-blue-400 hover:text-[#1e293b] transition-all flex items-center gap-2">
                                    INITIATE_CONTACT <ArrowRight size={14} />
                                </button>
                                <div className="flex gap-2">
                                    {[Github, Linkedin, Mail].map((Icon, i) => (
                                        <button key={i} className="w-10 h-10 border border-blue-400/30 flex items-center justify-center hover:bg-blue-400/10 text-blue-400 transition-colors">
                                            <Icon size={16} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Schematic Lines */}
                        <svg className="absolute right-8 top-8 w-32 h-32 opacity-30" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="md:col-span-4 border border-blue-400/30 p-1 relative bg-blue-900/5">
                        <div className="absolute top-0 left-0 bg-blue-400/20 px-2 py-1 text-[10px] uppercase tracking-widest text-blue-200">
                            STATUS_LOG
                        </div>
                        <div className="h-full flex flex-col justify-end p-6 space-y-2">
                            <div className="flex justify-between text-xs text-blue-400/60 border-b border-blue-400/20 pb-1">
                                <span>AVAILABILITY</span>
                                <span className="text-green-400">ONLINE</span>
                            </div>
                            <div className="flex justify-between text-xs text-blue-400/60 border-b border-blue-400/20 pb-1">
                                <span>CURRENT_LOC</span>
                                <span>REMOTE</span>
                            </div>
                            <div className="flex justify-between text-xs text-blue-400/60 border-b border-blue-400/20 pb-1">
                                <span>TIME_ZONE</span>
                                <span>UTC-4</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Section: Blueprints */}
                <section id="work" className="mb-32">
                    <div className="flex items-center gap-4 mb-8 border-b border-blue-400/30 pb-2">
                        <Grid size={16} className="text-blue-400" />
                        <h2 className="text-xl font-bold tracking-widest">PROJECT_BLUEPRINTS</h2>
                        <div className="flex-1" />
                        <span className="text-xs text-blue-400/50">INDEX_01-04</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group relative border border-blue-400/30 bg-[#1e293b] hover:border-blue-400 transition-colors duration-300"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Blueprint Background Effect */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 1px, transparent 1px)',
                                        backgroundSize: '10px 10px'
                                    }}
                                />

                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-blue-400/10 border border-blue-400/30 px-2 py-1 text-[10px] font-bold text-blue-300">
                                            {project.id}
                                        </div>
                                        <div className="text-[10px] text-blue-400/60 tracking-widest">
                                            [{project.status}]
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <div className="text-xs text-blue-400/80 mb-4 tracking-widest">{project.type}</div>
                                    <p className="text-sm text-blue-200/70 mb-8 leading-relaxed border-l-2 border-blue-400/20 pl-4">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] border border-blue-400/20 px-2 py-1 text-blue-300/80">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <Link to="/preview2/case-study" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-400 hover:text-white transition-colors">
                                        ACCESS_FILES <ArrowRight size={12} />
                                    </Link>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Expertise Section: Specs */}
                <section id="specs" className="mb-32">
                    <div className="flex items-center gap-4 mb-8 border-b border-blue-400/30 pb-2">
                        <Ruler size={16} className="text-blue-400" />
                        <h2 className="text-xl font-bold tracking-widest">TECHNICAL_SPECS</h2>
                        <div className="flex-1" />
                        <span className="text-xs text-blue-400/50">SYS_DIAGNOSTICS</span>
                    </div>

                    <div className="border border-blue-400/30 bg-[#1e293b] p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {expertise.map((exp) => (
                                <div key={exp.id} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-blue-200">{exp.label}</span>
                                        <span className="text-xs text-blue-400/60">{exp.level}% / {exp.unit}</span>
                                    </div>
                                    <div className="h-2 bg-blue-900/50 w-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(30,41,59,1)_2px,rgba(30,41,59,1)_4px)] z-10" />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${exp.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-blue-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-blue-400/20 pt-12 pb-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <div className="text-xs text-blue-400/60 tracking-widest mb-1">SYSTEM_STATUS</div>
                            <div className="text-sm font-bold text-blue-200">ALL SYSTEMS OPERATIONAL</div>
                        </div>
                        <div className="text-[10px] text-blue-400/40 font-mono">
                            © 2024 LC_ARCHITECT // BUILD_V2.0.4
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
}
