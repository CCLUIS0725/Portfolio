import React, { useEffect } from 'react';
import { useDecryptedText } from '../hooks/useDecryptedText';

export function Hero() {
    const { containerRef, renderedText } = useDecryptedText({
        text: "Crafting\nIntuitive Digital\nExperiences",
        speed: 55,
        maxIterations: 22,
        sequential: true,
        revealDirection: 'start',
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*",
        animateOn: 'load'
    });

    useEffect(() => {
        // Add hero-loaded class to trigger animations
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.classList.add('hero-loaded');
        }
    }, []);

    return (
        <section id="hero">
            <div className="section-inner hero">
                <div>
                    <p className="kicker">UX / UI Designer</p>
                    <h1 className="sr-only">Crafting Intuitive Digital Experiences</h1>
                    <div className="decrypt-shell hero-heading-animated" ref={containerRef}>
                        <span className="sr-only">Crafting Intuitive Digital Experiences</span>
                        <span className="decrypt-display" aria-hidden="true">
                            {renderedText.map((item, i) => (
                                item.type === 'br' ? <br key={i} /> :
                                    <span key={i} className={item.className}>{item.char}</span>
                            ))}
                        </span>
                    </div>
                    <p>
                        I'm Luis Cabrera, a multidisciplinary designer blending research, strategy, and
                        motion to build human-centered products for ambitious teams.
                    </p>
                    <div className="cta-group">
                        <button className="btn btn-primary">View My Work</button>
                        <button className="btn btn-outline">Download Résumé</button>
                    </div>
                </div>
                <div className="hero-visual" aria-hidden="true"></div>
            </div>
        </section>
    );
}
