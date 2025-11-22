import React, { useState, useRef } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Layers, Palette, Code2, Cpu, Move, GripVertical, Maximize2, Minimize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Preview2() {
    // State for reorderable lists
    const [introItems, setIntroItems] = useState([
        { id: 'intro-1', type: 'text', content: 'Crafting digital experiences that feel alive.', size: 'full' },
        { id: 'intro-2', type: 'status', content: 'Available for new projects', size: 'small' },
        { id: 'intro-3', type: 'desc', content: "I'm Luis Cabrera. I blend research-backed strategy with motion-rich design to build products that users love.", size: 'medium' },
        { id: 'intro-4', type: 'actions', content: 'Buttons', size: 'medium' }
    ]);

    const [workItems, setWorkItems] = useState([
        { id: 'work-1', size: 'medium', title: 'FinTech Dashboard', tags: ['SaaS', 'Design System'], desc: 'Redesigning the future of financial analytics.', gradient: 'from-indigo-500/20' },
        { id: 'work-2', size: 'small', title: 'Mobile Banking', tags: ['App', 'UX'], desc: 'Simplifying payments for millions.', gradient: 'from-purple-500/20' },
        { id: 'work-3', size: 'small', title: 'E-commerce', tags: ['Web', 'Conversion'], desc: 'Boosting sales through better UX.', gradient: 'from-pink-500/20' },
        { id: 'work-4', size: 'medium', title: 'Health & Wellness', tags: ['Mobile', 'Research'], desc: 'A holistic approach to daily health tracking.', gradient: 'from-blue-500/20' }
    ]);

    const [expertiseItems, setExpertiseItems] = useState([
        { id: 'exp-1', size: 'small', icon: <Palette className="w-6 h-6" />, title: 'Product Design', desc: 'End-to-end product design from discovery to delivery.' },
        { id: 'exp-2', size: 'small', icon: <Code2 className="w-6 h-6" />, title: 'Frontend Dev', desc: 'Building pixel-perfect interfaces with React & Tailwind.' },
        { id: 'exp-3', size: 'small', icon: <Layers className="w-6 h-6" />, title: 'Design Systems', desc: 'Scalable component libraries and documentation.' },
        { id: 'exp-4', size: 'small', icon: <Cpu className="w-6 h-6" />, title: 'Prototyping', desc: 'High-fidelity interactive prototypes with Framer.' }
    ]);

    // Helper to get width class based on size
    const getWidthClass = (size) => {
        switch (size) {
            case 'small': return 'col-span-1';
            case 'medium': return 'col-span-1 md:col-span-2';
            case 'full': return 'col-span-1 md:col-span-3';
            default: return 'col-span-1';
        }
    };

    // Smart Resize Logic
    const handleResize = (items, setItems, id) => {
        const index = items.findIndex(i => i.id === id);
        if (index === -1) return;

        const currentSize = items[index].size || 'small';
        const sizes = ['small', 'medium', 'full'];
        const nextSize = sizes[(sizes.indexOf(currentSize) + 1) % sizes.length];

        const newItems = [...items];
        newItems[index] = { ...newItems[index], size: nextSize };

        // Smart Logic: If becoming Medium, and next item is Medium, shrink next to Small to fit row
        if (nextSize === 'medium') {
            const nextItem = newItems[index + 1];
            if (nextItem && (nextItem.size === 'medium' || nextItem.size === 'full')) {
                newItems[index + 1] = { ...nextItem, size: 'small' };
            }
        }

        setItems(newItems);
    };

    // Ref for drag constraints
    const containerRef = useRef(null);

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-mono text-xs">LC</span>
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Portfolio</span>
                    </div>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                        <a href="#work" className="hover:text-white transition-colors">Work</a>
                        <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                    </nav>
                    <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 hover:text-white transition-all">
                        Let's Talk
                    </Button>
                </div>
            </header>

            <main className="pt-32 pb-20 container mx-auto px-6 relative z-10">

                {/* Draggable Intro Section */}
                <section className="mb-32">
                    <div className="flex items-center justify-between mb-6 text-zinc-500 text-sm">
                        <div className="flex items-center gap-2">
                            <Move className="w-4 h-4" />
                            <span>Drag to reorder • Click corner icon to resize</span>
                        </div>
                    </div>
                    <Reorder.Group axis="y" values={introItems} onReorder={setIntroItems} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {introItems.map((item) => (
                            <Reorder.Item
                                key={item.id}
                                value={item}
                                className={`${getWidthClass(item.size)} relative group cursor-grab active:cursor-grabbing`}
                                whileDrag={{ scale: 1.02, zIndex: 100 }}
                            >
                                <div className="h-full p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative">
                                    {/* Resize Handle */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleResize(introItems, setIntroItems, item.id); }}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                        title="Change Size"
                                    >
                                        <Maximize2 className="w-3 h-3 text-zinc-400" />
                                    </button>

                                    {item.type === 'status' && (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 w-fit">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                            </span>
                                            {item.content}
                                        </div>
                                    )}
                                    {item.type === 'text' && (
                                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                                            {item.content}
                                        </h1>
                                    )}
                                    {item.type === 'desc' && (
                                        <p className="text-lg text-zinc-400 leading-relaxed">
                                            {item.content}
                                        </p>
                                    )}
                                    {item.type === 'actions' && (
                                        <div className="flex flex-wrap gap-4">
                                            <Button size="lg" className="rounded-full text-base h-12 px-8 bg-white text-black hover:bg-zinc-200 border-0">
                                                View Work <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300">
                                                <Github className="mr-2 h-4 w-4" /> GitHub
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </section>

                {/* Draggable Bento Grid Work Section */}
                <section id="work" className="mb-32">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
                            <p className="text-zinc-400">Drag to reorder • Click resize icon to customize grid</p>
                        </div>
                        <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Big Container for the Grid */}
                    <div ref={containerRef} className="min-h-[800px] border border-white/10 rounded-[3rem] bg-white/[0.02] p-8 relative">
                        <div className="absolute top-4 left-8 text-xs font-mono text-zinc-600 uppercase tracking-widest">
                            Interactive Grid System
                        </div>

                        <Reorder.Group
                            values={workItems}
                            onReorder={setWorkItems}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                        >
                            {workItems.map((item) => (
                                <Reorder.Item
                                    key={item.id}
                                    value={item}
                                    dragConstraints={containerRef}
                                    className={`${getWidthClass(item.size)} h-[400px] cursor-grab active:cursor-grabbing relative group`}
                                    whileDrag={{ scale: 1.02, zIndex: 100, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="h-full w-full relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Resize Handle */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleResize(workItems, setWorkItems, item.id); }}
                                            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-white/10"
                                            title="Change Size"
                                        >
                                            <Maximize2 className="w-4 h-4 text-white" />
                                        </button>

                                        {/* Drag Handle Indicator */}
                                        <div className="absolute top-4 left-4 p-2 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                                            <GripVertical className="w-4 h-4 text-white/50" />
                                        </div>

                                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                            <div>
                                                <div className="flex gap-2 mb-4 flex-wrap">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10 backdrop-blur-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                                                <p className="text-zinc-400 line-clamp-3">{item.desc}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-8">
                                                <Link to="/preview2/case-study" className="text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all text-white">
                                                    View Case Study <ArrowRight className="w-4 h-4" />
                                                </Link>
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>
                </section>

                {/* Draggable Expertise Section */}
                <section id="expertise" className="mb-32">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-2">Expertise</h2>
                        <p className="text-zinc-400">Drag to prioritize skills • Resize to emphasize</p>
                    </div>

                    <Reorder.Group axis="y" values={expertiseItems} onReorder={setExpertiseItems} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {expertiseItems.map((item) => (
                            <Reorder.Item
                                key={item.id}
                                value={item}
                                className={`${getWidthClass(item.size)} cursor-grab active:cursor-grabbing group relative`}
                                whileDrag={{ scale: 1.02, zIndex: 100 }}
                            >
                                <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:bg-white/5 transition-colors h-full flex flex-col gap-6 relative">
                                    {/* Resize Handle */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleResize(expertiseItems, setExpertiseItems, item.id); }}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                        title="Change Size"
                                    >
                                        <Maximize2 className="w-3 h-3 text-zinc-400" />
                                    </button>

                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10 pt-20 pb-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Let's build something amazing</h3>
                            <p className="text-zinc-400">Available for freelance projects</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-20 text-center text-sm text-zinc-600">
                        © 2024 Luis Cabrera. All rights reserved.
                    </div>
                </footer>
            </main>
        </div>
    );
}
