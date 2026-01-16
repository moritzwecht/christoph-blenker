'use client';

export default function Samples() {
    const videos = [
        "azDuf2hNBAs",
        "TCrkbL7zYpE",
        "aCvVWkMlgeM", // User had "R_sttncpoSM" commented out, using this one
        "87i4M4FL0mo", // User had "lMjebhvaW_g" commented out
        "SHXrEHsncWk",
        "54cg5t1FfM8"
    ];

    return (
        <section id="samples" className="py-24 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Hörproben</h2>

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
                <div className="max-w-3xl mx-auto space-y-20">
                    {/* Groovestanze */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-serif mb-8 text-center">Groovestanze</h3>
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
                        <h3 className="text-3xl font-serif mb-8 text-center">Timeline</h3>
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
                        <h3 className="text-3xl font-serif mb-8 text-center">Camouflage</h3>
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
