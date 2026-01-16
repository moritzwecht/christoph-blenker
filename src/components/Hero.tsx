'use client';

import { motion } from 'framer-motion';
import { client } from '../sanity/lib/client';
// import { urlFor } from '../sanity/lib/image';
import SanityImage from './SanityImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';
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

export default function Hero() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [events, setEvents] = useState<EventItem[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const data = await client.fetch(`*[_type == "news"]|order(orderRank){
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
            }`);
            setNews(data);
        };

        const fetchEvents = async () => {
            const data = await client.fetch(`*[_type == "event"]|order(orderRank){
                _id,
                title,
                date,
                locationName,
                locationUrl
            }`);
            setEvents(data);
        };

        fetchNews();
        fetchEvents();
    }, []);

    return (
        <section id="home" className="section-padding relative">
            <SectionDivider position="bottom" />
            <div className="px-4 md:px-8 max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-15">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading level="h1" className="text-6xl md:text-6xl text-white">
                            Christoph Blenker
                        </Heading>
                    </motion.div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <NewsCard key={item._id} item={item} index={index} />
                    ))}
                </div>

                {/* Events Section */}
                {events.length > 0 && (
                    <div className="mt-32 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div id="dates" className="scroll-mt-32 invisible h-0" />
                            <Heading level="h2" className="text-left text-white">
                                Termine
                            </Heading>
                        </motion.div>

                        <div className="space-y-12">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event._id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
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
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <Card className="group h-full">
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
                <CardContent className="p-4">
                    <Heading level="h3" className="mb-4 line-clamp-2">
                        {item.title}
                    </Heading>

                    {/* Text Preview - converting block content to string for preview */}
                    <div className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                        <RichText value={item.text} />
                    </div>

                    {/* Button */}
                    {item.link && (
                        <Link
                            href={item.link}
                            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-gray-900 border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                        >
                            {item.linkText || 'Read More'}
                            <span className="text-lg">→</span>
                        </Link>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
