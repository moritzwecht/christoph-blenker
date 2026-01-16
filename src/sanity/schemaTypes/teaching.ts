import { defineField, defineType } from 'sanity'
import { GraduationCap } from 'lucide-react'

export default defineType({
    name: 'teaching',
    title: 'Unterricht',
    type: 'document',
    icon: GraduationCap,
    fields: [
        defineField({
            name: 'headline',
            title: 'Überschrift',
            type: 'string',
            validation: (rule) => rule.required(),
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
            validation: (rule) => rule.required(),
        }),
    ],
})
