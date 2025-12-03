import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MessageCircle, Star, Layout, Code, Smartphone, Menu, Mail, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

// --- Comic Components ---

const WobblyButton = ({ children, className = "", onClick, color = "bg-yellow-400" }) => (
    <motion.button
        whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`relative px-6 py-2 font-black uppercase tracking-wider border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${color} ${className}`}
        style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px'
        }}
    >
        {children}
    </motion.button>
);

const BurstButton = ({ children, className = "", onClick }) => (
    <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={`relative px-8 py-4 font-black uppercase tracking-widest text-white bg-red-600 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${className}`}
        style={{
            clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
        }}
    >
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        <span className="relative z-10 flex items-center gap-2">
            <Zap size={20} className="fill-yellow-400 text-black" />
            {children}
        </span>
    </motion.button>
);

const SpeechBubble = ({ children, className = "", tailPosition = "bottom-left" }) => (
    <div className={`bg-white border-4 border-black p-4 rounded-[2rem] relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
        {children}
        <div className={`absolute w-6 h-6 bg-white border-r-4 border-b-4 border-black transform rotate-45 
            ${tailPosition === 'bottom-left' ? '-bottom-3 left-8' : ''}
            ${tailPosition === 'bottom-right' ? '-bottom-3 right-8' : ''}
            ${tailPosition === 'top-left' ? '-top-3 left-8 border-r-0 border-b-0 border-l-4 border-t-4' : ''}
        `}></div>
    </div>
);

// --- Layout Components ---

const PanelContent = ({ children, className = "", bg = "bg-white" }) => (
    <div className={`w-full h-full ${bg} p-8 flex flex-col justify-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
            backgroundSize: '16px 16px'
        }}></div>
        <div className="relative z-10 w-full h-full flex flex-col">
            {children}
        </div>
    </div>
);

const JaggedRow = ({ left, right, split = "diagonal", height = "h-96" }) => {
    const getClipPaths = () => {
        switch (split) {
            case 'zigzag':
                return {
                    left: 'polygon(0 0, 65% 0, 45% 35%, 65% 65%, 40% 100%, 0 100%)',
                    right: 'polygon(66% 0, 100% 0, 100% 100%, 41% 100%, 66% 65%, 46% 35%)'
                };
            case 'steep':
                return {
                    left: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)',
                    right: 'polygon(41% 0, 100% 0, 100% 100%, 61% 100%)'
                };
            case 'diagonal':
            default:
                return {
                    left: 'polygon(0 0, 70% 0, 50% 100%, 0 100%)',
                    right: 'polygon(71% 0, 100% 0, 100% 100%, 51% 100%)'
                };
        }
    };

    const clips = getClipPaths();

    return (
        <div className={`relative w-full ${height} bg-black border-b-4 border-black last:border-b-0 overflow-hidden flex`}>
            <div className="absolute inset-0 bg-white" style={{ clipPath: clips.left, zIndex: 1 }}>{left}</div>
            <div className="absolute inset-0 bg-white" style={{ clipPath: clips.right, zIndex: 1 }}>{right}</div>
        </div>
    );
};

const TripleSlantRow = ({ items, height = "h-96" }) => {
    return (
        <div className={`relative w-full ${height} bg-black border-b-4 border-black last:border-b-0 overflow-hidden flex`}>
            {/* Floating Title Bubble - Normal Rectangular Shape */}
            <div className="absolute top-6 left-12 z-20">
                <div className="bg-white border-4 border-black px-8 py-4 transform -rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
                    <h3 className="font-['Bangers'] text-4xl tracking-wider text-black">SUPER PROJECTS</h3>
                    {/* Triangle Tail */}
                    <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-black"></div>
                    <div className="absolute -bottom-[10px] left-[34px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[16px] border-t-white"></div>
                </div>
            </div>

            {/* Panel 1 */}
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 35% 0, 25% 100%, 0 100%)', zIndex: 1 }}>
                {items[0]}
            </div>
            {/* Panel 2 */}
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(36% 0, 70% 0, 60% 100%, 26% 100%)', zIndex: 1 }}>
                {items[1]}
            </div>
            {/* Panel 3 */}
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(71% 0, 100% 0, 100% 100%, 61% 100%)', zIndex: 1 }}>
                {items[2]}
            </div>
        </div>
    );
};

export default function Preview4() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div className="min-h-screen bg-slate-200 font-['Comic_Neue'] p-2 md:p-4 flex justify-center items-center">

            {/* Comic Page Container */}
            <div className="w-full max-w-[95%] bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">

                {/* ROW 1: Intro & Hero */}
                <JaggedRow
                    height="h-[600px]"
                    split="diagonal"
                    left={
                        <PanelContent bg="bg-cyan-300">
                            <div className="h-full flex flex-col justify-center max-w-2xl">
                                <SpeechBubble className="mb-8 w-fit animate-bounce-slow">
                                    <span className="font-black text-2xl">HEY CITIZEN! 👋</span>
                                </SpeechBubble>
                                <h2 className="font-['Bangers'] text-6xl md:text-7xl mb-4 leading-none">I AM LUIS.DEV</h2>
                                <p className="font-bold text-2xl mb-8">
                                    Crafting digital experiences with super-human precision!
                                </p>
                                <div className="flex gap-4">
                                    <WobblyButton color="bg-white">DOWNLOAD CV</WobblyButton>
                                </div>
                            </div>
                        </PanelContent>
                    }
                    right={
                        <PanelContent bg="bg-yellow-400" className="items-end text-right">
                            <div className="h-full flex flex-col justify-center items-end pl-[30%]">
                                <h1 className="font-['Bangers'] text-[8rem] md:text-[10rem] text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] stroke-black leading-[0.8]" style={{ WebkitTextStroke: '4px black' }}>
                                    CREATIVE<br />DEVELOPER
                                </h1>
                                <div className="mt-12 transform rotate-6">
                                    <BurstButton>VIEW PROJECTS</BurstButton>
                                </div>
                            </div>
                            {/* Floating Zap */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-10 right-1/3"
                            >
                                <Zap size={80} className="text-black fill-white" />
                            </motion.div>
                        </PanelContent>
                    }
                />

                {/* ROW 2: Projects (Triple Slant) */}
                <TripleSlantRow
                    height="h-[500px]"
                    items={[
                        <PanelContent bg="bg-red-500" className="items-center justify-center text-center group cursor-pointer hover:bg-red-600 transition-colors pt-24">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Layout size={64} className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                            </div>
                            <h3 className="font-['Bangers'] text-5xl text-white mb-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">NEON DASHBOARD</h3>
                            <span className="text-white font-black uppercase text-lg tracking-wider">Fintech App</span>
                        </PanelContent>,

                        <PanelContent bg="bg-blue-500" className="items-center justify-center text-center group cursor-pointer hover:bg-blue-600 transition-colors pt-24">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Smartphone size={64} className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                            </div>
                            <h3 className="font-['Bangers'] text-5xl text-white mb-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">SUPER APP</h3>
                            <span className="text-white font-black uppercase text-lg tracking-wider">Mobile UI</span>
                        </PanelContent>,

                        <PanelContent bg="bg-green-500" className="items-center justify-center text-center group cursor-pointer hover:bg-green-600 transition-colors pt-24">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Code size={64} className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                            </div>
                            <h3 className="font-['Bangers'] text-5xl text-white mb-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">CODE ACADEMY</h3>
                            <span className="text-white font-black uppercase text-lg tracking-wider">EdTech Platform</span>
                        </PanelContent>
                    ]}
                />

                {/* ROW 3: Skills & Mission (ZigZag) */}
                <JaggedRow
                    height="h-[400px]"
                    split="zigzag"
                    left={
                        <PanelContent bg="bg-pink-400">
                            <div className="h-full flex flex-col justify-center pl-8 max-w-xl">
                                <div className="bg-white border-4 border-black p-2 inline-block transform -rotate-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
                                    <h3 className="font-['Bangers'] text-3xl">POWERS & ABILITIES</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['REACT', 'TYPESCRIPT', 'UI/UX', 'MOTION', 'NODE.JS', 'FIGMA'].map(skill => (
                                        <span key={skill} className="bg-white border-2 border-black px-4 py-2 font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </PanelContent>
                    }
                    right={
                        <PanelContent bg="bg-white" className="items-center text-center">
                            {/* Align to RIGHT to clear zigzag safely */}
                            <div className="h-full flex flex-col justify-center items-end text-right pr-16 w-full">
                                <Star size={64} className="text-yellow-400 fill-current mb-4 animate-spin-slow" />
                                <h3 className="font-['Bangers'] text-6xl mb-2">LATEST MISSION</h3>
                                <p className="font-bold text-xl mb-6 max-w-md">
                                    Building the ultimate design system for the web!
                                </p>
                                <Link to="/preview4/case-study" className="font-black underline decoration-4 decoration-red-500 underline-offset-4 hover:text-red-500 text-2xl">
                                    READ ISSUE #1
                                </Link>
                            </div>
                        </PanelContent>
                    }
                />

                {/* ROW 4: Contact & Socials */}
                <JaggedRow
                    height="h-[300px]"
                    split="diagonal"
                    left={
                        <PanelContent bg="bg-white">
                            <div className="h-full flex flex-col justify-center max-w-2xl">
                                <h3 className="font-['Bangers'] text-5xl mb-6">JOIN THE LEAGUE</h3>
                                <div className="flex gap-2 w-full">
                                    <input type="email" placeholder="YOUR EMAIL" className="border-4 border-black p-4 font-bold flex-grow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xl" />
                                    <button className="bg-black text-white border-4 border-black px-8 font-black hover:bg-slate-800 text-xl">GO</button>
                                </div>
                            </div>
                        </PanelContent>
                    }
                    right={
                        <PanelContent bg="bg-red-500" className="items-center justify-center">
                            {/* Align to RIGHT to clear diagonal safely */}
                            <div className="h-full flex flex-col justify-center items-end pr-16 w-full">
                                <h3 className="font-['Bangers'] text-6xl text-white mb-8 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">SEND A SIGNAL</h3>
                                <div className="flex gap-6">
                                    {[Twitter, Youtube, Facebook, Instagram].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                        >
                                            <Icon size={32} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </PanelContent>
                    }
                />

            </div>
        </div>
    );
}
