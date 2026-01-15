/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path will be handled by this file using Next.js's 
 * Optional Catch-all Routes: https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
 */
import { Studio } from './Studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
    return <Studio />
}
