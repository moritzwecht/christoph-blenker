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
    cropRatio?: number;
}

export default function SanityImage({ image, alt, className, priority = false, fill = false, sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", cropRatio }: SanityImageProps) {
    const imageProps = useNextSanityImage(client, image, {
        imageBuilder: (imageUrlBuilder, options) => {
            const builder = imageUrlBuilder;
            // If cropRatio is defined and we have a requested width from Next.js 
            if (cropRatio && options.width) {
                return builder
                    .width(options.width)
                    .height(Math.round(options.width / cropRatio))
                    .fit('crop');
            }
            return builder;
        }
    });

    if (!image || !imageProps) return null;

    // Explicitly cast to any to avoid complex union type issues with next-sanity-image's return type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = imageProps;

    if (fill) {
        // When using fill, we need to handle object-fit via classNames usually, 
        // but next/image handles the src/loader. 
        // We just need to make sure we don't pass width/height which conflicts with fill.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { width, height, ...restProps } = props;

        return (
            <Image
                {...restProps}
                src={props.src}
                loader={props.loader}
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
            {...props}
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
