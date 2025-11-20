import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, Zap, Layout } from 'lucide-react';

export default function Preview4CaseStudy() {
    useEffect(() => {
        const navbar = document.querySelector('.preview-4-case-study .navbar');
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="preview-4-case-study min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-pink-500/30">
            {/* Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')"
            }}></div>

            {/* Navbar */}
            <nav className="navbar fixed top-0 left-0 w-full z-40 backdrop-blur-md transition-all duration-300 border-b border-white/10 bg-white/5 px-6 py-4 flex justify-between items-center">
                <Link to="/preview4" className="text-xl font-bold tracking-tighter hover:text-pink-500 transition-colors">AM.</Link>
                <Link to="/preview4" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
            </nav>

            <main className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
                {/* Hero */}
                <header className="mb-24 text-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-pink-400 mb-6 backdrop-blur-sm">
                        Fintech Dashboard
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0080] to-[#7928CA]">Neon Finance</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Redefining the decentralized finance experience with real-time data visualization and a glassmorphic interface.
                    </p>
                </header>

                {/* Main Visual */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-24 border border-white/10 shadow-2xl shadow-pink-500/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF0080]/20 to-[#7928CA]/20 mix-blend-overlay z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-[#111] z-0">
                        <span className="text-white/20 font-bold text-2xl">Project Hero Image</span>
                    </div>
                    {/* Glass Card Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-white/80">Total Volume</span>
                            <span className="text-xs text-green-400">+12.5%</span>
                        </div>
                        <div className="text-3xl font-bold mb-1">$2.4M</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-[#FF0080] to-[#7928CA]"></div>
                        </div>
                    </div>
                </div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                        <Layers className="text-pink-500 mb-4" size={24} />
                        <h3 className="text-lg font-bold mb-2">Role</h3>
                        <p className="text-white/60 text-sm">Lead UI/UX Designer & Frontend Developer</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                        <Zap className="text-purple-500 mb-4" size={24} />
                        <h3 className="text-lg font-bold mb-2">Stack</h3>
                        <p className="text-white/60 text-sm">React, D3.js, Web3.js, Framer Motion</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                        <Layout className="text-cyan-500 mb-4" size={24} />
                        <h3 className="text-lg font-bold mb-2">Timeline</h3>
                        <p className="text-white/60 text-sm">4 Weeks • Q3 2024</p>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold sticky top-32">The Challenge</h2>
                    </div>
                    <div className="md:col-span-8 space-y-6 text-lg text-white/70 leading-relaxed">
                        <p>
                            DeFi dashboards are often cluttered, intimidating, and difficult to navigate for newcomers. The primary challenge was to abstract the complexity of blockchain transactions into a clean, intuitive interface without sacrificing the depth of data required by power users.
                        </p>
                        <p>
                            We needed to visualize real-time gas fees, token swaps, and liquidity pool statuses in a way that felt instantaneous and responsive.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold sticky top-32">Design System</h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="aspect-square rounded-2xl bg-[#FF0080] flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(255,0,128,0.3)]">
                                Neon Pink
                            </div>
                            <div className="aspect-square rounded-2xl bg-[#7928CA] flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(121,40,202,0.3)]">
                                Deep Purple
                            </div>
                        </div>
                        <p className="text-lg text-white/70 leading-relaxed">
                            We utilized a dark mode-first approach with high-contrast neon accents to guide user attention. The "Glassmorphism" aesthetic was employed to create depth and hierarchy, allowing users to maintain context while interacting with modals and overlays.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="space-y-8 mb-24">
                    <div className="aspect-[16/9] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white/20 font-bold text-xl">
                        Dashboard View
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white/20 font-bold text-xl">
                            Mobile Wallet
                        </div>
                        <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white/20 font-bold text-xl">
                            Transaction Flow
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center border-t border-white/10 pt-20">
                    <h2 className="text-4xl font-bold mb-8">Ready to start a project?</h2>
                    <div className="flex justify-center gap-6">
                        <Link to="/preview4" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                            Back to Portfolio
                        </Link>
                        <a href="#" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md">
                            Contact Me
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
