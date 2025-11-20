import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, Layers, Zap, Globe } from 'lucide-react';

const Card3D = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-all duration-200 ease-out ${className}`}
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

export default function Preview10() {
    return (
        <div className="preview-10 min-h-screen bg-[#0f0f11] text-white font-sans overflow-hidden perspective-1000">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    SPATIAL_UI
                </div>
                <div className="flex gap-8 text-sm font-medium text-gray-400">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                                Next Level <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                    Interaction
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-lg">
                                Exploring the boundaries of web design with 3D transforms, depth, and motion.
                            </p>
                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                                Explore Work
                            </button>
                        </motion.div>
                    </div>

                    <div className="h-[500px] flex items-center justify-center perspective-1000">
                        <Card3D className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl flex flex-col items-center justify-center p-8">
                            <Box className="w-24 h-24 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-2">3D Card</h3>
                            <p className="text-center text-gray-400">Hover over me to see the perspective effect in action.</p>
                        </Card3D>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Layers />, title: "Depth", desc: "Adding dimension to flat interfaces." },
                            { icon: <Zap />, title: "Performance", desc: "Silky smooth 60fps animations." },
                            { icon: <Globe />, title: "Universal", desc: "Works across all modern devices." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Selected Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[1, 2, 3, 4].map((item) => (
                            <Card3D key={item} className="h-80 w-full bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-full flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold mb-2">Project {item}</h3>
                                    <p className="text-gray-400">An experimental interface design.</p>
                                </div>
                                <Link to="/preview10/case-study" className="absolute inset-0 z-20" aria-label={`View Case Study for Project ${item}`}></Link>
                            </Card3D>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-gray-500 text-sm relative z-10">
                <p>Experimental Preview • 2024</p>
            </footer>
        </div>
    );
}
