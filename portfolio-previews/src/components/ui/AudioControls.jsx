import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Pause, Play, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../../utils/soundEngine';

const AudioControls = ({ className = '', isDimmed = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(soundEngine.isMuted);
    const [isMusicPaused, setIsMusicPaused] = useState(soundEngine.isMusicPaused);

    // If modal is open, we are definitely interacting, so don't dim
    const showDimmed = isDimmed && !isOpen;

    useEffect(() => {
        setIsMuted(soundEngine.isMuted);
        setIsMusicPaused(soundEngine.isMusicPaused);
    }, [isOpen]); // Refresh state when opening

    const toggleMute = () => {
        soundEngine.toggleMute();
        setIsMuted(soundEngine.isMuted);
    };

    const toggleMusic = () => {
        soundEngine.toggleMusicPause();
        setIsMusicPaused(soundEngine.isMusicPaused);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                id="intro-audio-btn"
                onClick={() => setIsOpen(true)}
                className={`p-3 backdrop-blur-md border rounded-full transition-all shadow-lg group ${className} ${showDimmed
                        ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400 opacity-50 hover:opacity-100 scale-90'
                        : 'bg-black/40 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110'
                    }`}
                title="Audio Settings"
            >
                <Music size={24} className={showDimmed ? "" : "group-hover:animate-pulse"} />
            </button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[301] flex items-center justify-center px-4">
                        {/* Dimmed Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-neutral-900 border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                                <Settings className="text-blue-500" /> Audio Settings
                            </h2>

                            <div className="space-y-6">
                                {/* Music Control */}
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${!isMusicPaused ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/50'}`}>
                                            <Music size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Background Music</h3>
                                            <p className="text-xs text-white/50">{isMusicPaused ? 'Paused' : 'Playing'}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={toggleMusic}
                                        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        {isMusicPaused ? <Play size={24} /> : <Pause size={24} />}
                                    </button>
                                </div>

                                {/* SFX Control */}
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${!isMuted ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Sound Effects</h3>
                                            <p className="text-xs text-white/50">{isMuted ? 'Muted' : 'Active'}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={toggleMute}
                                        className={`p-3 rounded-full transition-colors ${isMuted ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-white/10 hover:bg-white/20'}`}
                                    >
                                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-xs text-white/30 uppercase tracking-widest">Sound Engine v1.0</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AudioControls;
