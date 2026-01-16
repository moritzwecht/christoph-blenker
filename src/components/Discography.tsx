import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import SectionDivider from './SectionDivider';
import Image from 'next/image';

interface DiscographyItem {
    _id: string;
    title: string;
    description: string;
    cover: any;
    buttonText: string;
    emailSubject: string;
}

async function getDiscography() {
    const data = await client.fetch(`
        *[_type == "discography"]|order(orderRank) {
            _id,
            title,
            description,
            cover,
            buttonText,
            emailSubject
        }
    `);
    return data;
}

export default async function Discography() {
    const items: DiscographyItem[] = await getDiscography();

    if (!items || items.length === 0) return null;

    return (
        <section id="discography" className="section-padding bg-black text-white slant-bottom relative">
            <SectionDivider position="top" />
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-serif mb-16 text-left">Diskographie</h2>

                <div className="space-y-6">
                    {items.map((item) => (
                        <div key={item._id} className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                            {/* Left: Cover */}
                            <div className="w-full md:w-15 aspect-square relative flex-shrink-0 bg-zinc-900 rounded-full overflow-hidden">
                                {item.cover && (
                                    <Image
                                        src={urlFor(item.cover).url()}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 192px"
                                    />
                                )}
                            </div>

                            {/* Middle: Title & Description */}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </div>

                            {/* Right: Button */}
                            {item.buttonText && (
                                <div className="flex-shrink-0 mt-4 md:mt-0">
                                    <a
                                        href={`mailto:mail@christoph-blenker.de?subject=${encodeURIComponent(item.emailSubject || 'CD Bestellung')}`}
                                        className="inline-block px-8 py-3 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-zinc-200 transition-colors"
                                    >
                                        {item.buttonText || 'Bestellen'}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <SectionDivider position="bottom" />
        </section>
    );
}
