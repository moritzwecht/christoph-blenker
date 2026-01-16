import { defineField, defineType } from 'sanity'
import { User } from 'lucide-react'

export default defineType({
    name: 'about',
    title: 'Über mich',
    type: 'document',
    icon: User,
    fields: [
        defineField({
            name: 'headline',
            title: 'Überschrift',
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
            // validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
    ],
})
