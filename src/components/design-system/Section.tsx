import React from 'react';
import { cn } from './utils';
import SectionDivider from './SectionDivider'; // We'll need to move/export this too or keep it relative

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
    slant?: 'top' | 'bottom' | 'both' | 'none';
    background?: string;
    dividerTop?: boolean;
    dividerBottom?: boolean;
}

export function Section({
    id,
    className,
    children,
    slant = 'none',
    background = 'bg-white',
    dividerTop = false,
    dividerBottom = false,
    ...props
}: SectionProps) {

    // Slant classes map
    const slants = {
        top: "slant-top",
        bottom: "slant-bottom",
        both: "slant-both",
        none: "",
    };

    return (
        <section
            id={id}
            className={cn("section-padding relative", background, slants[slant], className)}
            {...props}
        >
            {dividerTop && <SectionDivider position="top" />}
            {children}
            {dividerBottom && <SectionDivider position="bottom" />}
        </section>
    );
}
