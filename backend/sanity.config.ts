import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Astro-Base-Landing',

  projectId: 'chucv5ee',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Contenido')
          .items([
            // Otros elementos de la estructura
            S.listItem()
              .title('Empresa')
              .child(
                S.document().schemaType('company').documentId('company').title('Editar Empresa'),
              ),
            // Lista de páginas (permite crear copias)
            S.listItem().title('Páginas').child(
              S.documentTypeList('pages') // Tipo de documento: pages
                .title('Páginas')
                .filter('_type == "pages"'),
            ),

            // Lista de amenities (permite crear copias)
            S.listItem().title('Amenities').child(
              S.documentTypeList('amenities') // Tipo de documento: amenities
                .title('Amenities')
                .filter('_type == "amenities"'),
            ),

            // Lista de modelos (permite crear copias)
            S.listItem().title('Modelos').child(
              S.documentTypeList('models') // Tipo de documento: models
                .title('Modelos')
                .filter('_type == "models"'),
            ),
          ]),
    }),
    visionTool(),
    colorInput(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
