import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_THEMES } from '../data/introThemes';
import { soundEngine } from '../utils/soundEngine';
import AudioControls from './ui/AudioControls';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationLayout = () => {
    const location = useLocation();

    React.useEffect(() => {
        // Find which theme corresponds to the current path
        const currentPath = location.pathname;
        const activeTheme = PORTFOLIO_THEMES.find(theme => theme.route === currentPath);

        if (activeTheme && activeTheme.music) {
            // The soundEngine handles the check if it's already playing
            soundEngine.playMusic(activeTheme.music);
            // Lower volume significantly for content consumption
            soundEngine.setMusicVolume(0.2);
        }
    }, [location.pathname]);

    // Calculate current theme index for "Back" state
    const currentThemeIndex = PORTFOLIO_THEMES.findIndex(t => t.route === location.pathname);

    const [isHovered, setIsHovered] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [isDimmed, setIsDimmed] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            // Check for touch capability or smaller screens
            const isTouch = window.matchMedia('(hover: none)').matches;
            const isSmallScreen = window.innerWidth < 1024; // Expanded to include iPad Landscape
            setIsMobile(isTouch || isSmallScreen);
        };

        const handleScroll = () => {
            // If scrolled down a bit, dim the controls until interaction
            if (window.scrollY > 50) {
                setIsDimmed(true);
            } else {
                setIsDimmed(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="fixed bottom-6 left-6 z-50 flex items-center gap-3"
                onMouseEnter={() => {
                    setIsHovered(true);
                    setIsDimmed(false); // Undim on hover/interaction
                }}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link
                    to="/"
                    state={{ initialIndex: currentThemeIndex !== -1 ? currentThemeIndex : 0 }}
                    className="flex items-center gap-2 px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm hidden md:inline">BACK</span>
                </Link>

                <AnimatePresence>
                    {(isHovered || isMobile) && (
                        <motion.div
                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <AudioControls className="!p-3" isDimmed={isDimmed} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Outlet />
        </>
    );
};

export default NavigationLayout;
