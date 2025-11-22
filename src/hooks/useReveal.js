import { useEffect } from 'react';

export function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        // Delay slightly to ensure DOM is ready
        const timeout = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, []);
}
