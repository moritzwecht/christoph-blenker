'use client';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[3/4] bg-gray-200 rounded-sm">
                        {/* Portrait Placeholder */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400">Portrait Image</div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">Über mich</h2>
                        <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                            <p>
                                Christoph Blenker is a versatile musician whose passion for sound consistently pushes the boundaries of genre. With a deep foundation in classical training and an ear for modern improvisation, he creates unique sonic landscapes.
                            </p>
                            <p>
                                Whether performing solo or collaborating with ensembles, his work reflects a dedication to authentic expression and technical mastery.
                            </p>

                            <div className="pt-8">
                                <h3 className="text-xl font-bold mb-4 text-black">Musical Career</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Studies at University of Music</li>
                                    <li>International Tours composed of Jazz & Classical Repertoire</li>
                                    <li>Workshops and Masterclasses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
