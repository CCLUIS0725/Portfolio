import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowUpRight, Command, Sparkles, Zap, Box, Layout } from 'lucide-react';

// Text Reveal Component (Motion Primitives style)
const TextReveal = ({ text, delay = 0 }) => {
    const words = text.split(" ");
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                className="flex flex-wrap gap-x-3"
            >
                {words.map((word, i) => (
                    <span key={i} className="inline-block">{word}</span>
                ))}
            </motion.div>
        </div>
    );
};

// Dynamic Island Navigation
const DynamicNav = () => {
    const [hovered, setHovered] = useState(null);

    const navItems = [
        { id: 'home', icon: <Command size={16} />, label: 'Home' },
        { id: 'work', icon: <Layout size={16} />, label: 'Work' },
        { id: 'skills', icon: <Zap size={16} />, label: 'Skills' },
        { id: 'contact', icon: <Sparkles size={16} />, label: 'Contact' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-2 p-2 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/20"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
                {navItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onHoverStart={() => setHovered(item.id)}
                        onHoverEnd={() => setHovered(null)}
                        className="relative px-4 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        {hovered === item.id && (
                            <motion.div
                                layoutId="nav-hover"
                                className="absolute inset-0 bg-zinc-800 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            {item.icon}
                            {item.label}
                        </span>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default function Preview3() {
    const [activeTab, setActiveTab] = useState('work');

    return (
        <div className="min-h-screen bg-[#F2F2F2] text-zinc-900 font-sans selection:bg-orange-500/30">
            <DynamicNav />

            <main className="container mx-auto px-6 pt-32 pb-40 max-w-5xl">
                {/* Header */}
                <header className="mb-24">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                            L
                        </div>
                        <span className="font-semibold tracking-tight">Luis Cabrera</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-zinc-900">
                        <TextReveal text="Digital Product" />
                        <TextReveal text="Designer &" delay={0.1} />
                        <TextReveal text="Developer." delay={0.2} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed"
                    >
                        I build interfaces that feel like magic. Focusing on micro-interactions,
                        fluid motion, and clean typography.
                    </motion.p>
                </header>

                {/* Tabs */}
                <div className="mb-12">
                    <div className="flex gap-8 border-b border-zinc-300 pb-4">
                        {['work', 'skills', 'about'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-lg font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-orange-500"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === 'work' && (
                        <motion.div
                            key="work"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-[4/3] bg-white rounded-2xl shadow-sm border border-zinc-200 mb-4 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                                            <Box size={48} strokeWidth={1} />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors">Project Name {i}</h3>
                                            <p className="text-zinc-500 text-sm">Product Design • Strategy</p>
                                        </div>
                                        <Link to="/preview3/case-study" className="p-2 rounded-full bg-white border border-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-50 hover:text-orange-600">
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'skills' && (
                        <motion.div
                            key="skills"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {['Figma', 'React', 'Motion', 'Tailwind', 'Next.js', 'TypeScript', 'Node.js', 'Three.js'].map((skill) => (
                                <div key={skill} className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="h-10 w-10 bg-zinc-100 rounded-lg mb-4 flex items-center justify-center text-zinc-500">
                                        <Zap size={20} />
                                    </div>
                                    <h3 className="font-semibold">{skill}</h3>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </div>
    );
}
