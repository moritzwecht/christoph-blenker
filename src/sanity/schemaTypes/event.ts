import { defineField, defineType } from 'sanity'
import { Calendar } from 'lucide-react'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
    name: 'event',
    title: 'Termine',
    type: 'document',
    icon: Calendar,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'event' }),
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Datum',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'locationName',
            title: 'Ort (Name)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'locationUrl',
            title: 'Ort (Link)',
            type: 'url',
        }),
    ],
})
