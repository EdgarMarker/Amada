import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenities',
  title: 'Amenidades',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Icono',
      type: 'image',
    }),
  ],
})
