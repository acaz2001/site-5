import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './products'
import category from './category'
import { blog } from './blog'
import categoryBlogs from './categoryBlogs'
import { testimonials } from './testimonials'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, category, blog, categoryBlogs, testimonials],
}
