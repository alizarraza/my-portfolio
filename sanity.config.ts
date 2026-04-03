import { defineConfig } from 'sanity'
import { structureTool }  from 'sanity/structure'
// import { visionTool }     from '@sanity/vision'
import { schemaTypes }    from './sanity'

export default defineConfig({
  name:      'alizar-portfolio',
  title:     'Alizar Portfolio CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath:  '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Projects').schemaType('project').child(
              S.documentTypeList('project').title('Projects')
            ),
            S.listItem().title('Experience').schemaType('experience').child(
              S.documentTypeList('experience').title('Experience')
            ),
            S.listItem().title('Skills').schemaType('skill').child(
              S.documentTypeList('skill').title('Skills')
            ),
          ]),
    }),
    // visionTool(),
  ],
  schema: { types: schemaTypes },
})
