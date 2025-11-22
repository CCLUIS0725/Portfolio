import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds) {
    const [activeSection, setActiveSection] = useState('');
    const [sectionProgress, setSectionProgress] = useState({});
    const [totalProgress, setTotalProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportCenter = scrollPosition + window.innerHeight * 0.4;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            // Total Progress
            const pct = docHeight > 0 ? (scrollPosition / docHeight) * 100 : 0;
            setTotalProgress(pct);

            // Section Progress
            const newSectionProgress = {};
            let currentActive = '';

            sectionIds.forEach((id, index) => {
                const element = document.getElementById(id);
                if (!element) return;

                const top = element.offsetTop;
                const height = element.offsetHeight || 1;

                // Active State
                if (viewportCenter >= top && viewportCenter < (top + height)) {
                    currentActive = id;
                }

                // Progress Calculation
                // Use scrollPosition for the first section (index 0) to ensure it starts at 0
                const currentPos = index === 0 ? scrollPosition : viewportCenter;

                let ratio = 0;
                let emphasis = 0;

                if (currentPos < top) {
                    ratio = 0;
                    emphasis = 0;
                } else if (currentPos >= top && currentPos <= top + height) {
                    ratio = (currentPos - top) / Math.max(height, 1);
                    ratio = Math.min(Math.max(ratio, 0), 1);
                    emphasis = Math.max(1 - ratio, 0);
                } else {
                    ratio = 1;
                    emphasis = 0;
                }

                newSectionProgress[id] = { ratio, emphasis };
            });

            setActiveSection(currentActive);
            setSectionProgress(newSectionProgress);
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [sectionIds]);

    return { activeSection, sectionProgress, totalProgress };
}
