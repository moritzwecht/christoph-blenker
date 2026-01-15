'use client';

import { motion } from 'framer-motion';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
            const data = await client.fetch(`*[_type == "news"]{
                _id,
                title,
                image,
                text,
                link,
                linkText
            }`);
            setNews(data);
        };

        const fetchEvents = async () => {
            const data = await client.fetch(`*[_type == "event"] | order(date asc) {
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
        <section id="home" className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-serif"
                >
                    Christoph Blenker
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 text-xl uppercase tracking-[0.2em]"
                >
                    Musician & Composer
                </motion.p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((item, index) => (
                    <NewsCard key={item._id} item={item} index={index} />
                ))}
            </div>

            {/* Events Section */}
            {events.length > 0 && (
                <div className="mt-32 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-serif text-center text-white mb-16"
                    >
                        Termine
                    </motion.h2>

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
                                    <span className="text-sm text-gray-400 uppercase tracking-widest mb-1">
                                        {new Date(event.date).toLocaleDateString('de-DE', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </span>
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
                                            className="text-lg text-gray-300 hover:text-white transition-colors"
                                        >
                                            {event.locationName}
                                        </a>
                                    ) : (
                                        <span className="text-lg text-gray-300">
                                            {event.locationName}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
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
            className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
            {/* Image */}
            {item.image && (
                <div className="aspect-video w-full overflow-hidden relative">
                    <img
                        src={urlFor(item.image).width(800).height(450).url()}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-4 line-clamp-2">{item.title}</h3>

                {/* Text Preview - converting block content to string for preview */}
                <div className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                    {item.text?.map((block: any) =>
                        block.children?.map((child: any) => child.text).join('')
                    ).join(' ')}
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
            </div>
        </motion.div>
    );
}
