

import Image from 'next/image';

export default function HeroBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-50 bg-black">
            <Image
                src="/hero-bg.jpg"
                alt="Background"
                fill
                className="object-cover opacity-80"
                priority
                quality={80}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black" />
        </div>
    );
}
