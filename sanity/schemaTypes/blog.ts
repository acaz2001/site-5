import {defineType, defineField} from 'sanity'

export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
     defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug'
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string'
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string'
    }),
    defineField({
      name: 'avatarimg',
      title: 'Avatarimg',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'avatarname',
      title: 'Avatarname',
      type: 'string'
    }),
    defineField({
      name: 'avatarjob',
      title: 'Aatarjob',
      type: 'string'
    }),
    defineField({
      name: 'section1',
      title: 'Section1',
      type: 'string'
    }),
    defineField({
      name: 'text1',
      title: 'Text1',
      type: 'string'
    }),
    defineField({
      name: 'section2',
      title: 'Section2',
      type: 'string'
    }),
    defineField({
      name: 'text2',
      title: 'Text2',
      type: 'string'
    }),
    defineField({
      name: 'section3',
      title: 'Section3',
      type: 'string'
    }),
    defineField({
      name: 'text3',
      title: 'Text3',
      type: 'string'
    }),
    defineField({
      name: 'section4',
      title: 'Section4',
      type: 'string'
    }),
    defineField({
      name: 'text4',
      title: 'Text4',
      type: 'string'
    }),
     defineField({
      name: 'categoryBlogs',
      title: 'Category Blogs',
      type: 'reference',
      to: [{ type: 'categoryBlogs' }],
      
    }),
    defineField({
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
    })
    ]
})