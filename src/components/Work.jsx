import React from 'react';

export function Work() {
    return (
        <section id="work">
            <div className="section-inner">
                <div className="reveal">
                    <h2>Selected Work</h2>
                    <p className="section-desc">
                        A snapshot of product stories spanning enterprise dashboards, consumer mobile,
                        and data-rich platforms.
                    </p>
                </div>
                <div className="projects-grid">
                    <article className="project-card reveal">
                        <div className="project-thumb">Intuitive SaaS Dashboard</div>
                        <div className="project-content">
                            <h3>Lumen Analytics Platform</h3>
                            <p>
                                Redefined the analytics workflow with adaptive panels, modular layouts,
                                and motion cues that accelerate decision-making.
                            </p>
                            <a className="btn btn-outline" href="case-study.html?project=lumen">
                                View Case Study
                            </a>
                        </div>
                    </article>
                    <article className="project-card reveal">
                        <div className="project-thumb">Mobile App Redesign</div>
                        <div className="project-content">
                            <h3>Nova Health Companion</h3>
                            <p>
                                Crafted a calm, assistive patient companion with biometric insights,
                                proactive nudges, and ambient storytelling.
                            </p>
                            <a className="btn btn-outline" href="case-study.html?project=nova">
                                View Case Study
                            </a>
                        </div>
                    </article>
                    <article className="project-card reveal">
                        <div className="project-thumb">E-commerce Experience</div>
                        <div className="project-content">
                            <h3>Aero Essential Store</h3>
                            <p>
                                Designed a high-conversion shopping journey with editorial storytelling,
                                augmented fit guidance, and tactile micro-interactions.
                            </p>
                            <a className="btn btn-outline" href="case-study.html?project=aero">
                                View Case Study
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
