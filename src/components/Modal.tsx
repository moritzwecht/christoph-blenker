'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-600 bg-black/90 backdrop-blur-xl flex items-center justify-center overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="fixed top-6 right-6 p-3 rounded-full text-white/50 hover:text-white transition-colors z-50"
                        aria-label="Close modal"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full h-full p-6 md:p-12 overflow-y-auto">
                        <div className="max-w-4xl mx-auto pt-16 md:pt-0 min-h-full flex flex-col justify-center">
                            {title && (
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 font-serif text-center">
                                    {title}
                                </h2>
                            )}
                            <div className="text-zinc-300">
                                {children}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
