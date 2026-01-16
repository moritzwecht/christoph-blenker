'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import type { StructureBuilder } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
    title: 'Christoph Blenker - Admin',
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            structure: (S: StructureBuilder, context: any) => {
                return S.list()
                    .title('Inhalt')
                    .items([
                        orderableDocumentListDeskItem({ type: 'news', title: 'Neuigkeiten', S, context }),
                        orderableDocumentListDeskItem({ type: 'event', title: 'Termine', S, context }),
                        orderableDocumentListDeskItem({ type: 'discography', title: 'Diskographie', S, context }),
                        S.divider(),
                        S.listItem()
                            .title('Unterricht')
                            .child(
                                S.editor()
                                    .schemaType('teaching')
                                    .documentId('teaching')
                            ),
                        S.divider(),
                        // Automatically add any other document types
                        ...S.documentTypeListItems().filter(
                            (listItem: any) => !['news', 'event', 'discography', 'teaching'].includes(listItem.getId() as string)
                        ),
                    ])
            },
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})
