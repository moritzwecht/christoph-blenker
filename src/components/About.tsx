'use client';

import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
// import { urlFor } from '../sanity/lib/image'; // Unused now
import { PortableText } from '@portabletext/react';
import SanityImage from './SanityImage';

interface AboutData {
    headline: string;
    image: any;
    text: any[];
}

export default function About() {
    const [data, setData] = useState<AboutData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type == "about"][0]{
                headline,
                image {
                    ...,
                    asset->{
                        ...,
                        metadata
                    }
                },
                text
            }`);
            setData(result);
        };
        fetchData();
    }, []);

    if (!data) return null; // Or a loading skeleton

    return (
        <section id="about" className="py-24 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden relative">
                        {data.image && (
                            <SanityImage
                                image={data.image}
                                alt="Portrait"
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                cropRatio={3 / 4}
                            />
                        )}
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">{data.headline}</h2>
                        <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                            <PortableText
                                value={data.text}
                                components={{
                                    block: {
                                        normal: ({ children }) => <p className="mb-4">{children}</p>,
                                        h3: ({ children }) => <h3 className="text-xl font-bold mb-4 mt-8 text-black">{children}</h3>,
                                        h4: ({ children }) => <h4 className="text-lg font-bold mb-3 mt-6 text-black">{children}</h4>,
                                    },
                                    list: {
                                        bullet: ({ children }) => <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>,
                                    },
                                    marks: {
                                        strong: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
