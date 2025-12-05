import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PokedexView = ({ onBack, selectedIndex, setSelectedIndex, mode = 'LIST', setMode }) => {
    const projects = [
        {
            id: '001',
            name: 'ECO_TRACK',
            type: 'GRASS',
            desc: 'A sustainable habit tracker app built with React Native.',
            overview: 'EcoTrack helps users monitor their carbon footprint through daily logging and gamified challenges.',
            problem: 'People want to be sustainable but lack actionable data and motivation.',
            goals: 'Create a habit-forming loop that rewards positive environmental actions.',
            stack: ['React Native', 'Firebase', 'Redux']
        },
        {
            id: '004',
            name: 'FIRE_CHAT',
            type: 'FIRE',
            desc: 'Real-time messaging platform using Firebase and Tailwind.',
            overview: 'A blazing fast chat application with real-time message delivery and typing indicators.',
            problem: 'Existing chat apps are bloated. We needed a lightweight solution for our internal team.',
            goals: 'Achieve <100ms message latency and support 10k+ concurrent users.',
            stack: ['React', 'Firebase', 'Tailwind']
        },
        {
            id: '007',
            name: 'AQUA_DASH',
            type: 'WATER',
            desc: 'Analytics dashboard for marine biology data visualization.',
            overview: 'Visualizing complex oceanographic data for research teams.',
            problem: 'Raw data is hard to interpret. Researchers need visual trends.',
            goals: 'Simplify data ingestion and provide interactive charts.',
            stack: ['D3.js', 'React', 'Node.js']
        },
        {
            id: '025',
            name: 'VOLT_UI',
            type: 'ELECTRIC',
            desc: 'High-performance UI component library for modern web apps.',
            overview: 'A collection of accessible, reusable components for rapid development.',
            problem: 'Inconsistent UI across projects led to technical debt.',
            goals: 'Standardize the design system and improve accessibility scores.',
            stack: ['React', 'Storybook', 'Jest']
        },
    ];

    // Use parent state if provided, else local (for standalone usage if needed)
    const [localSelected, setLocalSelected] = useState(0);
    const selected = selectedIndex !== undefined ? selectedIndex : localSelected;
    const setSelected = setSelectedIndex || setLocalSelected;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-red-600 flex flex-col p-4 md:p-6"
        >
            <div className="bg-white border-4 border-[#2d2d2d] rounded-lg p-4 md:p-6 flex-1 flex flex-col overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">

                <AnimatePresence mode="wait">
                    {mode === 'LIST' ? (
                        <motion.div
                            key="list"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            className="w-full h-full flex flex-col"
                        >
                            <h2 className="text-xl md:text-2xl mb-4 border-b-4 border-[#2d2d2d] pb-2">POKEDEX ENTRIES</h2>
                            <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                {projects.map((p, i) => (
                                    <div
                                        key={p.id}
                                        onClick={() => {
                                            setSelected(i);
                                            if (setMode) setMode('DETAIL');
                                        }}
                                        className={`p-4 cursor-pointer text-sm md:text-base flex justify-between items-center border-2 transition-all ${selected === i ? 'bg-blue-500 text-white border-blue-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]' : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono opacity-70">No.{p.id}</span>
                                            <span className="font-bold">{p.name}</span>
                                        </div>
                                        {selected === i && <ChevronRight className="animate-pulse" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 20, opacity: 0 }}
                            className="w-full h-full flex flex-col md:flex-row gap-6"
                        >
                            {/* Left: Image */}
                            <div className="w-full md:w-1/3 flex flex-col gap-4">
                                <div className="aspect-square bg-gray-200 border-4 border-[#2d2d2d] rounded flex items-center justify-center relative shadow-inner">
                                    <div className="w-20 h-20 bg-gray-400 animate-bounce rounded-full opacity-50"></div>
                                    <div className="absolute top-2 left-2 text-[10px] text-gray-500">IMAGE_MISSING</div>
                                </div>
                                <div className="bg-[#2d2d2d] text-white p-3 rounded text-center border-2 border-gray-500">
                                    <div className="text-[10px] text-gray-400">TYPE</div>
                                    <div className="text-lg font-bold text-yellow-400">{projects[selected].type}</div>
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="flex-1 flex flex-col overflow-hidden">
                                <div className="flex justify-between items-end border-b-4 border-[#2d2d2d] pb-2 mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold">{projects[selected].name}</h2>
                                    <span className="text-sm text-gray-500 font-mono">No.{projects[selected].id}</span>
                                </div>

                                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6 text-sm leading-relaxed">
                                    <div>
                                        <h4 className="font-bold mb-1 text-blue-600">OVERVIEW</h4>
                                        <p className="text-gray-700">{projects[selected].overview}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-red-600">PROBLEM</h4>
                                        <p className="text-gray-700">{projects[selected].problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-green-600">GOALS</h4>
                                        <p className="text-gray-700">{projects[selected].goals}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-purple-600">STACK</h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {projects[selected].stack.map(tech => (
                                                <span key={tech} className="px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-between items-center text-white text-[10px] md:text-sm font-bold tracking-wider">
                <div className="flex gap-4">
                    <button onClick={() => mode === 'DETAIL' ? setMode('LIST') : onBack()} className="hover:text-yellow-300 transition-colors">
                        [ESC/B] {mode === 'DETAIL' ? 'BACK' : 'EXIT'}
                    </button>
                    {mode === 'LIST' && <span>[↑/↓] SCROLL • [A/ENTER] VIEW</span>}
                </div>
                <span>{mode === 'LIST' ? 'POKEDEX LIST' : 'ENTRY DATA'}</span>
            </div>
        </motion.div>
    );
};

export default PokedexView;
