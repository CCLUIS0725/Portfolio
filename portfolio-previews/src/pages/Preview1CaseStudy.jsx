import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Moon, Sun } from 'lucide-react';

export default function Preview1CaseStudy() {
    const [isDark, setIsDark] = React.useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className={`preview-1 min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#050507] text-[#f6f7fb]' : 'bg-[#f8f9fc] text-[#0e0f19]'}`}>
            <header className="fixed top-0 w-full z-50 px-[5vw] py-8 flex items-center justify-between bg-transparent backdrop-blur-sm">
                <div className="logo font-display text-xl tracking-widest font-bold uppercase">
                    <Link to="/preview1">LC / UX</Link>
                </div>
                <div className="flex items-center gap-8">
                    <Link to="/preview1" className="flex items-center gap-2 font-semibold hover:text-[#4f46e5] transition-colors">
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        <div className={`toggle-thumb ${isDark ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        <Sun size={14} className="relative z-10 ml-1 text-white" />
                        <Moon size={14} className="relative z-10 ml-auto mr-1 text-white" />
                    </button>
                </div>
            </header>

            <main className="pt-32 pb-24 px-[5vw]">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <section className="mb-24">
                        <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4">Case Study</p>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            Fintech Dashboard <br /> Redesign
                        </h1>
                        <p className="text-xl md:text-2xl text-opacity-80 mb-8 max-w-3xl leading-relaxed">
                            Reimagining the financial management experience for over 50,000 active daily users.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-current border-opacity-10 py-8 my-12">
                            <div>
                                <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-2">Role</span>
                                <p className="font-semibold">Lead Product Designer</p>
                            </div>
                            <div>
                                <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-2">Timeline</span>
                                <p className="font-semibold">4 Months (2023)</p>
                            </div>
                            <div>
                                <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-2">Impact</span>
                                <p className="font-semibold">+24% User Retention</p>
                            </div>
                        </div>

                        <div className="hero-visual w-full aspect-video bg-gradient-to-br from-[#4f46e5] to-[#9333ea] rounded-[32px] shadow-2xl flex items-center justify-center text-white text-opacity-50 text-4xl font-display font-bold">
                            Project Hero Image
                        </div>
                    </section>

                    {/* Overview & Problem */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                        <div className="glass-card">
                            <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4 text-sm">Overview</p>
                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <p className="leading-relaxed opacity-80">
                                The existing dashboard was cluttered, difficult to navigate, and failed to provide users with actionable insights into their spending habits. Users reported feeling overwhelmed and disconnected from their financial data.
                            </p>
                        </div>
                        <div className="glass-card">
                            <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4 text-sm">Problem Statement</p>
                            <h3 className="text-2xl font-bold mb-4">The Core Issue</h3>
                            <p className="leading-relaxed opacity-80">
                                "How might we simplify financial data visualization so that users can make informed decisions without feeling overwhelmed?"
                            </p>
                        </div>
                    </section>

                    {/* Goals */}
                    <section className="mb-24">
                        <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4">Goals</p>
                        <h2 className="text-4xl font-display font-bold mb-12">What success looks like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Simplify Navigation", desc: "Reduce clicks to reach key features by 40%." },
                                { title: "Improve Clarity", desc: "Increase data readability scores in user testing." },
                                { title: "Boost Engagement", desc: "Drive a 15% increase in daily active usage." }
                            ].map((goal, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-current border-opacity-10">
                                    <div className="text-4xl font-bold text-[#4f46e5] mb-4">0{i + 1}</div>
                                    <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                                    <p className="opacity-70">{goal.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Process */}
                    <section className="mb-24">
                        <div className="glass-card p-12">
                            <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4">Process</p>
                            <h2 className="text-4xl font-display font-bold mb-8">From Signal to Solution</h2>
                            <div className="space-y-12">
                                {[
                                    { stage: "Discovery", desc: "Conducted 15 user interviews and analyzed 500+ support tickets to identify pain points." },
                                    { stage: "Definition", desc: "Created 3 user personas and mapped out the current vs. ideal user journey." },
                                    { stage: "Ideation", desc: "Facilitated design sprints with stakeholders to brainstorm solutions and sketch concepts." },
                                    { stage: "Prototyping", desc: "Built low-fidelity wireframes for rapid testing and iteration." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 md:gap-12 items-start">
                                        <div className="w-32 shrink-0 font-bold opacity-50 pt-1">0{i + 1} / {step.stage}</div>
                                        <p className="text-lg leading-relaxed opacity-90">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Solution / Visuals */}
                    <section className="mb-24">
                        <p className="text-[#4f46e5] font-bold tracking-widest uppercase mb-4">Solution</p>
                        <h2 className="text-4xl font-display font-bold mb-12">The Redesigned Interface</h2>
                        <div className="space-y-16">
                            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-current border-opacity-10">
                                <div className="bg-gray-100 dark:bg-gray-800 aspect-[16/10] flex items-center justify-center text-opacity-30 text-2xl font-bold">
                                    High Fidelity Dashboard Mockup
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="rounded-[32px] overflow-hidden shadow-xl border border-current border-opacity-10">
                                    <div className="bg-gray-100 dark:bg-gray-800 aspect-square flex items-center justify-center text-opacity-30 text-xl font-bold">
                                        Mobile View
                                    </div>
                                </div>
                                <div className="rounded-[32px] overflow-hidden shadow-xl border border-current border-opacity-10">
                                    <div className="bg-gray-100 dark:bg-gray-800 aspect-square flex items-center justify-center text-opacity-30 text-xl font-bold">
                                        Analytics Detail
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Outcomes */}
                    <section className="mb-24">
                        <div className="bg-[#4f46e5] text-white rounded-[40px] p-12 md:p-20 text-center shadow-2xl shadow-indigo-500/30">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Outcomes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[
                                    { val: "24%", label: "Increase in Retention" },
                                    { val: "4.8/5", label: "App Store Rating" },
                                    { val: "-15%", label: "Support Tickets" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-5xl md:text-6xl font-bold mb-2">{stat.val}</div>
                                        <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Next Project */}
                    <section className="text-center py-12 border-t border-current border-opacity-10">
                        <p className="opacity-50 mb-4">Next Project</p>
                        <Link to="/preview1" className="text-3xl md:text-4xl font-display font-bold hover:text-[#4f46e5] transition-colors">
                            E-Commerce Mobile App &rarr;
                        </Link>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center opacity-50 text-sm border-t border-current border-opacity-10">
                &copy; 2024 Luis Cabrera. All rights reserved.
            </footer>
        </div>
    );
}
