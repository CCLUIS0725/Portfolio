import React from 'react';

export function About() {
    return (
        <section id="about">
            <div className="section-inner about reveal">
                <div className="glass-card">
                    <h2>About Me</h2>
                    <p>
                        Over the last eight years, I've partnered with SaaS companies, fintech startups,
                        and global agencies to shape intuitive design systems and immersive product
                        experiences. My process blends qualitative research with rapid prototyping to
                        uncover elegant, scalable solutions.
                    </p>
                    <div className="stats">
                        <div>
                            <p className="stat">80+</p>
                            <p>Products launched</p>
                        </div>
                        <div>
                            <p className="stat">15</p>
                            <p>Design awards</p>
                        </div>
                    </div>
                </div>
                <div className="glass-card">
                    <h3>Design Philosophy</h3>
                    <p>
                        I believe memorable digital experiences emerge from the interplay of empathy,
                        contrast, and motion. I focus on establishing narrative clarity, reducing
                        cognitive load, and revealing micro-interactions that guide users with intent.
                    </p>
                </div>
            </div>
        </section>
    );
}
