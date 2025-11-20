import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Preview1() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Theme Toggle Logic
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        // Reveal on Scroll Logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`preview-1 page ${isDark ? 'theme-dark' : ''}`}>
            <header>
                <div className="logo">LC / UX</div>
                <button
                    className="theme-toggle"
                    aria-label="Toggle color mode"
                    onClick={() => setIsDark(!isDark)}
                >
                    <span className="toggle-thumb"></span>
                    <span className="toggle-icon">☀️</span>
                    <span className="toggle-icon">🌙</span>
                </button>
            </header>

            {/* Scroll Progress (Simplified) */}
            <div className="scroll-progress" aria-hidden="true">
                <div className="scroll-progress-bar"></div>
            </div>

            <main>
                <section id="hero">
                    <div className="section-inner hero">
                        <div>
                            <p className="kicker text-accent font-semibold mb-2">UX / UI Designer</p>
                            <h1 className="sr-only">Crafting Intuitive Digital Experiences</h1>
                            <div className="decrypt-shell hero-heading-animated">
                                <span className="decrypt-display text-5xl md:text-7xl font-bold leading-tight">
                                    Crafting<br />Intuitive Digital<br />Experiences
                                </span>
                            </div>
                            <p className="mt-6 max-w-xl">
                                I'm Luis Cabrera, a multidisciplinary designer blending research, strategy, and
                                motion to build human-centered products for ambitious teams.
                            </p>
                            <div className="cta-group">
                                <button className="btn btn-primary">View My Work</button>
                                <button className="btn btn-outline">Download Résumé</button>
                            </div>
                        </div>
                        <div className="hero-visual" aria-hidden="true">
                            <img src="/assets/images/hero-preview.png" alt="Abstract Design Visual" />
                        </div>
                    </div>
                </section>

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

                <section id="work">
                    <div className="section-inner">
                        <div className="reveal">
                            <h2>Selected Work</h2>
                            <p className="section-desc max-w-2xl mb-8 text-text-secondary">
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
                                    <div className="project-tags">
                                        <span className="project-tag">SaaS</span>
                                        <span className="project-tag">Data Viz</span>
                                        <span className="project-tag">Enterprise</span>
                                    </div>
                                    <Link className="btn btn-outline mt-4 inline-block text-center" to="/preview1/case-study">
                                        View Case Study
                                    </Link>
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
                                    <div className="project-tags">
                                        <span className="project-tag">Mobile App</span>
                                        <span className="project-tag">HealthTech</span>
                                        <span className="project-tag">iOS</span>
                                    </div>
                                    <a className="btn btn-outline mt-4 inline-block text-center" href="#">
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
                                    <div className="project-tags">
                                        <span className="project-tag">E-commerce</span>
                                        <span className="project-tag">Web Design</span>
                                        <span className="project-tag">Interaction</span>
                                    </div>
                                    <a className="btn btn-outline mt-4 inline-block text-center" href="#">
                                        View Case Study
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="skills">
                    <div className="section-inner">
                        <div className="reveal">
                            <h2>Skills & Toolset</h2>
                            <p className="max-w-2xl text-text-secondary">
                                Bridging research, visual systems, and code to deliver cohesive outcomes
                                end-to-end.
                            </p>
                        </div>
                        <div className="skills-grid-clean mt-8">
                            <div className="skill-category reveal">
                                <h3>Research & Strategy</h3>
                                <div className="skill-list">
                                    <div className="skill-item"><div className="skill-icon"></div>User Interviews</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Usability Testing</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Information Architecture</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Journey Mapping</div>
                                </div>
                            </div>
                            <div className="skill-category reveal">
                                <h3>UI & Interaction</h3>
                                <div className="skill-list">
                                    <div className="skill-item"><div className="skill-icon"></div>Visual Design</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Design Systems</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Prototyping</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Motion Design</div>
                                </div>
                            </div>
                            <div className="skill-category reveal">
                                <h3>Tools & Tech</h3>
                                <div className="skill-list">
                                    <div className="skill-item"><div className="skill-icon"></div>Figma</div>
                                    <div className="skill-item"><div className="skill-icon"></div>HTML/CSS</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Webflow</div>
                                    <div className="skill-item"><div className="skill-icon"></div>Adobe Suite</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="section-inner contact-grid">
                        <div className="glass-card reveal">
                            <h2>Let's Collaborate</h2>
                            <p>
                                Ready to shape the next flagship experience? Drop a note and I will respond in
                                less than 24 hours.
                            </p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label>
                                    <span>Name</span>
                                    <input type="text" placeholder="Your name" required />
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" placeholder="you@email.com" required />
                                </label>
                                <label>
                                    <span>Project details</span>
                                    <textarea placeholder="Tell me about your vision"></textarea>
                                </label>
                                <button className="btn btn-primary" type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="glass-card reveal">
                            <h3>Connect</h3>
                            <p>
                                Follow my latest explorations in spatial interfaces, AI copilots, and expressive
                                motion systems.
                            </p>
                            <div className="social-links">
                                <a href="#">LinkedIn ↗</a>
                                <a href="#">Dribbble ↗</a>
                                <a href="#">Behance ↗</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <nav className="line-stack-nav" aria-label="Section navigation">
                {['hero', 'about', 'work', 'skills', 'contact'].map((section, i) => (
                    <div key={section} className={`line-stack-group ${i === 0 ? 'is-active' : ''}`} data-section={section}>
                        <a className="line-stack-title" href={`#${section}`}>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                        {section !== 'contact' && (
                            <div className="line-stack-lines">
                                {[...Array(12)].map((_, idx) => <span key={idx}></span>)}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <footer className="text-center py-8 border-t border-muted-color text-text-secondary">
                © 2024 Luis Cabrera — Available for select collaborations.
            </footer>
        </div>
    );
}
