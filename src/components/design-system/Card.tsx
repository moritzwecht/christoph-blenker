import React from 'react';
import { cn } from './utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white text-gray-900 rounded overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border-2 border-white",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export function CardImage({ className, children, ...props }: CardImageProps) {
    return (
        <div className={cn("relative overflow-hidden bg-gray-200", className)} {...props}>
            {children}
        </div>
    );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
    return (
        <div className={cn("p-4 md:p-6", className)} {...props}>
            {children}
        </div>
    );
}
