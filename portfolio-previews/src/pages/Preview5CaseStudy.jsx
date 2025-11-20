import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Zap, Layout, CheckCircle, Calendar, User } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Preview5CaseStudy() {
    return (
        <div className="preview-5-case-study min-h-screen bg-[#F3F4F6] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F3F4F6]/80 backdrop-blur-md border-b border-white/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/preview5" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                        Smooth.
                    </Link>
                    <Link to="/preview5" className="flex items-center gap-2 font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Hero */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="text-center mb-20"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-indigo-600 mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                            Product Design Case Study
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Fintech Dashboard <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Redesign</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Transforming a complex financial tool into an intuitive, user-centric experience that drives engagement.
                        </motion.p>
                    </motion.div>

                    {/* Main Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 mb-20 bg-white"
                    >
                        <div className="aspect-video bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="px-6 py-3 bg-white rounded-full shadow-lg font-medium text-indigo-600">View Prototype</span>
                            </div>
                            <Layers className="w-24 h-24 text-indigo-200" />
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <User className="w-6 h-6 text-indigo-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-1">Role</h3>
                            <p className="text-slate-600 text-sm">Lead Product Designer</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <Calendar className="w-6 h-6 text-indigo-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-1">Timeline</h3>
                            <p className="text-slate-600 text-sm">8 Weeks • Q1 2024</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <Layout className="w-6 h-6 text-indigo-600 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-1">Platform</h3>
                            <p className="text-slate-600 text-sm">Web & Mobile App</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold text-slate-900 sticky top-32">The Challenge</h2>
                        </div>
                        <div className="md:col-span-8 text-lg text-slate-600 leading-relaxed space-y-6">
                            <p>
                                The existing dashboard was suffering from feature bloat and poor information architecture. Users were struggling to find critical financial data, leading to increased support tickets and churn.
                            </p>
                            <p>
                                Our goal was to simplify the interface without removing functionality, creating a "progressive disclosure" system that showed users what they needed, when they needed it.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold text-slate-900 sticky top-32">Key Improvements</h2>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            {[
                                "Simplified navigation structure reducing clicks by 40%",
                                "Implemented dark mode for better data readability",
                                "Created a new design system with accessible color contrast",
                                "Added real-time data visualization with interactive charts"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="space-y-8 mb-20">
                        <div className="bg-white p-4 rounded-[2rem] shadow-sm">
                            <div className="aspect-[16/9] bg-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-400 font-medium">
                                Dashboard Overview
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-4 rounded-[2rem] shadow-sm">
                                <div className="aspect-[4/3] bg-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-400 font-medium">
                                    Mobile View
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-[2rem] shadow-sm">
                                <div className="aspect-[4/3] bg-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-400 font-medium">
                                    Analytics Detail
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Project */}
                    <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-indigo-300">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for the next one?</h2>
                        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
                            Check out my work on the Travel App or get in touch to discuss your project.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/preview5" className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
