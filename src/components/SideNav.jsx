import React from 'react';

export function SideNav({ activeSection, sectionProgress }) {
    const sections = [
        { id: 'hero', label: 'Intro' },
        { id: 'about', label: 'About' },
        { id: 'work', label: 'Work' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="line-stack-nav" aria-label="Section navigation">
            {sections.map(({ id, label }) => {
                const { ratio = 0, emphasis = 0 } = sectionProgress[id] || {};
                const isActive = activeSection === id;
                const activeCount = Math.round(ratio * 12);

                return (
                    <div
                        key={id}
                        className={`line-stack-group ${isActive ? 'is-active' : ''}`}
                        data-section={id}
                    >
                        <a
                            className="line-stack-title"
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            style={{
                                '--stack-progress': ratio.toFixed(3),
                                '--stack-emphasis': emphasis.toFixed(3)
                            }}
                        >
                            {label}
                        </a>
                        {id !== 'contact' && (
                            <div className="line-stack-lines">
                                {[...Array(12)].map((_, i) => (
                                    <span key={i} className={i < activeCount ? 'is-on' : ''}></span>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
