import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'srzuracj',   // find this in nonprofit-resource-hub/sanity.config.ts
    dataset: 'production',
    apiVersion: '2023-05-03',      // today’s date (keeps API stable)
    useCdn: true,                  // faster, cached responses (fine for public content)
})
