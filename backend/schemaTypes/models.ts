import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'models',
  title: 'Modelos',
  type: 'document',
  fields: [
    defineField({
      name: 'modelType',
      title: 'Tipo de modelo',
      type: 'string',
    }),
    {
      name: 'name',
      title: 'Nombre del modelo',
      type: 'string',
    },
    {
      name: 'techSheet1',
      title: 'Ficha técnica, información básica',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'techSheet2',
      title: 'Ficha técnica, información por sección',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'techSheet3',
      title: 'Ficha técnica, información de precio',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'gallery',
      title: 'Galería de imágenes del modelo',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      title: 'modelType',
    },
  },
})
