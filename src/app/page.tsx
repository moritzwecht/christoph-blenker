import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Samples from "@/components/Samples";
import Gallery from "@/components/Gallery";
import Discography from "@/components/Discography";
import Teaching from "@/components/Teaching";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const [news, events, projects] = await Promise.all([
    client.fetch(`*[_type == "news"]|order(orderRank){
        _id,
        title,
        image {
            ...,
            asset->{
                ...,
                metadata
            }
        },
        text,
        link,
        linkText
    }`, {}, { next: { revalidate: 3600 } }),
    client.fetch(`*[_type == "event"]|order(orderRank){
        _id,
        title,
        date,
        locationName,
        locationUrl
    }`, {}, { next: { revalidate: 3600 } }),
    client.fetch(`*[_type == "project"]{
        _id,
        title,
        image {
            ...,
            asset->{
                ...,
                metadata
            }
        },
        description,
        members,
        websiteUrl,
        socialLinks
    }`, {}, { next: { revalidate: 3600 } })
  ]);

  return (
    <main className="min-h-screen relative">
      <HeroBackground />
      <Navigation />

      <Hero news={news} events={events} />

      <About />

      <Projects projects={projects} />

      <Samples />

      <Discography />

      <Gallery />

      <Teaching />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://christoph-blenker.de/#person',
                name: 'Christoph Blenker',
                jobTitle: ['Musician', 'Music Teacher'],
                url: 'https://christoph-blenker.de',
                image: 'https://christoph-blenker.de/icon.png',
                sameAs: [
                  // Add social profiles here if available globally, e.g. from a settings query
                ]
              },
              ...events.map((event: any) => ({
                '@type': 'Event',
                name: event.title,
                startDate: event.date,
                eventStatus: 'https://schema.org/EventScheduled',
                location: {
                  '@type': 'Place',
                  name: event.locationName,
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: event.locationName // Fallback since we only have name
                  }
                },
                offers: {
                  '@type': 'Offer',
                  url: event.locationUrl
                }
              }))
            ]
          })
        }}
      />
    </main>
  );
}
