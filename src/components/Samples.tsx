'use client';

import { Heading, SectionDivider } from './design-system';

export default function Samples() {
    const videos = [
        "azDuf2hNBAs",
        "TCrkbL7zYpE",
        "aCvVWkMlgeM",
        "87i4M4FL0mo",
        "SHXrEHsncWk",
        "54cg5t1FfM8"
    ];

    return (
        <section id="samples" className="section-padding bg-white text-gray-900 slant-both">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <Heading level="h2" className="text-left">Hörproben</Heading>

                {/* Videos */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {videos.map((id) => (
                        <div key={id} className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-sm relative">
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Audio Widgets */}
                <div className=" mx-auto space-y-20">
                    {/* Groovestanze */}
                    <div className="space-y-4">
                        <Heading level="h3">Groovestanze</Heading>
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_4859933?widget_id=55&amp;pwc[included_songs]=1&amp;context_type=page_object&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_4859933?widget_id=55&amp;pwc[song_ids]=23607801&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                        <Heading level="h3">Timeline</Heading>
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_6549936?widget_id=55&amp;pwc[song_ids]=30808126&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_6549936?widget_id=55&amp;pwc[song_ids]=30808136&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                    </div>

                    {/* Camouflage */}
                    <div className="space-y-4">
                        <Heading level="h3">Camouflage</Heading>
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_6549936?widget_id=55&amp;pwc[song_ids]=30808137&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_6549936?widget_id=55&amp;pwc[song_ids]=30808132&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                        <iframe
                            className="w-full"
                            scrolling="no"
                            frameBorder="no"
                            src="https://www.reverbnation.com/widget_code/html_widget/artist_6549936?widget_id=55&amp;pwc[song_ids]=30808134&amp;context_type=song&amp;spoid=artist_6549936&amp;pwc[size]=small"
                            style={{ minWidth: '100%', maxWidth: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
