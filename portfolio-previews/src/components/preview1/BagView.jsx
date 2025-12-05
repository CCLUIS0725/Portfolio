import React from 'react';
import { motion } from 'framer-motion';

const BagView = ({ onBack }) => (
    <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        className="w-full h-full bg-[#f0f0f0] flex flex-col md:flex-row"
    >
        <div className="w-full md:w-1/3 bg-[#4a90e2] text-white p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#2d2d2d] flex flex-row md:flex-col items-center justify-between md:justify-start md:pt-16 shrink-0">
            <div className="flex items-center gap-4 md:block md:text-center">
                <div className="w-16 h-16 md:w-32 md:h-32 bg-white/20 rounded-full md:mb-6 border-4 border-white flex items-center justify-center">
                    BAG
                </div>
                <div className="md:hidden font-bold text-xl">ITEM BAG</div>
            </div>

            <div className="text-center text-sm space-y-4 md:mt-6 hidden md:block">
                <div className="bg-[#2d2d2d] px-6 py-3 rounded">ITEMS</div>
                <div className="opacity-50">KEY ITEMS</div>
                <div className="opacity-50">POKEBALLS</div>
            </div>
        </div>
        <div className="flex-1 p-6 md:p-12 bg-white overflow-y-auto">
            <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 border-b-4 border-gray-200 pb-4">ITEMS POCKET</h2>
            <ul className="space-y-4 md:space-y-6 text-xs md:text-sm">
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        REACT.JS
                    </span>
                    <span>x99</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        TAILWIND
                    </span>
                    <span>x50</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        JAVASCRIPT
                    </span>
                    <span>x75</span>
                </li>
                <li className="flex justify-between hover:bg-gray-100 p-3 cursor-pointer">
                    <span className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        NODE.JS
                    </span>
                    <span>x20</span>
                </li>
            </ul>
            <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gray-100 rounded border-2 border-gray-300 text-xs">
                A JavaScript library for building user interfaces. Highly effective.
            </div>
        </div>
        <button onClick={onBack} className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-xs md:text-sm hover:underline bg-white/80 p-2 rounded">[ESC] BACK</button>
    </motion.div>
);

export default BagView;
