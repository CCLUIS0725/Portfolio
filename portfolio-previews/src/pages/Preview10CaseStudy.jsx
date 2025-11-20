import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box, Layers, Zap, Globe, Cpu, Shield, Activity } from 'lucide-react';

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

export default function Preview10CaseStudy() {
    return (
        <div className="preview-10-case-study min-h-screen bg-[#0f0f11] text-white font-sans overflow-hidden perspective-1000">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center bg-[#0f0f11]/50 backdrop-blur-md border-b border-white/5">
                <Link to="/preview10" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    SPATIAL_UI
                </Link>
                <Link to="/preview10" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Return to Hub
                </Link>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-6">
                                    CASE STUDY: IMMERSIVE DASHBOARD
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    Breaking the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                        Fourth Wall
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                                    Redefining data visualization through spatial interfaces. A deep dive into creating depth and context in a flat medium.
                                </p>
                            </motion.div>
                        </div>
                        <div className="h-[400px] flex items-center justify-center perspective-1000">
                            <Card3D className="w-full max-w-md aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl flex flex-col items-center justify-center p-8">
                                <Activity className="w-24 h-24 text-blue-400 mb-6" />
                                <h3 className="text-2xl font-bold mb-2">Live Analytics</h3>
                                <p className="text-center text-gray-400">Spatial Data Representation</p>
                            </Card3D>
                        </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        <div className="p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl">
                            <Cpu className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold mb-1">Technology</h3>
                            <p className="text-gray-400">React Three Fiber / WebGL</p>
                        </div>
                        <div className="p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl">
                            <Shield className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-1">Challenge</h3>
                            <p className="text-gray-400">Performance Optimization</p>
                        </div>
                        <div className="p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl">
                            <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold mb-1">Impact</h3>
                            <p className="text-gray-400">40% Higher Engagement</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-bold sticky top-32 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                The Vision
                            </h2>
                        </div>
                        <div className="lg:col-span-8 text-lg text-gray-300 leading-relaxed space-y-8">
                            <p>
                                Traditional dashboards are flat. They present data in 2D planes that often compete for attention. We wanted to use the Z-axis to create a hierarchy of information that felt natural and intuitive.
                            </p>
                            <p>
                                By implementing spatial UI principles, we allowed users to "push" less relevant data into the background and bring critical metrics forward, mimicking how we focus on objects in the physical world.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-bold sticky top-32 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                Implementation
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-6">
                            {[
                                "Utilized CSS 3D transforms for lightweight spatial effects",
                                "Implemented spring physics for natural motion response",
                                "Created a custom lighting engine using radial gradients",
                                "Optimized for high refresh rate displays"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="space-y-12 mb-32">
                        <Card3D className="w-full aspect-[21/9] bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-gray-700">Main Interface</h3>
                                <p className="text-gray-600">Spatial Overview</p>
                            </div>
                        </Card3D>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card3D className="w-full aspect-video bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-700">Data Layer</h3>
                                </div>
                            </Card3D>
                            <Card3D className="w-full aspect-video bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-700">Settings Depth</h3>
                                </div>
                            </Card3D>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center border-t border-white/10 pt-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Ready to go <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                Spatial?
                            </span>
                        </h2>
                        <div className="flex justify-center gap-6">
                            <Link to="/preview10" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                Back to Hub
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
