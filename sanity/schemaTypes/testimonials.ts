// ./schemas/testimonial.js
import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload avatar image (e.g. avatar, avatar2, etc.)'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Text of the testimonial'
    })
  ]
})
