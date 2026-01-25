'use client';

import Link from 'next/link';
import SanityImage from './SanityImage';
import RichText from './RichText';
import { SectionDivider, Heading, Text, Label, Card, CardImage, CardContent } from './design-system';

interface NewsItem {
    _id: string;
    title: string;
    image: any;
    text: any[];
    link: string;
    linkText: string;
}

interface EventItem {
    _id: string;
    title: string;
    date: string;
    locationName: string;
    locationUrl: string;
}

interface HeroProps {
    news: NewsItem[];
    events: EventItem[];
}

export default function Hero({ news, events }: HeroProps) {
    return (
        <section className="section-padding relative min-h-screen flex flex-col justify-center">
            <SectionDivider position="bottom" />
            <div className="px-4 md:px-8 max-w-[1200px] mx-auto w-full relative z-10">
                {/* Header */}
                <div id="home" className="mb-15">
                    <div>
                        <Heading level="h1" className="text-6xl md:text-6xl text-white">
                            Christoph Blenker
                        </Heading>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <NewsCard key={item._id} item={item} />
                    ))}
                </div>

                {/* Events Section */}
                {events.length > 0 && (
                    <div id="dates" className="mt-32 mx-auto scroll-mt-32">
                        <div className="mb-16">
                            <Heading level="h2" className="text-left text-white">
                                Termine
                            </Heading>
                        </div>

                        <div className="space-y-12">
                            {events.map((event) => (
                                <div
                                    key={event._id}
                                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 border-b border-gray-800 pb-4"
                                >
                                    <div className="flex flex-col text-left">
                                        <Label className="text-gray-400 mb-1">
                                            {new Date(event.date).toLocaleDateString('de-DE', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                            })}
                                        </Label>
                                        <span className="text-2xl font-serif font-medium text-white">
                                            {event.title}
                                        </span>
                                    </div>

                                    <div className="md:text-right">
                                        {event.locationUrl ? (
                                            <a
                                                href={event.locationUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg text-gray-300 hover:text-white transition-colors font-light leading-relaxed"
                                            >
                                                {event.locationName}
                                            </a>
                                        ) : (
                                            <Text className="text-gray-300 text-lg">
                                                {event.locationName}
                                            </Text>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

function NewsCard({ item }: { item: NewsItem }) {
    return (
        <div className="h-full">
            <Card className="h-full">
                {/* Image */}
                {item.image && (
                    <CardImage className="aspect-video w-full">
                        <SanityImage
                            image={item.image}
                            alt={item.title}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            cropRatio={16 / 9}
                        />
                    </CardImage>
                )}

                {/* Content */}
                <CardContent>
                    <Text className="font-bold line-clamp-2">
                        {item.title}
                    </Text>

                    {/* Text Preview - converting block content to string for preview */}
                    <div className="text-gray-600 mb-2 line-clamp-3 leading-relaxed">
                        <RichText value={item.text} />
                    </div>

                    {/* Button */}
                    {item.link && (
                        <Link
                            href={item.link}
                            target='_blank'
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                        >
                            {item.linkText || 'Read More'}
                            <span className="text-lg">→</span>
                        </Link>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
