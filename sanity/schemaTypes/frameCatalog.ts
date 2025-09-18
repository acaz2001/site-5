import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'frameCatalog',
  title: 'Katalog drvenih ramova',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov kataloga',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pages',
      title: 'Stranice',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'pageNumber', title: 'Broj strane', type: 'number', validation: (Rule) => Rule.required().min(1) },
            { name: 'image', title: 'PNG strana', type: 'image', options: {hotspot:false}, validation: (Rule) => Rule.required() },
            { name: 'alt', title: 'Alt (SEO)', type: 'string' },
          ],
          preview: {
            select: { title: 'pageNumber', media: 'image' },
            prepare: ({title, media}) => ({ title: `Strana ${title}`, media })
          }
        }
      ],
      options: { sortable: true },
      validation: (Rule) => Rule.required().min(1)
    })
  ]
})
