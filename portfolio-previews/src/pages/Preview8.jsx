import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Cloud, Music, Coffee, Sun } from 'lucide-react';

const Blob = ({ className }) => (
    <svg viewBox="0 0 200 200" className={`absolute w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,89.1,-2.9C88.1,12.3,83.5,27.1,75.4,40.5C67.3,53.9,55.7,65.9,42.4,73.9C29.1,81.9,14.1,85.9,-0.4,86.6C-14.9,87.3,-29.4,84.7,-42.4,77.1C-55.4,69.5,-66.9,56.9,-75.6,42.6C-84.3,28.3,-90.2,12.3,-89.1,-3.1C-88,-18.5,-79.9,-33.3,-69.3,-45.3C-58.7,-57.3,-45.6,-66.5,-32.1,-74.2C-18.6,-81.9,-4.7,-88.1,4.9,-96.6L14.5,-105.1Z" transform="translate(100 100)" />
    </svg>
);

export default function Preview8() {
    return (
        <div className="preview-8 min-h-screen bg-[#FFF0F5] text-[#4A4A4A] font-sans selection:bg-[#FFB6C1] selection:text-white overflow-hidden">
            {/* Background Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] text-[#FFD1DC] opacity-50 animate-blob">
                    <Blob />
                </div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] text-[#E0F7FA] opacity-50 animate-blob animation-delay-2000">
                    <Blob />
                </div>
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] text-[#FFF9C4] opacity-50 animate-blob animation-delay-4000">
                    <Blob />
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full shadow-lg shadow-pink-100/50 border border-white">
                <div className="flex items-center gap-8 font-bold text-sm text-[#666]">
                    <a href="#home" className="hover:text-[#FF6B6B] transition-colors">Home</a>
                    <a href="#work" className="hover:text-[#4ECDC4] transition-colors">Work</a>
                    <div className="text-2xl">🌸</div>
                    <a href="#about" className="hover:text-[#FFD93D] transition-colors">About</a>
                    <a href="#contact" className="hover:text-[#A78BFA] transition-colors">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative z-10 pt-40 pb-20 px-6 min-h-screen flex items-center justify-center text-center">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="inline-block mb-6 p-4 bg-white rounded-3xl shadow-xl shadow-pink-100 rotate-[-3deg]"
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                            Hello, Friend! 👋
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-[#2D3436] tracking-tight">
                        Making the web <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#FF6B6B]">fun again</span>
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FFD93D] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#666] max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        I design and build websites that pop! ✨ Focusing on delightful interactions, colorful interfaces, and happy users.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#work"
                            className="px-8 py-4 bg-[#FF6B6B] text-white text-lg font-bold rounded-2xl shadow-lg shadow-red-200 hover:shadow-xl transition-all"
                        >
                            See My Work 🎨
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-4 bg-white text-[#4A4A4A] text-lg font-bold rounded-2xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all"
                        >
                            Say Hi! 💌
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Features/Skills */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Sparkles className="w-8 h-8 text-[#FFD93D]" />, title: "Pixel Perfect", desc: "Every pixel has its place.", color: "bg-[#FFF9C4]" },
                            { icon: <Heart className="w-8 h-8 text-[#FF6B6B]" />, title: "Made with Love", desc: "Crafted with care & joy.", color: "bg-[#FFD1DC]" },
                            { icon: <Cloud className="w-8 h-8 text-[#4ECDC4]" />, title: "Cloud Ready", desc: "Deployed in seconds.", color: "bg-[#E0F7FA]" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`p-8 rounded-[2rem] ${feature.color} border-4 border-white shadow-xl shadow-gray-100/50`}
                            >
                                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-[#2D3436]">{feature.title}</h3>
                                <p className="text-[#666] font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="work" className="relative z-10 py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-[#E0F7FA] text-[#00BCD4] font-bold rounded-full text-sm mb-4">MY PORTFOLIO</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#2D3436]">Cool Stuff I Built</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { title: "Candy Shop", tag: "E-Commerce", bg: "bg-[#FFD1DC]" },
                            { title: "Pet Adoption", tag: "Non-Profit", bg: "bg-[#FFF9C4]" },
                            { title: "Music Player", tag: "App", bg: "bg-[#E0F7FA]" },
                            { title: "Travel Diary", tag: "Blog", bg: "bg-[#D1C4E9]" }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="group cursor-pointer block"
                            >
                                <Link to="/preview8/case-study">
                                    <div className={`h-80 rounded-[2.5rem] ${project.bg} border-4 border-white shadow-xl shadow-gray-100 flex items-center justify-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="text-9xl opacity-20 select-none">✨</span>
                                    </div>
                                    <div className="mt-6 px-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-[#2D3436]">{project.title}</h3>
                                            <span className="px-3 py-1 bg-white border-2 border-gray-100 rounded-full text-xs font-bold text-[#666] shadow-sm">
                                                {project.tag}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="relative z-10 py-24 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-[#4ECDC4] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-[#4ECDC4]/30 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <Blob className="scale-150" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8">Let's work together!</h2>
                            <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium">
                                Have a project in mind? I'd love to hear about it. <br />
                                Let's build something awesome.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white text-[#4ECDC4] text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                            >
                                Send a Message 🚀
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-[#888] font-medium relative z-10">
                <p>Made with 💖 and lots of ☕</p>
            </footer>
        </div>
    );
}
