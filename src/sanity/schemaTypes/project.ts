import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projekt',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true,
            },
            // validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'members',
            title: 'Besetzung',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Name' }),
                        defineField({ name: 'instrument', type: 'string', title: 'Instrument' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'websiteUrl',
            title: 'Website Link',
            type: 'url',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Plattform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'Spotify', value: 'spotify' },
                                    { title: 'SoundCloud', value: 'soundcloud' },
                                    { title: 'Apple Music', value: 'applemusic' },
                                    { title: 'Other', value: 'other' },
                                ]
                            }
                        }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'url'
                        }
                    }
                },
            ],
        }),
    ],
})
