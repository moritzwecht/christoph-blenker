import { client } from '../sanity/lib/client';
import RichText from './RichText';
import { Heading, Section, Container } from './design-system';

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

        <Section id="teaching" background="bg-amber-100" className="text-zinc-950" slant="bottom" dividerTop dividerBottom>
            <Container>
                <Heading level="h2" className="text-left">{data.headline}</Heading>

                <div className="text-lg font-light leading-relaxed text-zinc-950">
                    <RichText value={data.text} />
                </div>
            </Container>
        </Section>
    );

}
