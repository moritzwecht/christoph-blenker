'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Termine', href: '#dates' },
    { name: 'About', href: '#about' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Hörproben', href: '#audio' },
    { name: 'Discographie', href: '#discography' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Unterricht', href: '#lessons' },
    { name: 'Kontakt', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={clsx(
                    'fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300',
                    scrolled ? 'bg-white/10 backdrop-blur-md text-white' : 'text-gray-300 hover:text-white'
                )}
            >
                <Menu size={32} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-2xl font-serif text-white/80 hover:text-white hover:scale-105 transition-all"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
