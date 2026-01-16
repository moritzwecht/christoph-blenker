import React from 'react';
import { cn } from './utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    className?: string;
    children: React.ReactNode;
}

export function Heading({ level = 'h2', className, children, ...props }: HeadingProps) {
    const Component = level;

    const styles = {
        h1: "text-5xl md:text-8xl font-bold leading-tight font-serif",
        h2: "text-4xl md:text-5xl font-serif mb-16",
        h3: "text-3xl font-serif mb-6",
        h4: "text-xl font-bold mb-3 font-serif",
        h5: "text-lg font-bold font-serif",
        h6: "text-base font-bold font-serif",
    };

    return (
        <Component className={cn(styles[level], className)} {...props}>
            {children}
        </Component>
    );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    children: React.ReactNode;
    variant?: 'default' | 'small' | 'intro';
}

export function Text({ className, children, variant = 'default', ...props }: TextProps) {
    const styles = {
        default: "text-lg font-light leading-relaxed",
        small: "text-sm font-light leading-relaxed",
        intro: "text-xl font-light leading-relaxed uppercase tracking-widest",
    };

    return (
        <p className={cn(styles[variant], className)} {...props}>
            {children}
        </p>
    );
}

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    children: React.ReactNode;
}

export function Label({ className, children, ...props }: LabelProps) {
    return (
        <span className={cn("text-sm uppercase tracking-widest font-medium block", className)} {...props}>
            {children}
        </span>
    );
}
