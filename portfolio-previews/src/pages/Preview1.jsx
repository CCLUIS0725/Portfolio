import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Battery, Wifi, Signal, Monitor, Gamepad2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useUISound from '../hooks/useUISound';
import RetroText from '../components/preview1/RetroText';

import ScreenContainer from '../components/preview1/ScreenContainer';
import PokedexView from '../components/preview1/PokedexView';
import TrainerCard from '../components/preview1/TrainerCard';
import BagView from '../components/preview1/BagView';
import SEO from '../components/SEO';

// Sound effects (simulated with visual feedback since we can't easily add audio assets yet)
// Colors:
// GBA Purple: #453C5C (Body)
// GBA Grey: #A0A0A0 (Buttons)
// GBA Screen Border: #2D2D2D



export default function Preview1() {
    const [viewMode, setViewMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 768 ? 'WEB' : 'GAMEBOY';
        }
        return 'GAMEBOY';
    });

    const { playHover, playClick } = useUISound();

    const [gameState, setGameState] = useState('START'); // START, MENU, POKEDEX, TRAINER, BAG
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    // Pokedex state needs to be lifted up to be controllable from main component
    const [pokedexIndex, setPokedexIndex] = useState(0);
    const [pokedexMode, setPokedexMode] = useState('LIST'); // 'LIST' or 'DETAIL'
    const pokedexProjectsCount = 4; // Hardcoded for now based on data

    // Blink effect for "Press Start"
    useEffect(() => {
        if (gameState === 'START') {
            const interval = setInterval(() => {
                setTextVisible(v => !v);
            }, 600);
            return () => clearInterval(interval);
        }
    }, [gameState]);

    // Navigation Logic
    const handleUp = useCallback(() => {
        playClick();
        if (gameState === 'MENU') {
            setSelectedMenuIndex(prev => (prev > 0 ? prev - 1 : 3));
        } else if (gameState === 'POKEDEX' && pokedexMode === 'LIST') {
            setPokedexIndex(prev => (prev > 0 ? prev - 1 : pokedexProjectsCount - 1));
        }
    }, [gameState, pokedexMode, playClick]);


    const handleDown = useCallback(() => {
        playClick();
        if (gameState === 'MENU') {
            setSelectedMenuIndex(prev => (prev < 3 ? prev + 1 : 0));
        } else if (gameState === 'POKEDEX' && pokedexMode === 'LIST') {
            setPokedexIndex(prev => (prev < pokedexProjectsCount - 1 ? prev + 1 : 0));
        }
    }, [gameState, pokedexMode, playClick]);


    const handleA = useCallback(() => {
        playClick();
        if (gameState === 'START') {
            setGameState('MENU');
        } else if (gameState === 'MENU') {
            const options = ['POKEDEX', 'TRAINER', 'BAG', 'EXIT'];
            const selected = options[selectedMenuIndex];
            if (selected === 'EXIT') setGameState('START');
            else setGameState(selected);
        } else if (gameState === 'POKEDEX' && pokedexMode === 'LIST') {
            setPokedexMode('DETAIL');
        }
    }, [gameState, selectedMenuIndex, pokedexMode, playClick]);


    const handleB = useCallback(() => {
        playClick();
        if (gameState === 'POKEDEX' && pokedexMode === 'DETAIL') {
            setPokedexMode('LIST');
        } else if (gameState !== 'START' && gameState !== 'MENU') {
            setGameState('MENU');
            setPokedexMode('LIST'); // Reset pokedex mode when exiting
        } else if (gameState === 'MENU') {
            setGameState('START');
        }
    }, [gameState, pokedexMode, playClick]);


    // Keyboard navigation
    useEffect(() => {
        if (viewMode !== 'GAMEBOY') return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowUp') handleUp();
            else if (e.key === 'ArrowDown') handleDown();
            else if (e.key === 'Enter' || e.key === ' ') handleA();
            else if (e.key === 'Escape' || e.key === 'Backspace') handleB();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [viewMode, handleUp, handleDown, handleA, handleB]);

    const menuItems = [
        { label: 'POKEDEX', desc: 'VIEW PROJECTS', state: 'POKEDEX' },
        { label: 'TRAINER', desc: 'ABOUT ME', state: 'TRAINER' },
        { label: 'BAG', desc: 'SKILLS & TOOLS', state: 'BAG' },
        { label: 'EXIT', desc: 'LOG OUT', state: 'START' },
    ];

    return (
        <div className="min-h-screen bg-[#202020] font-['Press_Start_2P'] relative">
            <SEO title="Game Boy Portfolio" description="A retro Game Boy Advance styled portfolio." />
            {/* View Toggle */}
            <div className="fixed top-4 right-4 z-[100] flex gap-2">
                <button
                    onClick={() => { setViewMode('GAMEBOY'); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-full border-2 border-white transition-all ${viewMode === 'GAMEBOY' ? 'bg-yellow-400 text-black shadow-[0_0_10px_#facc15]' : 'bg-[#2d2d2d] text-white hover:bg-gray-700'}`}
                    title="Game Boy View"
                >
                    <Gamepad2 className="w-6 h-6" />
                </button>

                <button
                    onClick={() => { setViewMode('WEB'); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-full border-2 border-white transition-all ${viewMode === 'WEB' ? 'bg-blue-500 text-white shadow-[0_0_10px_#3b82f6]' : 'bg-[#2d2d2d] text-white hover:bg-gray-700'}`}
                    title="Web View"
                >
                    <Monitor className="w-6 h-6" />
                </button>

            </div>

            {viewMode === 'GAMEBOY' ? (
                <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
                    {/* GBA Console Frame */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full max-w-[1200px] bg-[#e0e0e0] rounded-[40px] md:rounded-[60px] shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_-10px_20px_rgba(0,0,0,0.1)] p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8"
                    >
                        {/* Left Controls (D-Pad) */}
                        <div className="hidden md:flex flex-col items-center justify-center w-32 shrink-0 gap-12">
                            {/* D-Pad */}
                            <div className="relative w-28 h-28">
                                <div
                                    className="absolute top-0 left-1/3 w-1/3 h-full bg-[#505050] rounded shadow-[2px_2px_0_rgba(0,0,0,0.3)]"
                                ></div>
                                <div
                                    className="absolute top-1/3 left-0 w-full h-1/3 bg-[#505050] rounded shadow-[2px_2px_0_rgba(0,0,0,0.3)]"
                                ></div>
                                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-[#404040] rounded-full radial-gradient pointer-events-none"></div>

                                {/* Clickable Areas Overlay for better touch targets */}
                                {/* Clickable Areas Overlay for better touch targets */}
                                {/* Clickable Areas Overlay for better touch targets */}
                                <button type="button" aria-label="D-Pad Up" onMouseEnter={playHover} className="absolute top-0 left-1/3 w-1/3 h-1/3 cursor-pointer hover:bg-white/10 appearance-none border-none bg-transparent" onClick={handleUp} title="UP"></button>
                                <button type="button" aria-label="D-Pad Down" onMouseEnter={playHover} className="absolute bottom-0 left-1/3 w-1/3 h-1/3 cursor-pointer hover:bg-white/10 appearance-none border-none bg-transparent" onClick={handleDown} title="DOWN"></button>
                                <button type="button" aria-label="D-Pad Left" onMouseEnter={playHover} className="absolute top-1/3 left-0 w-1/3 h-1/3 cursor-pointer hover:bg-white/10 appearance-none border-none bg-transparent" title="LEFT"></button>
                                <button type="button" aria-label="D-Pad Right" onMouseEnter={playHover} className="absolute top-1/3 right-0 w-1/3 h-1/3 cursor-pointer hover:bg-white/10 appearance-none border-none bg-transparent" title="RIGHT"></button>


                                {/* Arrows */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#303030] pointer-events-none"></div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#303030] pointer-events-none"></div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#303030] pointer-events-none"></div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#303030] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Center Screen Area */}
                        <div className="flex-1 w-full flex flex-col items-center">
                            {/* Top Logo */}
                            <div className="text-gray-400 text-[10px] font-bold tracking-[0.2em] mb-1 italic">NINTENDO GAME BOY ADVANCE</div>

                            {/* Screen Bezel */}
                            <div className="w-full bg-[#303030] rounded-t-xl rounded-b-[30px] p-3 md:p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative">
                                {/* Power LED */}
                                <div className="absolute top-1/2 -left-2 -translate-y-1/2 flex flex-col items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse"></div>
                                    <span className="text-[6px] font-bold text-gray-500 -rotate-90">BATT</span>
                                </div>

                                {/* LCD Screen */}
                                <div className="w-full aspect-[16/10] bg-[#9bbc0f] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] relative border-2 border-[#202020]">
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
                                                    <div className="mb-8 md:mb-12 text-center">
                                                        <motion.h1
                                                            initial={{ y: -50 }}
                                                            animate={{ y: 0 }}
                                                            className="text-3xl md:text-6xl lg:text-7xl text-yellow-400 drop-shadow-[4px_4px_0_#1e40af] mb-4 tracking-tighter"
                                                        >
                                                            PORTFOLIO
                                                        </motion.h1>
                                                        <div className="text-sm md:text-2xl text-blue-100 drop-shadow-md">VERSION 2024</div>
                                                    </div>

                                                    <div className="absolute bottom-12 md:bottom-20">
                                                        <div className={`text-lg md:text-3xl text-white drop-shadow-md ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
                                                            PRESS START
                                                        </div>
                                                    </div>

                                                    <div className="absolute bottom-2 text-[8px] md:text-xs opacity-70 text-center px-4">
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
                                                    className="w-full h-full bg-[#f8f8f8] flex flex-col md:flex-row"
                                                >
                                                    {/* Left Side: Menu */}
                                                    <div className="w-full md:w-1/2 bg-[#2d2d2d] text-white p-4 md:p-8 flex flex-col justify-center relative shrink-0">
                                                        <div className="absolute top-2 left-2 md:top-4 md:left-4 border border-white rounded px-2 py-0.5 text-[10px]">
                                                            MENU
                                                        </div>
                                                        <ul className="space-y-3 md:space-y-6 mt-6 md:mt-0">
                                                            {menuItems.map((item, i) => (
                                                                <li
                                                                    key={item.label}
                                                                    className={`cursor-pointer flex items-center gap-3 md:gap-4 transition-all ${selectedMenuIndex === i ? 'text-yellow-400 translate-x-2 md:translate-x-4' : 'text-gray-400'}`}
                                                                    onClick={() => {
                                                                        playClick();
                                                                        setSelectedMenuIndex(i);
                                                                        if (item.state === 'EXIT') setGameState('START');
                                                                        else setGameState(item.state);
                                                                    }}
                                                                    onMouseEnter={() => {
                                                                        playHover();
                                                                        setSelectedMenuIndex(i);
                                                                    }}

                                                                >
                                                                    <div className={`w-3 h-3 md:w-4 md:h-4 border-2 ${selectedMenuIndex === i ? 'bg-yellow-400 border-yellow-400' : 'border-gray-600'}`}></div>
                                                                    <span className="text-sm md:text-2xl">{item.label}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Right Side: Description */}
                                                    <div className="w-full md:w-1/2 bg-white p-4 md:p-8 flex flex-col justify-center items-center text-center border-t-4 md:border-t-0 md:border-l-4 border-[#2d2d2d]">
                                                        <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-200 mb-4 md:mb-8 rounded-full flex items-center justify-center border-4 border-[#2d2d2d]">
                                                            {/* Dynamic Icon based on selection */}
                                                            {selectedMenuIndex === 0 && <div className="w-10 h-10 md:w-16 md:h-16 bg-red-500 rounded-full border-2 border-black"></div>}
                                                            {selectedMenuIndex === 1 && <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-500 rounded-full border-2 border-black"></div>}
                                                            {selectedMenuIndex === 2 && <div className="w-10 h-10 md:w-16 md:h-16 bg-green-500 rounded-full border-2 border-black"></div>}
                                                            {selectedMenuIndex === 3 && <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-500 rounded-full border-2 border-black"></div>}
                                                        </div>
                                                        <h3 className="text-lg md:text-xl mb-2 md:mb-4 text-[#2d2d2d]">{menuItems[selectedMenuIndex].label}</h3>
                                                        <p className="text-[10px] md:text-sm leading-relaxed text-gray-600">{menuItems[selectedMenuIndex].desc}</p>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {gameState === 'POKEDEX' && (
                                                <PokedexView
                                                    onBack={() => setGameState('MENU')}
                                                    selectedIndex={pokedexIndex}
                                                    setSelectedIndex={setPokedexIndex}
                                                    mode={pokedexMode}
                                                    setMode={setPokedexMode}
                                                />
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

                                {/* Bottom Branding */}
                                <div className="mt-1 text-center">
                                    <span className="text-[#505050] text-[8px] font-bold tracking-widest">GAME BOY ADVANCE</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Controls (A/B Buttons) */}
                        <div className="hidden md:flex flex-col items-center justify-center w-32 shrink-0 gap-8 pt-12">
                            <div className="flex gap-4 rotate-[-15deg]">
                                <div className="flex flex-col items-center gap-1 mt-8">
                                    <button
                                        type="button"
                                        aria-label="B Button"
                                        className="w-14 h-14 bg-[#A0A0A0] rounded-full shadow-[0_4px_0_#707070] active:translate-y-1 active:shadow-none transition-all cursor-pointer hover:bg-[#B0B0B0] flex items-center justify-center appearance-none border-none p-0"
                                        onClick={handleB}
                                        onMouseEnter={playHover}
                                    ></button>

                                    <span className="text-gray-400 text-xs font-bold">B</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 -mt-4">
                                    <button
                                        type="button"
                                        aria-label="A Button"
                                        className="w-14 h-14 bg-[#A0A0A0] rounded-full shadow-[0_4px_0_#707070] active:translate-y-1 active:shadow-none transition-all cursor-pointer hover:bg-[#B0B0B0] flex items-center justify-center appearance-none border-none p-0"
                                        onClick={handleA}
                                        onMouseEnter={playHover}
                                    ></button>

                                    <span className="text-gray-400 text-xs font-bold">A</span>
                                </div>
                            </div>

                            {/* Start/Select */}
                            <div className="flex gap-4 mt-8">
                                <div className="flex flex-col items-center gap-1">
                                    <button type="button" aria-label="Select Button" className="w-12 h-3 bg-[#707070] rounded-full shadow-[0_1px_0_rgba(255,255,255,0.2)] transform rotate-12 cursor-pointer active:translate-y-[1px] appearance-none border-none p-0"></button>
                                    <span className="text-[8px] text-gray-400 font-bold tracking-wider mt-1">SELECT</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        type="button"
                                        aria-label="Start Button"
                                        className="w-12 h-3 bg-[#707070] rounded-full shadow-[0_1px_0_rgba(255,255,255,0.2)] transform rotate-12 cursor-pointer active:translate-y-[1px] appearance-none border-none p-0"
                                        onClick={handleA} // Start acts as A/Enter for simplicity usually
                                        onMouseEnter={playHover}
                                    ></button>

                                    <span className="text-[8px] text-gray-400 font-bold tracking-wider mt-1">START</span>
                                </div>
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


