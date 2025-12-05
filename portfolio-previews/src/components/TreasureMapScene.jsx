import React from 'react';
import { Compass } from 'lucide-react';

const TreasureMapScene = ({ scrollYProgress }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#0B0B15] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] to-[#0B0B15] opacity-50"></div>

            {/* Placeholder Visual */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-48 h-48 rounded-full border-2 border-[#eab308]/30 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.1)] bg-[#0B0B15]/50 backdrop-blur-sm relative">
                    {/* Inner Rings */}
                    <div className="absolute inset-4 rounded-full border border-[#eab308]/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-8 rounded-full border border-[#eab308]/10"></div>

                    <Compass className="w-20 h-20 text-[#eab308] opacity-80" />
                </div>
                <div className="text-center">
                    <p className="text-[#eab308] font-mono tracking-[0.3em] text-xs mb-2">HOLOGRAPHIC MAP</p>
                    <p className="text-[#eab308]/50 text-[10px] tracking-widest">SYSTEM INITIALIZING...</p>
                </div>
            </div>
        </div>
    );
};

export default TreasureMapScene;
