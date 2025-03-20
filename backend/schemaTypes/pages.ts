import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages',
  title: 'Paginas',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'intro',
      title: 'Intro',
    },
    {
      name: 'location',
      title: 'Ubicación',
    },
    {
      name: 'divisor1',
      title: 'Primer Divisor',
    },
    {
      name: 'sustainability',
      title: 'Sustentabilidad',
    },
    {
      name: 'divisor2',
      title: 'Segundo Divisor',
    },
    {
      name: 'amenities',
      title: 'Amenidades',
    },
    {
      name: 'divisor3',
      title: 'Tercer Divisor',
    },
    {
      name: 'gallery',
      title: 'Galería',
    },
    {
      name: 'form',
      title: 'Formulario',
    },
  ],
  fields: [
    defineField({
      name: 'setMainPage',
      title: 'NOTA: Solo activar si esta hoja es la pagina principal',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'name',
      title: 'Nombre de la landing',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      group: 'seo',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'dsc',
          title: 'Descripción',
          type: 'text',
        },
        {
          name: 'keywords',
          title: 'Palabras Claves',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      group: 'hero',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 1,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección en la pagina',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'icon',
          title: 'Icono del hero',
          type: 'image',
        },
        {
          name: 'h1',
          title: 'Titulo de la pagina',
          type: 'string',
        },
        {
          name: 'svgText',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'portableText',
          title: 'Titulo llamativo',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btnImg1',
          title: 'Icono circular de botón',
          type: 'image',
        },
        {
          name: 'btnImg2',
          title: 'Icono flecha de botón',
          type: 'image',
        },
        {
          name: 'imgMain',
          title: 'Imagen Principal',
          type: 'image',
        },
        {
          name: 'imgSecondary',
          title: 'Imagen secundaria de introducción',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      group: 'intro',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 2,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn2',
          title: 'Texto de botón de acción',
          type: 'string',
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'btnFile',
          title: 'Archivo para el botón',
          type: 'file',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
        {
          name: 'img2',
          title: 'Segunda Imagen',
          type: 'image',
        },
        {
          name: 'amenities',
          title: 'Amenidades',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icono',
                  type: 'image',
                },
                {
                  name: 'name',
                  title: 'Nombre',
                  type: 'string',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'svgTextBottom',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      group: 'location',
      type: 'object',
      fields: [
        {
          name: 'svgTextTop',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 4,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableTextIntro',
          title: 'Contenido deIntroducción',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'imgIntro',
          title: 'Primera Imagen de Introducción',
          type: 'image',
        },
        {
          name: 'imgIntro2',
          title: 'Segunda Imagen de Introducción',
          type: 'image',
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón de ubicación',
          type: 'string',
        },
        {
          name: 'btnLink',
          title: 'Link de google',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
        {
          name: 'imgPin',
          title: 'Imagen del pin',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'divisor1',
      title: 'Primer Divisor',
      group: 'divisor1',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 3,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'svgTextBottom',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'sustainability',
      title: 'Sustentabilidad',
      group: 'sustainability',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 5,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'svgTextTop',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
        {
          name: 'portableText2',
          title: 'Contenido de slider',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Fotos',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
        },
      ],
    }),
    defineField({
      name: 'divisor2',
      title: 'Segundo Divisor',
      group: 'divisor2',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 6,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'svgTextBottom',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenidades',
      group: 'amenities',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 6,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'svgTextTop',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'tabs',
          title: 'Amenidades visuales en tabs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre del tab',
                  type: 'string',
                },
                {
                  name: 'img',
                  title: 'Imagen',
                  type: 'image',
                },
                {
                  name: 'portableText',
                  title: 'Lista de amenidades',
                  type: 'array',
                  of: [{type: 'block'}],
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'list',
          title: 'Listado de Amenidades',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'amenities'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'divisor3',
      title: 'Tercer Divisor',
      group: 'divisor3',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 7,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galería',
      group: 'gallery',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 10,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Fotos',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'svgTextBottom',
          title: 'Texto llamativo en SVG',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'form',
      title: 'Formulario',
      group: 'form',
      type: 'object',
      fields: [
        {
          name: 'script',
          title: 'Script del formulario',
          type: 'text',
        },
      ],
    }),
  ],
})
