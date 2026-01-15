import { type SchemaTypeDefinition } from 'sanity'
import news from './news'
import event from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [news, event],
}
