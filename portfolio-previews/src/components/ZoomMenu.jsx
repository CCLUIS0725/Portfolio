import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const themes = [
    { id: 1, name: "Game Boy", route: "/preview1", bg: "#0000FF", text: "#FFD700", font: "font-['Press_Start_2P']", desc: "Pixel Perfect Nostalgia" },
    { id: 2, name: "Blueprint", route: "/preview2", bg: "#1e293b", text: "#60a5fa", font: "font-mono", desc: "Technical Schematics" },
    { id: 3, name: "Curated", route: "/preview3", bg: "#F2F2F2", text: "#18181b", font: "font-serif", desc: "High-End Editorial" },
    { id: 4, name: "Comic", route: "/preview4", bg: "#FFD700", text: "#000000", font: "font-['Comic_Neue']", desc: "Bold & Pop Art" },
    { id: 5, name: "Lens", route: "/preview5", bg: "#000000", text: "#ffffff", font: "font-sans", desc: "Visual Storytelling" },
    { id: 6, name: "Brutal", route: "/preview6", bg: "#FFFDF5", text: "#000000", font: "font-mono", desc: "Raw & Unapologetic" },
    { id: 7, name: "Cyberpunk", route: "/preview7", bg: "#050505", text: "#00F0FF", font: "font-sans", desc: "Neon Future Interface" },
    { id: 8, name: "Fun", route: "/preview8", bg: "#FFF0F5", text: "#FF6B6B", font: "font-sans", desc: "Playful Interactions" },
    { id: 9, name: "Minimal", route: "/preview9", bg: "#ffffff", text: "#000000", font: "font-sans", desc: "Swiss Design Style" },
    { id: 10, name: "Spatial", route: "/preview10", bg: "#0f0f11", text: "#a855f7", font: "font-sans", desc: "3D Depth UI" }
];

const ZoomMenu = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray('.theme-panel');

        // We want to animate all panels except the last one (it stays visible at the end)
        const panelsToAnimate = panels.slice(0, -1);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${panels.length * 100}%`, // Scroll distance based on number of panels
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        panelsToAnimate.forEach((panel, i) => {
            tl.to(panel, {
                scale: 20,
                opacity: 0,
                ease: "power1.in",
                duration: 1
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="zoom-menu-container w-full h-screen overflow-hidden relative bg-black">

            {/* Reverse mapping is not needed for rendering order if we use z-index correctly.
          But we want the first item in the array to be visually ON TOP (highest z-index).
          The user specified: Index 0 = z-50, Index 1 = z-40... 
      */}
            {themes.map((theme, index) => {
                // Calculate z-index: First item gets the highest, last item gets the lowest
                const zIndex = 50 - index;

                return (
                    <div
                        key={theme.id}
                        className={`theme-panel absolute inset-0 w-full h-full flex items-center justify-center ${theme.font}`}
                        style={{
                            backgroundColor: theme.bg,
                            color: theme.text,
                            zIndex: zIndex,
                            // Apply will-change to optimize rendering during heavy scaling
                            willChange: "transform, opacity"
                        }}
                    >
                        {/* Semantic Card Container */}
                        <div className="text-center p-8 max-w-2xl w-full flex flex-col items-center gap-6">

                            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-2">
                                {theme.name}
                            </h2>

                            <p className="text-xl md:text-2xl opacity-80 font-light tracking-wide max-w-lg">
                                {theme.desc}
                            </p>

                            <div className="mt-8">
                                <Link
                                    to={theme.route}
                                    className="inline-block px-8 py-4 text-lg font-bold border-2 transition-all duration-300 hover:scale-105"
                                    style={{
                                        borderColor: theme.text,
                                        color: theme.bg,
                                        backgroundColor: theme.text
                                    }}
                                >
                                    ENTER WORLD
                                </Link>
                            </div>
                        </div>

                        {/* Visual Flair/Decorations could go here depending on theme, keeping it clean for now */}
                    </div>
                );
            })}

            {/* Fixed Overlay */}
            <div className="fixed bottom-8 left-0 w-full text-center z-[100] pointer-events-none mix-blend-difference text-white">
                <p className="text-sm font-bold tracking-[0.2em] animate-pulse">
                    SCROLL TO EXPLORE
                </p>
            </div>

        </div>
    );
};

export default ZoomMenu;
