import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MousePointer2, Keyboard, Music, VolumeX, Hand } from 'lucide-react';

const TutorialOverlay = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [spotlightStyle, setSpotlightStyle] = useState({});
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate spotlight position based on target elements
    useLayoutEffect(() => {
        const updateSpotlight = () => {
            let targetId = '';
            if (step === 1) targetId = 'intro-nav-container';
            if (step === 2) targetId = 'intro-init-button';
            if (step === 3) targetId = 'intro-audio-btn';

            const element = document.getElementById(targetId);

            if (element) {
                const rect = element.getBoundingClientRect();
                const padding = 16;

                setSpotlightStyle({
                    top: rect.top - padding,
                    left: rect.left - padding,
                    width: rect.width + (padding * 2),
                    height: rect.height + (padding * 2),
                    borderRadius: '50%', // Circular for audio, rounded rect for others?
                    opacity: 1
                });

                // Override for non-circular buttons if needed
                if (step !== 3) {
                    setSpotlightStyle(prev => ({ ...prev, borderRadius: '16px' }));
                }

            } else if (step === 4) {
                // Center for controls
                setSpotlightStyle({
                    top: '50%',
                    left: '50%',
                    width: 0,
                    height: 0,
                    opacity: 1,
                    transform: 'translate(-50%, -50%)'
                });
            }
        };

        updateSpotlight();
        window.addEventListener('resize', updateSpotlight);

        return () => {
            window.removeEventListener('resize', updateSpotlight);
        };
    }, [step, windowSize]);

    const handleNext = () => {
        if (step < 4) {
            setStep(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="fixed inset-0 z-[200] pointer-events-auto overflow-hidden">

            {/* Spotlight Element (The "Hole") */}
            <motion.div
                className="absolute pointer-events-none z-[201]"
                initial={{ opacity: 0 }}
                animate={{
                    ...spotlightStyle,
                    boxShadow: '0 0 0 9999px rgba(0,0,0,0.85)'
                }}
                transition={{ duration: 0 }}
            />

            {/* Step 4 Background (Full Dim) */}
            {step === 4 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/85 z-[201]"
                />
            )}

            <div className="relative z-[202] w-full h-full flex flex-col pointer-events-none">

                {/* Step 1: Navigation Buttons (Bottom Right) */}
                <AnimatePresence>
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute flex flex-col items-end gap-4 pointer-events-auto"
                            style={{
                                top: (spotlightStyle.top || 0) - 180,
                                left: (spotlightStyle.left || 0) + (spotlightStyle.width || 0) - 300
                            }}
                        >
                            <div className="bg-white text-black p-6 rounded-xl shadow-2xl max-w-sm text-right relative">
                                <div className="absolute -bottom-3 right-12 w-6 h-6 bg-white rotate-45"></div>
                                <h3 className="text-xl font-bold mb-2 flex items-center justify-end gap-2">
                                    Navigation <MousePointer2 size={24} />
                                </h3>
                                <p>Click on these buttons to navigate the interfaces.</p>
                            </div>
                            <div className="animate-bounce mt-2 mr-16">
                                <ArrowRight className="rotate-90 text-white w-12 h-12" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step 2: Initialize Button (Left Column) */}
                <AnimatePresence>
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute flex flex-col items-start gap-4 pointer-events-auto"
                            style={{
                                top: (spotlightStyle.top || 0) - 180,
                                left: (spotlightStyle.left || 0)
                            }}
                        >
                            <div className="bg-white text-black p-6 rounded-xl shadow-2xl max-w-md relative text-left">
                                <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white rotate-45"></div>
                                <h3 className="text-xl font-bold mb-2 flex items-center justify-start gap-2">
                                    <MousePointer2 size={24} /> Initialize Theme
                                </h3>
                                <p>Click this button to initiate the theme and enter the experience.</p>
                            </div>
                            <div className="animate-bounce mt-2 ml-16">
                                <ArrowRight className="rotate-90 text-white w-12 h-12" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step 3: Audio Controls (Top Center) */}
                <AnimatePresence>
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute flex flex-col items-center gap-4 pointer-events-auto w-full"
                            style={{
                                top: (spotlightStyle.top || 0) + (spotlightStyle.height || 0) + 20, // Below the button
                            }}
                        >
                            <div className="animate-bounce mb-2">
                                <ArrowRight className="-rotate-90 text-white w-12 h-12" />
                            </div>
                            <div className="bg-white text-black p-6 rounded-xl shadow-2xl max-w-sm text-center relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
                                <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                                    <Music size={24} /> Audio Settings
                                </h3>
                                <p>You can control the background music and sound effects from here.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step 4: Controls (Center) */}
                <AnimatePresence>
                    {step === 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                        >
                            <div className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 border-b pb-4">
                                    <Keyboard size={32} /> Controls
                                </h3>

                                <div className="grid md:grid-cols-2 gap-12">
                                    {/* Keyboard Section */}
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-4">Keyboard</h4>
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-1">
                                                <kbd className="px-3 py-2 bg-gray-100 border-b-4 border-gray-300 rounded font-mono text-lg">←</kbd>
                                                <kbd className="px-3 py-2 bg-gray-100 border-b-4 border-gray-300 rounded font-mono text-lg">→</kbd>
                                            </div>
                                            <p className="text-lg">Navigate</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <kbd className="px-4 py-2 bg-gray-100 border-b-4 border-gray-300 rounded font-mono text-lg font-bold">M</kbd>
                                            <div className="flex items-center gap-2 text-lg">
                                                <VolumeX size={20} />
                                                <p>Mute All</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <kbd className="px-4 py-2 bg-gray-100 border-b-4 border-gray-300 rounded font-mono text-lg font-bold">P</kbd>
                                            <div className="flex items-center gap-2 text-lg">
                                                <Music size={20} />
                                                <p>Pause Music</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Touch Section */}
                                    <div className="space-y-6 border-l pl-12 border-gray-200">
                                        <h4 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-4">Touch & Gestures</h4>

                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                                                <Hand size={32} className="text-gray-600 animate-pulse" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg">Swipe Left / Right</p>
                                                <p className="text-gray-600">Navigate between themes</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                                                <MousePointer2 size={32} className="text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg">Tap / Click</p>
                                                <p className="text-gray-600">Interact with buttons</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Next Button - Centered Bottom */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-auto">
                    <button
                        onClick={handleNext}
                        className="px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
                    >
                        {step === 4 ? "START EXPERIENCE" : "NEXT"} <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorialOverlay;
