'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-8 border-t border-zinc-900 text-center">
            <div className="max-w-[1200px] mx-auto px-4 text-zinc-500 text-sm">
                <p>&copy; {currentYear} Christoph Blenker. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="/impressum" className="hover:text-zinc-300 transition-colors">Impressum</a>
                    <a href="/datenschutz" className="hover:text-zinc-300 transition-colors">Datenschutz</a>
                </div>
            </div>
        </footer>
    );
}
