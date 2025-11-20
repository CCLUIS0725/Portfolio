import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Heart, Cloud, Music, Coffee, Sun, ShoppingBag, Users, Star } from 'lucide-react';

const Blob = ({ className }) => (
    <svg viewBox="0 0 200 200" className={`absolute w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,89.1,-2.9C88.1,12.3,83.5,27.1,75.4,40.5C67.3,53.9,55.7,65.9,42.4,73.9C29.1,81.9,14.1,85.9,-0.4,86.6C-14.9,87.3,-29.4,84.7,-42.4,77.1C-55.4,69.5,-66.9,56.9,-75.6,42.6C-84.3,28.3,-90.2,12.3,-89.1,-3.1C-88,-18.5,-79.9,-33.3,-69.3,-45.3C-58.7,-57.3,-45.6,-66.5,-32.1,-74.2C-18.6,-81.9,-4.7,-88.1,4.9,-96.6L14.5,-105.1Z" transform="translate(100 100)" />
    </svg>
);

export default function Preview8CaseStudy() {
    return (
        <div className="preview-8-case-study min-h-screen bg-[#FFF0F5] text-[#4A4A4A] font-sans selection:bg-[#FFB6C1] selection:text-white overflow-hidden">
            {/* Background Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] text-[#FFD1DC] opacity-50 animate-blob">
                    <Blob />
                </div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] text-[#E0F7FA] opacity-50 animate-blob animation-delay-2000">
                    <Blob />
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg shadow-pink-100/50 border border-white flex items-center gap-4">
                <Link to="/preview8" className="text-2xl hover:scale-110 transition-transform">🌸</Link>
                <Link to="/preview8" className="flex items-center gap-2 font-bold text-sm text-[#666] hover:text-[#FF6B6B] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Fun
                </Link>
            </nav>

            <main className="relative z-10 pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Hero */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="inline-block mb-6 px-6 py-2 bg-[#FFF9C4] text-[#FBC02D] font-bold rounded-full text-sm shadow-sm rotate-[-2deg]"
                        >
                            Case Study: E-Commerce
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2D3436] tracking-tight">
                            The Candy <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-[#FF6B6B]">Shop</span>
                                <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FFD93D] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-[#666] max-w-2xl mx-auto leading-relaxed font-medium">
                            Designing a delightful shopping experience for a boutique candy store. Sweet, colorful, and easy to use! 🍬
                        </p>
                    </div>

                    {/* Main Visual */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-20 relative"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 text-[#FFD1DC] animate-bounce delay-700">
                            <Blob />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 text-[#E0F7FA] animate-bounce delay-1000">
                            <Blob />
                        </div>

                        <div className="bg-white rounded-[3rem] p-4 shadow-2xl shadow-pink-100 rotate-1 border-4 border-white relative z-10">
                            <div className="aspect-video bg-[#FFD1DC] rounded-[2.5rem] flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ShoppingBag className="w-32 h-32 text-white opacity-50" />
                                </div>
                                <div className="absolute bottom-8 right-8 bg-white px-6 py-3 rounded-2xl font-bold text-[#FF6B6B] shadow-lg rotate-[-3deg]">
                                    Sweet UI! 🍭
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-pink-50 border-2 border-white">
                            <Users className="w-8 h-8 text-[#A78BFA] mb-4" />
                            <h3 className="text-xl font-bold text-[#2D3436] mb-1">Role</h3>
                            <p className="text-[#666] font-medium">UI/UX Designer</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-pink-50 border-2 border-white">
                            <Coffee className="w-8 h-8 text-[#FF8E53] mb-4" />
                            <h3 className="text-xl font-bold text-[#2D3436] mb-1">Timeline</h3>
                            <p className="text-[#666] font-medium">2 Weeks (Fueled by Coffee)</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-pink-50 border-2 border-white">
                            <Star className="w-8 h-8 text-[#FFD93D] mb-4" />
                            <h3 className="text-xl font-bold text-[#2D3436] mb-1">Outcome</h3>
                            <p className="text-[#666] font-medium">200% More Sales!</p>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-3xl font-black text-[#2D3436] sticky top-32">
                                The Challenge 🧐
                            </h2>
                        </div>
                        <div className="md:col-span-8 text-lg text-[#666] leading-relaxed space-y-6 font-medium">
                            <p>
                                The original website was boring and gray. It didn't reflect the joy of eating candy! Users were leaving because the site felt corporate and cold.
                            </p>
                            <p>
                                We needed to inject fun, color, and personality into every interaction without sacrificing usability.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        <div className="md:col-span-4">
                            <h2 className="text-3xl font-black text-[#2D3436] sticky top-32">
                                The Solution 💡
                            </h2>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            {[
                                "Used a vibrant pastel color palette to evoke sweetness",
                                "Added playful micro-interactions on hover and click",
                                "Designed custom blob shapes for organic feel",
                                "Simplified checkout process to be as easy as eating candy"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border-2 border-[#F0F0F0]"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#4ECDC4] font-bold">
                                        {i + 1}
                                    </div>
                                    <span className="text-[#4A4A4A] font-bold text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="space-y-12 mb-20">
                        <div className="bg-[#FFF9C4] p-4 rounded-[3rem] shadow-lg rotate-1">
                            <div className="aspect-[16/9] bg-white rounded-[2.5rem] flex items-center justify-center text-[#FBC02D] font-bold text-xl">
                                Homepage Design
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#E0F7FA] p-4 rounded-[3rem] shadow-lg rotate-[-1deg]">
                                <div className="aspect-[4/5] bg-white rounded-[2.5rem] flex items-center justify-center text-[#4ECDC4] font-bold text-xl">
                                    Mobile Menu
                                </div>
                            </div>
                            <div className="bg-[#FFD1DC] p-4 rounded-[3rem] shadow-lg rotate-1">
                                <div className="aspect-[4/5] bg-white rounded-[2.5rem] flex items-center justify-center text-[#FF6B6B] font-bold text-xl">
                                    Product Card
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-[#FF6B6B] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-red-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 text-white opacity-10">
                            <Blob />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8">Want a site like this?</h2>
                            <p className="text-xl mb-10 font-medium opacity-90">
                                Let's make the internet fun again, together!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link to="/preview8" className="px-8 py-4 bg-white text-[#FF6B6B] text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                    Back to Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
