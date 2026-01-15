import { type SchemaTypeDefinition } from 'sanity'
import news from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [news],
}
