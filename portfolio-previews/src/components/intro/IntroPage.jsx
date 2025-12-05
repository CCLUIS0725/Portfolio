import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PORTFOLIO_THEMES } from '../../data/introThemes';
import { Icons } from '../ui/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../../utils/soundEngine';
import SystemBoot from './SystemBoot';
import TutorialOverlay from './TutorialOverlay';
import AudioControls from '../ui/AudioControls';

const IntroPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State
    const [activeIndex, setActiveIndex] = useState(location.state?.initialIndex || 0);
    const [direction, setDirection] = useState(0);
    const [isBooting, setIsBooting] = useState(location.state?.initialIndex === undefined || location.state?.initialIndex === null);
    const [showTutorial, setShowTutorial] = useState(false);
    const [showControls, setShowControls] = useState(!isBooting); // Show immediately if not booting
    const [showGrid, setShowGrid] = useState(false);

    // Touch State
    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const minSwipeDistance = 50;

    // Auto-preload images
    useEffect(() => {
        PORTFOLIO_THEMES.forEach(theme => {
            const img = new Image();
            img.src = theme.previewImage;
        });
    }, []);

    // Play Theme Music
    useEffect(() => {
        if (!isBooting && !showTutorial) {
            const theme = PORTFOLIO_THEMES[activeIndex];
            if (theme.music) {
                soundEngine.playMusic(theme.music);
                soundEngine.setMusicVolume(1.0);
            }
        }
    }, [activeIndex, isBooting, showTutorial]);

    // Keyboard Navigation
    useEffect(() => {
        if (isBooting || showGrid || showTutorial) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Enter') handleThemeSelect(PORTFOLIO_THEMES[activeIndex]);
            if (e.key === 'g') setShowGrid(prev => !prev);
            if (e.key === 'm' || e.key === 'M') soundEngine.toggleMute();
            if (e.key === 'p' || e.key === 'P') soundEngine.toggleMusicPause();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, isBooting, showGrid, showTutorial]);

    // Touch Handlers
    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;

        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) handleNext();
        if (isRightSwipe) handlePrev();
    };

    const activeTheme = PORTFOLIO_THEMES[activeIndex];
    const totalThemes = PORTFOLIO_THEMES.length;

    const handleBootComplete = () => {
        setIsBooting(false);
        // Delay controls and tutorial to allow boot screen to fade out (0.8s exit)
        setTimeout(() => {
            setShowTutorial(true);
            setShowControls(true);
        }, 800);
    };

    const handleTutorialComplete = () => {
        setShowTutorial(false);
        soundEngine.init();
        soundEngine.playClick();
    };

    const handleNext = () => {
        soundEngine.playTransition();
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % totalThemes);
    };

    const handlePrev = () => {
        soundEngine.playTransition();
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + totalThemes) % totalThemes);
    };

    const handleThemeSelect = (theme) => {
        soundEngine.playClick();
        navigate(theme.route, { state: { themeIndex: activeIndex } });
    };

    // Animation Variants
    const containerVariants = {
        hidden: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
            transition: { duration: 0.3 }
        })
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        },
        exit: { y: -20, opacity: 0 }
    };

    const imageVariants = {
        initial: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 }
        },
        exit: (direction) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.3 }
        })
    };

    const handleInteraction = () => {
        soundEngine.init();
    };

    return (
        <>
            <div
                onClick={handleInteraction}
                onKeyDown={handleInteraction}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="h-full w-full"
            >

                <AnimatePresence>
                    {isBooting && <SystemBoot onComplete={handleBootComplete} />}
                </AnimatePresence>

                <AnimatePresence>
                    {showTutorial && <TutorialOverlay onComplete={handleTutorialComplete} />}
                </AnimatePresence>

                {!isBooting && (
                    <div className={`relative w-full h-[100dvh] overflow-hidden flex flex-col transition-colors duration-700 ease-in-out ${activeTheme.bgStyle}`}>
                        {showControls && <AudioControls className="fixed top-6 left-1/2 -translate-x-1/2 z-50" />}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeTheme.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className={`absolute inset-0 z-0 ${activeTheme.bgStyle}`}
                                style={{ willChange: "opacity" }}
                            />
                        </AnimatePresence>

                        {/* Dynamic Background Image Overlay */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeTheme.id + '-img'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
                            >
                                <img
                                    src={activeTheme.previewImage}
                                    alt=""
                                    className="w-full h-full object-cover blur-md scale-105"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Live Background Gradient Blob */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none z-0"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                                backgroundColor: activeTheme.accentColor,
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ willChange: "transform" }}
                        />
                        <main className="relative z-10 flex-1 flex flex-col justify-center w-full min-h-0 overflow-hidden">
                            <div className="px-6 md:px-12 lg:px-16 w-full max-w-[1800px] mx-auto h-full flex flex-col justify-center">

                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={activeIndex}
                                        className={`flex flex-col md:flex-row gap-12 md:gap-32 items-center h-full max-h-full w-full ${activeTheme.fontFamily}`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={containerVariants}
                                    >

                                        {/* Left Column: Text */}
                                        <motion.div
                                            className="flex-1 flex flex-col justify-center space-y-4 w-full overflow-y-auto max-h-full py-2 no-scrollbar"
                                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                            variants={containerVariants}
                                        >
                                            <style>{`
                                            .no-scrollbar::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>

                                            {/* Theme Title */}
                                            <motion.div variants={itemVariants} className="flex flex-col justify-center pl-1">
                                                <div className="flex items-center gap-3 mb-2 opacity-70">
                                                    <span className="text-xs md:text-sm font-mono uppercase tracking-widest border border-current/30 px-3 py-1 rounded-full">
                                                        0{activeIndex + 1}
                                                    </span>
                                                    <div className="h-[1px] w-12 md:w-16 bg-current/30" />
                                                    <span className="text-sm md:text-base tracking-wider uppercase">{activeTheme.id}</span>
                                                </div>
                                                <h1
                                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4 break-words py-2"
                                                    style={{
                                                        color: activeTheme.accentColor,
                                                        textShadow: activeTheme.id === 'RETRO' ? '4px 4px 0px #0f380f' : (activeTheme.id === 'COMIC' ? '4px 4px 0px #000' : 'none'),
                                                        WebkitTextStroke: (activeTheme.id === 'BRUTAL' || activeTheme.id === 'COMIC') ? '2px black' : 'none',
                                                    }}
                                                >
                                                    {activeTheme.title}
                                                </h1>
                                            </motion.div>

                                            {/* Narrative Description */}
                                            <motion.div variants={itemVariants} className="space-y-4 max-w-2xl">
                                                <p className="text-sm md:text-base lg:text-xl font-light opacity-90 leading-relaxed">
                                                    "{activeTheme.narrative}"
                                                </p>

                                                <div className="pl-6 border-l-4 border-current/20 mt-4 mb-2">
                                                    <h3 className="text-[10px] md:text-xs font-mono uppercase opacity-50 mb-1 tracking-widest">Design Philosophy</h3>
                                                    <p className="text-xs md:text-sm opacity-70 italic leading-relaxed">
                                                        {activeTheme.designPhilosophy}
                                                    </p>
                                                </div>

                                                {/* Inspiration Tags */}
                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    {activeTheme.inspiration.map((tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 bg-current/5 border border-current/10 rounded-md text-xs md:text-sm opacity-60 hover:opacity-100 hover:border-current/30 transition-all cursor-default"
                                                            onMouseEnter={() => soundEngine.playHover()}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            {/* CTA Button */}
                                            <motion.div variants={itemVariants} className="pt-8 pb-2">
                                                <button
                                                    id="intro-init-button"
                                                    onClick={() => handleThemeSelect(activeTheme)}
                                                    onMouseEnter={() => soundEngine.playHover()}
                                                    className={`
                                                    group w-full md:w-auto flex justify-center md:justify-start items-center gap-6 px-8 py-4 md:px-10 md:py-5 text-base md:text-xl font-bold tracking-widest transition-all duration-300
                                                    ${activeTheme.buttonStyle}
                                                `}
                                                >
                                                    <span>INITIALIZE THEME</span>
                                                    <Icons.ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                                                </button>
                                            </motion.div>
                                        </motion.div>

                                        {/* Right Column: Visual Preview / Decoration (Desktop Only) */}
                                        <motion.div
                                            className="hidden md:block w-[40%] h-[55vh] lg:h-[65vh] max-h-[700px] relative shrink-0"
                                            custom={direction}
                                            variants={imageVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                        >
                                            <div
                                                className="absolute inset-0 border-2 border-current/20 transition-transform duration-700"
                                                style={{ transform: 'translate(24px, 24px)' }}
                                            />
                                            <div className="absolute inset-0 overflow-hidden bg-neutral-900 shadow-2xl">
                                                <img
                                                    src={activeTheme.previewImage}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-[2s]"
                                                />
                                                {/* Scanline overlay for Retro */}
                                                {activeTheme.id === 'RETRO' && (
                                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                                                )}
                                            </div>

                                            {/* Floating Badge */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ delay: 0.4, type: "spring" }}
                                                className="absolute -top-8 -right-8 bg-black/80 backdrop-blur border border-white/10 p-5 rounded-full shadow-xl z-20"
                                            >
                                                {activeTheme.id === 'MUSEUM' && <Icons.Palette size={32} className="text-yellow-500" />}
                                                {activeTheme.id === 'RETRO' && <Icons.Terminal size={32} className="text-green-500" />}
                                                {activeTheme.id === 'FUTURISTIC' && <Icons.Maximize size={32} className="text-red-500" />}
                                                {!['MUSEUM', 'RETRO', 'FUTURISTIC'].includes(activeTheme.id) && <Icons.Layout size={32} style={{ color: activeTheme.accentColor }} />}
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </main>

                        {/* Footer Navigation Controls */}
                        <footer className="relative z-20 px-6 py-4 md:px-8 md:py-8 flex justify-between items-center gap-8 md:gap-16 border-t border-current/10 backdrop-blur-sm shrink-0">

                            {/* Progress Bar */}
                            <div className="flex flex-col gap-3 flex-1">
                                <div className="flex justify-between text-xs md:text-sm font-mono opacity-50">
                                    <span>0{activeIndex + 1}</span>
                                    <span>0{totalThemes}</span>
                                </div>
                                <div className="w-full h-1.5 bg-current/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${((activeIndex + 1) / totalThemes) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        style={{ backgroundColor: activeTheme.accentColor }}
                                    />
                                </div>
                            </div>

                            {/* Improved Navigation Buttons */}
                            <div id="intro-nav-container" className="flex items-center gap-4 md:gap-6">

                                {/* Prev Button */}
                                <button
                                    onClick={handlePrev}
                                    onMouseEnter={() => soundEngine.playHover()}
                                    className="group flex items-center gap-3 pl-2 pr-4 py-1 h-12 md:h-14 rounded-full transition-all duration-300 active:scale-95 relative overflow-hidden shadow-lg hover:shadow-xl"
                                    style={{
                                        backgroundColor: activeTheme.accentColor,
                                        color: activeTheme.contrastColor
                                    }}
                                    aria-label="Previous Theme"
                                >
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform group-hover:-translate-x-1"
                                        style={{
                                            backgroundColor: activeTheme.contrastColor,
                                            color: activeTheme.accentColor
                                        }}
                                    >
                                        <Icons.ArrowRight size={20} className="rotate-180" />
                                    </div>

                                    <div className="flex flex-col items-end hidden md:flex">
                                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">Previous</span>
                                    </div>
                                    <span className="md:hidden text-xs font-bold uppercase tracking-wider pr-1">PREV</span>
                                </button>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    onMouseEnter={() => soundEngine.playHover()}
                                    className="group flex items-center gap-3 pl-4 pr-2 py-1 h-12 md:h-14 rounded-full transition-all duration-300 active:scale-95 relative overflow-hidden shadow-lg hover:shadow-xl"
                                    style={{
                                        backgroundColor: activeTheme.accentColor,
                                        color: activeTheme.contrastColor
                                    }}
                                    aria-label="Next Theme"
                                >
                                    <div className="flex flex-col items-start hidden md:flex">
                                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">Next Interface</span>
                                    </div>
                                    <span className="md:hidden text-xs font-bold uppercase tracking-wider pl-1">NEXT</span>

                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                                        style={{
                                            backgroundColor: activeTheme.contrastColor,
                                            color: activeTheme.accentColor
                                        }}
                                    >
                                        <Icons.ArrowRight size={20} />
                                    </div>
                                </button>
                            </div>
                        </footer>
                    </div>
                )}
            </div>
        </>
    );
};

export default IntroPage;
