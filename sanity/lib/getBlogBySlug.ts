import { client } from "./client";

export async function getBlogBySlug(slug) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0]{
        slug,
        title,
        image { asset-> },
        content,
        desc,
        avatarimg { asset-> },
        avatarname,
        avatarjob,
        section1,
        text1,
        section2,
        text2,
        section3,
        text3,
        section4,
        text4,
        category->{_id, name}
    }
  `;

  return await client.fetch(query, { slug });
}