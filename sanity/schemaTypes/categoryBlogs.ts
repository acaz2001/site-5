export default {
  name: 'categoryBlogs',
  title: 'Category Blogs',
  type: 'document',
  fields: [
    {
      name: 'name', // ✅ umesto "title"
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // ✅ takođe iz "name", ne "title"
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
}
