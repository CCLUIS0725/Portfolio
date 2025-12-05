import React from 'react';
import { motion } from 'framer-motion';

const TrainerCard = ({ onBack }) => (
    <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="w-full h-full bg-blue-100 p-6 md:p-12 flex flex-col items-center justify-center relative"
    >
        <div className="w-full max-w-2xl bg-white border-4 border-[#2d2d2d] rounded-xl p-4 md:p-8 shadow-xl rotate-1 overflow-y-auto max-h-full">
            <div className="flex justify-between items-end border-b-4 border-[#2d2d2d] pb-4 md:pb-6 mb-6 md:mb-8">
                <div>
                    <h2 className="text-2xl md:text-4xl mb-2">TRAINER CARD</h2>
                    <div className="text-xs md:text-sm text-gray-500">IDNo. 12345</div>
                </div>
                <div className="text-lg md:text-2xl font-bold">NAME: ALEX</div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="w-24 h-32 md:w-32 md:h-40 bg-gray-200 border-2 border-gray-400 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                    <span className="text-xs">PHOTO</span>
                </div>
                <div className="flex-1 space-y-4 md:space-y-6 text-xs md:text-sm">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>MONEY</span>
                        <span>$999,999</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>POKEDEX</span>
                        <span>150</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span>TIME</span>
                        <span>99:59</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 border-t-4 border-[#2d2d2d] text-xs md:text-sm text-center text-gray-500">
                Gym Badges
                <div className="flex justify-center gap-2 md:gap-4 mt-4 flex-wrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border border-black"></div>
                    ))}
                </div>
            </div>
        </div>
        <button onClick={onBack} className="absolute bottom-2 md:bottom-12 text-xs md:text-sm hover:underline bg-white/80 p-2 rounded">[ESC] BACK</button>
    </motion.div>
);

export default TrainerCard;
