import {defineType, defineField} from 'sanity'

export const Products = defineType({
  name: 'Product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'details',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'variantTitle',
      title: 'Variant Title',
      type: 'string'
    }),
     defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      
    }),

    defineField({
      name: 'infoTitle1',
      title: 'Info Title 1',
      type: 'string'
    }),
        defineField({
      name: 'infoDesc1',
      title: 'Info Description 1',
      type: 'text'
    }),    
    defineField({
      name: 'infoImg1',
      title: 'Info Image 1',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'infoTitle2',
      title: 'Info Title 2',
      type: 'string'
    }),
    defineField({
      name: 'infoDesc2',
      title: 'Info Description 2',
      type: 'text'
    }),
    defineField({
      name: 'infoImg2',
      title: 'Info Image 2',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'slikaRama',
      title: 'Slika Rama',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'popular',
      title: 'Popular',
      type: 'boolean'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'price',
      title: 'Price (RSD)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),

    defineField({
      name: 'salePrice',
      title: 'Sale Price (RSD)',
      type: 'number',
    }),

    defineField({
      name: 'inStock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'isActive',
      title: 'Visible on Site',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Variant',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'priceOld', type: 'number', title: 'Old Price' },
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },

            {
              name: 'dimenzije',
              title: 'Dimenzije',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Dimenzija',
                  fields: [
                    { 
                      name: 'naziv', 
                      type: 'string', 
                      title: 'Naziv dimenzije' 
                    },
                    { 
                      name: 'cena', 
                      type: 'number', 
                      title: 'Cena za ovu dimenziju' 
                    },
                    { 
                      name: 'staraCena', 
                      type: 'number', 
                      title: 'Stara cena' 
                    },
                    {
                      name: 'bojaRama',
                      title: 'Boja Rama',
                      type: 'string',
                    }
                  ]
                }
              ]
            },
            { name: 'opis', type: 'string', title: 'Opis proizvoda' },

          ]
        }
      ]
    }),


    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
      ],
    }),
  ],
})





