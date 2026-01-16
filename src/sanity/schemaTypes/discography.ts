import { defineField, defineType } from 'sanity'
import { Disc } from 'lucide-react'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
    name: 'discography',
    title: 'Diskographie',
    type: 'document',
    icon: Disc,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'discography' }),
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'text',
            rows: 2,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                })
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Bestellen',
        }),
        defineField({
            name: 'emailSubject',
            title: 'Email Betreff',
            type: 'string',
            description: 'Betreff der Email, die beim Klick auf den Button geöffnet wird.',
            initialValue: 'CD Bestellung',
        }),
    ],
})
