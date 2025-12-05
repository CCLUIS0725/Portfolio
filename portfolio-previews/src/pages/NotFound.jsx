import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-10 text-center max-w-2xl border border-green-500/50 bg-black/80 p-8 md:p-12 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.2)] backdrop-blur-sm"
            >
                <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mb-6"
                >
                    <AlertTriangle size={64} className="text-red-500" />
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-bold mb-4 glitch-text relative inline-block" data-text="404">
                    404
                </h1>

                <div className="h-px w-full bg-green-500/50 my-6"></div>

                <h2 className="text-xl md:text-2xl mb-4 text-white">SIGNAL LOST</h2>
                <p className="text-green-400/80 mb-8 text-sm md:text-base leading-relaxed">
                    The requested coordinates do not exist in this sector.
                    <br />
                    The page you are looking for might have been moved, deleted, or never existed.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-900/20 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 uppercase tracking-widest font-bold group"
                >
                    <Home size={18} className="group-hover:scale-110 transition-transform" />
                    Return to Base
                </Link>

                <div className="mt-8 text-[10px] text-green-500/40">
                    ERROR_CODE: PAGE_NOT_FOUND // SYSTEM_HALTED
                </div>
            </motion.div>

            {/* Glitch CSS */}
            <style>{`
                .glitch-text::before,
                .glitch-text::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .glitch-text::before {
                    left: 2px;
                    text-shadow: -1px 0 #ff00c1;
                    clip: rect(44px, 450px, 56px, 0);
                    animation: glitch-anim 5s infinite linear alternate-reverse;
                }
                .glitch-text::after {
                    left: -2px;
                    text-shadow: -1px 0 #00fff9;
                    clip: rect(44px, 450px, 56px, 0);
                    animation: glitch-anim2 5s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim {
                    0% { clip: rect(35px, 9999px, 11px, 0); }
                    20% { clip: rect(78px, 9999px, 96px, 0); }
                    40% { clip: rect(12px, 9999px, 55px, 0); }
                    60% { clip: rect(66px, 9999px, 23px, 0); }
                    80% { clip: rect(4px, 9999px, 81px, 0); }
                    100% { clip: rect(92px, 9999px, 39px, 0); }
                }
                @keyframes glitch-anim2 {
                    0% { clip: rect(15px, 9999px, 61px, 0); }
                    20% { clip: rect(48px, 9999px, 26px, 0); }
                    40% { clip: rect(82px, 9999px, 15px, 0); }
                    60% { clip: rect(6px, 9999px, 73px, 0); }
                    80% { clip: rect(54px, 9999px, 91px, 0); }
                    100% { clip: rect(22px, 9999px, 49px, 0); }
                }
            `}</style>
        </div>
    );
};

export default NotFound;
