import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Empresa',
  type: 'document',
  groups: [
    {
      name: 'contact',
      title: 'Contacto',
    },
    {
      name: 'privacy',
      title: 'Privacidad',
    },
    {
      name: 'colors',
      title: 'Colores',
    },
  ],
  fields: [
    defineField({
      name: 'imgNav',
      title: 'Logo navegación',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Nombre de la empresa',
      type: 'string',
    }),
    defineField({
      name: 'watermark',
      title: 'Marca de agua',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contacto y pie de pagina',
      group: 'contact',
      type: 'object',
      fields: [
        {
          name: 'portableText',
          title: 'Contenido para pie de pagina',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'wp',
          title: 'WhatsApp',
          description: 'No es necesario poner el +52',
          type: 'string',
        },
        {
          name: 'tel',
          title: 'Teléfono',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'dir',
          title: 'Dirección',
          type: 'string',
        },
        {
          name: 'dirLink',
          title: 'Enlace de Dirección',
          type: 'string',
        },
        {
          name: 'social',
          title: 'Redes Sociales',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'name', title: 'Nombre', type: 'string'},
                {name: 'url', title: 'URL', type: 'url'},
              ],
            },
          ],
        },
        {
          name: 'img',
          title: 'Logo pie de página',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'privacy',
      title: 'Aviso de Privacidad',
      group: 'privacy',
      type: 'object',
      fields: [
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Colores',
      group: 'colors',
      type: 'object',
      fields: [
        {
          name: 'primary',
          title: 'Color Primario',
          type: 'color',
        },
        {
          name: 'primaryLight',
          title: 'Color Primario Ligero',
          type: 'color',
        },
        {
          name: 'primaryDark',
          title: 'Color Primario Oscuro',
          type: 'color',
        },
        {
          name: 'secondary',
          title: 'Color Secundario',
          type: 'color',
        },
        {
          name: 'secondaryLight',
          title: 'Color Secundario Ligero',
          type: 'color',
        },
        {
          name: 'secondaryDark',
          title: 'Color Secundario Oscuro',
          type: 'color',
        },
        {
          name: 'accent',
          title: 'Color Llamativo',
          type: 'color',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
