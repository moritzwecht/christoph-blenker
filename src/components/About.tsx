'use client';

import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
// import { urlFor } from '../sanity/lib/image'; // Unused now
import RichText from './RichText';
import SanityImage from './SanityImage';
import { Heading, Section, Container } from './design-system';

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

        <Section id="about" background="bg-white" className="text-gray-900" slant="both" dividerTop>
            <Container>
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
                        <Heading level="h2" className="mb-8">{data.headline}</Heading>
                        <div className="text-lg font-light leading-relaxed text-gray-600">
                            <RichText value={data.text} />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );

}
