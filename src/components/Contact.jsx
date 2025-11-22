import React from 'react';

export function Contact() {
    return (
        <section id="contact">
            <div className="section-inner contact-grid">
                <div className="glass-card reveal">
                    <h2>Let's Collaborate</h2>
                    <p>
                        Ready to shape the next flagship experience? Drop a note and I will respond in
                        less than 24 hours.
                    </p>
                    <form>
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
    );
}
