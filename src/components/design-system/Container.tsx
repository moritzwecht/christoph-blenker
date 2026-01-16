import React from 'react';
import { cn } from './utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    size?: 'default' | 'small' | 'full';
}

export function Container({ children, className, size = 'default', ...props }: ContainerProps) {
    const sizes = {
        default: "max-w-[1200px]",
        small: "max-w-3xl", // for centered text content
        full: "max-w-full",
    };

    return (
        <div className={cn("mx-auto px-4 md:px-8", sizes[size], className)} {...props}>
            {children}
        </div>
    );
}
