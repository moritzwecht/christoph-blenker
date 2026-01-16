import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { Heading, Text, SectionDivider } from './design-system';

interface DiscographyItem {
    _id: string;
    title: string;
    description: string;
    cover: any;
    buttonText: string;
    emailAddress: string;
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
            emailAddress,
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
                <Heading level="h2">Diskographie</Heading>

                <div className="space-y-6">
                    {items.map((item) => (
                        <div key={item._id} className="flex flex-col md:flex-row gap-2 items-start md:items-center border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                            {/* Left: Cover */}
                            <div className="w-12 md:w-15 aspect-square relative shrink-0 rounded-full overflow-hidden">
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
                            <div className="grow">
                                <Text className="text-xl font-semibold">{item.title}</Text>
                                <Text className="text-zinc-400 max-w-2xl">
                                    {item.description}
                                </Text>
                            </div>

                            {/* Right: Button */}
                            {item.buttonText && (
                                <div className="shrink-0">
                                    <a
                                        href={`mailto:${item.emailAddress}?subject=${encodeURIComponent(item.emailSubject || 'CD Bestellung')}`}
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
