import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Hexagon, Box, Circle, CheckSquare, Calendar, User } from 'lucide-react';

export default function Preview6CaseStudy() {
    return (
        <div className="preview-6-case-study min-h-screen bg-[#FFFDF5] text-black font-mono selection:bg-[#FF6B6B] selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-[#FFFDF5]">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/preview6" className="text-3xl font-black uppercase tracking-tighter hover:skew-x-12 transition-transform cursor-pointer">
                        Brutal.
                    </Link>
                    <Link to="/preview6" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white px-4 py-2 transition-colors border-2 border-transparent hover:border-black">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Hero */}
                    <div className="mb-20 border-b-4 border-black pb-12">
                        <div className="inline-block px-4 py-2 bg-[#FF6B6B] border-2 border-black font-bold uppercase tracking-wider mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            E-Commerce Case Study
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
                            Retro <br />
                            <span className="text-transparent bg-clip-text bg-[#4DE1C1] stroke-black" style={{ WebkitTextStroke: '2px black' }}>Store</span> <br />
                            Redesign
                        </h1>
                        <p className="text-xl md:text-2xl font-bold max-w-3xl leading-relaxed border-l-8 border-[#FFD93D] pl-6">
                            A radical approach to modern e-commerce. We ditched the clean, minimal look for something loud, proud, and impossible to ignore.
                        </p>
                    </div>

                    {/* Main Visual */}
                    <div className="mb-20 relative">
                        <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                        <div className="relative border-4 border-black bg-[#FFD93D] p-4 md:p-8 aspect-video flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
                            <Box className="w-32 h-32 md:w-48 md:h-48 stroke-black stroke-[1.5]" />
                            <div className="absolute bottom-4 right-4 bg-white border-2 border-black px-4 py-2 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                Hero Concept
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <User className="w-8 h-8 mb-4" />
                            <h3 className="text-2xl font-black uppercase mb-2">Role</h3>
                            <p className="font-bold">Lead Developer</p>
                        </div>
                        <div className="border-4 border-black p-8 bg-[#4DE1C1] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <Calendar className="w-8 h-8 mb-4" />
                            <h3 className="text-2xl font-black uppercase mb-2">Timeline</h3>
                            <p className="font-bold">4 Weeks</p>
                        </div>
                        <div className="border-4 border-black p-8 bg-[#FF6B6B] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <Hexagon className="w-8 h-8 mb-4" />
                            <h3 className="text-2xl font-black uppercase mb-2">Tech</h3>
                            <p className="font-bold">React, WebGL</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-4xl font-black uppercase sticky top-32 bg-[#FFFDF5] inline-block border-b-4 border-[#FFD93D]">The Problem</h2>
                        </div>
                        <div className="md:col-span-8 text-lg font-bold leading-relaxed space-y-6">
                            <p>
                                Most e-commerce sites look exactly the same. White background, sans-serif font, grid of images. Boring.
                            </p>
                            <p>
                                The client wanted to stand out in a saturated market. They needed a brand identity that screamed "different" and appealed to a younger, trend-conscious demographic.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-4xl font-black uppercase sticky top-32 bg-[#FFFDF5] inline-block border-b-4 border-[#4DE1C1]">The Fix</h2>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            {[
                                "Developed a custom design system based on Neo-Brutalism principles",
                                "Implemented high-contrast UI elements for maximum visibility",
                                "Created custom WebGL interactions for product showcases",
                                "Optimized performance despite heavy visual effects"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <CheckSquare className="w-8 h-8 shrink-0" />
                                    <span className="font-bold text-xl uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="space-y-12 mb-20">
                        <div className="border-4 border-black p-4 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            <div className="aspect-[16/9] bg-black flex items-center justify-center">
                                <span className="text-white font-black text-2xl uppercase tracking-widest">Desktop Homepage</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border-4 border-black p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="aspect-[4/5] bg-black flex items-center justify-center">
                                    <span className="text-white font-black text-xl uppercase tracking-widest">Mobile Product</span>
                                </div>
                            </div>
                            <div className="border-4 border-black p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="aspect-[4/5] bg-black flex items-center justify-center">
                                    <span className="text-white font-black text-xl uppercase tracking-widest">Mobile Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Project */}
                    <div className="bg-[#FFD93D] border-4 border-black p-12 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        <Star className="absolute -top-12 -right-12 w-48 h-48 text-black opacity-10 rotate-12" />
                        <Star className="absolute -bottom-12 -left-12 w-48 h-48 text-black opacity-10 -rotate-12" />

                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 relative z-10">
                            Next Project?
                        </h2>
                        <p className="text-xl font-bold mb-10 max-w-xl mx-auto relative z-10">
                            Check out the Cyber Dashboard or let's build something crazy together.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/preview6" className="px-8 py-4 bg-black text-white text-xl font-bold uppercase border-2 border-black shadow-[8px_8px_0px_0px_#fff] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#fff] transition-all">
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
