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

export default function Hero() {
    const [news, setNews] = useState<NewsItem[]>([]);

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
        fetchNews();
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
