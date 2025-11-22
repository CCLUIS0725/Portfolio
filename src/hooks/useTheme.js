import { useState, useEffect } from 'react';

export function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check system preference or saved preference could be added here
        // For now, default to light as per original CSS, but check if class exists
        if (document.body.classList.contains('theme-dark')) {
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(prev => {
            const next = !prev;
            document.body.classList.toggle('theme-dark', next);
            document.body.classList.add('theme-transition');
            setTimeout(() => document.body.classList.remove('theme-transition'), 500);
            return next;
        });
    };

    return { isDark, toggleTheme };
}
