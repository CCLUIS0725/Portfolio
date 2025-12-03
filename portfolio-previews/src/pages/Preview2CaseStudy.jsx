import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, TrendingUp, Grid, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpecItem = ({ children, className = "", delay = 0, label }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`bg-[#1e293b] border border-blue-400/30 p-6 relative group ${className}`}
    >
        {label && (
            <div className="absolute -top-3 left-4 bg-[#1e293b] px-2 text-[10px] font-bold text-blue-400 tracking-widest uppercase border border-blue-400/30">
                {label}
            </div>
        )}

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400/30" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400/30" />

        {children}
    </motion.div>
);

export default function Preview2CaseStudy() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-blue-100 font-mono p-4 md:p-8 selection:bg-blue-500/30">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(96, 165, 250, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <header className="flex justify-between items-center mb-12 border-b border-blue-400/20 pb-6">
                    <Link
                        to="/preview2"
                        className="flex items-center gap-2 px-4 py-2 border border-blue-400/30 text-blue-400 hover:bg-blue-400 hover:text-[#0f172a] transition-all text-xs font-bold tracking-widest uppercase"
                    >
                        <ArrowLeft size={14} /> RETURN_TO_GRID
                    </Link>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-blue-400/60 tracking-widest">CASE_FILE</span>
                        <span className="font-bold text-lg tracking-tight text-blue-200">#CF-2024-01</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Hero Section */}
                    <SpecItem className="md:col-span-8 md:row-span-2 !bg-blue-900/20 flex flex-col justify-center min-h-[400px]" label="PROJECT_OVERVIEW">
                        <div className="max-w-2xl">
                            <div className="inline-block px-2 py-1 border border-blue-400 text-blue-400 text-[10px] font-bold tracking-widest mb-6">
                                STATUS: DEPLOYED
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                                SMART_HOME <br />
                                <span className="text-blue-400">CONTROL_HUB</span>
                            </h1>
                            <p className="text-lg text-blue-200/70 max-w-lg leading-relaxed border-l-2 border-blue-400/30 pl-4">
                                Unified interface for managing IoT devices. <br />
                                Optimizing automation protocols and energy monitoring.
                            </p>
                        </div>
                    </SpecItem>

                    {/* Key Stats */}
                    <SpecItem className="md:col-span-4" delay={0.1} label="METRICS">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-blue-400/10 border border-blue-400/20">
                                <TrendingUp size={20} className="text-blue-400" />
                            </div>
                            <span className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest">IMPACT_FACTOR</span>
                        </div>
                        <div className="text-4xl font-bold mb-1 text-white">+45%</div>
                        <div className="text-xs text-blue-400/60 tracking-widest">USER_ENGAGEMENT</div>
                    </SpecItem>

                    <SpecItem className="md:col-span-2" delay={0.2} label="ROLE">
                        <div className="flex flex-col h-full justify-between">
                            <User size={20} className="text-blue-400 mb-4" />
                            <div>
                                <div className="font-bold text-white">LEAD_UI</div>
                            </div>
                        </div>
                    </SpecItem>

                    <SpecItem className="md:col-span-2" delay={0.3} label="TIMELINE">
                        <div className="flex flex-col h-full justify-between">
                            <Calendar size={20} className="text-blue-400 mb-4" />
                            <div>
                                <div className="font-bold text-white">8_WEEKS</div>
                            </div>
                        </div>
                    </SpecItem>

                    {/* Overview */}
                    <SpecItem className="md:col-span-6" delay={0.4} label="PROBLEM_STMT">
                        <h3 className="text-lg font-bold mb-4 text-blue-200">FRAGMENTATION</h3>
                        <p className="text-sm text-blue-200/70 leading-relaxed">
                            // ERROR: User struggle detected. <br />
                            Multiple device ecosystems causing cognitive load. Need centralized command protocol.
                        </p>
                    </SpecItem>

                    <SpecItem className="md:col-span-6" delay={0.5} label="SOLUTION_ARCH">
                        <h3 className="text-lg font-bold mb-4 text-blue-200">MODULAR_DASHBOARD</h3>
                        <p className="text-sm text-blue-200/70 leading-relaxed">
                            // EXEC: Bento-grid layout implementation. <br />
                            Customizable viewports. "Smart Scenes" macro execution.
                        </p>
                    </SpecItem>

                    {/* Visuals */}
                    <SpecItem className="md:col-span-12 !p-0 overflow-hidden min-h-[500px] relative group border-dashed" delay={0.6} label="VISUAL_RENDER">
                        <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                            <div className="border-2 border-blue-400/20 w-3/4 h-3/4 flex items-center justify-center relative">
                                <span className="text-blue-400/40 font-bold text-xl tracking-widest">[ INTERFACE_MOCKUP_PLACEHOLDER ]</span>
                                {/* Crosshairs */}
                                <div className="absolute -top-3 -left-3 text-blue-400">+</div>
                                <div className="absolute -top-3 -right-3 text-blue-400">+</div>
                                <div className="absolute -bottom-3 -left-3 text-blue-400">+</div>
                                <div className="absolute -bottom-3 -right-3 text-blue-400">+</div>
                            </div>
                        </div>
                    </SpecItem>

                    {/* Process Steps */}
                    <SpecItem className="md:col-span-4" delay={0.7} label="PHASE_01">
                        <div className="text-2xl font-bold text-blue-500/20 mb-2">01</div>
                        <h4 className="font-bold text-sm mb-2 text-blue-200">RESEARCH_DATA</h4>
                        <p className="text-xs text-blue-200/60">Competitor analysis and user interviews to identify friction points.</p>
                    </SpecItem>

                    <SpecItem className="md:col-span-4" delay={0.8} label="PHASE_02">
                        <div className="text-2xl font-bold text-blue-500/20 mb-2">02</div>
                        <h4 className="font-bold text-sm mb-2 text-blue-200">WIREFRAMING</h4>
                        <p className="text-xs text-blue-200/60">Low-fidelity schematics to iterate on layout and navigation flow.</p>
                    </SpecItem>

                    <SpecItem className="md:col-span-4" delay={0.9} label="PHASE_03">
                        <div className="text-2xl font-bold text-blue-500/20 mb-2">03</div>
                        <h4 className="font-bold text-sm mb-2 text-blue-200">PROTOTYPING</h4>
                        <p className="text-xs text-blue-200/60">High-fidelity interactive models to test micro-interactions.</p>
                    </SpecItem>

                    {/* Footer/CTA */}
                    <SpecItem className="md:col-span-12 flex flex-col md:flex-row items-center justify-between p-12 bg-blue-900/10" delay={1.0} label="NEXT_STEPS">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-white">INITIATE_NEW_PROJECT?</h2>
                            <p className="text-blue-200/60 text-sm">Collaborate on the next digital frontier.</p>
                        </div>
                        <div className="flex gap-4 mt-6 md:mt-0">
                            <button className="px-6 py-3 bg-blue-400 text-[#0f172a] font-bold hover:bg-white transition-colors text-xs tracking-widest uppercase">
                                CONTACT_ME
                            </button>
                            <Link to="/preview2" className="px-6 py-3 border border-blue-400/30 text-blue-400 font-bold hover:bg-blue-400/10 transition-colors text-xs tracking-widest uppercase">
                                VIEW_ARCHIVE
                            </Link>
                        </div>
                    </SpecItem>
                </div>
            </div>
        </div>
    );
}
