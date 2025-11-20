import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoItem = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}
    >
        {children}
    </motion.div>
);

export default function Preview2CaseStudy() {
    return (
        <div className="preview-2 min-h-screen bg-gray-50 text-gray-900 font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-12">
                    <Link
                        to="/preview2"
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all font-medium text-sm"
                    >
                        <ArrowLeft size={16} /> Back to Dashboard
                    </Link>
                    <div className="font-bold text-xl tracking-tight">Project Case Study</div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Hero Section */}
                    <BentoItem className="md:col-span-8 md:row-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white !border-none min-h-[400px] flex flex-col justify-center">
                        <div className="max-w-2xl">
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-6">
                                CASE STUDY
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Smart Home <br /> Control Hub
                            </h1>
                            <p className="text-lg text-white/80 max-w-lg">
                                A unified interface for managing IoT devices with intuitive automation and real-time energy monitoring.
                            </p>
                        </div>
                    </BentoItem>

                    {/* Key Stats */}
                    <BentoItem className="md:col-span-4 bg-gray-900 text-white !border-none" delay={0.1}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <TrendingUp size={24} className="text-green-400" />
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase">Impact</span>
                        </div>
                        <div className="text-4xl font-bold mb-1">+45%</div>
                        <div className="text-sm text-gray-400">User Engagement</div>
                    </BentoItem>

                    <BentoItem className="md:col-span-2" delay={0.2}>
                        <div className="flex flex-col h-full justify-between">
                            <User size={24} className="text-blue-500 mb-4" />
                            <div>
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Role</div>
                                <div className="font-bold">Lead UI</div>
                            </div>
                        </div>
                    </BentoItem>

                    <BentoItem className="md:col-span-2" delay={0.3}>
                        <div className="flex flex-col h-full justify-between">
                            <Calendar size={24} className="text-purple-500 mb-4" />
                            <div>
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Timeline</div>
                                <div className="font-bold">8 Weeks</div>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Overview */}
                    <BentoItem className="md:col-span-6" delay={0.4}>
                        <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Users struggled to manage multiple smart devices from different manufacturers. The goal was to create a centralized hub that simplifies control and provides actionable insights into energy consumption.
                        </p>
                    </BentoItem>

                    <BentoItem className="md:col-span-6" delay={0.5}>
                        <h3 className="text-xl font-bold mb-4">The Solution</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We designed a modular dashboard system using a bento-grid layout, allowing users to customize their view. We introduced "Smart Scenes" for one-tap automation of multiple devices.
                        </p>
                    </BentoItem>

                    {/* Visuals */}
                    <BentoItem className="md:col-span-12 !p-0 overflow-hidden min-h-[500px] relative group" delay={0.6}>
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 font-bold text-2xl">Main Interface Mockup</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-2xl font-bold">High Fidelity Design</h3>
                        </div>
                    </BentoItem>

                    {/* Process Steps */}
                    <BentoItem className="md:col-span-4" delay={0.7}>
                        <div className="text-4xl font-bold text-gray-200 mb-4">01</div>
                        <h4 className="font-bold text-lg mb-2">Research</h4>
                        <p className="text-sm text-gray-600">Competitor analysis and user interviews to understand pain points.</p>
                    </BentoItem>

                    <BentoItem className="md:col-span-4" delay={0.8}>
                        <div className="text-4xl font-bold text-gray-200 mb-4">02</div>
                        <h4 className="font-bold text-lg mb-2">Wireframing</h4>
                        <p className="text-sm text-gray-600">Low-fidelity sketches to iterate on layout and navigation.</p>
                    </BentoItem>

                    <BentoItem className="md:col-span-4" delay={0.9}>
                        <div className="text-4xl font-bold text-gray-200 mb-4">03</div>
                        <h4 className="font-bold text-lg mb-2">Prototyping</h4>
                        <p className="text-sm text-gray-600">Interactive prototypes to test flows and micro-interactions.</p>
                    </BentoItem>

                    {/* Footer/CTA */}
                    <BentoItem className="md:col-span-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between p-12" delay={1.0}>
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Ready to start a project?</h2>
                            <p className="text-gray-400">Let's build something amazing together.</p>
                        </div>
                        <div className="flex gap-4 mt-6 md:mt-0">
                            <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                Contact Me
                            </button>
                            <Link to="/preview2" className="px-6 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors">
                                More Work
                            </Link>
                        </div>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
}
