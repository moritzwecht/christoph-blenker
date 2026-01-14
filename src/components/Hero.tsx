'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left Side - Title */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
                    >
                        Christoph
                        <br />
                        Blenker
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-gray-400 text-lg uppercase tracking-widest"
                    >
                        Musician & Composer
                    </motion.p>
                </div>

                {/* Right Side - Content Feed */}
                <div className="md:w-2/3 space-y-24">
                    <ContentCard
                        title="Latest Performance"
                        subtitle="Live at Jazz Club"
                        type="video"
                    />
                    <ContentCard
                        title="Studio Session"
                        subtitle="Recording 'Night Lights'"
                        type="image"
                    />
                    <ContentCard
                        title="New Album"
                        subtitle="Available Now"
                        type="image"
                    />
                </div>
            </div>
        </section>
    );
}

function ContentCard({ title, subtitle, type }: { title: string, subtitle: string, type: 'video' | 'image' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
        >
            <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {/* Placeholder content */}
                    {type === 'video' ? 'Video Player Placeholder' : 'Image Placeholder'}
                </div>
            </div>
            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-blue-200 transition-colors">{title}</h3>
            <p className="text-gray-400 font-light">{subtitle}</p>
            <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                <span className="uppercase text-sm tracking-widest">Watch Now</span>
                <span className="text-xl">→</span>
            </div>
        </motion.div>
    );
}
