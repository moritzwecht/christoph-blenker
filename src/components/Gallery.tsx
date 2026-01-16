'use client';

import { useState, useEffect } from "react";
import { Masonry } from "react-plock";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import { SectionDivider, Heading } from './design-system';

interface GalleryImage {
    asset: any;
    alt?: string;
}

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const data = await client.fetch(`*[_type == "gallery"][0].images`);
            if (data) {
                setImages(data);
            }
        };
        fetchImages();
    }, []);

    if (!images || images.length === 0) return null;

    const slides = images.map(img => ({
        src: urlFor(img).url(),
        alt: img.alt,
        width: 1920, // Providing default dimensions for lightbox
        height: 1080
    }));

    return (
        <section id="gallery" className="section-padding relative bg-white text-gray-900 slant-both">
            <SectionDivider position="top" />
            <div className="px-4 md:px-8 max-w-[1200px] mx-auto">
                <Heading level="h2" className="text-left mb-16">Galerie</Heading>

                <Masonry
                    items={images}
                    config={{
                        columns: [1, 2, 3],
                        gap: [24, 24, 24],
                        media: [640, 768, 1024],
                    }}
                    render={(item, idx) => (
                        <div
                            key={item.asset._id || idx}
                            className="overflow-hidden rounded-sm cursor-pointer"
                            onClick={() => setIndex(images.indexOf(item))}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={urlFor(item).width(800).url()}
                                alt={item.alt || ""}
                                className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    )}
                />

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                />
            </div>
        </section>
    );
}
