import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {getDocumentBadges} from './components/documentBadges'

export default defineConfig({
  name: 'default',
  title: 'The Robert A. Hendry Foundation CMS',

  projectId: 'srzuracj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    badges: getDocumentBadges,
  },
})
