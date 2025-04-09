import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media'
import ImportCSVBtn from './components/ImportCSVBtn'

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
            S.listItem()
              .title('CSV')
              .child(
                S.document().schemaType('csvUpload').documentId('csvUpload').title('Subir CSV'),
              ),

            //Lista de lotes (permite crear copias)
            S.listItem().title('Lotes').child(
              S.documentTypeList('lote') // Tipo de documento: lotes
                .title('Lotes')
                .filter('_type == "lote"'),
            ),
          ]),
    }),
    visionTool(),
    colorInput(),
    media(),
    {
      name: 'csv-importer',
      document: {
        // Modificado para ser más explícito y depurable
        actions: (prev, context) => {
          console.log('Configurando acciones de documento');
          console.log('Tipo de documento:', context.schemaType);
          
          // Explícitamente verificamos el tipo de esquema
          if (context.schemaType === 'csvUpload') {
            console.log('Agregando acción de importación CSV para csvImport');
            return [...prev, ImportCSVBtn];
          }
          
          return prev;
        }
      }
    },
  ],

  schema: {
    types: schemaTypes,
  },
})
