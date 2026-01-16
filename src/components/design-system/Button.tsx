import React from 'react';
import Link from 'next/link';
import { cn } from './utils';

// Shared styles for button and link
const buttonStyles = "inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium transition-colors";

const variants = {
    default: "text-gray-900 border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600",
    outline: "px-8 py-3 bg-white text-black border border-transparent hover:bg-zinc-200",
    ghost: "text-gray-900 hover:text-blue-600",
    social: "text-gray-400 hover:text-black",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    href?: string;
    target?: string;
    rel?: string;
}

export function Button({ className, variant = 'default', href, children, ...props }: ButtonProps) {
    const combinedClassName = cn(buttonStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
