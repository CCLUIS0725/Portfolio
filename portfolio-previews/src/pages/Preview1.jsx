import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Battery, Wifi, Signal, Monitor, Gamepad2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sound effects (simulated with visual feedback since we can't easily add audio assets yet)
// Colors:
// GB Green Dark: #0f380f
// GB Green Light: #8bac0f
// GB Green Medium: #306230
// GB Green Lightest: #9bbc0f

const RetroText = ({ children, className = "" }) => (
    <span className={`font-['Press_Start_2P'] ${className}`}>{children}</span>
);

const ScreenContainer = ({ children, className = "" }) => (
    <div className={`w-full h-full bg-[#f8f9fa] relative overflow-hidden font-['Press_Start_2P'] text-[#2d2d2d] ${className}`}>
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] opacity-20"></div>
        {children}
    </div>
);

export default function Preview1() {
    const [viewMode, setViewMode] = useState('GAMEBOY'); // 'GAMEBOY' or 'WEB'
    const [gameState, setGameState] = useState('START'); // START, MENU, POKEDEX, TRAINER, BAG
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    // Blink effect for "Press Start"
    useEffect(() => {
        if (gameState === 'START') {
            const interval = setInterval(() => {
                setTextVisible(v => !v);
            }, 600);
            return () => clearInterval(interval);
        }
    }, [gameState]);

    // Keyboard navigation
    useEffect(() => {
        if (viewMode !== 'GAMEBOY') return;

        const handleKeyDown = (e) => {
            if (gameState === 'START') {
                if (e.key === 'Enter' || e.key === ' ') {
                    setGameState('MENU');
                }
            } else if (gameState === 'MENU') {
                if (e.key === 'ArrowUp') {
                    setSelectedMenuIndex(prev => (prev > 0 ? prev - 1 : 3));
                } else if (e.key === 'ArrowDown') {
                    setSelectedMenuIndex(prev => (prev < 3 ? prev + 1 : 0));
                } else if (e.key === 'Enter' || e.key === ' ') {
                    const options = ['POKEDEX', 'TRAINER', 'BAG', 'EXIT'];
                    const selected = options[selectedMenuIndex];
                    if (selected === 'EXIT') setGameState('START');
                    else setGameState(selected);
                }
            } else {
                if (e.key === 'Escape' || e.key === 'Backspace') {
                    setGameState('MENU');
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameState, selectedMenuIndex, viewMode]);

    const menuItems = [
        { label: 'POKEDEX', desc: 'VIEW PROJECTS', state: 'POKEDEX' },
        { label: 'TRAINER', desc: 'ABOUT ME', state: 'TRAINER' },
        { label: 'BAG', desc: 'SKILLS & TOOLS', state: 'BAG' },
        { label: 'EXIT', desc: 'LOG OUT', state: 'START' },
    ];

    return (
        <div className="min-h-screen bg-[#202020] font-['Press_Start_2P'] relative">
            {/* View Toggle */}
            <div className="fixed top-4 right-4 z-[100] flex gap-2">
                <button
                    onClick={() => setViewMode('GAMEBOY')}
                    className={`p-3 rounded-full border-2 border-white transition-all ${viewMode === 'GAMEBOY' ? 'bg-yellow-400 text-black shadow-[0_0_10px_#facc15]' : 'bg-[#2d2d2d] text-white hover:bg-gray-700'}`}
                    title="Game Boy View"
                >
                    <Gamepad2 className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setViewMode('WEB')}
                    className={`p-3 rounded-full border-2 border-white transition-all ${viewMode === 'WEB' ? 'bg-blue-500 text-white shadow-[0_0_10px_#3b82f6]' : 'bg-[#2d2d2d] text-white hover:bg-gray-700'}`}
                    title="Web View"
                >
                    <Monitor className="w-6 h-6" />
                </button>
            </div>

            {viewMode === 'GAMEBOY' ? (
                <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
                    {/* Handheld Console Frame - Scaled Up */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full max-w-[1200px] aspect-[16/10] bg-[#e0e0e0] rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_-10px_20px_rgba(0,0,0,0.1)] p-6 md:p-12 flex flex-col"
                    >

                        {/* Top Bar (Power LED) */}
                        <div className="absolute top-6 left-12 flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_#ef4444] animate-pulse"></div>
                            <span className="text-xs font-bold text-gray-400 tracking-widest">BATTERY</span>
                        </div>

                        {/* Screen Bezel */}
                        <div className="flex-1 bg-[#505050] rounded-2xl p-6 md:p-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] flex flex-col relative">
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-bold tracking-[0.3em]">NINTENDO GAME BOY</div>

                            {/* LCD Screen */}
                            <div className="flex-1 bg-[#9bbc0f] rounded-lg overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] relative border-[6px] border-[#8bac0f]">
                                <ScreenContainer className="bg-[#f8f8f8] text-black">
                                    <AnimatePresence mode="wait">
                                        {gameState === 'START' && (
                                            <motion.div
                                                key="start"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 text-white"
                                            >
                                                <div className="mb-16 text-center">
                                                    <motion.h1
                                                        initial={{ y: -50 }}
                                                        animate={{ y: 0 }}
                                                        className="text-5xl md:text-8xl text-yellow-400 drop-shadow-[6px_6px_0_#1e40af] mb-6 tracking-tighter"
                                                    >
                                                        PORTFOLIO
                                                    </motion.h1>
                                                    <div className="text-2xl md:text-3xl text-blue-100 drop-shadow-md">VERSION 2024</div>
                                                </div>

                                                <div className="absolute bottom-32">
                                                    <div className={`text-xl md:text-3xl text-white drop-shadow-md ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
                                                        PRESS START
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-6 text-xs md:text-sm opacity-70">
                                                    ©2024 NINTENDO / CREATURES INC. / GAME FREAK INC.
                                                </div>
                                            </motion.div>
                                        )}

                                        {gameState === 'MENU' && (
                                            <motion.div
                                                key="menu"
                                                initial={{ x: '100%' }}
                                                animate={{ x: 0 }}
                                                exit={{ x: '-100%' }}
                                                className="w-full h-full bg-[#f8f8f8] flex"
                                            >
                                                {/* Left Side: Menu */}
                                                <div className="w-1/2 bg-[#2d2d2d] text-white p-12 flex flex-col justify-center relative">
                                                    <div className="absolute top-6 left-6 border-2 border-white rounded px-3 py-1 text-sm">
                                                        MENU
                                                    </div>
                                                    <ul className="space-y-8">
                                                        {menuItems.map((item, i) => (
                                                            <li
                                                                key={item.label}
                                                                className={`cursor-pointer flex items-center gap-6 transition-all ${selectedMenuIndex === i ? 'text-yellow-400 translate-x-6' : 'text-gray-400'}`}
                                                                onClick={() => {
                                                                    setSelectedMenuIndex(i);
                                                                    if (item.state === 'EXIT') setGameState('START');
                                                                    else setGameState(item.state);
                                                                }}
                                                                onMouseEnter={() => setSelectedMenuIndex(i)}
                                                            >
                                                                <div className={`w-6 h-6 border-4 ${selectedMenuIndex === i ? 'bg-yellow-400 border-yellow-400' : 'border-gray-600'}`}></div>
                                                                <span className="text-2xl md:text-4xl">{item.label}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Right Side: Description */}
                                                <div className="w-1/2 bg-white p-12 flex flex-col justify-center items-center text-center border-l-8 border-[#2d2d2d]">
                                                    <div className="w-48 h-48 bg-gray-200 mb-12 rounded-full flex items-center justify-center border-8 border-[#2d2d2d]">
                                                        {/* Dynamic Icon based on selection */}
                                                        {selectedMenuIndex === 0 && <div className="w-24 h-24 bg-red-500 rounded-full border-4 border-black"></div>}
                                                        {selectedMenuIndex === 1 && <div className="w-24 h-24 bg-blue-500 rounded-full border-4 border-black"></div>}
                                                        {selectedMenuIndex === 2 && <div className="w-24 h-24 bg-green-500 rounded-full border-4 border-black"></div>}
                                                        {selectedMenuIndex === 3 && <div className="w-24 h-24 bg-gray-500 rounded-full border-4 border-black"></div>}
                                                    </div>
                                                    <h3 className="text-3xl mb-6 text-[#2d2d2d]">{menuItems[selectedMenuIndex].label}</h3>
                                                    <p className="text-sm md:text-lg leading-loose text-gray-600">{menuItems[selectedMenuIndex].desc}</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {gameState === 'POKEDEX' && (
                                            <PokedexView onBack={() => setGameState('MENU')} />
                                        )}

                                        {gameState === 'TRAINER' && (
                                            <TrainerCard onBack={() => setGameState('MENU')} />
                                        )}

                                        {gameState === 'BAG' && (
                                            <BagView onBack={() => setGameState('MENU')} />
                                        )}
                                    </AnimatePresence>
                                </ScreenContainer>
                            </div>
                        </div>

                        {/* Controls Hint */}
                        <div className="mt-6 flex justify-between text-gray-500 text-sm font-mono uppercase">
                            <div className="flex gap-6">
                                <span>[↑/↓] Navigate</span>
                                <span>[ENTER] Select</span>
                                <span>[ESC] Back</span>
                            </div>
                            <div>
                                BATTERY: 100%
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <WebView />
            )}
        </div>
    );
}

const WebView = () => {
    return (
        <div className="bg-white text-[#2d2d2d] min-h-screen">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-red-600 text-white border-b-4 border-[#8b0000] p-4 flex justify-between items-center shadow-lg">
                <div className="text-xl flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-300 rounded-full border-2 border-white animate-pulse"></div>
                    PORTFOLIO_DEX
                </div>
                <div className="flex gap-6 text-xs md:text-sm">
                    <a href="#projects" className="hover:text-yellow-300">PROJECTS</a>
                    <a href="#about" className="hover:text-yellow-300">TRAINER</a>
                    <a href="#skills" className="hover:text-yellow-300">BAG</a>
                </div>
            </nav>

            {/* Hero */}
            <header className="bg-blue-600 text-white py-32 px-6 text-center border-b-8 border-[#1e40af] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-7xl mb-6 text-yellow-400 drop-shadow-[4px_4px_0_#1e3a8a]"
                >
                    ALEX'S PORTFOLIO
                </motion.h1>
                <p className="text-sm md:text-xl max-w-2xl mx-auto leading-loose">
                    A Junior UX/UI Designer & Developer ready to catch 'em all (bugs and design challenges).
                </p>
                <div className="mt-12 animate-bounce">
                    <span className="text-xs">SCROLL DOWN</span>
                </div>
            </header>

            {/* Projects (Pokedex Style) */}
            <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-black"></div>
                    <h2 className="text-3xl">POKEDEX ENTRIES</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { id: '001', name: 'ECO_TRACK', type: 'GRASS', color: 'bg-green-100 border-green-500 text-green-900' },
                        { id: '004', name: 'FIRE_CHAT', type: 'FIRE', color: 'bg-red-100 border-red-500 text-red-900' },
                        { id: '007', name: 'AQUA_DASH', type: 'WATER', color: 'bg-blue-100 border-blue-500 text-blue-900' },
                        { id: '025', name: 'VOLT_UI', type: 'ELECTRIC', color: 'bg-yellow-100 border-yellow-500 text-yellow-900' },
                    ].map((project) => (
                        <div key={project.id} className={`p-6 border-4 rounded-xl relative group hover:-translate-y-2 transition-transform ${project.color.replace('text', 'border').split(' ')[1]} bg-white shadow-[8px_8px_0_rgba(0,0,0,0.1)]`}>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs opacity-50">No.{project.id}</span>
                                <span className={`px-2 py-1 text-[10px] border-2 rounded ${project.color}`}>TYPE: {project.type}</span>
                            </div>
                            <h3 className="text-2xl mb-4">{project.name}</h3>
                            <div className="aspect-video bg-gray-100 border-4 border-gray-200 mb-4 flex items-center justify-center">
                                <span className="text-xs text-gray-400">IMAGE_MISSING</span>
                            </div>
                            <p className="text-xs leading-loose mb-6">
                                A specialized application designed for high efficiency and user engagement.
                            </p>
                            <Link to="/preview1/case-study" className="inline-flex items-center gap-2 text-xs hover:underline">
                                VIEW DATA <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* About (Trainer Card) */}
            <section id="about" className="py-20 px-6 bg-gray-100 border-y-4 border-gray-300">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-4 border-[#2d2d2d] rounded-xl p-8 shadow-[12px_12px_0_rgba(0,0,0,0.1)] -rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-[3/4] bg-gray-200 border-4 border-gray-300 flex items-center justify-center">
                                    TRAINER PHOTO
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl mb-2">TRAINER CARD</h2>
                                <div className="h-1 w-full bg-[#2d2d2d] mb-8"></div>

                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between border-b-2 border-gray-200 pb-2">
                                        <span>NAME</span>
                                        <span>ALEX</span>
                                    </div>
                                    <div className="flex justify-between border-b-2 border-gray-200 pb-2">
                                        <span>CLASS</span>
                                        <span>UX DESIGNER</span>
                                    </div>
                                    <div className="flex justify-between border-b-2 border-gray-200 pb-2">
                                        <span>EXP</span>
                                        <span>3 YEARS</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-xs mb-4">BADGES (CERTIFICATIONS)</h4>
                                    <div className="flex gap-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-2 border-black" title={`Badge ${i}`}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills (Bag) */}
            <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black"></div>
                    <h2 className="text-3xl">ITEM BAG</h2>
                </div>

                <div className="bg-[#f0f0f0] border-4 border-[#2d2d2d] rounded-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl mb-6 border-b-4 border-gray-300 pb-2">TECHNICAL MACHINES</h3>
                            <ul className="space-y-4 text-xs">
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-blue-50 cursor-pointer">
                                    <span>TM01: REACT</span>
                                    <span>x99</span>
                                </li>
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-blue-50 cursor-pointer">
                                    <span>TM02: TAILWIND</span>
                                    <span>x50</span>
                                </li>
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-blue-50 cursor-pointer">
                                    <span>TM03: TYPESCRIPT</span>
                                    <span>x75</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl mb-6 border-b-4 border-gray-300 pb-2">KEY ITEMS</h3>
                            <ul className="space-y-4 text-xs">
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-yellow-50 cursor-pointer">
                                    <span>FIGMA</span>
                                    <span>KEY</span>
                                </li>
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-yellow-50 cursor-pointer">
                                    <span>ADOBE XD</span>
                                    <span>KEY</span>
                                </li>
                                <li className="flex justify-between p-3 bg-white border-2 border-gray-200 rounded hover:bg-yellow-50 cursor-pointer">
                                    <span>BLENDER</span>
                                    <span>KEY</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#2d2d2d] text-white py-12 text-center text-xs">
                <p>© 2024 ALEX'S PORTFOLIO. INSPIRED BY NINTENDO.</p>
            </footer>
        </div>
    );
};

const PokedexView = ({ onBack }) => {
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

    const [selected, setSelected] = useState(0);

    // Keyboard navigation for Pokedex
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowUp') {
                setSelected(prev => (prev > 0 ? prev - 1 : projects.length - 1));
            } else if (e.key === 'ArrowDown') {
                setSelected(prev => (prev < projects.length - 1 ? prev + 1 : 0));
            } else if (e.key === 'Escape' || e.key === 'Backspace') {
                onBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onBack, projects.length]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-red-600 flex flex-col p-6"
        >
            <div className="bg-white border-4 border-[#2d2d2d] rounded-lg p-6 flex-1 flex gap-6 overflow-hidden">
                {/* List */}
                <div className="w-1/3 border-r-4 border-[#2d2d2d] pr-6 flex flex-col gap-4 overflow-y-auto">
                    {projects.map((p, i) => (
                        <div
                            key={p.id}
                            onClick={() => setSelected(i)}
                            className={`p-4 cursor-pointer text-sm flex justify-between ${selected === i ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                        >
                            <span>No.{p.id}</span>
                            <span>{p.name}</span>
                        </div>
                    ))}
                </div>

                {/* Detail (Case Study) */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="bg-gray-200 h-48 mb-6 border-4 border-[#2d2d2d] rounded flex items-center justify-center relative flex-shrink-0">
                        {/* Pixel Art Placeholder */}
                        <div className="w-24 h-24 bg-gray-400 animate-bounce"></div>
                        <div className="absolute top-4 left-4 text-xs">IMAGE_DATA_MISSING</div>
                    </div>

                    <div className="bg-[#2d2d2d] text-white p-6 rounded border-4 border-gray-400 flex-1 overflow-y-auto custom-scrollbar">
                        <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#2d2d2d] pb-2 border-b-2 border-gray-600">
                            <h3 className="text-2xl text-yellow-400">{projects[selected].name}</h3>
                            <div className="inline-block px-3 py-1 bg-white text-black text-xs rounded">
                                TYPE: {projects[selected].type}
                            </div>
                        </div>

                        <div className="space-y-6 text-sm leading-loose">
                            <div>
                                <h4 className="text-gray-400 text-xs mb-1">OVERVIEW</h4>
                                <p>{projects[selected].overview}</p>
                            </div>

                            <div>
                                <h4 className="text-gray-400 text-xs mb-1">THE PROBLEM</h4>
                                <p>{projects[selected].problem}</p>
                            </div>

                            <div>
                                <h4 className="text-gray-400 text-xs mb-1">GOALS</h4>
                                <p>{projects[selected].goals}</p>
                            </div>

                            <div>
                                <h4 className="text-gray-400 text-xs mb-1">TECH STACK</h4>
                                <div className="flex gap-2 flex-wrap">
                                    {projects[selected].stack.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t-2 border-gray-600 text-center">
                            <Link to="/preview1/case-study" className="text-blue-300 hover:text-blue-200 text-xs underline">
                                VIEW FULL REPORT (EXTERNAL)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-white text-sm">
                <div className="flex gap-4">
                    <button onClick={onBack} className="hover:underline">[ESC] BACK</button>
                    <span>[↑/↓] SCROLL LIST</span>
                </div>
                <span>POKEDEX MODE</span>
            </div>
        </motion.div>
    );
};

const TrainerCard = ({ onBack }) => (
    <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="w-full h-full bg-blue-100 p-12 flex flex-col items-center justify-center relative"
    >
        <div className="w-full max-w-2xl bg-white border-4 border-[#2d2d2d] rounded-xl p-8 shadow-xl rotate-1">
            <div className="flex justify-between items-end border-b-4 border-[#2d2d2d] pb-6 mb-8">
                <div>
                    <h2 className="text-4xl mb-2">TRAINER CARD</h2>
                    <div className="text-sm text-gray-500">IDNo. 12345</div>
                </div>
                <div className="text-2xl font-bold">NAME: ALEX</div>
            </div>

            <div className="flex gap-12">
                <div className="w-32 h-40 bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-xs">PHOTO</span>
                </div>
                <div className="flex-1 space-y-6 text-sm">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>MONEY</span>
                        <span>$999,999</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>POKEDEX</span>
                        <span>150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>TIME</span>
                        <span>99:59</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-6 border-t-4 border-[#2d2d2d] text-sm text-center text-gray-500">
                Gym Badges
                <div className="flex justify-center gap-4 mt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border border-black"></div>
                    ))}
                </div>
            </div>
        </div>
        <button onClick={onBack} className="absolute bottom-12 text-sm hover:underline">[ESC] BACK</button>
    </motion.div>
);

const BagView = ({ onBack }) => (
    <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        className="w-full h-full bg-[#f0f0f0] flex"
    >
        <div className="w-1/3 bg-[#4a90e2] text-white p-6 border-r-4 border-[#2d2d2d] flex flex-col items-center pt-16">
            <div className="w-32 h-32 bg-white/20 rounded-full mb-6 border-4 border-white flex items-center justify-center">
                BAG
            </div>
            <div className="text-center text-sm space-y-4 mt-6">
                <div className="bg-[#2d2d2d] px-6 py-3 rounded">ITEMS</div>
                <div className="opacity-50">KEY ITEMS</div>
                <div className="opacity-50">POKEBALLS</div>
            </div>
        </div>
        <div className="flex-1 p-12 bg-white">
            <h2 className="text-3xl mb-8 border-b-4 border-gray-200 pb-4">ITEMS POCKET</h2>
            <ul className="space-y-6 text-sm">
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        REACT.JS
                    </span>
                    <span>x99</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        TAILWIND
                    </span>
                    <span>x50</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        JAVASCRIPT
                    </span>
                    <span>x75</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        NODE.JS
                    </span>
                    <span>x20</span>
                </li>
            </ul>
            <div className="mt-12 p-6 bg-gray-100 rounded border-2 border-gray-300 text-xs">
                A JavaScript library for building user interfaces. Highly effective.
            </div>
        </div>
        <button onClick={onBack} className="absolute bottom-6 right-6 text-sm hover:underline">[ESC] BACK</button>
    </motion.div>
);
