import {defineType} from 'sanity'

export default defineType({
  name: 'csvUpload',
  title: 'Importador CSV',
  type: 'document',
  fields: [
    {
      name: 'csvFile',
      title: 'Archivo CSV',
      type: 'file',
      options: {accept: '.csv'},
      description: 'Sube un CSV con columnas: id,nombre,ciudad, edad',
    },
  ],
  preview: {
    select: {
      title: 'status',
      subtitle: 'csvFile.originalFilename',
    },
  },
})
