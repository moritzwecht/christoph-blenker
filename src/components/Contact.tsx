import { Heading, Text, Section, Container } from './design-system';

export default function Contact() {
    return (

        <Section id="contact" background="bg-zinc-900" className="border-t border-zinc-800">
            <Container>
                <Heading level="h2" className="text-white mb-12">Kontakt</Heading>

                <div className="space-y-6">
                    <Text className="text-gray-400">
                        <strong className="text-white block mb-1">Christoph Blenker</strong>
                        Music Road 123<br />
                        12345 City, Country
                    </Text>

                    <Text className="text-gray-400">
                        <strong className="text-white block mb-1">Booking & Management</strong>
                        <a href="mailto:info@christoph-blenker.de" className="hover:text-white transition-colors">info@christoph-blenker.de</a>
                        <br />
                        +49 123 456 789
                    </Text>
                </div>
            </Container>
        </Section>
    );

}
