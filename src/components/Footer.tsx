import { Container } from './design-system';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black pt-24 pb-8 border-t border-zinc-900 text-sm">
            <Container>
                <div className="grid md:grid-cols-2 gap-8 text-zinc-400 text-base leading-relaxed">
                    {/* Column 1: Address */}
                    <div>
                        <p className="text-white font-medium mb-1">Christoph Blenker</p>
                        <p>Hofstraße 56a</p>
                        <p>48712 Gescher</p>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <p><a href="tel:02542953373" className="hover:text-white transition-colors">02542 953373</a></p>
                        <p><a href="tel:01782177645" className="hover:text-white transition-colors">0178 2177645</a></p>
                        <p><a href="mailto:mail@christoph-blenker.de" className="hover:text-white transition-colors">mail@christoph-blenker.de</a></p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
                    <p>&copy; {currentYear} Christoph Blenker. All rights reserved.</p>
                    <div className="space-x-6">
                        <a href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</a>
                        <a href="/datenschutz" className="hover:text-zinc-400 transition-colors">Datenschutz</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
