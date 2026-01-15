import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'Neuigkeiten',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                })
            ]
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
        }),
    ],
})
