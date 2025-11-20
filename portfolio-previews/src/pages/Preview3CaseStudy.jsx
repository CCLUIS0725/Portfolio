import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Preview3CaseStudy() {
    return (
        <div className="preview-3 min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-orange-500/30">
            {/* Dynamic Island Header */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    className="bg-black/90 backdrop-blur-xl text-white rounded-full px-2 py-2 flex items-center gap-4 shadow-2xl"
                >
                    <Link to="/preview3" className="p-2 hover:bg-white/20 rounded-full transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-semibold pr-4">Case Study</span>
                </motion.div>
            </div>

            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6">
                        Mobile Application
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        Reimagining the <br /> <span className="text-orange-500">Travel Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed">
                        A comprehensive redesign of the booking flow for a leading travel agency, focusing on personalization and seamless discovery.
                    </p>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-video bg-neutral-200 rounded-[40px] mb-20 overflow-hidden relative shadow-2xl"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-bold text-2xl">
                        Hero Image Placeholder
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-neutral-200 py-12">
                    <div>
                        <div className="text-xs font-bold text-neutral-400 uppercase mb-2">Role</div>
                        <div className="font-semibold">Product Designer</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-neutral-400 uppercase mb-2">Timeline</div>
                        <div className="font-semibold">3 Months</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-neutral-400 uppercase mb-2">Platform</div>
                        <div className="font-semibold">iOS & Android</div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-neutral-400 uppercase mb-2">Outcome</div>
                        <div className="font-semibold text-orange-500">4.9 App Rating</div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-bold mb-4 sticky top-32">The Problem</h3>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            Users were abandoning the booking process at a rate of 65% due to a complex checkout flow and lack of transparent pricing. The goal was to simplify the journey and build trust through clarity.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm font-bold mt-0.5">!</div>
                                <span className="text-neutral-600">High drop-off at payment step</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm font-bold mt-0.5">!</div>
                                <span className="text-neutral-600">Confusing fee structure</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-px bg-neutral-200 my-20"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-bold mb-4 sticky top-32">The Solution</h3>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            We introduced a "Smart Itinerary" feature that dynamically updates based on user preferences. We also redesigned the payment flow to be a single-page experience with clear cost breakdowns.
                        </p>
                        <div className="bg-neutral-100 rounded-3xl p-8 mb-8">
                            <h4 className="font-bold mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="font-bold mb-1">One-Tap Booking</div>
                                    <div className="text-sm text-neutral-500">Streamlined checkout</div>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="font-bold mb-1">Price Freeze</div>
                                    <div className="text-sm text-neutral-500">Hold rates for 24h</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    <div className="aspect-[9/16] bg-neutral-100 rounded-[32px] flex items-center justify-center text-neutral-400 font-bold">Mobile Screen 1</div>
                    <div className="aspect-[9/16] bg-neutral-100 rounded-[32px] flex items-center justify-center text-neutral-400 font-bold">Mobile Screen 2</div>
                </div>

                {/* Footer */}
                <div className="bg-black text-white rounded-[40px] p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Next Project</h2>
                    <p className="text-neutral-400 mb-8">Explore more of my work.</p>
                    <Link to="/preview3" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors">
                        Back to Portfolio <ArrowLeft className="rotate-180" size={20} />
                    </Link>
                </div>

            </main>
        </div>
    );
}
