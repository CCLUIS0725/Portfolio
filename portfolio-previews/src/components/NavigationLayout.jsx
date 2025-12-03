import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_THEMES } from '../data/introThemes';
import { soundEngine } from '../utils/soundEngine';

const NavigationLayout = () => {
    const location = useLocation();

    // Play music based on current route
    React.useEffect(() => {
        // Find which theme corresponds to the current path
        const currentPath = location.pathname;
        const activeTheme = PORTFOLIO_THEMES.find(theme => theme.route === currentPath);

        if (activeTheme && activeTheme.music) {
            // The soundEngine handles the check if it's already playing
            soundEngine.playMusic(activeTheme.music);
            // Lower volume when in a theme
            soundEngine.setMusicVolume(0.4);
        }
    }, [location.pathname]);

    // Calculate current theme index for back navigation
    const currentThemeIndex = React.useMemo(() => {
        return PORTFOLIO_THEMES.findIndex(theme => theme.route === location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Link
                to="/"
                state={{ initialIndex: currentThemeIndex >= 0 ? currentThemeIndex : 0 }}
                className="fixed top-4 left-4 z-[9999] flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-black/70 transition-all hover:pl-3 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Themes</span>
            </Link>
            <Outlet />
        </>
    );
};

export default NavigationLayout;
