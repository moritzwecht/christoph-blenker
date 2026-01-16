import { defineField, defineType } from 'sanity'
import { Images } from 'lucide-react'

export default defineType({
    name: 'gallery',
    title: 'Galerie',
    type: 'document',
    icon: Images,
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            description: 'Interner Titel für die Galerie (z.B. "Hauptgalerie")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Bilder',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: false,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            description: 'Beschreibung des Bildes für Screenreader',
                        },
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
})
