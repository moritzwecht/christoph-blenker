import { PortableText, PortableTextComponents } from '@portabletext/react';

interface RichTextProps {
    value: any[];
    className?: string;
}

const components: PortableTextComponents = {
    block: {
        normal: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
        h3: ({ children }) => <h3 className="text-xl font-bold mb-4 text-black">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold mb-4 text-black">{children}</h4>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-5 space-y-2 mb-4 ml-4">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-5 space-y-2 mb-4 ml-4">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="underline hover:text-black transition-colors"
                >
                    {children}
                </a>
            );
        },
    },
};

export default function RichText({ value, className = "" }: RichTextProps) {
    if (!value) return null;

    return (
        <div className={className}>
            <PortableText value={value} components={components} />
        </div>
    );
}
