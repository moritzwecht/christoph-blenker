import { type SchemaTypeDefinition } from 'sanity'
import news from './news'
import event from './event'
import about from './about'
import project from './project'
import gallery from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [news, event, about, project, gallery],
}
