import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Seiteneinstellungen',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            description: 'Der Titel der Website (Browser Tab)',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'text',
            description: 'Kurze Beschreibung für Suchmaschinen (SEO)',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Schlüsselwörter für SEO',
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Media Bild',
            type: 'image',
            description: 'Bild, das beim Teilen in sozialen Medien angezeigt wird',
            options: {
                hotspot: true,
            },
        }),
    ],
})
