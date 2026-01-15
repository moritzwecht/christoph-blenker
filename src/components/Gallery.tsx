'use client';

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Placeholder photos - replace with real images later
const photos = [
    { src: "https://picsum.photos/800/600?random=1", width: 800, height: 600 },
    { src: "https://picsum.photos/1600/900?random=2", width: 1600, height: 900 },
    { src: "https://picsum.photos/800/1200?random=3", width: 800, height: 1200 },
    { src: "https://picsum.photos/1200/800?random=4", width: 1200, height: 800 },
    { src: "https://picsum.photos/800/800?random=5", width: 800, height: 800 },
    { src: "https://picsum.photos/600/900?random=6", width: 600, height: 900 },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <section id="gallery" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Galerie</h2>

            <PhotoAlbum
                layout="rows"
                photos={photos}
                onClick={({ index }) => setIndex(index)}
                rowConstraints={{ maxPhotos: 3 }}
            /* componentsProps={{
                imageProps: {
                    className: "grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer rounded-sm"
                }
            }} */
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos.map(photo => ({ src: photo.src }))}
            />
        </section>
    );
}
