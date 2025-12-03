import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemBoot = ({ onComplete }) => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        // Step 1: Welcome (3s) -> Step 2
        const timer1 = setTimeout(() => {
            setStep(2);
        }, 3000);

        // Step 2: Themes (3s) -> Step 3
        const timer2 = setTimeout(() => {
            setStep(3);
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.5, ease: "easeIn" } }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black text-white font-sans flex flex-col items-center justify-center p-8 text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.h1
                        key="step1"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-3xl md:text-5xl font-light tracking-wide"
                    >
                        Welcome to my portfolio!
                    </motion.h1>
                )}

                {step === 2 && (
                    <motion.h1
                        key="step2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-3xl md:text-5xl font-light tracking-wide"
                    >
                        I created this portfolio with <span className="font-bold text-blue-400">THEMES</span>
                    </motion.h1>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center gap-8"
                    >
                        <h1 className="text-3xl md:text-5xl font-light tracking-wide">
                            Lets take a look on that
                        </h1>
                        <motion.button
                            onClick={onComplete}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Check Interfaces
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SystemBoot;
