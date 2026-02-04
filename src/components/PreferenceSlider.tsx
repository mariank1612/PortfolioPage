import React, { useState, useRef } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { Sparkles, type LucideIcon } from 'lucide-react';
import type { PreferenceSliderProps } from '../types';

const PreferenceSlider: React.FC<PreferenceSliderProps> = ({
    label,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    myPreferenceValue,
    accentColor = '#00f0ff',
    revealImage: initialRevealImage,
    revealLabel = "My Choice"
}) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [matchScore, setMatchScore] = useState<number | null>(null);
    const [currentRevealImage, setCurrentRevealImage] = useState<string | undefined>(initialRevealImage);
    const constraintsRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const calculateValueFromX = () => {
        if (!constraintsRef.current || !pinRef.current) return 0;
        const trackRect = constraintsRef.current.getBoundingClientRect();
        const pinRect = pinRef.current.getBoundingClientRect();
        const pinCenter = pinRect.left + pinRect.width / 2;
        const percentage = ((pinCenter - trackRect.left) / trackRect.width) * 100;
        return Math.round(Math.min(Math.max(percentage, 0), 100));
    };

    const handleDragEnd = () => {
        const val = calculateValueFromX();
        const score = 100 - Math.abs(val - myPreferenceValue);
        setMatchScore(score);
        setIsRevealed(true);
    };

    const handleReset = () => {
        setIsRevealed(false);
        setMatchScore(null);
        x.set(0);
    };

    return (
        <div className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all duration-700 hover:border-white/10">
            <div className="flex justify-between items-start mb-32">
                <h3 className="text-xl font-light tracking-tight text-slate-200 group-hover:text-white transition-colors duration-500">
                    {label}
                </h3>
                {isRevealed && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={handleReset}
                        className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none py-1"
                    >
                        Reset
                    </motion.button>
                )}
            </div>

            <div className="relative h-20 flex items-center gap-8 px-2">
                <div className="text-slate-500 group-hover:text-slate-300 transition-colors duration-500 shrink-0">
                    <LeftIcon size={26} strokeWidth={1.2} />
                </div>

                <div className="relative flex-1 h-[1px] bg-slate-800" ref={constraintsRef}>
                    {/* Active Track Glow */}
                    <div
                        className="absolute inset-0 opacity-30 blur-md transition-all duration-500"
                        style={{ backgroundColor: accentColor, height: '2px', top: '-0.5px' }}
                    />

                    {/* Central Drag Me Text */}
                    <AnimatePresence>
                        {!isRevealed && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                /* Added pl-[0.4em] to offset the tracking-[0.4em] of the last character for perfect visual centering */
                                className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold tracking-[0.4em] pl-[0.4em] text-white/30 uppercase pointer-events-none"
                            >
                                Drag Me
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Draggable Handle */}
                    <motion.div
                        ref={pinRef}
                        drag="x"
                        dragConstraints={constraintsRef}
                        dragElastic={0.1}
                        dragMomentum={false}
                        onDragEnd={handleDragEnd}
                        style={{ x, y: "-50%" }}
                        className="absolute left-1/2 top-1/2 z-30 cursor-grab active:cursor-grabbing"
                    >
                        <div className="w-10 h-10 -ml-5 flex items-center justify-center rounded-full bg-[#111729] border border-white/20 shadow-xl transition-transform hover:scale-110 active:scale-95">
                            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                        </div>
                    </motion.div>

                    {/* Revealed Secret Marker */}
                    <AnimatePresence>
                        {isRevealed && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: "-50%" }}
                                animate={{ opacity: 1, scale: 1, y: "-50%" }}
                                className="absolute top-1/2 z-20"
                                style={{ left: `${myPreferenceValue}%` }}
                            >
                                {currentRevealImage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: -130 }}
                                        transition={{ type: "spring", damping: 12, stiffness: 100 }}
                                        className="absolute left-0 -translate-x-1/2 flex flex-col items-center"
                                    >
                                        <div className="relative w-28 h-28 rounded-2xl border border-white/10 shadow-2xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                            <img src={currentRevealImage} alt="Reveal" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] font-bold text-white/90 uppercase tracking-widest">
                                                {revealLabel}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div
                                    className="w-10 h-10 -ml-5 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/20 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                >
                                    <Sparkles size={16} className="text-cyan-400" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="text-slate-500 group-hover:text-slate-300 transition-colors duration-500 shrink-0">
                    <RightIcon size={26} strokeWidth={1.2} />
                </div>
            </div>

            <div className={`transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'} min-h-[32px]`}>
                <div className="flex flex-col items-center justify-center pt-2 pb-2">
                    <div className="text-lg font-light tracking-tight text-white">
                        {matchScore !== null ? matchScore : 0}% <span className="text-sm tracking-normal text-slate-500 font-light ml-1">Accuracy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreferenceSlider;
