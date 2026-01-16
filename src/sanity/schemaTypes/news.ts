import { defineField, defineType } from 'sanity'
import { Newspaper } from 'lucide-react'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
    name: 'news',
    title: 'Neuigkeiten',
    type: 'document',
    icon: Newspaper,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'news' }),
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
