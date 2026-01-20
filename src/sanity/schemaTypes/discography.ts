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
            // validation: (rule) => rule.required(),
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
            description: 'Text des Buttons, der die E-Mail öffnet.',
            initialValue: 'Bestellen',
        }),
        defineField({
            name: 'emailAddress',
            title: 'E-Mail-Adresse',
            type: 'string',
            description: 'E-Mail-Adresse, an die die Bestellung gesendet wird.',
            initialValue: 'mail@christoph-blenker.de',
        }),
        defineField({
            name: 'emailSubject',
            title: 'E-Mail Betreff',
            type: 'string',
            description: 'Betreff der E-Mail, die beim Klick auf den Button geöffnet wird.',
            initialValue: 'CD Bestellung',
        }),
    ],
})
