export default function Impressum() {
    return (
        <div className="space-y-8 text-zinc-300">
            <section className="space-y-4">
                <h3 className="text-xl font-bold text-white">Angaben gemäß § 5 TMG</h3>
                <p>
                    Christoph Blenker<br />
                    Hofstraße 56a<br />
                    48712 Gescher
                </p>
            </section>

            <section className="space-y-4">
                <h3 className="text-xl font-bold text-white">Kontakt</h3>
                <p>
                    Telefon: 02542-953373<br />
                    E-Mail: <a href="mailto:mail@christoph-blenker.de" className="hover:text-white transition-colors">mail@christoph-blenker.de</a>
                </p>
            </section>

            <section className="space-y-4">
                <h3 className="text-xl font-bold text-white">Redaktionell verantwortlich</h3>
                <p>
                    Christoph Blenker<br />
                    Hofstraße 56a<br />
                    48712 Gescher
                </p>
            </section>

            <section className="space-y-4">
                <h3 className="text-xl font-bold text-white">EU-Streitschlichtung</h3>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://ec.europa.eu/consumers/odr/</a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </section>

            <section className="space-y-4">
                <h3 className="text-xl font-bold text-white">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </div>
    );
}
