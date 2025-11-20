import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, Layout, Smartphone, Globe } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Preview5() {
    return (
        <div className="preview-5 min-h-screen bg-[#F3F4F6] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F3F4F6]/80 backdrop-blur-md border-b border-white/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                        Smooth.
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
                        <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
                        <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
                        <a href="#contact" className="px-5 py-2.5 bg-white rounded-full shadow-sm text-indigo-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="text-center space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-indigo-600 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Available for new projects
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Crafting digital <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">experiences</span> that feel right.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            I'm a product designer focusing on micro-interactions and clean aesthetics.
                            I help startups build software that is easy to use and beautiful to look at.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a href="#work" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Layout className="w-6 h-6" />, title: "UI Design", desc: "Clean, modern interfaces that prioritize usability and aesthetics." },
                            { icon: <Smartphone className="w-6 h-6" />, title: "Mobile First", desc: "Responsive designs that look perfect on every device screen." },
                            { icon: <Zap className="w-6 h-6" />, title: "Interaction", desc: "Subtle animations and transitions that bring the interface to life." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Work */}
            <section id="work" className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Selected Work</h2>
                            <p className="text-slate-600">Some of my favorite projects from the last year.</p>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all">
                            View all projects <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="space-y-20">
                        {[
                            { title: "Fintech Dashboard", category: "Product Design", color: "bg-blue-50" },
                            { title: "Travel App", category: "Mobile App", color: "bg-orange-50" },
                            { title: "Lifestyle Brand", category: "Web Design", color: "bg-green-50" }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center cursor-pointer"
                            >
                                <Link to="/preview5/case-study" className={`aspect-[4/3] ${project.color} rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100/50 transition-all duration-500 order-1 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                    {/* Placeholder for project image */}
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <Layers className="w-16 h-16 opacity-50" />
                                    </div>
                                </Link>
                                <div className={`order-2 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <span className="text-indigo-600 font-medium mb-2 block">{project.category}</span>
                                    <Link to="/preview5/case-study">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6 hover:text-indigo-600 transition-colors">{project.title}</h3>
                                    </Link>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        A comprehensive design overhaul focusing on user engagement and retention.
                                        We simplified the core flows and introduced a new visual language.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {["React", "Tailwind", "Framer Motion"].map((tag) => (
                                            <span key={tag} className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-medium text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-32 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-white shadow-2xl shadow-indigo-300"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your project?</h2>
                        <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
                            I'm currently available for freelance work. Let's build something amazing together.
                        </p>
                        <a href="mailto:hello@example.com" className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>

            <footer className="py-12 text-center text-slate-500 text-sm">
                <p>© 2024 Portfolio Preview. Built with Smooth UI concepts.</p>
            </footer>
        </div>
    );
}
