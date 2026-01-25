import { type SchemaTypeDefinition } from 'sanity'
import news from './news'
import event from './event'
import about from './about'
import project from './project'
import gallery from './gallery'
import discography from './discography'
import teaching from './teaching'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [news, event, about, project, gallery, discography, teaching, siteSettings],
}
