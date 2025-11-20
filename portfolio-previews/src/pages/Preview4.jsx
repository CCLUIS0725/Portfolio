import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Preview4() {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.preview-4 .reveal');
        revealElements.forEach(el => observer.observe(el));

        // Navbar glass effect intensity on scroll
        const navbar = document.querySelector('.preview-4 .navbar');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.8)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.05)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="preview-4">
            <div className="noise-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')",
                pointerEvents: 'none',
                zIndex: 9999
            }}></div>

            <nav className="navbar glass">
                <div className="logo">AM.</div>
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <main>
                <section id="hero">
                    <div className="container">
                        <span className="subtitle fade-in">Hello, I'm Alex</span>
                        <h1 className="title fade-in delay-1">Building <span className="gradient-text">Digital</span><br />Experiences.</h1>
                        <p className="description fade-in delay-2">I craft accessible, pixel-perfect, and performant web interfaces that merge art with engineering.</p>
                        <div className="cta-group fade-in delay-3">
                            <a href="#work" className="btn primary">View Work</a>
                            <a href="#contact" className="btn secondary">Contact Me</a>
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                    </div>
                </section>

                <section id="work">
                    <div className="container">
                        <h2 className="section-title reveal">Selected Work</h2>
                        <div className="projects-grid">
                            <article className="project-card glass reveal">
                                <div className="project-image" style={{ background: 'linear-gradient(45deg, #FF0080, #7928CA)' }}></div>
                                <div className="project-content">
                                    <h3>Neon Finance</h3>
                                    <p>A decentralized finance dashboard with real-time data visualization.</p>
                                    <div className="tags">
                                        <span>React</span>
                                        <span>D3.js</span>
                                        <span>Web3</span>
                                    </div>
                                    <Link to="/preview4/case-study" className="project-link">View Project &rarr;</Link>
                                </div>
                            </article>
                            <article className="project-card glass reveal delay-1">
                                <div className="project-image" style={{ background: 'linear-gradient(45deg, #4158D0, #C850C0)' }}></div>
                                <div className="project-content">
                                    <h3>Aura UI Kit</h3>
                                    <p>A comprehensive design system and UI component library for SaaS apps.</p>
                                    <div className="tags">
                                        <span>Figma</span>
                                        <span>CSS Modules</span>
                                        <span>Storybook</span>
                                    </div>
                                    <Link to="/preview4/case-study" className="project-link">View Project &rarr;</Link>
                                </div>
                            </article>
                            <article className="project-card glass reveal delay-2">
                                <div className="project-image" style={{ background: 'linear-gradient(45deg, #00DBDE, #FC00FF)' }}></div>
                                <div className="project-content">
                                    <h3>Zenith Commerce</h3>
                                    <p>High-performance e-commerce platform with headless architecture.</p>
                                    <div className="tags">
                                        <span>Next.js</span>
                                        <span>Shopify</span>
                                        <span>Tailwind</span>
                                    </div>
                                    <Link to="/preview4/case-study" className="project-link">View Project &rarr;</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="container">
                        <div className="about-content">
                            <div className="about-text reveal">
                                <h2 className="section-title">About Me</h2>
                                <p>I'm a creative developer based in San Francisco with a passion for building digital products that look great and perform even better.</p>
                                <p>With a background in both design and engineering, I bridge the gap between aesthetics and functionality. I love solving complex problems with clean, maintainable code.</p>
                            </div>
                            <div className="skills-grid reveal delay-1">
                                <div className="skill-item glass">Frontend Dev</div>
                                <div className="skill-item glass">UI/UX Design</div>
                                <div className="skill-item glass">Motion Graphics</div>
                                <div className="skill-item glass">Accessibility</div>
                                <div className="skill-item glass">Performance</div>
                                <div className="skill-item glass">SEO</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="contact-wrapper glass reveal">
                            <h2 className="section-title">Let's Talk</h2>
                            <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
                            <a href="mailto:hello@alexmorgan.dev" className="btn primary large">Say Hello</a>

                            <div className="social-links">
                                <a href="#">GitHub</a>
                                <a href="#">Twitter</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">Dribbble</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Alex Morgan. Built with &hearts; and code.</p>
            </footer>
        </div>
    );
}
