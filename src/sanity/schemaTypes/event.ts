import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Termin',
    type: 'document',
    fields: [
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
