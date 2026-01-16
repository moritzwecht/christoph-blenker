'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';

interface SanityImageProps {
    image: {
        asset: {
            _ref?: string;
            _id?: string;
            metadata?: { lqip?: string };
        };
        crop?: any;
        hotspot?: any;
    };
    alt: string;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
    cropRatio?: number;
}

export default function SanityImage({
    image,
    alt,
    className,
    priority = false,
    fill = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
    cropRatio
}: SanityImageProps) {

    const imageProps = useNextSanityImage(client, image, {
        imageBuilder: (builder, options) => {
            let b = builder.auto('format'); // Automatisch modernste Formate (WebP/AVIF)

            if (cropRatio && options.width) {
                b = b.width(options.width)
                    .height(Math.round(options.width / cropRatio))
                    .fit('crop'); // Nutzt den Sanity-Hotspot beim Zuschneiden!
            }
            return b;
        }
    });

    if (!image?.asset || !imageProps) return null;

    const blurData = image.asset.metadata?.lqip;

    const { width, height, ...rest } = imageProps;

    return (
        <Image
            {...rest}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            alt={alt}
            fill={fill}
            priority={priority}
            sizes={sizes}
            className={className}
            placeholder={blurData ? 'blur' : 'empty'}
            blurDataURL={blurData}
            // Verhindert Layout-Shift bei non-fill Bildern
            style={!fill ? { width: '100%', height: 'auto' } : undefined}
        />
    );
}
