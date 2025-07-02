// sanity/lib/getAllBlogs.js
import { client } from "./client";

export async function getAllBlogs() {
  const query = `
    *[_type == "blog"]{
      slug,
      title,
      image { asset-> },
      desc,
      categoryBlogs->{name},
      popular
    }
  `;

  return await client.fetch(query);
}
