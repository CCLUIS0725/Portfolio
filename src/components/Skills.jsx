import React, { useEffect } from 'react';
import { useSkillBars } from '../hooks/useSkillBars';

export function Skills() {
    useSkillBars();

    useEffect(() => {
        const pills = document.querySelectorAll('.skills-cloud .skill-pill');
        pills.forEach((pill, index) => {
            const duration = 7 + (index % 4) * 1.2;
            const delay = (index * 0.35) % 5;
            pill.style.setProperty('--float-duration', `${duration}s`);
            pill.style.setProperty('--float-delay', `${delay}s`);
        });
    }, []);

    return (
        <section id="skills">
            <div className="section-inner">
                <div className="reveal">
                    <h2>Skills & Toolset</h2>
                    <p>
                        Bridging research, visual systems, and code to deliver cohesive outcomes
                        end-to-end.
                    </p>
                </div>
                <div className="skills-grid">
                    <div className="skills-cloud">
                        {['UX Research', 'UI Design', 'Design Systems', 'Rapid Prototyping', 'Figma', 'Adobe XD', 'HTML / CSS / JS', 'Micro-interactions', 'Motion Design'].map((skill, i) => (
                            <span key={i} className="skill-pill reveal">{skill}</span>
                        ))}
                    </div>
                    <div className="skills-bars">
                        <div className="skill-bar reveal" data-level="92">
                            <div className="skill-meta">
                                <span>Experience Strategy</span>
                                <span className="skill-level">0%</span>
                            </div>
                            <div className="bar-track">
                                <span className="bar-fill"></span>
                            </div>
                        </div>
                        <div className="skill-bar reveal" data-level="88">
                            <div className="skill-meta">
                                <span>Design Systems</span>
                                <span className="skill-level">0%</span>
                            </div>
                            <div className="bar-track">
                                <span className="bar-fill"></span>
                            </div>
                        </div>
                        <div className="skill-bar reveal" data-level="84">
                            <div className="skill-meta">
                                <span>Motion / Prototyping</span>
                                <span className="skill-level">0%</span>
                            </div>
                            <div className="bar-track">
                                <span className="bar-fill"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
