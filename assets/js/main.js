const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

class DecryptedTextEffect {
    constructor(container) {
        this.container = container;
        this.text = (container.dataset.text || container.textContent || '').replace(/\\n/g, '\n');
        this.speed = Number(container.dataset.speed) || 50;
        this.maxIterations = Number(container.dataset.maxIterations) || 10;
        this.sequential = container.dataset.sequential === 'true';
        this.revealDirection = container.dataset.revealDirection || 'start';
        this.characters =
            container.dataset.characters ||
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+';
        this.animateOn = container.dataset.animateOn || 'hover';
        this.displayEl = container.querySelector('[data-decrypt-display]') || container;
        this.srText = container.querySelector('.sr-only');
        if (this.srText) {
            this.srText.textContent = this.text.replace(/\n/g, ' ');
        }
        this.fixedIndices = new Set();
        this.text.split('').forEach((char, index) => {
            if (char === ' ' || char === '\n') {
                this.fixedIndices.add(index);
            }
        });
        this.revealed = new Set(this.fixedIndices);
        this.iteration = 0;
        this.interval = null;
        this.isScrambling = false;
        this.hasAnimated = false;
        this.updateDisplay(this.text);
        this.attachEvents();
        if (this.animateOn === 'view' || this.animateOn === 'both') {
            this.observe();
        }
        if (this.animateOn === 'load') {
            this.start();
        }
    }

    attachEvents() {
        if (this.animateOn === 'hover' || this.animateOn === 'both') {
            this.container.addEventListener('mouseenter', () => this.start());
            if (this.animateOn === 'hover') {
                this.container.addEventListener('mouseleave', () => this.finish());
            }
        }
    }

    observe() {
        this.observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.hasAnimated = true;
                        this.start();
                        if (this.animateOn === 'view') {
                            this.observer.unobserve(this.container);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );
        this.observer.observe(this.container);
    }

    start() {
        if (this.isScrambling) return;
        this.revealed = new Set(this.fixedIndices);
        this.iteration = 0;
        this.isScrambling = true;
        this.container.dataset.animating = 'true';
        this.run();
    }

    run() {
        if (this.interval) clearInterval(this.interval);
        if (this.sequential) {
            this.interval = setInterval(() => {
                if (this.revealed.size >= this.text.length) {
                    this.finish();
                    return;
                }
                const nextIndex = this.getNextIndex();
                if (nextIndex === null || nextIndex === undefined) {
                    this.finish();
                    return;
                }
                this.revealed.add(nextIndex);
                const scrambled = this.shuffleWithReveals();
                this.updateDisplay(scrambled, true);
            }, this.speed);
        } else {
            this.interval = setInterval(() => {
                this.iteration += 1;
                if (this.iteration >= this.maxIterations) {
                    this.finish();
                    return;
                }
                const scrambled = this.shuffleRandom();
                this.updateDisplay(scrambled, true);
            }, this.speed);
        }
    }

    finish() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.isScrambling = false;
        this.container.dataset.animating = 'false';
        this.updateDisplay(this.text);
    }

    shuffleWithReveals() {
        return this.text
            .split('')
            .map((char, index) => {
                if (char === '\n' || char === ' ') return char;
                if (this.revealed.has(index)) {
                    return char;
                }
                return this.randomChar();
            })
            .join('');
    }

    shuffleRandom() {
        return this.text
            .split('')
            .map(char => {
                if (char === '\n' || char === ' ') return char;
                return this.randomChar();
            })
            .join('');
    }

    randomChar() {
        if (!this.characters.length) return '';
        const index = Math.floor(Math.random() * this.characters.length);
        return this.characters[index];
    }

    getNextIndex() {
        const len = this.text.length;
        const available = index => index >= 0 && index < len && !this.revealed.has(index);

        switch (this.revealDirection) {
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
    }

    updateDisplay(value, scrambled = false) {
        if (!this.displayEl) return;
        this.displayEl.innerHTML = '';
        value.split('').forEach((char, index) => {
            if (char === '\n') {
                this.displayEl.appendChild(document.createElement('br'));
                return;
            }
            const span = document.createElement('span');
            span.className = 'decrypt-char';
            if (scrambled && !this.revealed.has(index) && char !== ' ') {
                span.classList.add('encrypted');
            }
            span.textContent = char;
            this.displayEl.appendChild(span);
        });
    }
}

const body = document.body;
const toggle = document.querySelector('.theme-toggle');
const heroSection = document.getElementById('hero');
const revealItems = document.querySelectorAll('.reveal');
const skillBars = document.querySelectorAll('.skill-bar');
const cloudPills = document.querySelectorAll('.skills-cloud .skill-pill');
const decryptTargets = document.querySelectorAll('[data-decrypt-text]');
window.addEventListener('load', () => {
    heroSection.classList.add('hero-loaded');
});

toggle.addEventListener('click', () => {
    body.classList.toggle('theme-dark');
    body.classList.add('theme-transition');
    setTimeout(() => body.classList.remove('theme-transition'), 500);
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

revealItems.forEach(item => observer.observe(item));
decryptTargets.forEach(target => new DecryptedTextEffect(target));

skillBars.forEach(bar => {
    const target = bar.dataset.level || 0;
    bar.style.setProperty('--target-level', `${target}%`);
    const levelLabel = bar.querySelector('.skill-level');
    if (levelLabel) {
        levelLabel.textContent = `${target}%`;
    }
});

const skillObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('filled');
                skillObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.35 }
);

skillBars.forEach(bar => skillObserver.observe(bar));

cloudPills.forEach((pill, index) => {
    const duration = 7 + (index % 4) * 1.2;
    const delay = (index * 0.35) % 5;
    pill.style.setProperty('--float-duration', `${duration}s`);
    pill.style.setProperty('--float-delay', `${delay}s`);
});

// --- Line stack navigation behavior ---
const stackGroups = document.querySelectorAll('.line-stack-group');
const stackOrder = ['hero', 'about', 'work', 'skills', 'contact'];
const stackGroupMap = new Map();
stackGroups.forEach(group => stackGroupMap.set(group.dataset.section, group));

if (stackGroups.length) {
    stackGroups[0]?.classList.add('is-active');

    const stackTitles = document.querySelectorAll('.line-stack-title');
    stackTitles.forEach(title => {
        title.addEventListener('click', event => {
            const id = title.closest('.line-stack-group')?.dataset.section;
            const target = document.getElementById(id);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const stackSections = stackOrder
        .map(id => document.getElementById(id))
        .filter(Boolean);

    // Removed IntersectionObserver for stackGroups to rely on scroll position for accuracy

    let stackMap = [];
    const buildStackMap = () => {
        stackMap = stackSections.map(section => ({
            id: section.id,
            top: section.offsetTop,
            height: section.offsetHeight || 1
        }));
        updateStackProgress();
    };

    const updateStackProgress = () => {
        const scrollPosition = window.scrollY;
        const viewportCenter = scrollPosition + window.innerHeight * 0.4; // Trigger point at 40% down the screen

        stackMap.forEach(({ id, top, height }, index) => {
            let ratio = 0;
            let emphasis = 0;
            const group = stackGroupMap.get(id);
            if (!group) return;

            // Determine active state based on viewport center overlapping the section
            const isActive = viewportCenter >= top && viewportCenter < (top + height);
            group.classList.toggle('is-active', isActive);

            // Use scrollPosition for the first section to ensure it starts at 0 progress at the top of the page.
            // For other sections, use viewportCenter to sync with the active state trigger.
            const currentPos = index === 0 ? scrollPosition : viewportCenter;

            if (currentPos < top) {
                ratio = 0;
                emphasis = 0;
            } else if (currentPos >= top && currentPos <= top + height) {
                ratio = (currentPos - top) / Math.max(height, 1);
                ratio = Math.min(Math.max(ratio, 0), 1);
                // Emphasis starts at 1 (top of section) and goes to 0
                emphasis = Math.max(1 - ratio, 0);
            } else {
                ratio = 1;
                emphasis = 0;
            }

            const title = group.querySelector('.line-stack-title');
            if (title) {
                title.style.setProperty('--stack-progress', ratio.toFixed(3));
                title.style.setProperty('--stack-emphasis', emphasis.toFixed(3));
            }
            const lines = group.querySelectorAll('.line-stack-lines span');
            const activeCount = Math.round(ratio * lines.length);
            lines.forEach((line, index) => {
                line.classList.toggle('is-on', index < activeCount);
            });
        });
    };

    buildStackMap();
    window.addEventListener('resize', () => {
        buildStackMap();
        updateProgressBar();
    });

    // Optimized scroll handling using requestAnimationFrame
    let scrollTicking = false;

    const onScroll = () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateStackProgress();
                if (typeof updateProgressBar === 'function') {
                    updateProgressBar();
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
}


const progressBar = document.querySelector('.scroll-progress-bar');
let updateProgressBar = null;

if (progressBar) {
    updateProgressBar = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${pct}%`;
    };

    // Initial call
    updateProgressBar();

    // If stackGroups is not present, we need to add a scroll listener here.
    // If stackGroups IS present, it tries to call updateProgressBar inside onScroll.
    // To be safe, let's ensure it runs.
    if (!document.querySelector('.line-stack-group')) {
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(updateProgressBar);
        }, { passive: true });
    }
}

