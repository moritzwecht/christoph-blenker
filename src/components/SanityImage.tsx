'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';

interface SanityImageProps {
    image: any;
    alt: string;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
}

export default function SanityImage({ image, alt, className, priority = false, fill = false, sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" }: SanityImageProps) {
    const imageProps = useNextSanityImage(client, image);

    if (!image || !imageProps) return null;

    if (fill) {
        // When using fill, we need to handle object-fit via classNames usually, 
        // but next/image handles the src/loader. 
        // We just need to make sure we don't pass width/height which conflicts with fill.
        const { width, height, ...restProps } = imageProps;

        return (
            <Image
                {...restProps}
                src={imageProps.src}
                loader={imageProps.loader}
                alt={alt}
                fill
                className={className}
                priority={priority}
                placeholder={image?.asset?.metadata?.lqip ? 'blur' : 'empty'}
                blurDataURL={image?.asset?.metadata?.lqip}
                sizes={sizes}
            />
        );
    }

    return (
        <Image
            {...imageProps}
            alt={alt}
            className={className}
            priority={priority}
            placeholder={image?.asset?.metadata?.lqip ? 'blur' : 'empty'}
            blurDataURL={image?.asset?.metadata?.lqip}
            sizes={sizes}
            style={{ width: '100%', height: 'auto' }} // Responsive helper
        />
    );
}
