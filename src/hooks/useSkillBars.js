import { useEffect } from 'react';

export function useSkillBars() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('filled');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.35 }
        );

        const timeout = setTimeout(() => {
            const bars = document.querySelectorAll('.skill-bar');
            bars.forEach(bar => {
                // Set initial styles
                const target = bar.dataset.level || 0;
                bar.style.setProperty('--target-level', `${target}%`);
                const levelLabel = bar.querySelector('.skill-level');
                if (levelLabel) {
                    levelLabel.textContent = `${target}%`;
                }
                observer.observe(bar);
            });
        }, 100);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, []);
}
