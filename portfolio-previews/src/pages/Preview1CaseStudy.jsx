import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Preview1CaseStudy() {
    return (
        <div className="min-h-screen bg-[#202020] flex items-center justify-center p-4 md:p-8 font-['Press_Start_2P']">
            <div className="w-full max-w-4xl bg-[#f8f9fa] rounded-xl overflow-hidden shadow-2xl border-4 border-[#2d2d2d]">
                {/* Header */}
                <header className="bg-red-600 text-white p-6 border-b-4 border-[#8b0000] flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl drop-shadow-md">DATA ENTRY: 001</h1>
                    <Link to="/preview1" className="text-xs hover:underline flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> BACK
                    </Link>
                </header>

                {/* Content */}
                <div className="p-6 md:p-12 bg-[#f0f0f0]">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Column: Image */}
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-white border-4 border-[#2d2d2d] rounded-lg p-2 mb-4 shadow-lg">
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center animate-pulse">
                                    <span className="text-[10px] text-gray-500">IMG_001.PNG</span>
                                </div>
                            </div>
                            <div className="bg-white border-4 border-[#2d2d2d] p-4 rounded text-xs space-y-2">
                                <div className="flex justify-between">
                                    <span>HEIGHT</span>
                                    <span>2'04"</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>WEIGHT</span>
                                    <span>15.2lbs</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text */}
                        <div className="flex-1 space-y-8">
                            <div className="bg-white border-4 border-[#2d2d2d] p-6 rounded shadow-md relative">
                                <div className="absolute -top-3 left-4 bg-white px-2 text-xs border-2 border-[#2d2d2d]">DESCRIPTION</div>
                                <p className="text-xs leading-loose text-gray-700">
                                    EcoTrack is a mobile application designed to help users monitor their carbon footprint. It uses gamification to encourage sustainable habits.
                                </p>
                            </div>

                            <div className="bg-white border-4 border-[#2d2d2d] p-6 rounded shadow-md relative">
                                <div className="absolute -top-3 left-4 bg-white px-2 text-xs border-2 border-[#2d2d2d]">MOVESET (TECH STACK)</div>
                                <ul className="grid grid-cols-2 gap-4 text-xs mt-2">
                                    <li className="bg-green-100 p-2 border-2 border-green-500 text-green-800 text-center">REACT NATIVE</li>
                                    <li className="bg-blue-100 p-2 border-2 border-blue-500 text-blue-800 text-center">FIREBASE</li>
                                    <li className="bg-yellow-100 p-2 border-2 border-yellow-500 text-yellow-800 text-center">REDUX</li>
                                    <li className="bg-purple-100 p-2 border-2 border-purple-500 text-purple-800 text-center">NODE.JS</li>
                                </ul>
                            </div>

                            <div className="bg-[#2d2d2d] text-white p-6 rounded border-4 border-black text-center">
                                <h3 className="text-sm mb-4 text-yellow-400">EVOLUTION CHAIN</h3>
                                <div className="flex justify-center items-center gap-4 text-[10px]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                                        <span>v1.0</span>
                                    </div>
                                    <div className="text-gray-500">→</div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 bg-gray-500 rounded-full mb-2 border-2 border-white"></div>
                                        <span>v2.0</span>
                                    </div>
                                    <div className="text-gray-500">→</div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 bg-white text-black rounded-full mb-2 border-4 border-yellow-400 flex items-center justify-center font-bold">?</div>
                                        <span>v3.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
