import { useEffect, useRef, useState, useCallback } from 'react';

export function useDecryptedText(options = {}) {
    const {
        text = '',
        speed = 50,
        maxIterations = 10,
        sequential = false,
        revealDirection = 'start',
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+',
        animateOn = 'hover',
    } = options;

    const [renderedText, setRenderedText] = useState([]);
    const [isScrambling, setIsScrambling] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);
    const revealedRef = useRef(new Set());
    const iterationRef = useRef(0);

    const fixedIndices = useRef(new Set());

    useEffect(() => {
        const indices = new Set();
        text.split('').forEach((char, index) => {
            if (char === ' ' || char === '\n') {
                indices.add(index);
            }
        });
        fixedIndices.current = indices;
        revealedRef.current = new Set(indices);

        // Initial render
        updateDisplay(text);
    }, [text]);

    const updateDisplay = useCallback((value, scrambled = false) => {
        const newRendered = value.split('').map((char, index) => {
            if (char === '\n') return { type: 'br' };
            const isEncrypted = scrambled && !revealedRef.current.has(index) && char !== ' ';
            return {
                type: 'char',
                char,
                className: `decrypt-char ${isEncrypted ? 'encrypted' : ''}`
            };
        });
        setRenderedText(newRendered);
    }, []);

    const randomChar = useCallback(() => {
        if (!characters.length) return '';
        const index = Math.floor(Math.random() * characters.length);
        return characters[index];
    }, [characters]);

    const shuffleRandom = useCallback(() => {
        return text.split('').map(char => {
            if (char === '\n' || char === ' ') return char;
            return randomChar();
        }).join('');
    }, [text, randomChar]);

    const shuffleWithReveals = useCallback(() => {
        return text.split('').map((char, index) => {
            if (char === '\n' || char === ' ') return char;
            if (revealedRef.current.has(index)) return char;
            return randomChar();
        }).join('');
    }, [text, randomChar]);

    const getNextIndex = useCallback(() => {
        const len = text.length;
        const available = index => index >= 0 && index < len && !revealedRef.current.has(index);

        switch (revealDirection) {
            case 'end':
                for (let i = len - 1; i >= 0; i--) {
                    if (available(i)) return i;
                }
                break;
            case 'center': {
                const middle = Math.floor(len / 2);
                for (let offset = 0; offset < len; offset++) {
                    const right = middle + offset;
                    const left = middle - offset;
                    if (available(right)) return right;
                    if (available(left)) return left;
                }
                break;
            }
            default:
                for (let i = 0; i < len; i++) {
                    if (available(i)) return i;
                }
        }
        return null;
    }, [text, revealDirection]);

    const finish = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsScrambling(false);
        if (containerRef.current) {
            containerRef.current.dataset.animating = 'false';
        }
        updateDisplay(text);
    }, [text, updateDisplay]);

    const run = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        if (sequential) {
            intervalRef.current = setInterval(() => {
                if (revealedRef.current.size >= text.length) {
                    finish();
                    return;
                }
                const nextIndex = getNextIndex();
                if (nextIndex === null || nextIndex === undefined) {
                    finish();
                    return;
                }
                revealedRef.current.add(nextIndex);
                const scrambled = shuffleWithReveals();
                updateDisplay(scrambled, true);
            }, speed);
        } else {
            intervalRef.current = setInterval(() => {
                iterationRef.current += 1;
                if (iterationRef.current >= maxIterations) {
                    finish();
                    return;
                }
                const scrambled = shuffleRandom();
                updateDisplay(scrambled, true);
            }, speed);
        }
    }, [sequential, text, speed, maxIterations, getNextIndex, shuffleWithReveals, shuffleRandom, updateDisplay, finish]);

    const start = useCallback(() => {
        if (isScrambling) return;
        revealedRef.current = new Set(fixedIndices.current);
        iterationRef.current = 0;
        setIsScrambling(true);
        if (containerRef.current) {
            containerRef.current.dataset.animating = 'true';
        }
        run();
    }, [isScrambling, run]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleMouseEnter = () => start();
        const handleMouseLeave = () => {
            if (animateOn === 'hover') finish();
        };

        if (animateOn === 'hover' || animateOn === 'both') {
            el.addEventListener('mouseenter', handleMouseEnter);
            if (animateOn === 'hover') {
                el.addEventListener('mouseleave', handleMouseLeave);
            }
        }

        let observer;
        if (animateOn === 'view' || animateOn === 'both') {
            observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !hasAnimated) {
                            setHasAnimated(true);
                            start();
                            if (animateOn === 'view') {
                                observer.unobserve(el);
                            }
                        }
                    });
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
        }

        if (animateOn === 'load') {
            start();
        }

        return () => {
            if (el) {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (observer) observer.disconnect();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [animateOn, start, finish, hasAnimated]);

    return { containerRef, renderedText };
}
