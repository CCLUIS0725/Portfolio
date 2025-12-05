import React from 'react';

const ScreenContainer = ({ children, className = "" }) => (
    <div className={`w-full h-full bg-[#f8f9fa] relative overflow-hidden font-['Press_Start_2P'] text-[#2d2d2d] ${className}`}>
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] opacity-20"></div>
        {children}
    </div>
);

export default ScreenContainer;
