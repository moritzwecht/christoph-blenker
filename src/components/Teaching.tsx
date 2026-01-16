import { client } from '../sanity/lib/client';
import SectionDivider from './SectionDivider';
import RichText from './RichText';

interface TeachingData {
    headline: string;
    text: any[];
}

async function getTeachingData() {
    const data = await client.fetch(`
        *[_type == "teaching"][0] {
            headline,
            text
        }
    `);
    return data;
}

export default async function Teaching() {
    const data: TeachingData = await getTeachingData();

    if (!data) return null;

    return (
        <section id="teaching" className="section-padding bg-black text-white relative">
            <SectionDivider position="top" />
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-serif mb-16 text-left">{data.headline}</h2>

                <div className="text-lg font-light leading-relaxed text-zinc-700">
                    <RichText value={data.text} />
                </div>
            </div>
        </section>
    );
}
