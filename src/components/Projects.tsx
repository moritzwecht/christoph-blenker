'use client';

import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
// import { urlFor } from '../sanity/lib/image'; // Unused now
import SanityImage from './SanityImage';
import { PortableText } from '@portabletext/react';
import { Instagram, Facebook, Youtube, Music2, Cloud, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionDivider, Heading, Label, Card, CardImage, CardContent } from './design-system';

interface Project {
    _id: string;
    title: string;
    image: any;
    description: any[];
    members: { name: string; instrument: string }[];
    websiteUrl: string;
    socialLinks: { platform: string; url: string }[];
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await client.fetch(`*[_type == "project"]{
                _id,
                title,
                image {
                    ...,
                    asset->{
                        ...,
                        metadata
                    }
                },
                description,
                members,
                websiteUrl,
                socialLinks
            }`);
            setProjects(data);
        };
        fetchProjects();
    }, []);

    const getSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'instagram': return <Instagram className="w-5 h-5" />;
            case 'facebook': return <Facebook className="w-5 h-5" />;
            case 'youtube': return <Youtube className="w-5 h-5" />;
            case 'spotify': return <Music2 className="w-5 h-5" />;
            case 'soundcloud': return <Cloud className="w-5 h-5" />;
            default: return <ExternalLink className="w-5 h-5" />;
        }
    };

    if (projects.length === 0) return null;

    return (
        <section id="projects" className="section-padding bg-black text-white slant-bottom relative">
            <SectionDivider position="top" />
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <Heading level="h2" className="text-left text-white">Projekte</Heading>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="grid md:grid-cols-2">
                                {/* Image Side */}
                                <CardImage className="h-100 md:h-full">
                                    {project.image ? (
                                        <SanityImage
                                            image={project.image}
                                            alt={project.title}
                                            className="object-cover"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            cropRatio={1 / 1}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </CardImage>

                                {/* Content Side */}
                                <CardContent>
                                    <Heading level="h3" className="mb-6">{project.title}</Heading>

                                    {project.description && (
                                        <div className="prose prose-gray mb-8">
                                            <PortableText value={project.description} />
                                        </div>
                                    )}

                                    {project.members && project.members.length > 0 && (
                                        <div className="mb-8">
                                            <Label className="text-gray-500 mb-3 block">Besetzung</Label>
                                            <ul className="space-y-1">
                                                {project.members.map((member, i) => (
                                                    <li key={i} className="text-gray-700">
                                                        <span className="font-medium">{member.name}</span>
                                                        {member.instrument && <span className="text-gray-500"> — {member.instrument}</span>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center gap-6 mt-auto pt-4 border-t border-gray-100">
                                        {project.websiteUrl && (
                                            <a
                                                href={project.websiteUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                            >
                                                <Globe className="w-4 h-4" />
                                                Zur Website
                                            </a>
                                        )}

                                        {project.socialLinks && project.socialLinks.length > 0 && (
                                            <div className="flex gap-4 ml-auto">
                                                {project.socialLinks.map((link, i) => (
                                                    <a
                                                        key={i}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-black transition-colors"
                                                        title={link.platform}
                                                    >
                                                        {getSocialIcon(link.platform)}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionDivider position="bottom" />
        </section>
    );
}
