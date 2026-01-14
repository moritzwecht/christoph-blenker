'use client';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif text-white mb-12">Kontakt</h2>

                <div className="space-y-6 text-gray-400 font-light text-lg">
                    <p>
                        <strong className="text-white block mb-1">Christoph Blenker</strong>
                        Music Road 123<br />
                        12345 City, Country
                    </p>

                    <p>
                        <strong className="text-white block mb-1">Booking & Management</strong>
                        <a href="mailto:info@christoph-blenker.de" className="hover:text-white transition-colors">info@christoph-blenker.de</a>
                        <br />
                        +49 123 456 789
                    </p>
                </div>
            </div>
        </section>
    );
}
