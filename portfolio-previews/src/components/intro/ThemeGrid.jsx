import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../ui/Icon';

const ThemeGrid = ({ themes, activeIndex, onSelect, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-xl overflow-y-auto p-8 md:p-16"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-white">All Themes</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                        <Icons.X size={24} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {themes.map((theme, index) => (
                        <motion.button
                            key={theme.id}
                            onClick={() => onSelect(index)}
                            className={`group relative aspect-video rounded-xl overflow-hidden border-2 text-left transition-all ${
                                index === activeIndex ? 'border-white scale-[1.02]' : 'border-white/10 hover:border-white/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <img 
                                src={theme.previewImage} 
                                alt={theme.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-xs font-mono text-white/60 mb-1">0{index + 1}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{theme.title}</h3>
                                <p className="text-sm text-white/70 line-clamp-1">{theme.description}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ThemeGrid;
