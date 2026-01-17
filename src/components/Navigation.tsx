'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { name: 'News', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Hörproben', href: '#samples' },
    { name: 'Diskographie', href: '#discography' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Unterricht', href: '#teaching' },
    { name: 'Kontakt', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Scroll Spy using explicit positions for maximum reliability
    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            // Target line is 35% down the screen
            const indicatorPosition = scrollPosition + (windowHeight * 0.35);
            setScrolled(scrollPosition > 50);

            // Get all sections
            const sections = navItems.map(item => {
                const id = item.href.replace('#', '');
                const element = document.getElementById(id);
                if (!element) return null;
                return {
                    id: item.href.replace('#', ''),
                    offsetTop: element.offsetTop,
                    offsetHeight: element.offsetHeight
                };
            }).filter((section): section is { id: string, offsetTop: number, offsetHeight: number } => section !== null);

            // Find the section that contains the indicator position
            let currentSection = sections[0]?.id || 'home';

            for (const section of sections) {
                if (indicatorPosition >= section.offsetTop && indicatorPosition < (section.offsetTop + section.offsetHeight)) {
                    currentSection = section.id;
                    break;
                }
            }

            // Special case: if we are at the very bottom of the page, activate the last item (Contact)
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                const lastSection = sections[sections.length - 1];
                if (lastSection) currentSection = lastSection.id;
            }

            setActiveSection(currentSection);
        };

        // Initial check
        handleScrollSpy();

        window.addEventListener('scroll', handleScrollSpy);
        // Also listen to resize in case offsets change
        window.addEventListener('resize', handleScrollSpy);

        return () => {
            window.removeEventListener('scroll', handleScrollSpy);
            window.removeEventListener('resize', handleScrollSpy);
        };
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            // Offset for the fixed header height (approx 80px)
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed top-0 left-0 right-0 z-500 bg-black items-center justify-center">
                <div className="flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={clsx(
                                    "relative px-4 py-4 text-sm uppercase tracking-widest font-medium transition-colors z-10",
                                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <div
                                        className="absolute inset-0 bg-gray-800 border-b-2 border-white -z-10"
                                    />
                                )}
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Menu Button - Hide on Tablet/Desktop since we have the bar */}
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className={clsx(
                    'fixed top-6 right-6 z-500 p-3 rounded-full transition-all duration-300 md:hidden',
                    scrolled ? 'bg-black/40 backdrop-blur-md text-white' : 'text-gray-300 hover:text-white'
                )}
            >
                <Menu size={32} />
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-600 bg-black/90 backdrop-blur-xl flex items-center justify-center md:hidden"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-6 right-6 p-3 rounded-full text-white/50 hover:text-white transition-colors"
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
                </div>
            )}
        </>
    );
}
