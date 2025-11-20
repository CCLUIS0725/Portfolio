import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Layers, Palette, Code2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function Preview2() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tighter">LC / UX</div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                        <a href="#work" className="hover:text-white transition-colors">Work</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </nav>
                    <Button variant="outline" size="sm" className="rounded-full">
                        Let's Talk
                    </Button>
                </div>
            </header>

            <main className="pt-32 pb-20 container mx-auto px-6">
                {/* Hero Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto text-center mb-32"
                >
                    <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6 border border-indigo-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Crafting digital experiences<br />that feel <span className="text-indigo-400">alive</span>.
                    </motion.h1>

                    <motion.p variants={item} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I'm Luis Cabrera. I blend research-backed strategy with motion-rich design to build products that users love.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="rounded-full text-base h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                            View Selected Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                    </motion.div>
                </motion.section>

                {/* Bento Grid Work Section */}
                <section id="work" className="mb-32">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
                            <p className="text-zinc-400">Recent projects and case studies</p>
                        </div>
                        <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                        {/* Large Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">SaaS</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Design System</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Lumen Analytics</h3>
                                    <p className="text-zinc-400 max-w-md">A comprehensive analytics dashboard for enterprise product teams, featuring adaptive layouts and real-time data visualization.</p>
                                </div>
                                <div className="w-full h-48 rounded-xl bg-zinc-950/50 border border-white/5 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">
                                        [Project Preview Image]
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tall Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-purple-500/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Mobile</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Health</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Nova Health</h3>
                                <p className="text-zinc-400 mb-8">A calm, assistive companion app for patient monitoring.</p>

                                <div className="flex-1 rounded-xl bg-zinc-950/50 border border-white/5 overflow-hidden relative group-hover:translate-y-2 transition-transform duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">
                                        [Mobile UI Mockup]
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-pink-500/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">E-commerce</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Aero Store</h3>
                                    <p className="text-zinc-400 text-sm">High-conversion shopping experience.</p>
                                </div>
                                <Link to="/preview2/case-study">
                                    <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-pink-400">
                                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/10">Fintech</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Vault App</h3>
                                    <p className="text-zinc-400 text-sm">Secure crypto wallet management.</p>
                                </div>
                                <Link to="/preview2/case-study">
                                    <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-emerald-400">
                                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold mb-4">Expertise</h2>
                            <p className="text-zinc-400 text-sm">Tools and technologies I use to bring ideas to life.</p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <Card className="bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <CardHeader>
                                    <Layers className="h-8 w-8 text-indigo-400 mb-2" />
                                    <CardTitle className="text-lg">UX Strategy</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-zinc-400">
                                    User Research, Information Architecture, Journey Mapping, Usability Testing
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <CardHeader>
                                    <Palette className="h-8 w-8 text-pink-400 mb-2" />
                                    <CardTitle className="text-lg">UI Design</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-zinc-400">
                                    Design Systems, Visual Design, Prototyping, Motion Design, Accessibility
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <CardHeader>
                                    <Code2 className="h-8 w-8 text-emerald-400 mb-2" />
                                    <CardTitle className="text-lg">Development</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-zinc-400">
                                    HTML/CSS, React, Tailwind CSS, Webflow, Framer Motion
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
                    <p className="text-zinc-400 mb-8">
                        I'm currently available for freelance projects and full-time roles.
                        Let's discuss how we can work together.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200">
                            <Mail className="mr-2 h-4 w-4" /> Get in Touch
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-zinc-800 hover:bg-zinc-900">
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
                <p>© 2024 Luis Cabrera. Built with React, Tailwind & Framer Motion.</p>
            </footer>
        </div>
    );
}
